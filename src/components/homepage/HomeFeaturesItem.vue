<template>
  <div class="d-flex flex-column align-center flex-md-row justify-space-around">
    <v-card
      v-for="item in features"
      flat
      :key="item.title"
      class="pa-0 mb-10"
      max-width="480"
    >
      <v-icon x-large color="primary" right class="ml-3"
        >mdi-{{ item.icon }}</v-icon
      >
      <v-card-title
        ><h4 class="text-h6 font-weight-bold mb-2">
          {{ item.title }}
        </h4></v-card-title
      >
      <v-card-text
        ><p class="body-2 text-lg-body-1">{{ item.text }}</p></v-card-text
      >
      <v-card-actions>
        <v-btn
          title="button"
          outlined
          color="primary"
          :to="item.to"
          class="ml-1"
        >
          <strong>Érdekel</strong><v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    features: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      //
    };
  },
};
</script>
