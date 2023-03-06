module.exports = {
  visibility: 'public',
  params: {
    containerUri: { type: 'string' },
    resourceUri: { type: 'string' },
    webId: {
      type: 'string',
      optional: true
    }
  },
  async handler(ctx) {
    const { containerUri, resourceUri } = ctx.params;
    const webId = ctx.params.webId || ctx.meta.webId || 'anon';
    const dataset = ctx.meta.dataset;

    const isRemoteContainer = this.isRemoteUri(containerUri);

    return await ctx.call('triplestore.query', {
      query: `
        ASK {
          ${isRemoteContainer ? 'GRAPH <' + this.settings.mirrorGraphName + '> {' : ''}
          <${containerUri}> <http://www.w3.org/ns/ldp#contains> <${resourceUri}>
          ${isRemoteContainer ? '}' : ''}
        }
      `,
      webId,
      dataset
    });
  }
};
