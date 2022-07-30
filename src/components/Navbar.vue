<template>
  <nav id="nav">
    <v-app-bar flat app dense fixed hide-on-scroll color="#eeeeee" height="70">
      <v-app-bar-title shrink-on-scroll>
        <g-link to="/" style="cursor: pointer">
          <g-image src="~/assets/images/ez-logo.png" width="50" fit="cover" />
        </g-link>
      </v-app-bar-title>

      <v-spacer />

      <div>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat text>
            <g-link to="/maganszemely/solar">Magánszemély</g-link>
          </v-btn>
          <v-btn flat text>
            <g-link to="/tarsashaz/solar">Társasház</g-link>
          </v-btn>
          <v-btn flat text>
            <g-link to="/ceg/solar">Cég</g-link>
          </v-btn>

          <v-menu open-on-hover>
            <template v-slot:activator="{ on }">
              <v-btn flat text v-on="on">Toborzás</v-btn>
            </template>
            <v-list class="d-flex flex-column">
              <v-list-tile>
                <v-list-tile-title>
                  <v-btn flat text>
                    <g-link to="/toborzas/partnerek"
                      >Legyél a partnerünk</g-link
                    >
                  </v-btn>
                </v-list-tile-title>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-title>
                  <v-btn flat text>
                    <g-link to="/toborzas/tanacsadok"
                      >Legyél a tanácsadónk</g-link
                    >
                  </v-btn>
                </v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </v-toolbar-items>
      </div>

      <span class="hidden-md-and-up">
        <v-app-bar-nav-icon @click="drawer = !drawer"> </v-app-bar-nav-icon>
      </span>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app>
      <v-list class="d-flex flex-column">
        <v-btn flat text>
          <g-link to="/maganszemely/solar">Magánszemély</g-link>
        </v-btn>
        <v-btn flat text>
          <g-link to="/tarsashaz/solar">Társasház</g-link>
        </v-btn>
        <v-btn flat text>
          <g-link to="/ceg/solar">Cég</g-link>
        </v-btn>
      </v-list>
      <v-menu open-on-hover>
        <template v-slot:activator="{ on }">
          <v-btn flat text v-on="on">Toborzás</v-btn>
        </template>
        <v-list>
          <v-list-tile>
            <v-list-tile-title>
              <v-btn> Legyél a partnerünk </v-btn>
            </v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-title>
              <v-btn> Legyél a tanácsadónk </v-btn>
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
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
