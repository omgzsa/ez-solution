<template>
  <v-card flat color="grey lighten-3" class="pa-8 pa-md-12">
    <h3 class="text-h5 text-md-h4 font-weight-bold mb-16">
      <slot />
    </h3>

    <v-row
      align="start"
      justify="center"
      class="d-flex flex-column flex-sm-row"
    >
      <v-col v-for="item in solarServices" :key="item.title">
        <v-icon large color="red darken-3">mdi-{{ item.icon }}</v-icon>
        <h4 class="text-h6 font-weight-bold mb-2">{{ item.title }}</h4>
        <p class="body-2 text-lg-body-1">{{ item.text }}</p>
      </v-col>
    </v-row>

    <v-row
      align="start"
      justify="center"
      class="d-flex flex-column flex-sm-row"
    >
      <v-col v-for="item in chargerServices" :key="item.title">
        <v-icon large color="red darken-3">mdi-{{ item.icon }}</v-icon>
        <h4 class="text-h6 font-weight-bold mb-2">{{ item.title }}</h4>
        <p class="body-2 text-lg-body-1">{{ item.text }}</p>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    solarServices: {
      type: Array,
    },
    chargerServices: {
      type: Array,
    },
  },
};
</script>
