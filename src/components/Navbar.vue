<template>
  <nav id="nav">
    <v-app-bar app dense fixed hide-on-scroll height="70">
      <v-app-bar-title shrink-on-scroll>
        <g-link to="/" style="cursor: pointer">
          <g-image
            class="logo"
            alt="EZ Solutions logó"
            src="~/assets/images/ez-logo.png"
            width="50"
            fit="cover"
            transition="fade-transition"
          />
        </g-link>
      </v-app-bar-title>

      <v-spacer />

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          title="Tovább a Magánszemélyek oldalára"
          text
          active-class="primary--active"
          to="/maganszemely/solar"
        >
          Magánszemélyeknek
        </v-btn>
        <v-btn
          title="Tovább a Társasházak oldalára"
          text
          active-class="primary--active"
          to="/tarsashazak"
        >
          Társasházaknak
        </v-btn>
        <v-btn
          title="Tovább a Cégek oldalára"
          text
          active-class="primary--active"
          to="/cegek"
        >
          Cégeknek
        </v-btn>

        <v-btn
          title="Tovább az EZ KITT Kalkulátorhoz"
          text
          active-class="primary--active"
          to="/kalkulator"
        >
          Kalkulátor
        </v-btn>
        <v-menu open-on-hover offset-y>
          <template v-slot:activator="{ on }">
            <v-btn title="Toborzás menü" text v-on="on">Toborzás</v-btn>
          </template>
          <v-list class="d-flex flex-column align-end pa-0">
            <v-btn
              title="Legyél a partnerünk!"
              block
              text
              to="/toborzas/partnerek"
              >Legyél a partnerünk</v-btn
            >

            <v-btn
              title="Legyél a tanácsadónk"
              block
              text
              to="/toborzas/tanacsadok"
              >Legyél a tanácsadónk</v-btn
            >
          </v-list>
        </v-menu>
      </v-toolbar-items>

      <span class="hidden-md-and-up">
        <v-app-bar-nav-icon @click="drawer = !drawer" title="Menü gomb">
        </v-app-bar-nav-icon>
      </span>
    </v-app-bar>

    <v-navigation-drawer
      disable-resize-watcher
      right
      height="180"
      v-model="drawer"
      app
    >
      <v-list class="d-flex flex-column align-end pa-0">
        <v-btn
          title="Tovább a Magánszemélyek oldalára"
          block
          text
          active-class="primary--active"
          to="/maganszemely/solar"
        >
          Magánszemélyeknek
        </v-btn>
        <v-btn
          title="Tovább a Társasházak oldalára"
          block
          text
          active-class="primary--active"
          to="/tarsashazak"
        >
          Társasházaknak
        </v-btn>
        <v-btn
          title="Tovább a Cégek oldalára"
          block
          text
          active-class="primary--active"
          to="/cegek"
        >
          Cégeknek
        </v-btn>
        <v-btn
          title="Tovább az EZ KITT Kalkulátorhoz"
          block
          text
          active-class="primary--active"
          to="/kalkulator"
        >
          Kalkulátor
        </v-btn>
        <v-menu open-on-hover offset-y>
          <template v-slot:activator="{ on }">
            <v-btn title="Toborzás menü" block text v-on="on">Toborzás</v-btn>
          </template>
          <v-list class="d-flex flex-column align-end pa-0">
            <v-btn
              title="Legyél a partnerünk!"
              block
              text
              to="/toborzas/partnerek"
              >Legyél a partnerünk</v-btn
            >

            <v-btn
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
.logo {
  opacity: 1;
}
</style>
