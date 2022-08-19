<template>
  <v-container class="py-16">
    <v-row justify="center">
      <v-col cols="11" sm="10" md="6" class="text-center">
        <p class="body-2 text-sm-body-1">
          Az EZ Kalkulátor az Ön egyedi körülményei alapján komplex megoldást
          kínál a Rezsicsapdából való szabadulásra. Megoldást javasol, segít a
          termékek a megfelelő és egymást kiegészítő napelem, hőszivattyú,
          e-autó és e-autó töltő kiválasztásában, hőszigetelést és egyéb
          kiegészítő megoldásokat javasol, árat ad, megtakarítást és megtérülést
          számol, támogatást és hitelt talál és kalkulál.
        </p>
        <span class="body-2 text-sm-body-1 font-weight-bold"
          >Kalkuláljon nyugodtan, mi csak akkor hívjuk, ha Ön tanácsadóink
          segítségét kéri.</span
        ><br />
        <v-btn small color="plant" class="white--text mt-4 mb-10"
          >Használati útmutató letöltése</v-btn
        >
      </v-col>
    </v-row>
    <v-row justify="center" align="start" class="justify-space-around">
      <v-col cols="12" sm="5" class="text-center">
        <v-img
          class="mb-4"
          contain
          aspect-ratio="1.4"
          :src="require('../../assets/images/kalkulator-ugyfel.jpg')"
        />
        <v-btn color="charger" class="mb-6 white--text"
          >Ügyfél kalkulátor</v-btn
        >
      </v-col>
      <v-col cols="12" sm="5" class="text-center">
        <v-img
          class="mb-4"
          contain
          aspect-ratio="1.4"
          :src="require('../../assets/images/kalkulator-tanacsado.jpg')"
        />
        <v-btn color="charger" class="white--text">Tanácsadói kalkulátor</v-btn>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="11" sm="10" md="6">
        <ul class="custom-marker">
          <li class="body-2 text-sm-body-1">
            Az EZ Kalkulátor használata a Rezsicsapda helyzetre való tekintettel
            72 óráig ingyenes és a programban ingyenesen kérhet személyes, vagy
            online tanácsadást.
          </li>
          <li class="body-2 text-sm-body-1">
            Ön, az EZ Kalkulátor professzionális, - tanácsadóink számára
            fejlesztett program, - specifikus ismereteket nem igénylő, Ügyfél
            változatában kalkulál.
          </li>
          <li class="body-2 text-sm-body-1">
            Ahhoz, hogy Energia hatékonysági beruházását véglegesítse, szüksége
            lehet felmérési segédleteinkre vagy Tanácsadóink segítségére.
          </li>
          <li class="body-2 text-sm-body-1">
            Végleges, megvalósításra alkalmas beruházás létrehozására az EZ
            Kalkulátor Tanácsadó verziója alkalmas.
          </li>
        </ul>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
