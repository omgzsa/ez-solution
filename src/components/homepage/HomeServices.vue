<template>
  <v-container class="home-service">
    <v-row justify="start" class="mb-6 mb-lg-16">
      <v-col>
        <h2 class="overline font-weight-bold mb-2 green--text text--accent-4">
          szolgáltatások
        </h2>
        <h3 class="text-h5 text-sm-h4 text-lg-h3 font-weight-bold">
          Szabadulj ki a Rezsicsapdából megoldásainkkal
        </h3>
      </v-col>
    </v-row>

    <v-row class="service-solar mb-16 mx-auto" align="center">
      <v-col sm="10" md="7" class="">
        <home-services-card :solar-services="solarServices">
          Napelemes rendszerek
        </home-services-card>
      </v-col>
    </v-row>

    <v-row class="service-charger mb-16 mx-auto" justify="end" align="center">
      <v-col sm="10" md="7" class="">
        <home-services-card :plant-services="plantServices">
          Gépészeti megoldásaink
        </home-services-card>
      </v-col>
    </v-row>

    <v-row class="service-solar mb-16 mx-auto" align="center">
      <v-col sm="10" md="7" class="">
        <home-services-card :charger-services="chargerServices">
          EV töltők otthon
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
      plantServices: [
        {
          icon: 'air-filter',
          title: 'Hőszivattyús klíma',
          text:
            'Hűtse és fűtse otthonát modern hőszivattyús klímával. Kínálatunkban kültéri egység nélküli berendezés is elérhető. Megoldásainkkal lehetősége van napelemmel megtermelni a szükséges energiát.',
        },
        {
          icon: 'fan',
          title: 'Hőszivattyú',
          text:
            'Hőszivattyúval fenntartható és biztonságos elektromos fűtést építhet ki otthonában vagy üzemében. Megoldásainknak köszönhetően nullázza le otthoni rezsiköltségeit teljesen!',
        },
      ],
      chargerServices: [
        {
          icon: 'ev-station',
          title: 'Otthoni EV töltő',
          text:
            'Töltse autóját otthon és élvezze prémium töltőink minden előnyét otthona kényelméből. Töltsön a nappal megoldásunkkal termelje meg a szükséges áramot napelemmel!',
        },
        {
          icon: 'car-electric',
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
.home-service {
  max-width: 100em !important;
  margin-inline: auto;
}

.service-solar {
  background: url(../../assets/images/homepage-services-1.jpg) no-repeat right;
  background-size: contain;
  height: 783px;
}

.service-charger {
  background: url(../../assets/images/homepage-services-2.jpg) no-repeat left;
  background-size: contain;
  height: 783px;
}

@media (max-width: 600px) {
  .service-solar,
  .service-charger {
    height: 630px;
  }
}
</style>
