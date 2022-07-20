<template>
  <v-container class="mb-16 home-about">
    <v-row justify="center">
      <v-col md="5" class="d-none d-md-flex">
        <v-img
          cover
          aspect-ratio="1.7"
          :src="require('../../assets/images/home-about.jpg')"
        />
      </v-col>
      <v-col sm="11" md="7" lg="7">
        <h2 class="overline font-weight-bold mb-2 red--text text--darken-3">
          Rólunk
        </h2>
        <h3 class="text-h5 text-sm-h4 text-lg-h3 font-weight-bold mb-10">
          Megtérülő befektetések, megújuló energia, otthonában
        </h3>
        <p class="body-2 text-sm-body-1">
          Cégünk innovatív, megújuló megoldások teljes palettáját szolgáltatja
          családja és cége számára. Mindig teljeskörű szolgáltatást nyújtunk,
          ahol az engedélyeztetéssel, kivitelezéssel járó terheket levesszük
          ügyfeleink válláról.
        </p>
        <p class="body-2 text-sm-body-1 mb-10">
          A folyamat elején jelen és jövőbeli igényeiket pontosan meghatározzuk
          és ezekre formáljuk megoldásainkat. Mindezt csapatunk évtizedes
          műszaki, építőipari, jogi, számviteli és értékesítő tapasztalatára
          alapozzuk.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
.home-about {
  max-width: 100em !important;
  margin-inline: auto;
}
</style>
