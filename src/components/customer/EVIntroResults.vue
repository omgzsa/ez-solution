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
      <v-col cols="12" sm="10" offset-sm="" md="6" lg="5" offset-lg="1">
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
            <span class="text-h5 text-sm-h4 green--text text--darken-2"
              >99 Ft/kWh</span
            >
            <p class="caption text-uppercase font-weight-bold">
              megtakarítás olcsó lakossági árammal
            </p>
          </div>
          <div class="results-numbers">
            <span class="text-h5 text-sm-h4 green--text text--darken-2"
              >140 Ft/kWh</span
            >
            <p class="caption text-uppercase font-weight-bold">
              megtakarítás otthoni napelemes rendszerrel
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
          <span class="text-h6 text-sm-h4 green--text text--darken-2"
            >3,5x több</span
          >
          <p class="caption text-uppercase font-weight-bold">
            kondenzációs kazánhoz képest
          </p>
        </div>
        <!-- <v-divider></v-divider> -->
        <div class="pa-2">
          <span class="text-h6 text-sm-h4 green--text text--darken-2"
            >4,5x több</span
          >
          <p class="caption text-uppercase font-weight-bold">
            hagyományos gázkazánhoz képest
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
          alt="A house with solar panels on the roof"
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
          'Míg jelenleg egy nyilvános töltő oszlopon való töltéskor (AC) átlagosan 140 ft/kWh áron jutunk áramhoz, addig otthonunkban a rezsicsökkentett 36 forintos árat kell csupán fizetnünk. Termelje meg elektromos autója fogyasztását otthoni napelemes rendszerével és „tankoljon” ingyen saját elektromos töltőjével. (Egy BMW I3 120Ah felhasználható akkumulátor kapacitása 38 kWh)',
      },
    };
  },
};
</script>

<style></style>
