<template>
  <Layout>
    <consultant-page />
    <consultant-page-content />
    <!-- <recruitment-contact :templateId="templateId">
      Ha Önt érdekli az energiahatékonyság, rendelkezik műszaki és/vagy pénzügyi
      és/vagy ingatlan értékesítési, egyéb értékesítési tapasztalattal, töltse
      ki az alábbi jelentkezési lapot vagy küldjön bemutatkozó e-mailt a
      <a
        class="underline green--text darken-2 font-weight-bold"
        href="mailto:tanacsado@ezsolutions.hu"
        >tanacsado@ezsolutions.hu</a
      >
      e-mail címre.
    </recruitment-contact> -->
  </Layout>
</template>

<script>
import ConsultantPage from '../../components/recruitment/ConsultantPage.vue';
import ConsultantPageContent from '../../components/recruitment/ConsultantPageContent.vue';

// import RecruitmentContact from '../../components/RecruitmentContact.vue';

export default {
  name: 'ForConsultant',
  metaInfo: {
    title: 'Legyél az EZ Solutions tanácsadója!',
    meta: [
      {
        name: 'EZ Solutions',
        content: 'Kapcsolatfelvételi oldal leendő tanácsadóink számára.',
      },
    ],
  },
  components: {
    ConsultantPage,
    ConsultantPageContent,
    // RecruitmentContact,
  },
  data() {
    return {
      templateId: 'template_8gylgjs',
    };
  },
};
</script>

<style></style>
