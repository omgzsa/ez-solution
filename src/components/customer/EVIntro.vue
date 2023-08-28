<template>
  <v-container class="my-2 my-10 site-wrapper">
    <v-row justify="center" align="center" class="d-flex">
      <v-col cols="12" sm="10" md="5" lg="6" offset-lg="1">
        <h2 class="overline font-weight-bold mb-2 green--text text--darken-2">
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
              ><v-icon color="charger">mdi-check-bold</v-icon></v-list-item-icon
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
        title: 'Használd ki az otthon töltés minden előnyét',
        text:
          'Töltsd elektromos autódat otthon és hozd ki a legtöbbet az elektromobilitás adta lehetőségekből! Maximalizáld EV befektetésed megtérülését és töltsd autóját akár ingyenesen napelem segítségével.',
      },
      benefits: [
        {
          text: 'Spórolj időt, ne várj a nyilvános töltőknél',
        },
        {
          text: 'Tölts akár ingyen – Tölts a nappal!',
        },
        {
          text: 'Ne költs hálózatbővítésre – PBM!',
        },
        {
          text: 'Tölts biztonságosan és gyorsan otthon',
        },
        {
          text: 'Függetlenedj a nyilvános töltőhálózatoktól',
        },
      ],
    };
  },
};
</script>

<style></style>
