<template>
  <v-container>
    <v-row justify="center" align="center" class="d-flex relative" no-gutters>
      <!-- <svg
        width="2440"
        height="497"
        viewBox="0 0 2440 497"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="grey-background mb-10 d-none d-lg-flex "
      >
        <path d="M0 0H4096V557H0V0Z" fill="#F3F3F3" />
      </svg> -->

      <!-- <v-col
        cols="7"
        md="4"
        order-md="1"
        offset="1"
        class="ml-auto pa-0 relative"
        align-self="start"
      >
        <v-img
          alt="A house with solar panels on the roof"
          max-height="700"
          cover
          :src="require('../../assets/images/magan-charger-intro.jpg')"
          class="elevation-3"
        />
      </v-col> -->
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      results: [
        {
          title: 'Otthoni töltővel az EV megtakarítás csúcsán',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt proin arcu, tellus libero fusce. Sit tortor in nec amet odio vitae sed. Urna sed bibendum amet arcu quis diam at vitae. Dignissim ornare pretium augue molestie quisque.',
        },
        {
          title: 'Otthoni töltővel az EV megtakarítás csúcsán',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt proin arcu, tellus libero fusce. Sit tortor in nec amet odio vitae sed. Urna sed bibendum amet arcu quis diam at vitae. Dignissim ornare pretium augue molestie quisque.',
        },
      ],
    };
  },
};
</script>

<style>
.results-numbers {
  max-width: 200px;
}

.grey-background {
  position: absolute;

  overflow: hidden;
  z-index: -1;
}
</style>
