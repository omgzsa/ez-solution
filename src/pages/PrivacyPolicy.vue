<template>
  <Layout>
    <v-container class="d-flex justify-center">
      <v-col cols="12" sm="10" lg="6">
        <h1 class="text-h4 text-sm-h3 mb-8 font-weight-bold animate blur">
          {{ title }}
        </h1>
        <div class="">
          <h2 class="overline font-weight-bold mb-2 green--text text--darken-2">
            Bevezetés
          </h2>
          <p class="body-2 text-lg-body-1 black--text">
            EZ Solutions Kft. (a továbbiakban: Szolgáltató, adatkezelő) alá veti
            magát a következő tájékoztatónak.
          </p>
          <p class="body-2 text-lg-body-1 black--text">
            A természetes személyeknek a személyes adatok kezelése tekintetében
            történő védelméről és az ilyen adatok szabad áramlásáról, valamint a
            95/46/EK rendelet hatályon kívül helyezéséről (általános adatvédelmi
            rendelet) AZ EURÓPAI PARLAMENT ÉS A TANÁCS (EU) 2016/679 RENDELETE
            (2016. április 27.) szerint az alábbi tájékoztatást adjuk.
          </p>
          <p class="body-2 text-lg-body-1 black--text">
            Jelen adatkezelési tájékoztató az alábbi oldalak adatkezelését
            szabályozza: https://www.ezsolutions.hu
          </p>
          <p class="body-2 text-lg-body-1 black--text">
            Az adatkezelési tájékoztató elérhető az alábbi oldalról:
            https://ezsolutions.hu/privacy-policy
          </p>
          <p class="body-2 text-lg-body-1 black--text">
            A tájékoztató módosításai a fenti címen történő közzététellel lépnek
            hatályba.
          </p>
          <p class="body-2 text-lg-body-1 black--text">
            Az adatkezelő és elérhetőségei:
          </p>
        </div>
        <div class="mb-8">
          <ul>
            <li class="body-2 text-lg-body-1 ">{{ name }}</li>
            <li class="body-2 text-lg-body-1 ">
              <a
                href="https://goo.gl/maps/FSJeLezxtNxFL3tG8"
                class="underline black--text"
                target="_blank"
              >
                {{ seat }}</a
              >
            </li>
            <li class="body-2 text-lg-body-1 ">
              <a
                class="underline black--text"
                href="mailto:info@ezsolutions.hu"
              >
                {{ email }}</a
              >
            </li>
            <li class="body-2 text-lg-body-1 ">
              <a class="underline black--text" href="tel:+36 70 398 5988">{{
                phone
              }}</a>
            </li>
          </ul>
        </div>
        <div class="mb-8">
          <h2 class="overline font-weight-bold mb-2 green--text text--darken-2">
            Fogalom meghatározások
          </h2>
          <ul>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              <strong>„személyes adat”:</strong> azonosított vagy azonosítható
              természetes személyre („érintett”) vonatkozó bármely információ;
              azonosítható az a természetes személy, aki közvetlen vagy
              közvetett módon, különösen valamely azonosító, például név, szám,
              helymeghatározó adat, online azonosító vagy a természetes személy
              testi, fiziológiai, genetikai, szellemi, gazdasági, kulturális
              vagy szociális azonosságára vonatkozó egy vagy több tényező
              alapján azonosítható;
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              <strong>„adatkezelés”:</strong> a személyes adatokon vagy
              adatállományokon automatizált vagy nem automatizált módon végzett
              bármely művelet vagy műveletek összessége, így a gyűjtés,
              rögzítés, rendszerezés, tagolás, tárolás, átalakítás vagy
              megváltoztatás, lekérdezés, betekintés, felhasználás, közlés
              továbbítás, terjesztés vagy egyéb módon történő hozzáférhetővé
              tétel útján, összehangolás vagy összekapcsolás, korlátozás,
              törlés, illetve megsemmisítés;
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              <strong>„adatkezelő”:</strong> az a természetes vagy jogi személy,
              közhatalmi szerv, ügynökség vagy bármely egyéb szerv, amely a
              személyes adatok kezelésének céljait és eszközeit önállóan vagy
              másokkal együtt meghatározza; ha az adatkezelés céljait és
              eszközeit az uniós vagy a tagállami jog határozza meg, az
              adatkezelőt vagy az adatkezelő kijelölésére vonatkozó különös
              szempontokat az uniós vagy a tagállami jog is meghatározhatja;
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              <strong>„adatfeldolgozó”:</strong> az a természetes vagy jogi
              személy, közhatalmi szerv, ügynökség vagy bármely egyéb szerv,
              amely az adatkezelő nevében személyes adatokat kezel; „címzett”:
              az a természetes vagy jogi személy, közhatalmi szerv, ügynökség
              vagy bármely egyéb szerv, akivel vagy amellyel a személyes adatot
              közlik, függetlenül attól, hogy harmadik fél-e. Azon közhatalmi
              szervek, amelyek egy egyedi vizsgálat keretében az uniós vagy a
              tagállami joggal összhangban férhetnek hozzá személyes adatokhoz,
              nem minősülnek címzettnek; az említett adatok e közhatalmi szervek
              általi kezelése meg kell, hogy feleljen az adatkezelés céljainak
              megfelelően az alkalmazandó adatvédelmi szabályoknak;
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              <strong>„az érintett hozzájárulása”:</strong> az érintett
              akaratának önkéntes, konkrét és megfelelő tájékoztatáson alapuló
              és egyértelmű kinyilvánítása, amellyel az érintett nyilatkozat
              vagy a megerősítést félreérthetetlenül kifejező cselekedet útján
              jelzi, hogy beleegyezését adja az őt érintő személyes adatok
              kezeléséhez;
            </li>
            <li class="body-2 text-lg-body-1 black--text">
              <strong>„adatvédelmi incidens”:</strong> a biztonság olyan
              sérülése, amely a továbbított, tárolt vagy más módon kezelt
              személyes adatok véletlen vagy jogellenes megsemmisítését,
              elvesztését, megváltoztatását, jogosulatlan közlését vagy az
              azokhoz való jogosulatlan hozzáférést eredményezi.
            </li>
          </ul>
        </div>
        <div class="mb-8">
          <h2 class="overline font-weight-bold mb-2 green--text text--darken-2">
            A személyes adatok kezelésére vonatkozó elvek
          </h2>
          <p class="mb-4 body-2 text-lg-body-1 black--text">
            A személyes adatok
          </p>
          <ul>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              kezelését jogszerűen és tisztességesen, valamint az érintett
              számára átlátható módon kell végezni („jogszerűség, tisztességes
              eljárás és átláthatóság”);
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              gyűjtése csak meghatározott, egyértelmű és jogszerű célból
              történjen, és azokat ne kezeljék ezekkel a célokkal össze nem
              egyeztethető módon; a 89. cikk (1) bekezdésének megfelelően nem
              minősül az eredeti céllal össze nem egyeztethetőnek a közérdekű
              archiválás céljából, tudományos és történelmi kutatási célból vagy
              statisztikai célból történő további adatkezelés („célhoz
              kötöttség”);
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              az adatkezelés céljai szempontjából megfelelőek és relevánsak
              kell, hogy legyenek, és a szükségesre kell korlátozódniuk
              („adattakarékosság”);
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              pontosnak és szükség esetén naprakésznek kell lenniük; minden
              észszerű intézkedést meg kell tenni annak érdekében, hogy az
              adatkezelés céljai szempontjából pontatlan személyes adatokat
              haladéktalanul töröljék vagy helyesbítsék („pontosság”);
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              tárolásának olyan formában kell történnie, amely az érintettek
              azonosítását csak a személyes adatok kezelése céljainak eléréséhez
              szükséges ideig teszi lehetővé; a személyes adatok ennél hosszabb
              ideig történő tárolására csak akkor kerülhet sor, amennyiben a
              személyes adatok kezelésére a 89. cikk (1) bekezdésének
              megfelelően közérdekű archiválás céljából, tudományos és
              történelmi kutatási célból vagy statisztikai célból kerül majd
              sor, az e rendeletben az érintettek jogainak és szabadságainak
              védelme érdekében előírt megfelelő technikai és szervezési
              intézkedések végrehajtására is figyelemmel („korlátozott
              tárolhatóság”);
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              kezelését oly módon kell végezni, hogy megfelelő technikai vagy
              szervezési intézkedések alkalmazásával biztosítva legyen a
              személyes adatok megfelelő biztonsága, az adatok jogosulatlan vagy
              jogellenes kezelésével, véletlen elvesztésével, megsemmisítésével
              vagy károsodásával szembeni védelmet is ideértve („integritás és
              bizalmas jelleg”).
            </li>
          </ul>
          <p class="body-2 text-lg-body-1 black--text">
            Az adatkezelő felelős a fentiek megfelelésért, továbbá képesnek kell
            lennie e megfelelés igazolására („elszámoltathatóság”).
          </p>
        </div>
      </v-col>
    </v-container>
  </Layout>
</template>

<script>
export default {
  name: 'PrivacyPolicy',
  data() {
    return {
      title: 'Adatvédelmi és Adatkezelési Szabályzat',
      name: 'EZ Solutions Kft.',
      seat: '9022 Győr Móricz Zsigmond rkp. 1. fsz. 9.',
      email: 'info@ezsolutions.hu',
      phone: '+36 70 3985988',
    };
  },
};
</script>

<style></style>
