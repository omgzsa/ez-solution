<template>
  <v-container class="mt-16 site-wrapper">
    <v-row
      justify="center"
      class="d-flex flex-column flex-sm-row justify-space-around"
    >
      <v-col md="5">
        <h3 class="text-h5 text-sm-h4 text-lg-h3 font-weight-bold mb-10">
          Mit adunk ügyfeleinknek?
        </h3>
        <home-about-benefits-list :customer="customer" />
      </v-col>
      <v-divider vertical></v-divider>
      <v-col md="5">
        <h3 class="text-h5 text-sm-h4 text-lg-h3 font-weight-bold mb-10">
          Mi különböztet meg minket?
        </h3>
        <home-about-benefits-list :differences="differences" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import HomeAboutBenefitsList from './HomeAboutBenefitsList.vue';

export default {
  components: { HomeAboutBenefitsList },
  data() {
    return {
      customer: [
        {
          id: 1,
          title: 'Maximális megtakarítás',
          text:
            'Minden épület más, ezért elég valószínű, hogy neked nem ugyanaz az energetikai beruházás éri meg, mint a szomszédodnak. Mi a számodra leghatékonyabb rendszert tervezzük meg, pontos megtakarítás számításokkal alátámasztva.',
        },
        {
          id: 2,
          title: 'Jövőálló megoldások',
          text:
            'Jövőbeli terveidet is ütemezzük otthonod modernizálásakor, így a beruházásod nem válik elavulttá pár év múlva.',
        },
        {
          id: 3,
          title: 'Megbízhatóság',
          text:
            'Csak kipróbált, minőségi termékekkel dolgozunk, melyekhez teljeskörű szervízhátteret biztosítunk.',
        },
      ],
      differences: [
        {
          id: 1,
          title: 'Tanácsadókkal dolgozunk',
          text:
            'Nem értékesítőink vannak, hanem olyan, magasan képzett tanácsadóink, akik a te érdekeidet képviselik, érted dolgoznak.',
        },
        {
          id: 2,
          title: 'Saját szoftvert fejlesztünk',
          text:
            'A legátfogóbb energetikai beruházás felmérő és tervező programot fejlesztettük ki. Egy teljeskörű felmérés alapján a program kiválasztja, megtervezi és le is ütemezi a számodra tökéletes beruházást.',
        },
        {
          id: 3,
          title: 'Komplex megoldások',
          text:
            'Lakossági szinten is egységesés és összetett energetikai rendszerekben gondolkozunk. Nem hiszünk sem a konzum megoldásokban sem az ökölszabályokban.',
        },
      ],
    };
  },
};
</script>

<style></style>
