
import DefaultLayout from '~/layouts/Default.vue';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import '@/assets/styles.scss';
import '@/assets/animations.css';

import VueHoneypot from 'vue-honeypot';
// import VueFbCustomerChat from 'vue-fb-customer-chat';

export default function(Vue, { appOptions, router, head, isClient }) {
  head.htmlAttrs = { lang: 'hu' };
  head.link.push({
    rel: 'stylesheet',
    defer: true,
    href:
      'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css',
  });

  head.link.push({
    rel: 'stylesheet',
    defer: true,
    href:
      'https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&display=swap',
  });

  //opts includes, vuetify themes, icons, etc.

  const opts = {
    icons: {
      iconfont: 'mdi',
    },
    theme: {
      themes: {
        light: {
          primary: '#0EAB51',
          solar: '#EF8F20',
          charger: '#009537',
          plant: '#03318D',
        },
      },
    },
  };
  Vue.use(Vuetify);
  Vue.use(VueHoneypot);
  // Vue.use(VueFbCustomerChat, {
  //   page_id: 103710768886261,
  //   theme_color: '#009537',
  //   locale: 'en_HU',
  // });

  appOptions.vuetify = new Vuetify(opts);

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);

  router.options.scrollBehavior = function(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return window.scrollTo({
        top: document.querySelector(to.hash).offsetTop,
        behavior: 'smooth',
      });
    } else {
      return { x: 0, y: 0 };
    }
  };

  router.afterEach((to, from) => {
    if (isClient) {
      let interval = setInterval(function() {
        if (typeof fbScript !== 'undefined') {
          fbScript();
          clearInterval(interval);
        }
      }, 50);
    }
  });
}
