<template>
  <Layout>
    <firms-hero />
    <firms-list :firms="firms" />
  </Layout>
</template>

<script>
import FirmsHero from '../components/firms/FirmsHero.vue';
import FirmsList from '../components/firms/FirmsList.vue';

export default {
  metaInfo: {
    title: 'Cégek',
    meta: [
      {
        name: 'EZ Solutions',
        content:
          'Ipari Ingatlanok, Hotelek és Irodaházak számára napelem, hőszivattyú, tetőárnyékoló és egyedi gépészeti megoldások.',
      },
    ],
  },
  components: {
    FirmsHero,
    FirmsList,
  },
  data() {
    return {
      firms: [
        {
          id: 1,
          title: 'Hotelek',
          text:
            'Komplex, központi vagy helyiségenkénti hőszivattyús fűtés és hűtés, fan-coil hőleadók, illetve napelemes energiatárolós rendszerek, egyedi felmérés alapján.',
        },
        {
          id: 2,
          title: 'Irodaházak',
          text:
            'KKV-k kisebb irodáiba, irodaházaiba a lakóházakkal azonos, nagyobb irodaházakba a hotelekkel azonos megoldásainkat javasoljuk.',
        },
        {
          id: 3,
          title: 'Ipari csarnokok',
          text:
            'Az Ipari csarnokok esetén a napelemes rendszer mellett, a komplex gépészeti és tetőárnyékolási megoldásokat javaslunk, egyedi és központi hőszivattyúkkal levegőfűtéses vagy vizes sugárzó hőleadókkal.',
        },
        {
          id: 4,
          title: 'Programunk előnye',
          text:
            'Az EZ kalkuláló szoftver javaslatot tesz egy komplex rezsicsökkentést eredményező rendszerre és pontosan kiszámolja cége megtakarítását, a beruházás összegét és beruházása megtérülési idejét.',
        },
        {
          id: 5,
          title: 'Csökkentse le rezsijét',
          text:
            'A villamos fogyasztás kiváltásán túl, a napelemes rendszerrel akár fűtési és hűtési költséget is csökkentheti. Az ipari épületek tetején elhelyezett napelemek sok esetben képesek biztosítani a fűtési, hűtési igény egy részét is amellett, hogy a villamos fogyasztás költségeit csökkentik.',
        },
      ],
    };
  },
};
</script>
