<template>
  <Layout>
    <partner-page />
    <partner-page-content />
    <recruitment-contact :templateId="templateId">
      Ha Önt érdekli az energiahatékonyság, rendelkezik műszaki és/vagy pénzügyi
      és/vagy ingatlan értékesítési, egyéb értékesítési tapasztalattal, töltse
      ki az alábbi jelentkezési lapot vagy küldjön bemutatkozó e-mailt a
      <a
        class="underline green--text darken-2 font-weight-bold"
        href="mailto:partner@ezsolutions.hu"
        >partner@ezsolutions.hu</a
      >
      e-mail címre. Megfelelő bemutatkozás esetén megküldjük részletes
      tanácsadó-tájékoztató anyagunkat az Ön által megadott e-mail címre és
      kollégánk telefonon is felveszi Önnel a kapcsolatot.
    </recruitment-contact>
  </Layout>
</template>

<script>
import PartnerPage from '../../components/recruitment/PartnerPage.vue';
import PartnerPageContent from '../../components/recruitment/PartnerPageContent.vue';

import RecruitmentContact from '../../components/RecruitmentContact.vue';

export default {
  name: 'ForPartner',
  metaInfo: {
    title: 'Legyél az EZ Solutions partnere!',
    meta: [
      {
        name: 'EZ Solutions',
        content: 'Kapcsolatfelvételi oldal leendő partnereink számára.',
      },
    ],
  },
  components: {
    PartnerPage,
    PartnerPageContent,
    RecruitmentContact,
  },
  data() {
    return {
      templateId: 'template_805mhfq',
    };
  },
};
</script>

<style></style>
