<template>
  <nav id="nav">
    <v-app-bar app dense fixed hide-on-scroll height="70">
      <v-app-bar-title shrink-on-scroll>
        <g-link to="/" style="cursor: pointer">
          <g-image
            class="logo"
            src="~/assets/images/ez-logo.png"
            width="50"
            fit="cover"
            transition="fade-transition"
          />
        </g-link>
      </v-app-bar-title>

      <v-spacer />

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text tile active-class="solar--active" to="/maganszemely/solar">
          Magánszemélyeknek
        </v-btn>
        <v-btn text tile active-class="primary--active" to="/tarsashazak">
          Társasházaknak
        </v-btn>
        <v-btn text tile active-class="primary--active" to="/cegek">
          Cégeknek
        </v-btn>

        <v-btn text tile active-class="primary--active" to="/kalkulator">
          Kalkulátor
        </v-btn>
        <v-menu open-on-hover offset-y>
          <template v-slot:activator="{ on }">
            <v-btn text tile v-on="on">Toborzás</v-btn>
          </template>
          <v-list class="d-flex flex-column align-end">
            <v-btn text tile to="/toborzas/partnerek"
              >Legyél a partnerünk</v-btn
            >

            <v-btn text tile to="/toborzas/tanacsadok"
              >Legyél a tanácsadónk</v-btn
            >
          </v-list>
        </v-menu>
      </v-toolbar-items>

      <span class="hidden-md-and-up">
        <v-app-bar-nav-icon @click="drawer = !drawer"> </v-app-bar-nav-icon>
      </span>
    </v-app-bar>

    <v-navigation-drawer
      disable-resize-watcher
      right
      height="200"
      v-model="drawer"
      app
    >
      <v-list class="d-flex flex-column align-end">
        <v-btn text tile active-class="solar--active" to="/maganszemely/solar">
          Magánszemélyeknek
        </v-btn>
        <v-btn text tile active-class="primary--active" to="/tarsashazak">
          Társasházaknak
        </v-btn>
        <v-btn text tile active-class="primary--active" to="/cegek">
          Cégeknek
        </v-btn>
        <v-btn text tile active-class="primary--active" to="/kalkulator">
          Kalkulátor
        </v-btn>
        <v-menu open-on-hover offset-y>
          <template v-slot:activator="{ on }">
            <v-btn text tile v-on="on">Toborzás</v-btn>
          </template>
          <v-list class="d-flex flex-column align-end">
            <v-btn text tile to="/toborzas/partnerek"
              >Legyél a partnerünk</v-btn
            >

            <v-btn text tile to="/toborzas/tanacsadok"
              >Legyél a tanácsadónk</v-btn
            >
          </v-list>
        </v-menu>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
  // watch: {
  //   group() {
  //     this.drawer = false;
  //   },
  // },
};
</script>

<style>
.logo {
  opacity: 1;
}
</style>
