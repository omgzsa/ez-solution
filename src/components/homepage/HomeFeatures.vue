<template>
  <v-container class="site-wrapper px-0 my-10">
    <v-row justify="center" class="mb-10 mb-lg-16 mx-auto">
      <v-col cols="12" sm="11">
        <h2 class="overline font-weight-bold mb-2 green--text text--darken-2">
          kiknek szól
        </h2>
        <h3 class="text-h5 text-sm-h4 text-lg-h3 font-weight-bold">
          Rendszereinket kínáljuk
        </h3>
      </v-col>
    </v-row>
    <v-row justify="center" class="pa-0 mx-auto">
      <v-col cols="12" sm="11" class="pa-0">
        <home-features-item :features="features" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import HomeFeaturesItem from './HomeFeaturesItem.vue';

export default {
  components: { HomeFeaturesItem },
  data() {
    return {
      features: [
        {
          title: 'Magánszemélyeknek',
          text:
            'Teljeskörű megoldásokat biztosítunk családiházak és lakások energetikai modernizálására. Rendszereinkkel nem csak megtakaríthatsz, de növelheted családod biztonságát és ingatlanod értékét is.',
          icon: 'home-outline',
          to: '/maganszemely/solar',
        },
        {
          title: 'Társasházaknak',
          text:
            'Társasházak teljeskörű energetikai felmérését és modernizálását válláljuk. Megoldásainkkal értékesebb lakásokat és alacsonyabb számlákat teremtünk a lakóközösségének.',
          icon: 'domain',
          to: 'tarsashazak',
        },
        {
          title: 'Cégeknek',
          text:
            'A magas energiaárak a cégeket érintik leginkább. Szolárra épített elektrifikációs megoldásainkkal azonban biztonságban tudhatod vállalkozásodat a növekvő energiaáraktól. Sokrétű fűtési megoldásaink megtérülő beruházásokat eredményeznek, amik az üzemek értékét is nagyban növelik!',
          icon: 'factory',
          to: 'cegek',
        },
      ],
    };
  },
};
</script>

<style></style>
