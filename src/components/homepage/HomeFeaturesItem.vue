<template>
  <div class="d-flex flex-column flex-md-row">
    <v-card
      v-for="card in cards"
      flat
      :key="card.title"
      class="mb-10"
      max-width="500"
    >
      <v-icon large color="red darken-3" right class="ml-md-3"
        >mdi-{{ card.icon }}</v-icon
      >
      <v-card-title
        ><h4 class="text-h6 font-weight-bold mb-2">
          {{ card.title }}
        </h4></v-card-title
      >
      <v-card-text
        ><p class="body-2 text-lg-body-1">{{ card.text }}</p></v-card-text
      >
      <v-card-actions>
        <v-btn title="button" outlined color="red darken-3" :to="card.to">
          Érdekel <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    cards: {
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
