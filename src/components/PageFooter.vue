<template>
  <v-footer
    id="footer"
    color="plant"
    padless
    class="d-flex flex-column justify-center py-10"
  >
    <v-container>
      <v-row justify="center" class="mx-auto text-center">
        <v-col cols="10" sm="8">
          <h2
            class="overline font-weight-bold mb-2 green--text darken-2 justify-center"
          >
            kapcsolat
          </h2>
          <h3
            class="text-h5 text-sm-h4 text-lg-h3 white--text font-weight-bold mb-10"
          >
            Szabadulj a Rezsicsapdából!
          </h3>
          <p class="body-2 text-lg-body-1 white--text">
            Kérjen ajánlatot szakértő kollégánktól elérhetőségeink valamelyikén!
          </p>
        </v-col>
      </v-row>
    </v-container>
    <ul class="footer-list pt-10">
      <li class="white--text body-2 mb-2">
        <v-icon class="pr-4" color="primary">mdi-map-marker</v-icon
        >{{ location }}
      </li>
      <li class="white--text body-2 mb-2">
        <v-icon class="pr-4" color="primary">mdi-phone</v-icon
        ><a class="underline" href="tel:+36 70 398 5988">{{ telNumber }}</a>
      </li>
      <li class="white--text body-2 mb-2">
        <v-icon class="pr-4" color="primary">mdi-email</v-icon
        ><a class="underline" href="mailto:info@ezsolutions.hu">{{ email }}</a>
      </li>
    </ul>
    <v-spacer />
    <p class="body-2 text-lg-body-1 white--text mt-16">
      {{ new Date().getFullYear() }} —
      <strong><span style="color:#0eab51;">EZ</span> Solutions</strong>
    </p>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      location: '9022 Győr, Móricz Zsigmond rkp. 1. fsz. 9.',
      telNumber: '+36 70 398 5988',
      email: 'info@ezsolutions.hu',
    };
  },
};
</script>

<style>
.footer-list {
  list-style: none;
}

a[href^='tel:'],
a[href^='mailto:'] {
  color: white !important;
  text-decoration: none;
}

a:hover {
  color: #0eab51 !important;
}
</style>
