<template>
  <v-container class="my-2 my-10 site-wrapper">
    <v-row justify="center" align="center" class="d-flex">
      <v-col cols="12" sm="10" md="5" lg="6" offset-lg="1">
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
        title: 'Modernizáld otthonod hőszivattyúval',
        text:
          'Függetlenedj te is a kiszámíthatatlan gázártól! A kiszámíthatatlan gáz ár változások helyett lépj inkább az elektrifikáció útjára és fűtsd vagy akár hűtsd is otthonod hőszivattyús megoldásaink bármelyikével.',
      },
      benefits: [
        {
          text: 'A hőszívattyúval fűteni és hűteni is lehet',
        },
        {
          text: 'Napelemmel mégtöbbet spórolhatsz',
        },
        {
          text: 'Növelheted ingatlanod értékét',
        },
        {
          text: 'A legolcsóbb fűtési és hűtési megoldás',
        },
        {
          text: 'Növelheted otthonod komfortérzetét',
        },
      ],
    };
  },
};
</script>

<style></style>
