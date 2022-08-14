<template>
  <nav id="nav">
    <v-app-bar app dense fixed hide-on-scroll height="70" elevation="0">
      <v-container pa-0 fill-height style="max-width: 100em !important">
        <v-app-bar-title>
          <g-link to="/" style="cursor: pointer" title="EZ Solutions logo">
            <v-img
              contain
              width="49"
              height="50"
              :src="require('../assets/images/ez-logo.png')"
            />
          </g-link>
        </v-app-bar-title>

        <v-spacer />

        <v-toolbar-items class="hidden-md-and-down">
          <v-btn title="Kezdőoldal" text active-class="primary--active" to="/">
            Kezdőoldal
          </v-btn>
          <v-btn
            title="Tovább az EZ KITT Kalkulátorhoz"
            text
            active-class="primary--active"
            class="indigo--text text--darken-3"
            to="/kalkulator"
          >
            Kalkulátor
          </v-btn>
          <v-btn
            title="Tovább a Magánszemélyek oldalára"
            text
            active-class="primary--active"
            to="/maganszemely/solar"
          >
            Családi ház/lakás
          </v-btn>
          <v-btn
            title="Tovább a Társasházak oldalára"
            text
            active-class="primary--active"
            to="/tarsashazak"
          >
            Társasház/lakás
          </v-btn>
          <v-btn
            title="Tovább a Cégek oldalára"
            text
            active-class="primary--active"
            to="/cegek"
          >
            Ipar/Hotel/Üzleti
          </v-btn>

          <v-menu open-on-hover offset-y>
            <template v-slot:activator="{ on }">
              <v-btn title="Toborzás menü" text v-on="on"
                >Toborzás<v-icon>mdi-chevron-down</v-icon></v-btn
              >
            </template>
            <v-list class="d-flex flex-column align-end pa-0">
              <v-btn
                title="Legyél a partnerünk!"
                class="py-6"
                block
                text
                to="/toborzas/partnerek"
                >Legyél a partnerünk</v-btn
              >

              <v-btn
                title="Legyél a tanácsadónk"
                class="py-6"
                block
                text
                to="/toborzas/tanacsadok"
                >Legyél a tanácsadónk</v-btn
              >
            </v-list>
          </v-menu>
        </v-toolbar-items>

        <span class="hidden-lg-and-up">
          <v-app-bar-nav-icon @click="drawer = !drawer" title="Menü">
          </v-app-bar-nav-icon>
        </span>
      </v-container>
    </v-app-bar>

    <v-navigation-drawer
      disable-resize-watcher
      right
      height="100%"
      v-model="drawer"
      app
    >
      <v-list class="d-flex flex-column align-end pa-0">
        <v-btn
          class="py-6"
          block
          text
          title="Kezdőoldal"
          active-class="primary--active"
          to="/"
        >
          Kezdőoldal
        </v-btn>
        <v-btn
          class="py-6 indigo--text text--darken-3"
          title="Tovább az EZ KITT Kalkulátorhoz"
          block
          text
          active-class="primary--active"
          to="/kalkulator"
        >
          Kalkulátor
        </v-btn>
        <v-btn
          class="py-6"
          title="Tovább a Magánszemélyek oldalára"
          block
          text
          active-class="primary--active"
          to="/maganszemely/solar"
        >
          Családi ház/lakás
        </v-btn>
        <v-btn
          class="py-6"
          title="Tovább a Társasházak oldalára"
          block
          text
          active-class="primary--active"
          to="/tarsashazak"
        >
          Társasház/lakás
        </v-btn>
        <v-btn
          class="py-6"
          title="Tovább a Cégek oldalára"
          block
          text
          active-class="primary--active"
          to="/cegek"
        >
          Ipar/Hotel/Üzleti
        </v-btn>
        <v-menu open-on-hover offset-y>
          <template v-slot:activator="{ on }">
            <v-btn class="py-6" block title="Toborzás menü" text v-on="on"
              >Toborzás<v-icon>mdi-chevron-down</v-icon></v-btn
            >
          </template>
          <v-list class="d-flex flex-column align-end pa-0">
            <v-btn
              class="py-6"
              tile
              title="Legyél a partnerünk!"
              block
              text
              to="/toborzas/partnerek"
              >Legyél a partnerünk</v-btn
            >

            <v-btn
              class="py-6"
              tile
              title="Legyél a tanácsadónk"
              block
              text
              to="/toborzas/tanacsadok"
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
#nav {
  max-width: 90em !important;
}
</style>
