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
  components: { FirmsHero, FirmsList },
  data() {
    return {
      firms: [
        {
          id: 1,
          title: 'Hotelek',
          text:
            'Komplex, helységenkénti hőszivattyús, napelemes energiatárolós rendszerek telepítése, egyedi felmérések alapján.',
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
            'Az EZ KITT szoftver javaslatot tesz egy olyan komplex rezsicsökkentést eredményező rendszerre és pontosan kiszámolja cége megtakarítását, a beruházás összegét és beruházása megtérülési idejét.',
        },
        {
          id: 5,
          title: 'Csökkentse le rezsijét',
          text:
            'A villamos fogyasztás kiváltásán túl, a napelemes rendszerrel akár Ingyen is fűtheti és hűtheti épületeit. Épületei tetején elhelyezett napelemek sok esetben képesek biztosítani a fűtési, hűtési igényt is amellett, hogy a villamos fogyasztás költségeit lenullázzák.',
        },
      ],
    };
  },
};
</script>
