<template>
  <v-container class="my-2 my-md-10 site-wrapper">
    <v-row justify="center" align="center" class="relative" no-gutters>
      <svg
        width="2440"
        height="497"
        viewBox="0 0 2440 497"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="grey-background mb-10 d-none d-lg-flex "
      >
        <path d="M0 0H4096V557H0V0Z" fill="#F3F3F3" />
      </svg>
      <v-col cols="12" sm="10" offset-md="1" md="6" lg="5" offset-lg="1">
        <h3 class="text-h5 text-sm-h4 text-lg-h3 font-weight-bold mb-10">
          {{ results.title }}
        </h3>
        <p class="body-2 text-lg-body-1 mb-8">
          {{ results.text }}
        </p>
        <v-col
          cols="12"
          align-self="center"
          class="d-none d-md-flex justify-space-between"
        >
          <div class="results-numbers">
            <span class="text-h5 text-sm-h5 green--text text--darken-2"
              >akár 287 Ft/kWh</span
            >
            <p class="caption text-uppercase font-weight-bold">
              megtakarítás lakossági árammal
            </p>
          </div>
          <div class="results-numbers">
            <span class="text-h5 text-sm-h5 green--text text--darken-2"
              >akár 350 Ft/kWh</span
            >
            <p class="caption text-uppercase font-weight-bold">
              megtakarítás napelemes rendszerrel
            </p>
          </div>
        </v-col>
      </v-col>

      <v-col
        cols="3"
        sm="3"
        offset-sm="1"
        order-md="2"
        offset-md="1"
        class="d-flex flex-column d-md-none justify-space-between"
      >
        <div class="pa-2 mb-4 mb-sm-16">
          <span class="text-h6 text-sm-h5 green--text text--darken-2"
            >~287 Ft/kWh</span
          >
          <p class="caption text-uppercase font-weight-bold">
            megtakarítás lakossági árammal
          </p>
        </div>
        <div class="pa-2">
          <span class="text-h6 text-sm-h5 green--text text--darken-2"
            >~350 Ft/kWh</span
          >
          <p class="caption text-uppercase font-weight-bold">
            megtakarítás napelemes rendszerrel
          </p>
        </div>
      </v-col>

      <v-col
        cols="7"
        md="4"
        order-md="1"
        offset="1"
        class="ml-auto pa-0 relative"
        align-self="start"
      >
        <v-img
          alt="Nyitott garázsban egy falraszerelt EV töltő"
          max-height="700"
          cover
          :src="require('../../assets/images/magan-charger-intro.jpg')"
          class="elevation-3"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      results: {
        title: 'Otthoni töltővel az EV megtakarítás csúcsán',
        text:
          'Míg jelenleg egy nyilvános töltőoszlopon való töltéskor (AC) átlagosan 170-350 ft/kWh áron jutunk áramhoz, addig otthonunkban a lakossági 63 forintos (a kedvezményes mérték fölött fizetendő) kWh árat kell csupán fizetnünk. Ezen felül napelemmel tovább spórolhatsz! Termeld meg elektromos autód fogyasztását otthoni napelemes rendszerrel és „tankolj” ingyen saját elektromos töltőddel. (Egy BMW I3 120Ah felhasználható akkumulátor kapacitása 38 kWh)',
      },
    };
  },
};
</script>

<style></style>
