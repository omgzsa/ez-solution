<template>
  <nav id="nav">
    <v-app-bar app dense fixed hide-on-scroll color="#eeeeee" height="70">
      <v-app-bar-title shrink-on-scroll>
        <g-link to="/" style="cursor: pointer">
          <g-image src="~/assets/images/ez-logo.png" width="50" fit="cover" />
        </g-link>
      </v-app-bar-title>

      <v-spacer />

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text active-class="solar--active" to="/maganszemely/solar">
          Magánszemély
        </v-btn>
        <v-btn text active-class="primary--active" to="/tarsashazak">
          Társasház
        </v-btn>
        <v-btn text active-class="primary--active" to="/cegek">
          Cég
        </v-btn>

        <v-menu open-on-hover offset-y="">
          <template v-slot:activator="{ on }">
            <v-btn text v-on="on">Toborzás</v-btn>
          </template>
          <v-list
            elevation="1"
            text
            flat
            light
            tile
            dense
            class="d-flex flex-column"
          >
            <v-list-item>
              <v-btn text to="/toborzas/partnerek">Legyél a partnerünk</v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn text to="/toborzas/tanacsadok">Legyél a tanácsadónk</v-btn>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn text active-class="primary--active" to="/kalkulator">
          Kalkulátor
        </v-btn>
      </v-toolbar-items>

      <span class="hidden-md-and-up">
        <v-app-bar-nav-icon @click="drawer = !drawer"> </v-app-bar-nav-icon>
      </span>
    </v-app-bar>

    <!-- <v-navigation-drawer v-model="drawer" app>
      <v-list class="d-flex flex-column align-start">
        <v-btn text>
          <v-btn to="/maganszemely/solar">Magánszemély</v-btn>
        </v-btn>
        <v-btn text>
          <v-btn to="/tarsashaz/solar">Társasház</v-btn>
        </v-btn>
        <v-btn text>
          <v-btn to="/ceg/solar">Cég</v-btn>
        </v-btn>
      </v-list>
      <v-menu open-on-hover tile>
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on">Toborzás</v-btn>
        </template>
        <v-list flat class="d-flex flex-column text-center">
          <v-list-item>
            <v-btn text>
              <v-btn to="/toborzas/partnerek">Legyél a partnerünk</v-btn>
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn text>
              <v-btn to="/toborzas/tanacsadok">Legyél a tanácsadónk</v-btn>
            </v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-navigation-drawer> -->
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
