<template>
  <v-container pa-0>
    <v-row
      justify="center"
      class="d-flex flex-column flex-sm-row justify-space-between"
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
            'Telepíttessen napelemes rendszert otthonába csapatunkkal. Nullázza le villanyszámláját és növelje megtakarítását további termékeink kihasználásával.',
        },
        {
          id: 2,
          title: 'Testreszabott megoldások',
          text:
            'Otthonára és személyes igényeire szabott megoldásokat valósítunk meg. Ezt garantálja egy átfogó felmérés, ami alapján saját fejlesztésű szoftverünk egyedi kalkulációkat készít és megoldásokat javasol.',
        },
        {
          id: 3,
          title: 'Megbízhatóság',
          text:
            'Csak kipróbált, minőségi termékekkel dolgozunk, melyekhez teljeskörű szolgáltatásunkat tapasztalt csapatunk biztosítja.',
        },
      ],
      differences: [
        {
          id: 1,
          title: 'Tanácsadókkal dolgozunk',
          text:
            'Nem értékesítőink vannak, hanem olyan magasan képzett tanácsadóink, akik az Ön érdekeit képviselik és Önért dolgoznak.',
        },
        {
          id: 2,
          title: 'Saját szoftvert fejlesztünk',
          text:
            'Ennek segítségével pontosan fel tudjuk mérni otthonát, így tökéletesen az Ön igényeire tudjuk szabni megoldásainkat. Rendszerünk minden dokumentumot automatikusan állít ki, ezért a folyamat gyorsasága garantált.',
        },
        {
          id: 3,
          title: 'Komplex megoldások',
          text:
            'Komplex rendszerekben gondolkozunk, hiszen megoldásaink erősítik egymást. Kombinálja őket és hozza ki a legtöbbet az otthonában megvalósítható fenntartható beruházásokból.',
        },
      ],
    };
  },
};
</script>

<style></style>
