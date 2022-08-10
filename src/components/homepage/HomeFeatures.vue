<template>
  <v-container class="site-wrapper">
    <v-row justify="center" class="mb-10 mb-lg-16">
      <v-col cols="11">
        <h2 class="overline font-weight-bold mb-2 green--text text--darken-2">
          kiknek szól
        </h2>
        <h3 class="text-h5 text-sm-h4 text-lg-h3 font-weight-bold">
          Rendszereinket kínáljuk
        </h3>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="11" class="pa-0">
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
            'Teljeskörű megoldásokat biztosítunk családiházak energetikai modernizálására. Rendszereinkkel nem csak megtakaríthat, de növelheti családja biztonságát és ingatlana értékét is.',
          icon: 'home-outline',
          to: '/maganszemely/solar',
        },
        {
          title: 'Társasházaknak',
          text:
            'Társasházak teljeskörű energetikai felmérését és modernizálását válláljuk. Megoldásainkkal jobb életkörülményeket és alacsonyabb számlákat teremtünk a lakóközösségének.',
          icon: 'domain',
          to: 'tarsashazak',
        },
        {
          title: 'Cégeknek',
          text:
            'A magas energia árak a cégeket érintik leginkább. Szolárra épített elektrifikációs megoldásainkkal azonban biztonságban tudhatja vállalkozását a növekvő energia áraktól.',
          icon: 'factory',
          to: 'cegek',
        },
      ],
    };
  },
};
</script>

<style></style>
