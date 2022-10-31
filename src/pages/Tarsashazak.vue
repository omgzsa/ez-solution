<template>
  <Layout>
    <houses-hero />
    <houses-list :houses="houses" />
  </Layout>
</template>

<script>
import HousesHero from '../components/houses/HousesHero.vue';
import HousesList from '../components/houses/HousesList.vue';

export default {
  metaInfo: {
    title: 'Társasházak',
    meta: [
      {
        name: 'EZ Solutions',
        content:
          'Komplex napelemes és gépészeti megoldást adunk társasházaknak, társasházi lakásoknak gázkonvektoros, egyedi és központi fűtéses társasházaknak is.',
      },
    ],
  },
  components: {
    HousesHero,
    HousesList,
  },
  data() {
    return {
      houses: [
        {
          id: 1,
          title: 'Rezsiköltség nullázása',
          text:
            'Napelemes rendszer a társasházi közös költség csökkentésére, közös világítás, liftek, szivattyúk áramdíjának nullázásával.',
        },
        {
          id: 2,
          title: 'Felülvizsgálat',
          text:
            'Meglévő villanyórák és hálózati teljesítmény felülvizsgálata, gázfűtési költségek csökkentése ingatlanonként egyedileg H tarifával és hőszivattyúval.',
        },
        {
          id: 3,
          title: 'Egyedi fűtés-hűtés',
          text:
            'Komplex fűtési-hűtési megoldások a társasházaknak. Napelemes és hőszivattyús megoldások egyedileg a lakástulajdonosoknak.',
        },
        {
          id: 4,
          title: 'Finanszírozás',
          text:
            'Finanszírozási megoldások, a társasház és a tulajdonosok beruházásaihoz is. ',
        },
      ],
    };
  },
};
</script>
