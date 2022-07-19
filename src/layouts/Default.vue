<template>
  <v-app>
    <Navbar />

    <scroll-to-top />

    <transition appear name="fade">
      <v-main class="pa-0">
        <v-container style="max-width: 120em;" fluid pa-0>
          <slot />
        </v-container>
      </v-main>
    </transition>

    <PageFooter />
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

export default {
  components: { Navbar, ScrollToTop, PageFooter },
};
</script>

<style>
.fade-enter-active {
  transition: all 1s ease;
}
.fade-leave-active {
  transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter,
.fade-leave-to {
  transform: translateX(50px);
  opacity: 0;
}
</style>
