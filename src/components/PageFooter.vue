<template>
  <v-container fluid pa-0>
    <v-footer color="plant" padless class="d-flex flex-column justify-center">
      <ul class="footer-list pt-10  ">
        <li class="white--text body-2 mb-2">
          <v-icon class="pr-4" color="primary">mdi-map-marker</v-icon>1060
          Budapest, Minta u. 25
        </li>
        <li class="white--text body-2 mb-2">
          <v-icon class="pr-4" color="primary">mdi-phone</v-icon
          ><a class="underline" href="tel:#">+36 30 123 45 67</a>
        </li>
        <li class="white--text body-2 mb-2">
          <v-icon class="pr-4" color="primary">mdi-email</v-icon
          ><a class="underline" href="mailto:#">info@ezsolutions.hu</a>
        </li>
      </ul>
      <v-divider></v-divider>
      <p class="body-2 text-lg-body-1 white--text mt-16">
        {{ new Date().getFullYear() }} —
        <strong><span style="color:#0eab51;">EZ</span> Solutions</strong>
      </p>
    </v-footer>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      contact: [
        {
          location: '1060 Budapest, Minta u. 25',
          number: '+36 30 123 45 67',
          email: 'info@ezsolutions.hu',
        },
      ],
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
