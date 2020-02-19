const { MoleculerError } = require('moleculer').Errors;
const jsonld = require('jsonld');
const constants = require('./../constants');
const mimeNegotiation = require('@semapps/mime-negotiation');
const triplestore = require('@semapps/triplestore');

module.exports = {
  api: async function api(ctx) {
    const type = ctx.params.typeURL;
    const accept = ctx.meta.headers.accept;
    try {
      let body = await ctx.call('ldp.getByType', {
        type: type,
        accept: accept
      });
      ctx.meta.$responseType = accept;

      return body;
    } catch (e) {
      ctx.meta.$statusCode = e.code || 500;
      ctx.meta.$statusMessage = e.message;
    }
  },
  action: {
    visibility: 'public',
    params: {
      type: { type: 'string' },
      webId: { type: 'string', optional: true },
      accept: { type: 'string' }
    },
    async handler(ctx) {
      const accept = ctx.params.accept;
      if (ctx.params.webId) {
        ctx.meta.webId = ctx.params.webId;
      }
      let result = await ctx.call('triplestore.query', {
        query: `
          ${this.getPrefixRdf()}
          CONSTRUCT {
            ?subject ?predicate ?object.
          }
          WHERE {
            ?subject rdf:type ${ctx.params.type} ;
              ?predicate ?object.
          }
              `,
        accept: triplestore.SUPPORTED_ACCEPT_MIME_TYPES.JSON
      });
      result = await jsonld.compact(result, this.getPrefixJSON());
      const { '@graph': graph, '@context': context, ...other } = result;
      const contains = graph || (Object.keys(other).length === 0 ? [] : [other]);
      result = {
        '@context': result['@context'],
        '@id': `${this.settings.baseUrl}${ctx.params.typeURL}`,
        '@type': ['ldp:Container', 'ldp:BasicContainer'],
        'ldp:contains': contains
      };
      const negociatedAccept = mimeNegotiation.negociateTypeMime(accept);

      if (negociatedAccept != constants.SUPPORTED_ACCEPT_MIME_TYPES.JSON) {
        result = await this.jsonldToTriples(result, accept);
      }
      return result;
    }
  }
};