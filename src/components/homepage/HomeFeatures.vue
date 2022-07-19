<template>
  <v-container>
    <v-row align="start" justify="center">
      <home-features-item :cards="cards" />
    </v-row>
  </v-container>
</template>

<script>
import HomeFeaturesItem from './HomeFeaturesItem.vue';

export default {
  components: { HomeFeaturesItem },
  data() {
    return {
      cards: [
        {
          title: 'Magánszemélyeknek',
          text:
            'Teljeskörű megoldásokat biztosítunk családiházak energetikai modernizálására. Megoldásainkkal nem csak megtakaríthat, de növelheti családja biztonságát és ingatlana értékét is.',
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
