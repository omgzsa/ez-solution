<template>
  <v-container class="site-wrapper my-16">
    <v-row justify="center" class="mb-10 mb-lg-16">
      <v-col cols="10" md="8" offset-md="1">
        <h2 class="overline font-weight-bold mb-2 indigo--text text--darken-3">
          megoldásaink
        </h2>
        <h3 class="text-h5 text-sm-h4 text-lg-h3 font-weight-bold">
          Társasházak számára elérhető megoldásaink
        </h3>
      </v-col>
    </v-row>
    <v-row justify="center" class="mb-10 mb-lg-16">
      <v-col cols="10" md="8" lg="6">
        <ul class="custom-marker pa-0">
          <li v-for="item in houses" :key="item.id" class="py-2">
            <h5 class="text-h6 font-weight-bold mb-2">
              {{ item.title }}
            </h5>
            <p class="body-2 text-sm-body-1">{{ item.text }}</p>
          </li>
        </ul>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="10" md="8" offset-md="1">
        <p class="text-h6 text-sm-h5 font-weight-bold">
          Az EZ kalkulátor a társasház közös képviselőjével együttműködve ad
          pontos adatokat, amit a közös képviselő részére küldünk meg
          ajánlatunkkal.
        </p>
        <div>
          <v-icon color="charger" class="mr-3"
            >mdi-file-document-outline</v-icon
          >
          <a
            href="../../tajekoztatas-kozos-kepviseloknek.pdf"
            class="underline"
            download="tajekoztatas-kozos-kepviseloknek"
            >Letölthető dokumentum közös képviselők számára</a
          >
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ['houses'],

  data() {
    return {};
  },
};
</script>

<style></style>
