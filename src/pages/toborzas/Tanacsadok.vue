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
  components: { ConsultantPage, ConsultantPageContent },
};
</script>

<style></style>
