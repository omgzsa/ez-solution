<template>
  <Layout>
    <partner-page />
    <partner-page-content />
  </Layout>
</template>

<script>
import PartnerPage from '../../components/recruitment/PartnerPage.vue';
import PartnerPageContent from '../../components/recruitment/PartnerPageContent.vue';

export default {
  metaInfo: {
    title: 'Legyél az EZ Solutions partnere!',
    meta: [
      {
        name: 'EZ Solutions',
        content: 'Kapcsolatfelvételi oldal leendő partnereink számára.',
      },
    ],
  },
  components: { PartnerPage, PartnerPageContent },
};
</script>

<style></style>
