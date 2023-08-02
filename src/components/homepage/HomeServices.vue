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
          Elektromos autó
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
          title: 'Csökkentsd az energiafüggőségedet!',
          text:
            'Függetlenedj a folyamatosan változó energiaáraktól a nap segítségével! Egy pontosan méretezett napelemes rendszerrel a fogyasztásod nagyrészét kiválthatod!',
        },
        {
          icon: 'wallet-outline',
          title: 'Maximalizáld a megtakarításod!',
          text:
            'Legyen egy napelemes rendszer otthonod vagy üzemed energiatermelő központja. Így fűthetsz, hűthetsz vagy tölthetsz is a nappal!',
        },
      ],
      plantServices: [
        {
          icon: 'air-filter',
          title: 'Válj le a gázról!',
          text:
            'Hűts és fűts modern hőszivattyúval vagy klímával és szabadulj meg a gázszámlától örökre. Kínálatunkban hagyományos monoblock hőszivattyúk és egyedi kültéri egység nélküli hőszivattyús berendezések is elérhetők.',
        },
        {
          icon: 'fan',
          title: 'Teljes körű szervíz és garancia!',
          text:
            'Hőszivattyúval fenntartható és biztonságos elektromos fűtést és hűtést építhetsz ki! Mi termékeink hivatalos szervízeként biztosítjuk számodra a gyors probléma megoldást és személyre szabott garanciális feltételeket. Így tényleg biztonságban érezheted magad!',
        },
      ],
      chargerServices: [
        {
          icon: 'ev-station',
          title: 'Töltsd elektromos autód Otthon!',
          text:
            'Élvezd az olcsó otthontöltés minden kényelmét! A szükséges áramot napelemmel is megtermelheted, így ingyen „tankolhatsz” a nap segítségével!',
        },
        {
          icon: 'car-electric',
          title: 'EV tartósbérlet',
          text:
            'Vegyél tartósbérletbe használt elektromos autót és használd ki, hogy konstrukciónkban a bérlet lejártakor megvásárolhatod a járművet. Céges partnerünkként lehetőséged van áfa visszaigénylésre is.',
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
