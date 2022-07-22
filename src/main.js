// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';

import ProductNavigation from '~/components/ProductNavigation.vue';
// import BaseIcon from '~/components/BaseIcon.vue'

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import '@/assets/styles.scss';

export default function(Vue, { appOptions, router, head, isClient }) {
  head.link.push({
    rel: 'stylesheet',
    href:
      'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css',
  });

  head.link.push({
    rel: 'stylesheet',
    href:
      'https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&display=swap',
  });

  // Import all base components

  const opts = {
    theme: {
      themes: {
        light: {
          solar: '#EF8F20',
          charger: '#009537',
          primary: '#0EAB51',
          // secondary: '#b0bec5',
          // accent: '#8c9eff',
          // error: '#b71c1c',
        },
      },
    },
  }; //opts includes, vuetify themes, icons, etc.
  Vue.use(Vuetify);

  appOptions.vuetify = new Vuetify(opts);

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  Vue.component('ProductNavigation', ProductNavigation);
  // Vue.component('BaseIcon', BaseIcon)

  // const requireComponent = require.context('./components', true, /Base[A-Z]/)
  // requireComponent.keys().forEach((fileName) => {
  //   let baseComponentConfig = requireComponent(fileName)
  //   baseComponentConfig = baseComponentConfig.default || baseComponentConfig
  // const baseComponentName = baseComponentConfig.name || (
  //   fileName
  //     .replace(/^.+\//, '')
  //     .replace(/\.\w+$/, '')
  // )
  // Vue.component(baseComponentName, baseComponentConfig)
  // })
}
