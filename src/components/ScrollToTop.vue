<template>
  <transition name="bounce">
    <v-btn
      title="Az oldal tetejére"
      class="mb-16 mr-2"
      dark
      fab
      small
      bottom
      right
      color="primary"
      fixed
      @click="scrollToTop"
      v-if="userScrolled"
    >
      <v-icon dark>mdi-chevron-up</v-icon>
    </v-btn>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      userScrolled: false,
    };
  },
  methods: {
    scrollToTop() {
      // https://dev.to/vvo/how-to-solve-window-is-not-defined-errors-in-react-and-next-js-5f97
      if (typeof window !== 'undefined') {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      }
    },
    showButton() {
      if (typeof window !== 'undefined') {
        if (window.scrollY > 500) {
          this.userScrolled = true;
        } else if (window.scrollY <= 0) {
          this.userScrolled = false;
        }
      }
    },
  },
  created() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', this.showButton);
    }
  },
};
</script>

<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.3s;
}

.bounce-leave-active {
  animation: bounce-in 0.3s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  /* 50% {
    transform: scale(1.3);
  } */
  100% {
    transform: scale(1);
  }
}
</style>
