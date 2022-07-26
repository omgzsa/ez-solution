<template>
  <nav id="nav">
    <v-app-bar flat app dense fixed hide-on-scroll color="#eeeeee">
      <v-container>
        <v-row justify="center" align="center">
          <v-col cols="1">
            <v-app-bar-title shrink-on-scroll class="white--text">
              <g-link to="/" style="cursor: pointer">
                <!-- <v-img 
                  :src="require('../../assets/images/ez-logo-white.png')" 
                /> -->ez
              </g-link>
            </v-app-bar-title>
          </v-col>

          <v-spacer />

          <v-col>
            <v-toolbar-items class="hidden-sm-and-down">
              <g-link class="ml-4" to="/maganszemely/solar"
                >Magánszemély</g-link
              >
              <g-link class="ml-4" to="/tarsashaz/solar">Társasház</g-link>
              <g-link class="ml-4" to="/ceg/solar">Cég</g-link>
            </v-toolbar-items>
          </v-col>

          <span class="hidden-md-and-up">
            <v-app-bar-nav-icon @click="drawer = !drawer"> </v-app-bar-nav-icon>
          </span>
        </v-row>
      </v-container>
    </v-app-bar>

    <!-- <v-navigation-drawer v-model="drawer" app>
      <v-list class="d-flex flex-column">
        <g-link class="ml-4" to="/maganszemely/solar">Magánszemély</g-link>
        <g-link class="ml-4" to="/tarsashaz/solar">Társasház</g-link>
        <g-link class="ml-4" to="/ceg/solar">Cég</g-link>
      </v-list>
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
