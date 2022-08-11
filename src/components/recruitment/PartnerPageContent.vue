<template>
  <v-container class="my-16">
    <v-row justify="center" class="mx-auto">
      <v-col cols="11" sm="8" md="6">
        <h1
          class="text-h5 text-sm-h4 text-lg-h2 font-weight-bold mb-10 indigo--text darken-3"
        >
          Legyél a partnerünk!
        </h1>
        <ul class="custom-marker">
          <li v-for="item in partners" :key="item.id" class="py-2">
            <h5 class="text-h6 font-weight-bold mb-2">
              {{ item.title }}
            </h5>
            <p class="body-2 text-sm-body-1">{{ item.text }}</p>
          </li>
        </ul>
        <v-divider />
        <p class="body-2 text-sm-body-1 pl-8 mt-8">
          Ha Önt érdekli az energiahatékonyság, rendelkezik műszaki és/vagy
          pénzügyi és/vagy ingatlan értékesítési, egyéb értékesítési
          tapasztalattal, töltse ki az alábbi jelentkezési lapot vagy küldjön
          bemutatkozó e-mailt a
          <a
            class="underline indigo--text darken-3 font-weight-bold"
            href="mailto:partner@ezsolutions.hu"
            >partner@ezsolutions.hu</a
          >
          e-mail címre. Megfelelő bemutatkozás esetén megküldjük részletes
          tanácsadó-tájékoztató anyagunkat az Ön által megadott e-mail címre és
          kollégánk telefonon is felveszi Önnel a kapcsolatot.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      partners: [
        {
          id: 1,
          title: 'Keresünk partnereket, napelemek tetőre telepítésre.',
          text:
            'Legalább 3 emberből álló brigádokat, a betanítást, oktatást, segédanyagot biztosítjuk. Villanyszerelői szakismeret ebbe a brigádba nem szükséges, de előnyt élveznek a tetőfedők, bádogosok, kéményseprők, alpinisták és minden olyan szakismerettel rendelkező személyek, akik a tetőn félelem nélkül, biztonsággal elboldogulnak. Egyetemisták, szakmunkás tanulók is jelentkezhetnek. Teljesítmény alapú bérezés, kiemelten magas jövedelem, akár másodállásban is. Heti elszámolás és könyvelőnk segít a költséghatékony vállalkozási és számlázási forma kiválasztásában.',
        },
        {
          id: 2,
          title: 'Keresünk képesített villanyszerelő cégeket,',
          text:
            'napelemes rendszerek és monoblokk fűtő-hűtő berendezések bekötésére, beüzemelésére. Előnyt élveznek, akik hálózati jogosítással is rendelkeznek az adott területen, nekik jelentős számú, önálló hálózatbővítési munkát kínálunk. Garantált szerződés, heti elszámolással, rugalmas és önálló munkavégzéssel.',
        },
        {
          id: 3,
          title:
            'Keresünk partnereket monoblokk fűtő-hűtő berendezések telepítésére.',
          text:
            'Legalább 2 főből álló brigádok jelentkezését várjuk. Betanítást, oktatást, segédanyagot és speciális szerszámokat is biztosítjuk. Tiszta, egyszerű és begyakorlás után gyors a munkavégzés. Gépész, klímaszerelő, villanyszerelő végzettség/tapasztalat nem szükséges, de előny. A feladatot napelem telepítők is elvégezhetik. Teljesítmény alapú bérezés, kiemelten magas jövedelem, akár másodállásban is. Heti elszámolással és könyvelőnk segít a költséghatékony vállalkozási, számlázási forma kiválasztásában.',
        },
      ],
    };
  },
};
</script>

<style></style>
