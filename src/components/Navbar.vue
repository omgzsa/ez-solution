<template>
  <nav id="nav">
    <v-app-bar flat app dense fixed hide-on-scroll color="#eeeeee" height="70">
      <v-app-bar-title shrink-on-scroll class="white--text">
        <g-link to="/" style="cursor: pointer">
          <!-- <img
                src="../assets/images/ez-logo.png"
                height="50"
                class="py-1"
              /> -->
          <g-image src="~/assets/images/ez-logo.png" width="50" fit="cover" />
        </g-link>
      </v-app-bar-title>

      <v-spacer />

      <v-col>
        <v-toolbar-items class="hidden-sm-and-down">
          <g-link class="ml-4" to="/maganszemely/solar">Magánszemély</g-link>
          <g-link class="ml-4" to="/tarsashaz/solar">Társasház</g-link>
          <g-link class="ml-4" to="/ceg/solar">Cég</g-link>
        </v-toolbar-items>
      </v-col>

      <span class="hidden-md-and-up">
        <v-app-bar-nav-icon @click="drawer = !drawer"> </v-app-bar-nav-icon>
      </span>
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
