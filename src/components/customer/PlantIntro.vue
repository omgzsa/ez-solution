<template>
  <v-container class="my-2 my-10 site-wrapper">
    <v-row justify="center" align="center" class="d-flex">
      <v-col cols="12" sm="10" md="7" lg="6" offset-lg="1">
        <h2 class="overline font-weight-bold mb-2 blue--text text--darken-4">
          bevezetés
        </h2>
        <h3 class="text-h5 text-sm-h4 text-lg-h3 font-weight-bold mb-10">
          {{ introduction.title }}
        </h3>
        <p class="body-2 text-lg-body-1">{{ introduction.text }}</p>
      </v-col>

      <v-col sm="10" md="5" align-self="end">
        <v-list class="pa-0" dense v-for="item in benefits" :key="item.text">
          <v-list-item>
            <v-list-item-icon class="ml-0 mr-3"
              ><v-icon color="plant">mdi-check-bold</v-icon></v-list-item-icon
            >
            <span class="body-2 text-lg-body-1">
              {{ item.text }}
            </span>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      introduction: {
        title: 'Modernizálja otthonát hőszivattyúval',
        text:
          'A gáz ára folyamatosan növekszik. Az Európai Unió elkötelezett, hogy a lakossági fogyasztást mielőbb át kell állítani megújuló fűtésre. A gázról való átállás alternatív energiákra 2035-ig elkerülhetetlen.',
      },
      benefits: [
        {
          text: 'A hőszívattyúval fűteni és hűteni is lehet',
        },
        {
          text: 'Növelheti a ház komfortját',
        },
        {
          text: 'Növelheti ingatlana értékét',
        },
        {
          text: 'A legolcsóbb fűtési és hűtési megoldás',
        },
        {
          text: 'Lenullázhatja villanyszámláját',
        },
      ],
    };
  },
};
</script>

<style></style>
