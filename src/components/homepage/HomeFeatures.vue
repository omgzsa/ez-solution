<template>
  <v-container class="home-features">
    <v-row class="mb-6 mb-lg-16">
      <v-col>
        <h2 class="overline font-weight-bold mb-2 green--text text--accent-4">
          kiknek szól
        </h2>
        <h3 class="text-h5 text-sm-h4 text-lg-h3 font-weight-bold">
          Rendszereinket kínáljuk
        </h3>
      </v-col>
    </v-row>
    <home-features-item :features="features" />
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
          to: 'tarsashaz/solar',
        },
        {
          title: 'Cégeknek',
          text:
            'A magas energia árak a cégeket érintik leginkább. Szolárra épített elektrifikációs megoldásainkkal azonban biztonságban tudhatja vállalkozását a növekvő energia áraktól.',
          icon: 'factory',
          to: 'ceg/solar',
        },
      ],
    };
  },
};
</script>

<style>
.home-features {
  max-width: 100em !important;
  margin-inline: auto;
}
</style>
