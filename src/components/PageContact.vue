<template>
  <v-container id="footer" fluid class="contact-hero py-10">
    <v-row
      justify="center"
      align="start"
      class="site-wrapper justify-space-around"
    >
      <v-col cols="12" sm="4" md="5">
        <h2 class="overline font-weight-bold mb-2 white--text">
          kapcsolat
        </h2>
        <h3
          class="text-h5 text-md-h4 text-lg-h3 font-weight-bold white--text mb-6"
        >
          Használja ki a Napot Ön is!
        </h3>
        <p class="body-1 white--text">
          Vegye fel a kapcsolatot szakértő kollégánikal!
        </p>
      </v-col>
      <v-col cols="12" sm="7" md="5" class="">
        <v-form v-model="valid">
          <v-container pa-0>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="fullName"
                  :rules="nameRules"
                  label="Teljes név"
                  required
                  dark
                ></v-text-field>
              </v-col>

              <!-- <v-col cols="6">
                <v-text-field
                  v-model="lastName"
                  :rules="nameRules"
                  label="Keresztnév"
                  required
                  dark
                ></v-text-field>
              </v-col> -->

              <!-- <v-col cols="12">
                <v-text-field
                  v-model="phoneNumber"
                  label="Telefonszám"
                  dark
                ></v-text-field>
              </v-col> -->

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
                    label="Üzenet"
                    filled
                    auto-grow
                    :value="message"
                    dark
                  ></v-textarea>
                </v-col>
                <v-btn
                  class="mr-4"
                  color="primary"
                  type="submit"
                  @click="sendEmail"
                >
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
    message: '',
    valid: false,
    fullName: '',
    // lastName: '',
    nameRules: [
      (v) => !!v || 'Név megadása kötelező',
      (v) => v.length <= 30 || 'Név ne legyen hosszabb 30 karakternél',
    ],
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail megadása kötelező',
      (v) => /.+@.+/.test(v) || 'Adjon meg egy létező e-mail címet.',
    ],
  }),
  methods: {
    sendEmail: function(e) {
      e.preventDefault();
      let finalMessage = `Név : ${this.fullName} <br>  Email : ${
        this.email
      } <br>  Üzenet : ${this.message} <br>`;

      Email.send({
        Host: 'smtp.yourisp.com',
        Username: 'username',
        Password: 'password',
        To: 'them@website.com',
        From: 'you@isp.com',
        Body: finalMessage,
      }).then((message) => alert(message));

      console.log(finalMessage);
    },
  },
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
