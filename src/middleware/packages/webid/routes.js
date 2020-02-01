const routeConfig = {
  // When using multiple routes we must set the body parser for each route.
  bodyParsers: {
    json: true
  },
  onBeforeCall(ctx, route, req, res) {
    // Set request headers to context meta
    ctx.meta.headers = req.headers;
    if (req.headers.accept === undefined || req.headers.accept.includes('*/*')) {
      ctx.meta.headers.accept = this.settings.defaultLdpAccept;
    }
  }
};

module.exports = [
  // Unsecured routes
  {
    authorization: false,
    authentication: true,
    aliases: {
      'GET users/:userId': 'webid.view'
    },
    ...routeConfig
  },
  // Secured routes
  {
    authorization: true,
    authentication: false,
    aliases: {
      'GET me': 'webid.view',
      'PATCH me': 'webid.edit'
    },
    ...routeConfig
  }
];