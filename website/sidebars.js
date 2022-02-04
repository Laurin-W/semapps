/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  docs: {
    Guides: ['guides/ldp-server','guides/dms','guides/activitypub'],
    'Middleware packages': [
      {
        type: 'category',
        label: 'ActivityPub',
        items: [
          'middleware/activitypub/index',
          'middleware/activitypub/activities-handler',
        ],
      },
      'middleware/auth',
      'middleware/backup',
      'middleware/fuseki-admin',
      {
        type: 'category',
        label: 'Importer',
        items: [
          'middleware/importer/index',
          'middleware/importer/drupal',
          'middleware/importer/gogocarto',
          'middleware/importer/mobilizon',
          'middleware/importer/prestashop',
          'middleware/importer/yeswiki',
        ],
      },
      'middleware/inference',
      {
        type: 'category',
        label: 'LDP',
        items: [
          'middleware/ldp/index',
          'middleware/ldp/resource',
          'middleware/ldp/container',
          'middleware/ldp/document-tagger',
        ],
      },
      'middleware/signature',
      'middleware/triplestore',
      {
        type: 'category',
        label: 'WebACL',
        items: [
          'middleware/webacl/index',
          'middleware/webacl/resource',
          'middleware/webacl/group',
          'middleware/webacl/authorizer',
          'middleware/webacl/groups-manager',
        ],
      },
      'middleware/webfinger',
      'middleware/webhooks',
      'middleware/webid'
    ],
    'Frontend packages': [
      'frontend/auth-provider',
      'frontend/activitypub-components',
      'frontend/date-components',
      'frontend/geo-components',
      'frontend/markdown-components'
    ]
  },
  contribute: {
    'SemApps core': ['contribute/code','contribute/coding-conventions'],
    Documentation: ['contribute/documentation','contribute/style-guide']
  }
};
