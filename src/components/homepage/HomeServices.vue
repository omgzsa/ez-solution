<template>
  <v-container class="site-wrapper">
    <v-row justify="center" class="mb-2 mb-lg-16">
      <v-col cols="11">
        <h2 class="overline font-weight-bold mb-2 green--text text--darken-2">
          szolgáltatások
        </h2>
        <h3
          style="max-width: 20em !important"
          class="text-h5 text-sm-h4 text-lg-h3 font-weight-bold"
        >
          Szabadulj ki a Rezsicsapdából megoldásainkkal
        </h3>
      </v-col>
    </v-row>

    <v-row
      class="service-solar mb-4 mb-sm-8 mb-lg-16 align-sm-center"
      align="end"
    >
      <v-col sm="10" md="7" class="">
        <home-services-card :solar-services="solarServices">
          Napelemes rendszerek
        </home-services-card>
      </v-col>
    </v-row>

    <v-row
      class="service-plant mb-4 mb-sm-8 mb-lg-16 align-sm-center"
      justify="end"
      align="end"
    >
      <v-col sm="10" md="7" class="">
        <home-services-card :plant-services="plantServices">
          Gépészeti megoldásaink
        </home-services-card>
      </v-col>
    </v-row>

    <v-row
      class="service-charger mb-4 mb-sm-8 mb-lg-16 align-sm-center"
      align="end"
    >
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
            'Függetlenedjen az energiaáraktól és teljes egészében használja ki a nap erejét! Spórolja meg havi villanyszámlájának összegét napelemmel!',
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
            'Töltse autóját otthon és élvezze prémium töltőink minden előnyét, otthona kényelméből! Töltsön a nappal, megoldásunkkal termelje meg a szükséges áramot napelemmel!',
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
.service-solar {
  background: url(../../assets/images/homepage-services-solar.jpg) no-repeat
    right;
  background-size: contain;
  height: 720px;
}

.service-plant {
  background: url(../../assets/images/homepage-services-plant.jpg) no-repeat
    left;
  background-size: contain;
  height: 720px;
}

.service-charger {
  background: url(../../assets/images/homepage-services-charger.jpg) no-repeat
    right;
  background-size: contain;
  height: 720px;
}

@media (max-width: 600px) {
  .service-solar,
  .service-plant,
  .service-charger {
    height: 600px;
  }
}
</style>
