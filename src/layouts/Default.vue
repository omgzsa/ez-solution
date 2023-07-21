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

    <VueFbCustomerChat />

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
import VueFbCustomerChat from '../components/VueFbCustomerChat.vue';

export default {
  components: {
    Navbar,
    ScrollToTop,
    PageFooter,
    VueFbCustomerChat,
  },
};
</script>

<style></style>
