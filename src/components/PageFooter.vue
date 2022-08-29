<template>
  <v-footer color="plant" padless>
    <v-container>
      <div>
        <v-img
          contain
          width="49"
          height="50"
          :src="require('../assets/images/ez-logo.png')"
          class="mt-4 mb-6"
        />
      </div>
      <!-- <v-divider color="white" class="mb-6" /> -->
      <v-row justify="center" align="start" class="mb-2">
        <v-col cols="12" sm="6">
          <ul class="footer-list pa-0">
            <li class="white--text caption pb-2">
              <v-icon class="pr-2" color="primary">mdi-map-marker</v-icon
              ><a
                href="https://goo.gl/maps/FSJeLezxtNxFL3tG8"
                class="underline"
                target="_blank"
                >{{ location }}</a
              >
            </li>
            <li class="white--text caption pb-2">
              <v-icon class="pr-2" color="primary">mdi-phone</v-icon
              ><a class="underline" href="tel:+36 70 398 5988">{{
                telNumber
              }}</a>
            </li>
            <li class="white--text caption pb-2">
              <v-icon class="pr-2" color="primary">mdi-email</v-icon
              ><a class="underline" href="mailto:info@ezsolutions.hu">{{
                email
              }}</a>
            </li>
          </ul>
        </v-col>
        <v-col cols="12" sm="6" class="d-flex flex-row">
          <div class="d-flex flex-column flex-grow-1">
            <span class="white--text caption font-weight-bold">
              Magánszemélyek
            </span>
            <div class="d-flex flex-column">
              <g-link to="/maganszemely/solar" class="white--text caption"
                ><span class="underline">Napelem</span></g-link
              >
              <g-link to="/maganszemely/gepeszet" class="white--text caption"
                ><span class="underline">Hűtés-fűtés</span></g-link
              >
              <g-link to="/maganszemely/ev-tolto" class="white--text caption"
                ><span class="underline">Autó töltő</span></g-link
              >
            </div>
          </div>
          <div class="d-flex flex-column flex-grow-1">
            <g-link
              to="/tarsashazak"
              class="white--text caption font-weight-bold"
            >
              <span class="underline">Társasházak</span>
            </g-link>
          </div>
          <div class="d-flex flex-column flex-grow-1">
            <g-link to="/cegek" class="white--text caption font-weight-bold">
              <span class="underline">Cégek</span>
            </g-link>
          </div>
        </v-col>
      </v-row>
      <v-divider color="grey" class="mb-6" />
      <v-row justify="center">
        <v-col cols="12" sm="6" class="order-md-2">
          <p class="caption">
            <g-link to="/privacy-policy" class="underline white--text"
              >Adatvédelmi tájékoztató</g-link
            >
          </p>
        </v-col>
        <v-col cols="12" sm="6">
          <p class="caption white--text">
            {{ new Date().getFullYear() }} —
            <strong><span style="color:#0eab51;">EZ</span> Solutions</strong> ©
            Minden jog fenntartva
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      location: '9022 Győr, Móricz Zsigmond rkp. 1. fsz 9.',
      telNumber: '+36 70 398 5988',
      email: 'info@ezsolutions.hu',
    };
  },
};
</script>

<style></style>
