import { Trans } from '@/plugins/Translation'

function load (component) {
  // '@' is aliased to src/components
  return () => import(/* webpackChunkName: "[request]" */ `@/pages/${component}.vue`)
}

export default [
  {
    path: '/:lang',
    component: {
      template: '<router-view></router-view>'
    },
    beforeEnter: Trans.routeMiddleware,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: load('Home')
      },
      {
        path: 'about',
        name: 'About',
        component: load('About')
      },
      {
        path: 'blog',
        name: 'Blog',
        component: load('Blog')
      },
      {
        path: 'community',
        name: 'Community',
        component: load('Community')
      },
      {
        path: 'buy',
        name: 'Buy',
        component: load('Buy')
      },
      {
        path: '*',
        component: load('404')
      }
    ]
  },
  {
    // Redirect user to supported lang version.
    path: '*',
    redirect () {
      return Trans.getUserSupportedLang()
    }
  }
]
