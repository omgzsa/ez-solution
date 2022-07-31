<template>
  <v-tabs
    v-model="tab"
    background-color="#eeeeee90"
    grow
    :vertical="$vuetify.breakpoint.smAndDown"
    slider-color="primary"
    slider-size="2"
    class="mb-6 mb-sm-10 mb-md-16"
  >
    <v-tab
      v-for="({ name, to, icon }, index) in links"
      :key="name"
      :to="to"
      :class="{ active: tab === index }"
    >
      <v-icon role="img" dark left> {{ icon }} </v-icon>{{ name }}
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

<style></style>
