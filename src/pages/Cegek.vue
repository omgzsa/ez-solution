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
    title: 'Cégeknek | EZ Solutions',
  },
  components: { FirmsHero, FirmsList },
  data() {
    return {
      firms: [
        {
          id: 1,
          title: 'Irodaházak',
          text:
            'KKV-k irodáiba, irodaházaiba a lakóházakkal azonos megoldásainkat javasoljuk.',
        },
        {
          id: 2,
          title: 'Ipari csarnokok',
          text:
            'Az Ipari csarnokok fűtésére egyedi hőszivattyút javaslunk, ami képes termomotoros levegőfűtéses vagy vizes, sugárzó fűtéses hőleadókat is működtetni.',
        },
        {
          id: 3,
          title: 'Programunk előnye',
          text:
            'Az EZ KITT szoftver javaslatot tesz új, személyreszabott hőszivattyús rendszerére, pontosan kiszámolja cége megtakarítását és beruházása megtérülési idejét.',
        },
        {
          id: 4,
          title: 'Nullázza le rezsijét',
          text:
            'Ingyen fűtheti és hűtheti épületeit. Irodaháza és/vagy üzeme tetején elhelyezett napelemek sokszorosan képesek biztosítani a fűtési, hűtési igényt.',
        },
      ],
    };
  },
};
</script>
