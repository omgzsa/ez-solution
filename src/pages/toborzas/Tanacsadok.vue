<template>
  <Layout>
    <consultant-page />
    <consultant-page-content />
  </Layout>
</template>

<script>
import ConsultantPage from '../../components/recruitment/ConsultantPage.vue';
import ConsultantPageContent from '../../components/recruitment/ConsultantPageContent.vue';

export default {
  metaInfo: {
    title: 'Legyél az EZ Solutions tanácsadója!',
    meta: [
      {
        name: 'EZ Solutions',
        content: 'Kapcsolatfelvételi oldal leendő tanácsadóink számára.',
      },
    ],
  },
  components: { ConsultantPage, ConsultantPageContent },
};
</script>

<style></style>
