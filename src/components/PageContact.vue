<template>
  <v-container fluid class="contact-hero py-10">
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
          Teremtsünk értéket közösen!
        </h3>
        <p class="body-2 body-lg-1 white--text">
          Érdekel, hogy számodra milyen típusú energetikai modernizáció eredményezné a legnagyobb megtakarítást és értékteremtést? Pontosan mennyibe kerülne és milyen gyorsan készülne el? Egy olyan csapatot keresel, ami érted dolgozik és a tervezéstől a kivitelezésig minden problémát levesz a válladról? <br />
Ha igen, akkor - <strong>Vedd fel velünk a kapcsolatot és kezdjük el a közös munkát!</strong>
        </p>
      </v-col>
      <v-col cols="12" sm="7" md="5" class="">
        <v-form ref="form" @submit.prevent="sendEmail" v-model="isFormValid">
          <v-container pa-0>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  name="name"
                  v-model="name"
                  label="Teljes név"
                  type="text"
                  :rules="nameRules"
                  dark
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  name="email"
                  v-model="email"
                  label="E-mail"
                  type="email"
                  :rules="emailRules"
                  dark
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  name="number"
                  v-model="number"
                  label="Telefonszám"
                  type="number"
                  dark
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  name="message"
                  v-model="message"
                  label="Üzenet"
                  type="text"
                  filled
                  auto-grow
                  dark
                ></v-textarea>
                <v-dialog v-model="dialog" width="500">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      class="mr-4"
                      v-bind="attrs"
                      v-on="on"
                      color="primary"
                      type="submit"
                      value="send"
                      dark
                      title="Üzenet elküldése"
                      :disabled="!isFormValid"
                    >
                      Elküld
                    </v-btn>
                  </template>

                  <v-card tile outlined>
                    <v-card-title class="font-weight-bold">
                      Az üzenetet sikeresen elküldte!
                    </v-card-title>

                    <v-card-text class="body-2 black--text">
                      Köszönjük, hogy felkeresett bennünket, hamarosan
                      jelentkezünk az Ön által hagyott elérhetősége
                      valamelyikén.
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="primary" text @click="dialog = false">
                        OK
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-col>
            </v-row>
          </v-container>
          <vue-honeypot ref="honeypot" />
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
  name: 'PageContact',
  data: () => ({
    isFormValid: false,
    dialog: false,
    name: '',
    email: '',
    message: '',
    number: '',
    nameRules: [
      (v) => !!v || 'Név megadása kötelező',
      (v) => v.length <= 30 || 'Név ne legyen hosszabb 30 karakternél',
    ],
    emailRules: [
      (v) => !!v || 'E-mail megadása kötelező',
      (v) => /.+@.+/.test(v) || 'Adjon meg egy létező e-mail címet.',
    ],
  }),

  methods: {
    sendEmail(e) {
      try {
        this.$refs.honeypot.validate();
        emailjs.sendForm(
          'service_y01wpxs',
          'template_rg8c34s',
          e.target,
          'Ut6F9rblC2pSkCaXu',
          {
            name: this.name,
            email: this.email,
            number: this.number,
            message: this.message,
          }
        );
      } catch (error) {
        console.log({ error });
      }
      // Reset form field
      this.name = '';
      this.email = '';
      this.number = '';
      this.message = '';
    },
  },
};
</script>

<style>
.contact-hero {
  background: url(../assets/images/contact-bg.jpg) no-repeat bottom;
  background-size: cover;
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.3);
}
</style>
