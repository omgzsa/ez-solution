<template>
  <v-card flat color="grey lighten-3" class="pa-4 pa-sm-8 pa-md-12">
    <h3 class="text-h5 text-md-h5 font-weight-bold mb-16">
      <slot />
    </h3>

    <v-row
      align="start"
      justify="center"
      class="d-flex flex-column flex-sm-row"
    >
      <v-col v-for="item in solarServices" :key="item.title" class="pa-4">
        <v-icon large color="primary">mdi-{{ item.icon }}</v-icon>
        <h4 class="text-h6 font-weight-bold mb-2">{{ item.title }}</h4>
        <p class="body-2 ">{{ item.text }}</p>
      </v-col>
    </v-row>

    <v-spacer></v-spacer>

    <v-row
      align="start"
      justify="center"
      class="d-flex flex-column flex-sm-row"
    >
      <v-col v-for="item in plantServices" :key="item.title" class="pa-4">
        <v-icon large color="primary">mdi-{{ item.icon }}</v-icon>
        <h4 class="text-h6 font-weight-bold mb-2">{{ item.title }}</h4>
        <p class="body-2 ">{{ item.text }}</p>
      </v-col>
    </v-row>

    <v-spacer></v-spacer>

    <v-row
      align="start"
      justify="center"
      class="d-flex flex-column flex-sm-row"
    >
      <v-col v-for="item in chargerServices" :key="item.title" class="pa-4">
        <v-icon large color="primary">mdi-{{ item.icon }}</v-icon>
        <h4 class="text-h6 font-weight-bold mb-2">{{ item.title }}</h4>
        <p class="body-2 ">{{ item.text }}</p>
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
    plantServices: {
      type: Array,
    },
    chargerServices: {
      type: Array,
    },
  },
};
</script>
