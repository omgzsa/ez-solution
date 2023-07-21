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
        title: 'Használja ki az otthon töltés minden előnyét',
        text:
          'Elektromos autója van, de nincsen otthonában töltője? Itt az ideje lépni! Takarítson meg megoldásunkkal és töltse autóját akár ingyenesen. Hozza ki a legtöbbet az elektromobilitás adta lehetőségekből!',
      },
      benefits: [
        {
          text: 'Spóroljon időt, ne várjon a nyilvános töltőknél',
        },
        {
          text: 'Töltsön ingyen – Töltsön a nappal!',
        },
        {
          text: 'Ne költsön hálózatbővítésre – DLM!',
        },
        {
          text: 'Töltsön biztonságosan és gyorsan otthon',
        },
        {
          text: 'Függetlenedjen a nyilvános töltőhálózatoktól',
        },
      ],
    };
  },
};
</script>

<style></style>
