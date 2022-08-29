<template>
  <v-app>
    <Navbar />

    <scroll-to-top />

    <transition appear name="slide">
      <v-main>
        <v-container fluid pa-0>
          <slot />
        </v-container>
      </v-main>
    </transition>

    <!-- <page-contact /> -->
    <page-footer />
  </v-app>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Navbar from '~/components/Navbar.vue';
import ScrollToTop from '../components/ScrollToTop.vue';
import PageFooter from '../components/PageFooter.vue';
// import PageContact from '../components/PageContact.vue';

export default {
  components: {
    Navbar,
    ScrollToTop,
    PageFooter,
    // PageContact,
  },
  metaInfo: {
    script: [
      {
        src: 'https://smtpjs.com/v3/smtp.js',
        async: true,
        defer: true,
        body: true,
      },
    ],
  },
};
</script>

<style></style>
