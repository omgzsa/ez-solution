<template>
  <v-container class="mb-10 home-service">
    <v-row>
      <v-col sm="11" md="8" lg="7" offset-md="1">
        <h2 class="overline font-weight-bold mb-2 red--text text--darken-3">
          szolgáltatások
        </h2>
        <h3
          class="text-h5 text-sm-h4 text-lg-h3 font-weight-bold mb-10 mb-md-16"
        >
          Innovatív napelemes és EV töltési megoldások
        </h3>
      </v-col>
    </v-row>

    <v-row class="service-solar mb-16 mx-auto" justify="start" align="center">
      <v-col sm="10" md="8">
        <home-services-card :solar-services="solarServices">
          Napelemes rendszerek telepítése
        </home-services-card>
      </v-col>
    </v-row>

    <v-row class="service-charger mb-16 mx-auto" justify="end" align="center">
      <v-col sm="10" md="8">
        <home-services-card :charger-services="chargerServices">
          EV töltési megoldások otthon, kényelmesen
        </home-services-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import HomeServicesCard from '../homepage/HomeServicesCard.vue';

export default {
  components: { HomeServicesCard },
  data() {
    return {
      solarServices: [
        {
          icon: 'sprout-outline',
          title: 'Nullázza le villanyszámláját',
          text:
            'Függetlenedjen az energia áraktól és teljes egészében használja ki a nap erejét. Spórolja meg havi villanyszámlájának összegét napelemmel',
        },
        {
          icon: 'wallet-outline',
          title: 'Maximalizálja megtakarítását',
          text:
            'Napelemre épülő megoldásaink segítségével további rezsiköltségeitől is megszabadulhat. Fűthet, Hűthet vagy tölthet is nappal!',
        },
      ],
      chargerServices: [
        {
          icon: 'note-check-outline',
          title: 'Otthoni EV töltő',
          text:
            'Töltse autóját otthon és élvezze prémium töltőink minden előnyét otthona kényelméből. Töltsön a nappal megoldásunkkal termelje meg a szükséges áramot napelemmel!',
        },
        {
          icon: 'account-check-outline',
          title: 'EV tartósbérlet',
          text:
            'Vegyen tartósbérletbe használt elektromos autót és használja ki, hogy konstrukciónkban megvásárolhatja a járművet a bérlet lejártakor. Céges partnerünkként lehetősége van áfa visszaigénylésre is.',
        },
      ],
    };
  },
};
</script>

<style>
/* .home-service {
  max-width: 90em !important;
  margin-inline: auto;
} */

.service-solar {
  background: url(../../assets/images/homepage-services-1.jpg) no-repeat right;
  background-size: contain;
  height: 683px;
}

.service-charger {
  background: url(../../assets/images/homepage-services-2.jpg) no-repeat left;
  background-size: contain;
  height: 683px;
}
</style>
