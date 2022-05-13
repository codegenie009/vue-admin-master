export default {
  root: {
    name: '/',
    displayName: 'navigationRoutes.home',
  },
  routes: [
    {
      name: 'feed',
      displayName: 'menu.feed',
      meta: {
        icon: 'vuestic-iconset-dashboard',
      },
    },
    {
      name: 'analytics',
      displayName: 'menu.analytics',
      meta: {
        icon: 'vuestic-iconset-statistics',
      },
      disabled: true,
      children: [
        {
          name: 'transactions',
          displayName: 'menu.transactions',
        },
        {
          name: 'subscriptions',
          displayName: 'menu.subscriptions',
        },
        {
          name: 'users',
          displayName: 'menu.users',
        },
        {
          name: 'countries',
          displayName: 'menu.countries',
        },
        {
          name: 'payment_systems',
          displayName: 'menu.payment_systems',
        },
        {
          name: 'currencies',
          displayName: 'menu.currencies',
        },
        {
          name: 'price_points',
          displayName: 'menu.price_points',
        },
        {
          name: 'spiderpipe',
          displayName: 'menu.spiderpipe',
        },
      ],
    },
    {
      name: 'payouts',
      displayName: 'menu.payouts',
      meta: {
        icon: 'glyphicon-envelope',
      }
    },
    {
      name: 'my_projects',
      displayName: 'menu.my_projects',
      meta: {
        icon: 'vuestic-iconset-forms',
      }
    },
    {
      name: 'marketing_tools',
      displayName: 'menu.marketing_tools',
      meta: {
        icon: 'vuestic-iconset-forms',
      }
    },
    {
      name: 'resolution_center',
      displayName: 'menu.resolution_center',
      meta: {
        icon: 'vuestic-iconset-forms',
      }
    },


    /**
     * Default
     */
    
    {
      name: 'dashboard',
      displayName: 'menu.dashboard',
      meta: {
        icon: 'vuestic-iconset-dashboard',
      },
    },
    {
      name: 'forms',
      displayName: 'menu.forms',
      meta: {
        icon: 'vuestic-iconset-forms',
      },
      disabled: true,
      children: [
        {
          name: 'form-elements',
          displayName: 'menu.formElements',
        },
        {
          name: 'medium-editor',
          displayName: 'menu.mediumEditor',
        },
      ],
    },
    {
      name: 'tables',
      displayName: 'menu.tables',
      meta: {
        icon: 'vuestic-iconset-tables',
      },
      children: [
        {
          name: 'markup',
          displayName: 'menu.markupTables',
        },
        // {
        //   name: 'data',
        //   displayName: 'menu.dataTables',
        // },
      ],
    },
    {
      name: 'ui',
      displayName: 'menu.uiElements',
      meta: {
        icon: 'vuestic-iconset-ui-elements',
      },
      disabled: true,
      children: [
        {
          name: 'buttons',
          displayName: 'menu.buttons',
        },
        {
          name: 'cards',
          displayName: 'menu.cards',
        },
        {
          name: 'chat',
          displayName: 'menu.chat',
        },
        {
          name: 'chips',
          displayName: 'menu.chips',
        },
        {
          name: 'collapses',
          displayName: 'menu.collapses',
        },
        {
          name: 'colors',
          displayName: 'menu.colors',
        },
        // {
        //   name: 'color-pickers',
        //   displayName: 'menu.colorPickers',
        // },
        {
          name: 'file-upload',
          displayName: 'menu.fileUpload',
        },
        {
          name: 'grid',
          displayName: 'menu.grid',
        },
        {
          name: 'icon-sets',
          displayName: 'menu.icons',
          children: [
            {
              displayName: 'concrete',
              name: 'icon-set',
            },
          ],
        },
        {
          name: 'lists',
          displayName: 'menu.lists',
        },
        {
          name: 'modals',
          displayName: 'menu.modals',
        },
        {
          name: 'notifications',
          displayName: 'menu.notifications',
        },
        {
          name: 'popovers',
          displayName: 'menu.popovers',
        },
        {
          name: 'rating',
          displayName: 'menu.rating',
        },
        {
          name: 'sliders',
          displayName: 'menu.sliders',
        },
        {
          name: 'spacing',
          displayName: 'menu.spacing',
        },
        {
          name: 'spinners',
          displayName: 'menu.spinners',
        },
        {
          name: 'tabs',
          displayName: 'menu.tabs',
        },
        {
          name: 'timelines',
          displayName: 'menu.timelines',
        },
        {
          name: 'tree-view',
          displayName: 'menu.treeView',
        },
        {
          name: 'typography',
          displayName: 'menu.typography',
        },
      ],
    },
    {
      name: 'maps',
      displayName: 'menu.maps',
      meta: {
        icon: 'vuestic-iconset-maps',
      },
      disabled: true,
      children: [
        {
          name: 'google-maps',
          displayName: 'menu.google-maps',
        },
        {
          name: 'yandex-maps',
          displayName: 'menu.yandex-maps',
        },
        {
          name: 'leaflet-maps',
          displayName: 'menu.leaflet-maps',
        },
        {
          name: 'bubble-maps',
          displayName: 'menu.bubble-maps',
        },
        {
          name: 'line-maps',
          displayName: 'menu.line-maps',
        },
      ],
    },
    {
      name: 'pages',
      displayName: 'menu.pages',
      meta: {
        icon: 'vuestic-iconset-files',
      },
      disabled: true,
      children: [
        {
          name: 'login',
          displayName: 'menu.login-singup',
        },
        {
          name: '404-pages',
          displayName: 'menu.404-pages',
        },
        {
          name: 'faq',
          displayName: 'menu.faq',
        },
      ],
    },
  ],
}
