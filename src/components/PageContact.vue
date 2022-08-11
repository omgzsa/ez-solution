<template>
  <v-container fluid class="contact-hero py-10">
    <v-row
      justify="center"
      align="start"
      class="site-wrapper justify-space-around"
    >
      <v-col cols="10" md="5">
        <h2 class="overline font-weight-bold mb-2 white--text">
          kapcsolat
        </h2>
        <h3 class="text-h5 text-sm-h4 text-lg-h3 font-weight-bold white--text">
          Használja ki a Napot Ön is!
        </h3>
        <p class="body-1 white--text">
          Kérjen ajánlatot szakértő kollégánktól!
        </p>
      </v-col>
      <v-col cols="10" md="5" class="">
        <v-form v-model="valid">
          <v-container>
            <v-row class="">
              <v-col cols="12">
                <v-text-field
                  v-model="firstName"
                  :rules="nameRules"
                  label="Vezetéknév"
                  required
                  dark
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  v-model="lastName"
                  :rules="nameRules"
                  label="Keresztnév"
                  required
                  dark
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                  dark
                ></v-text-field>
                <v-col class="pa-0">
                  <v-textarea
                    name="input-7-1"
                    filled
                    auto-grow
                    value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                    dark
                  ></v-textarea>
                </v-col>
                <v-btn class="mr-4" type="submit" :disabled="invalid">
                  Elküld
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    firstName: '',
    lastName: '',
    nameRules: [
      (v) => !!v || 'Name is required',
      (v) => v.length <= 10 || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
  }),
};
</script>

<style>
.contact-hero {
  background: url(../assets/images/contact-bg.jpg) no-repeat bottom;
  background-size: cover;
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.3);
  /* min-height: 90vh; */
}
</style>
