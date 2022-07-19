<template>
  <v-footer dark padless>
    <v-card class="flex" flat tile>

        <v-spacer></v-spacer>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>EZ Solutions</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
        //
    };
  }
};
</script>

<style scoped>
.v-btn a {
  text-decoration: none;
  color: white;
}
</style>