<template>
  <v-container class="my-2 my-10 site-wrapper">
    <v-row justify="center">
      <v-col cols="12" sm="11" md="5" lg="6" offset-lg="1">
        <h2 class="overline font-weight-bold mb-2 orange--text text--darken-3">
          bevezetés
        </h2>
        <h3 class="text-h5 text-sm-h4 text-lg-h3 font-weight-bold mb-10">
          {{ introduction.title }}
        </h3>
        <p class="body-2 text-lg-body-1">{{ introduction.text }}</p>
      </v-col>

      <v-col cols="12" sm="11" md="5" align-self="end">
        <v-list class="pa-0" dense v-for="item in benefits" :key="item.text">
          <v-list-item>
            <v-list-item-icon class="ml-0 mr-3"
              ><v-icon color="solar">mdi-check-bold</v-icon></v-list-item-icon
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
        title: 'Otthoni napelemes rendszerek előnyei',
        text:
          'Legyen saját erőműved otthon! Egy napelemes rendszer ingatlanod energetikai központjaként működik, áramot termel, amit otthonod működtetésére fordíthatsz. Éppen ezért egy jól méretezett rendszerrel hatványozottan tudsz spórolni. Csökkentheted bármilyen elektromos fűtés költségeit, legyen az hőszivattyú vagy klíma és szinte teljesen megszabadulhatsz a tankolás költségeitől, ha elektromos autódat otthon, napelemről töltöd.',
      },
      benefits: [
        {
          text: 'Csökkentsd a villanyszámládat',
        },
        {
          text: 'Töltsd ingyen elektromos autódat',
        },
        {
          text: 'Csökkents a fűtésed/hűtésed költségeit',
        },
        {
          text: 'Növeld ingatlanod értékét',
        },
        {
          text: 'Ne függj a folyton változó energiaáraktól',
        },
      ],
    };
  },
};
</script>

<style></style>
