const urlJoin = require('url-join');
const LdpContainerService = require('./services/container');
const LdpResourceService = require('./services/resource');
const LdpCacheCleanerService = require('./services/cache-cleaner');
const getContainerRoutes = require('./routes/getContainerRoutes');

const LdpService = {
  name: 'ldp',
  settings: {
    baseUrl: null,
    ontologies: [],
    containers: [],
    defaultContainerOptions: {
      accept: 'text/turtle',
      jsonContext: null,
      queryDepth: 0,
      allowAnonymousEdit: false,
      allowAnonymousDelete: false
    }
  },
  dependencies: ['api'],
  async created() {
    const { baseUrl, ontologies, containers } = this.schema.settings;

    await this.broker.createService(LdpContainerService, {
      settings: {
        baseUrl,
        ontologies,
        containers
      }
    });

    await this.broker.createService(LdpResourceService, {
      settings: {
        baseUrl,
        ontologies,
        containers
      }
    });

    // Only create this service if a cacher is defined
    if (this.broker.cacher) {
      await this.broker.createService(LdpCacheCleanerService);
    }
  },
  async started() {
    console.log("starting ldp service");
    //console.log("routes added for ldp service");
  },
  actions: {
    getContainerOptions(ctx) {
      const { uri } = ctx.params;
      const containerOptions =
          this.settings.containers.find(
              container => typeof container !== 'string' && uri.startsWith(urlJoin(this.settings.baseUrl, container.path))
          ) || {};
      return { ...this.settings.defaultContainerOptions, ...containerOptions };
    }
  }
}

module.exports = LdpService;
