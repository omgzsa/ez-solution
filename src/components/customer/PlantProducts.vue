<template>
  <v-container class="my-16 site-wrapper">
    <v-row class="d-flex mr-md-auto">
      <v-col
        cols="12"
        sm="10"
        offset-sm="1"
        md="8"
        lg="6"
        offset-lg="1"
        class="mb-sm-10"
      >
        <h2 class="overline font-weight-bold mb-2 indigo--text text--darken-3">
          termékek
        </h2>
        <h3 class="text-h5 text-sm-h4 text-lg-h3 font-weight-bold mb-10">
          Hőszivattyús rendszerek
        </h3>
      </v-col>
    </v-row>

    <!-- KÜLSŐ EGYSÉG NÉLKÜLI HŐSZIVATTYÚK -->
    <v-row justify="center" align="start" class="justify-space-around">
      <v-col sm="10" md="5">
        <h4
          class="text-h5 text-md-h4 font-weight-bold mb-6 indigo--text text--darken-3"
        >
          Külső egység nélküli hőszivattyúk
        </h4>
        <p class="body-2 text-lg-body-1">
          Az EZ Silent DD külső egység nélküli klíma egy egyedüli, tökéletes és költséghatékony fűtési-hűtési megoldás. Elérhető, teljesen független és kazánnal fűtött radiátoros rendszerhez csatlakoztatható hibrid változatban is. Beszereléséhez nem kell klímaszerelő, otthonodban nem kell bontani majd javítani és festeni, hiszen nincs kültéri egysége. A berendezés, egy radiátor méretével azonos nagyságú dizájneleme lesz az otthonodnak. Elhelyezése lehetséges, minden olyan falra, aminek a külső levegővel kapcsolata van. A hőszivattyús működési elvnek köszönhetően a gépek 1 egységnyi áramból, több, mint 3,5 egység hőt/hideget állítanak elő. A berendezések helyiségenként, távirányítóval szabályozhatók és programozhatók, applikációról vezérelhetők.
        </p>
      </v-col>
      <v-col sm="10" md="5">
        <v-carousel
          hide-delimiter-background
          show-arrows-on-hover
          height="400"
          light
        >
          <v-carousel-item transition="fade-transition">
            <h4 class="text-h6 text-md-h5 font-weight-bold mb-2">
              EZ Silent DD
            </h4>
            <v-img
              alt="EZ Silent DD hőszivattyú szürke metál színben."
              max-height="380"
              contain
              :src="require('../../assets/images/products/ez-silent-dd.png')"
            />
          </v-carousel-item>
          <v-carousel-item transition="fade-transition">
            <h4 class="text-h6 text-md-h5 font-weight-bold mb-2">
              EZ Silent Hybrid
            </h4>
            <v-img
              alt="EZ Silent Hybrid egység metál ezüst színben fehér falra szerelve, kontrasztban a barna kerámia padlóval."
              max-height="380"
              contain
              :src="require('../../assets/images/products/ez-silent-hybrid.jpg')"
            />
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>

    <!-- MONOBLOKK HŐSZIVATTYÚ -->
    <v-row justify="center" align="start" class="justify-space-around">
      <v-col sm="10" md="5">
        <h4
          class="text-h5 text-md-h4 font-weight-bold mb-6 indigo--text text--darken-3"
        >
          Monoblokk hőszivattyúk
        </h4>
        <p class="body-2 text-lg-body-1">
          Lépj le a gázról és csatlakozz az elektrifikáció gyorsuló folyamatához! Monoblock hőszivattyúk közül az olasz Olimpia Splendid, valamint a kínai Tongyi márka termékeit szereljük. Mindkét cég hivatalos képviselői és szervíz partnerei is vagyunk, ez garantálja, hogy a rendszer tervezés, beszerelés és garanciális eljárások is a termékek teljes ismeretében, gyorsan és profin történnek.
          Egy hőszivattyús rendszer tervezésekor el kell engedni a gáz kazános rendszerek működési elveit és kifejezetten a hőszivattyú működési paramétereinek figyelembevételével kell a gépészetet kialakítani. Csapatunk kifejezetten erre szakosodott! Előszerelt rendszereinknek köszönhetően akár 1 nap alatt be tudjuk szerelni új rendszeredet és belső teret tudunk felszabadítani az ingatlanodban, amit a családod másra tud felhasználni. Minden berendezésünk H-tarifához csatlakoztatható, aminek köszönhetően a legfenntarthatóbb és olcsóbb fűtést tudjuk kialakítani, ami jelenleg Magyarországon elérhető.
        </p>
      </v-col>
      <v-col sm="10" md="5">
        <v-carousel
          hide-delimiter-background
          show-arrows-on-hover
          height="400"
          light
        >
          <v-carousel-item transition="fade-transition">
            <h4 class="text-h6 text-md-h5 font-weight-bold mb-2">
              Olimpia splendid
            </h4>
            <v-img
              alt="Olimpia Splendid S2E kültéri egység fehér színben."
              max-height="380"
              contain
              :src="require('../../assets/images/products/olimpia-splendid.jpg')"
            />
          </v-carousel-item>
          <v-carousel-item transition="fade-transition">
            <h4 class="text-h6 text-md-h5 font-weight-bold mb-2">
              Tongyi V
            </h4>
            <v-img
              alt="Tongyi V series kültéri egység dupla ventillátoros változatban."
              max-height="380"
              contain
              :src="require('../../assets/images/products/tongyi-v.jpg')"
            />
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>

    <!-- Fan-coilok -->
    <v-row justify="center" align="start" class="justify-space-around">
      <v-col sm="10" md="5">
        <h4
          class="text-h5 text-md-h4 font-weight-bold mb-6 indigo--text text--darken-3"
        >
          Fan-coilok
        </h4>
        <p class="body-2 text-lg-body-1">
          Hűtés és fűtés egy készüléknek köszönhetően! Fan-coil kínálatunkban Olimpia Splendid és Reverso olasz készülékek találhatóak meg. Hőszivattyúinkhoz csatlakoztatva ezek a berendezések teljeskörű fűtést és hűtést tesznek lehetővé ugyanazon a csővezetéki rendszeren. Ezek a legmodernebb légbefúvós hőleadók akár radiátorhoz hasonló sugárzó technológiával kiegészítve! Igazán halk működésükkel növelik otthonod komfortérzetét, míg az olasz designnak köszönhető esztétikus kinézetükkel dobják fel a belső tereket.

        </p>
      </v-col>
      <v-col sm="10" md="5">
        <v-carousel
          hide-delimiter-background
          show-arrows-on-hover
          height="400"
          light
        >
          <v-carousel-item transition="fade-transition">
            <h4 class="text-h6 text-md-h5 font-weight-bold mb-2">
              Olimpia Splendid Bi2 SLR
            </h4>
            <v-img
              alt="Olimpia Splendid Bi2 SLR fan-coil fhér színben,a szekunder fűtési körrel."
              max-height="380"
              contain
              :src="require('../../assets/images/products/olimpia-splendid-bi2-slr.jpg')"
            />
          </v-carousel-item>
          <v-carousel-item transition="fade-transition">
            <h4 class="text-h6 text-md-h5 font-weight-bold mb-2">
              Reverso FS
            </h4>
            <v-img
              alt="Reverso FS fan-coil metál szürke színben."
              max-height="380"
              contain
              :src="require('../../assets/images/products/reverso-fs.jpg')"
            />
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>

    <!-- SUGÁRZÓ PANELEK -->
    <v-row justify="center" align="start" class="justify-space-around">
      <v-col sm="10" md="5">
        <h4
          class="text-h5 text-md-h4 font-weight-bold mb-6 indigo--text text--darken-3"
        >
          Sugárzó panelek
        </h4>
        <p class="body-2 text-lg-body-1">
          Csapatunk Raygex sugárzó panelek egyedüli forgalmazója Szlovákiában és Magyarországon egyaránt. A panelek jelenleg a leggyorsabb technológiát jelentik sugárzó fal-mennyezet és padló fűtés kialakítására. Minden projektet egy pontos kiviteli terv elkészítése előz meg, mely során lehetőség van a rendszer teljes személyre szabására a befejező gipszkarton fajtája, a csővastagságok és kiosztás, valamint a szigetelő réteg anyaga és vastagsága tekintetében is. A szerelési idő és költség iszonyúan lecsökken, aminek köszönhetően ez a rendszer kiemelkedően jó ár-érték előnyt biztosít a hagyományos technológiákhoz képest!
        </p>
      </v-col>
      <v-col sm="10" md="5">
        <v-carousel
          hide-delimiter-background
          show-arrows-on-hover
          height="400"
          light
        >
          <v-carousel-item transition="fade-transition">
            <h4 class="text-h6 text-md-h5 font-weight-bold mb-2">
              Raygex Infinity
            </h4>
            <v-img
              alt="A Raygex Infinity fűtő panel metszete, 3 réteg, szigetelés, fűtési csövek, befejező gipszkarton."
              max-height="380"
              contain
              :src="require('../../assets/images/products/raygex-infinity.jpg')"
            />
          </v-carousel-item>
          <v-carousel-item transition="fade-transition">
            <h4 class="text-h6 text-md-h5 font-weight-bold mb-2">
              Raysnake
            </h4>
            <v-img
              alt="A Raysnake fűtő panels metszete, 5 réteg: tartószerkezet, csőtakaró, fűtési cső, védőréteg, külső dizájn karton."
              max-height="380"
              contain
              :src="require('../../assets/images/products/raysnake.jpg')"
            />
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  //
};
</script>

<style></style>
