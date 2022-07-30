<template>
  <v-container class="mb-16 site-wrapper">
    <v-row justify="center" class="mb-sm-10 ">
      <v-col cols="12" md="5" lg="5" class="d-md-flex order-2">
        <v-img
          cover
          aspect-ratio="1.7"
          :src="require('../../assets/images/home-about.jpg')"
        />
      </v-col>
      <v-col sm="12" md="6" lg="6">
        <h2 class="overline font-weight-bold mb-2 green--text text--accent-4">
          Rólunk
        </h2>
        <h3 class="text-h5 text-sm-h4 text-lg-h3 font-weight-bold mb-10">
          Megtérülő befektetések megújuló energia
        </h3>
        <p class="body-2 text-sm-body-1">
          Cégünk innovatív, megújuló megoldások teljes palettáját szolgáltatja
          családja és cége számára. Mindig teljeskörű szolgáltatást nyújtunk,
          ahol az engedélyeztetéssel, kivitelezéssel járó terheket levesszük
          ügyfeleink válláról.
        </p>
        <p class="body-2 text-sm-body-1">
          A folyamat elején jelen és jövőbeli igényeiket pontosan meghatározzuk
          és ezekre formáljuk megoldásainkat. Mindezt csapatunk évtizedes
          műszaki, építőipari, jogi, számviteli és értékesítő tapasztalatára
          alapozzuk.
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <home-about-benefits />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import HomeAboutBenefits from './HomeAboutBenefits.vue';

export default {
  components: { HomeAboutBenefits },
};
</script>

<style></style>
