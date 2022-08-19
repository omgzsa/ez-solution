<template>
  <Layout>
    <calc-hero />
    <calc-content />
  </Layout>
</template>

<script>
import CalcHero from '../components/calculator/CalcHero.vue';
import CalcContent from '../components/calculator/CalcContent.vue';

export default {
  components: { CalcHero, CalcContent },
};
</script>

<style></style>
