<template>
  <v-container class="my-16 site-wrapper">
    <v-row justify="center" class="mb-sm-10">
      <v-col cols="12" md="5" lg="5" class="d-md-flex order-2">
        <v-img
          cover
          aspect-ratio="1.4"
          :src="require('../../assets/images/home-about.jpg')"
        />
      </v-col>
      <v-col cols="12" sm="11" md="6" lg="6">
        <h2 class="overline font-weight-bold mb-2 green--text text--darken-2">
          Rólunk
        </h2>
        <h3 class="text-h5 text-sm-h4 text-lg-h3 font-weight-bold mb-10">
          Megtérülő befektetések megújuló energia
        </h3>
        <p class="body-2 text-sm-body-1">
          Cégünk innovatív, megújuló megoldások teljes palettáját szolgáltatja családod és
céged számára. Mindig teljeskörű szolgáltatást nyújtunk, ahol az
engedélyeztetéssel, kivitelezéssel járó terhet levesszük a válladról.
        </p>
        <p class="body-2 text-sm-body-1">
          A folyamat elején háztartásod vagy üzemed jelen és jövőbeli igényeit is pontosan
meghatározzuk és ezek alapján keressük meg a számodra tökéletes modern
energetikai megoldást. Mindez saját fejlesztésű szoftverünknek köszönhetően a
szemed láttára történik. A precíz és pontos munkát csapatunk évtizedes műszaki,
építőipari, jogi, számviteli és értékesítő tapasztalata garantálja.
        </p>
        <div class="my-6">
          <v-icon color="charger" class="mr-3"
            >mdi-file-document-outline</v-icon
          >
          <a
            href="../../ez-solutions-termekbemutato.pdf"
            class="underline"
            download="ez-solutions-termekbemutato"
            >Töltse le termékbemutatónkat!</a
          >
        </div>
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
