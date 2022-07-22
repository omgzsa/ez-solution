<template>
  <v-tabs
    v-model="tab"
    background-color="#eeeeee90"
    grow
    slider-color="primary"
    height="65"
    class="mb-6 mb-sm-10 mb-md-16"
  >
    <v-tab
      v-for="({ name, to, icon }, index) in links"
      :key="name"
      :to="to"
      :class="{ active: tab === index }"
    >
      <v-icon color="grey darken-3" role="img" dark left>{{ icon }}</v-icon
      >{{ name }}
    </v-tab>
  </v-tabs>
</template>

<script>
export default {
  name: 'ProductNavigation',
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      tab: null,
    };
  },
};
</script>

<style scoped>
.v-application a {
  text-decoration: none;
  font-weight: bold;
  color: rgb(0, 0, 0, 0.87) !important;
}

.v-application a:hover,
.v-application a:active {
  font-weight: bold !important;
}

.v-tab--active {
  font-weight: bold !important;
}
</style>
