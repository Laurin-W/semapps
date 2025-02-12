const urlJoin = require('url-join');
const { MIME_TYPES } = require('@semapps/mime-types');
const { ACTOR_TYPES } = require('../constants');
const { getSlugFromUri, getContainerFromUri, defaultToArray } = require('../utils');

const BotService = {
  name: '', // Must be overwritten
  settings: {
    actor: {
      uri: null,
      name: null
    }
  },
  dependencies: ['ldp', 'activitypub.actor'],
  async started() {
    // Ensure LDP sub-services have been started
    await this.broker.waitForServices(['ldp.container', 'ldp.resource']);

    const actorSettings = this.settings.actor;
    if (!actorSettings.uri || !actorSettings.name) {
      return Promise.reject(new Error('Please set the actor settings in schema!'));
    }

    const actorExist = await this.broker.call('ldp.resource.exist', {
      resourceUri: actorSettings.uri
    });

    if (!actorExist) {
      console.log(`BotService > Actor ${actorSettings.name} does not exist yet, creating it...`);

      await this.broker.call('ldp.container.post', {
        containerUri: getContainerFromUri(actorSettings.uri),
        slug: getSlugFromUri(actorSettings.uri),
        resource: {
          '@context': 'https://www.w3.org/ns/activitystreams',
          type: ACTOR_TYPES.APPLICATION,
          preferredUsername: actorSettings.username,
          name: actorSettings.name
        },
        contentType: MIME_TYPES.JSON
      });

      if (this.actorCreated) {
        const actor = await this.broker.call('activitypub.actor.awaitCreateComplete', { actorUri: actorSettings.uri });
        this.actorCreated(actor);
      }
    }
  },
  actions: {
    getUri() {
      return this.settings.actor.uri;
    }
  },
  events: {
    'activitypub.inbox.received'(params) {
      if (this.inboxReceived) {
        if (params.recipients.includes(this.settings.actor.uri)) {
          this.inboxReceived(params.activity);
        }
      }
    }
  },
  methods: {
    async getFollowers() {
      const result = await this.broker.call('activitypub.follow.listFollowers', {
        collectionUri: urlJoin(this.settings.actor.uri, 'followers')
      });
      return result ? defaultToArray(result.items) : [];
    }
  }
};

module.exports = BotService;
