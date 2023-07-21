<template>
  <Layout>
    <v-container class="d-flex justify-center">
      <v-col cols="12" sm="10" lg="6">
        <h1 class="text-h4 text-sm-h3 mb-8 font-weight-bold animate blur">
          {{ title }}
        </h1>

        <!-- BEVEZETÉS -->

        <div class="">
          <h2 class="overline font-weight-bold mb-2 green--text text--darken-2">
            Bevezetés
          </h2>
          <base-text>
            {{ name }} (a továbbiakban: Szolgáltató, adatkezelő) alá veti magát
            a következő tájékoztatónak.
          </base-text>
          <base-text>
            A természetes személyeknek a személyes adatok kezelése tekintetében
            történő védelméről és az ilyen adatok szabad áramlásáról, valamint a
            95/46/EK rendelet hatályon kívül helyezéséről (általános adatvédelmi
            rendelet) AZ EURÓPAI PARLAMENT ÉS A TANÁCS (EU) 2016/679 RENDELETE
            (2016. április 27.) szerint az alábbi tájékoztatást adjuk.
          </base-text>
          <base-text>
            Jelen adatkezelési tájékoztató az alábbi oldalak adatkezelését
            szabályozza: https://www.ezsolutions.hu
          </base-text>
          <base-text>
            Az adatkezelési tájékoztató elérhető az alábbi oldalról:
            https://ezsolutions.hu/privacy-policy
          </base-text>
          <base-text>
            A tájékoztató módosításai a fenti címen történő közzététellel lépnek
            hatályba.
          </base-text>
          <base-text>
            Az adatkezelő és elérhetőségei:
          </base-text>
        </div>
        <div class="mb-8">
          <ul>
            <li class="body-2 text-lg-body-1">{{ name }}</li>
            <li class="body-2 text-lg-body-1">
              <a
                href="https://goo.gl/maps/FSJeLezxtNxFL3tG8"
                class="underline black--text"
                target="_blank"
              >
                {{ seat }}</a
              >
            </li>
            <li class="body-2 text-lg-body-1">
              <a
                class="underline black--text"
                href="mailto:info@ezsolutions.hu"
              >
                {{ email }}</a
              >
            </li>
            <li class="body-2 text-lg-body-1">
              <a class="underline black--text" href="tel:+36 70 398 5988">{{
                phone
              }}</a>
            </li>
          </ul>
        </div>

        <!-- FOGALOM MEGHATÁROZÁSOK -->

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

        <!-- A SZEMÉLYES ADATOK KEZELÉSÉRE VOBNATKOZÓ ELVEK -->

        <div class="mb-8">
          <h2 class="overline font-weight-bold mb-2 green--text text--darken-2">
            A személyes adatok kezelésére vonatkozó elvek
          </h2>
          <base-text>
            A személyes adatok
          </base-text>
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
          <base-text>
            Az adatkezelő felelős a fentiek megfelelésért, továbbá képesnek kell
            lennie e megfelelés igazolására („elszámoltathatóság”).
          </base-text>
        </div>

        <!-- ADATKEZELÉSEK -->

        <div class="mb-8">
          <h2 class="overline font-weight-bold mb-2 green--text text--darken-2">
            adatkezelések
          </h2>
          <base-text>
            Webáruház működtetéshez kapcsolódó adatkezelés
          </base-text>
          <base-text>
            Az adatgyűjtés ténye, a kezelt adatok köre és az adatkezelés célja:
          </base-text>
          <ul>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              <strong>Felhasználói név:</strong>
            </li>
            <base-text>
              Azonosítás, a regisztráció lehetővé tétele. A felhasználói fiókba
              történő biztonságos belépést szolgálja.
            </base-text>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              <strong>Vezeték- és keresztnév:</strong>
            </li>
            <base-text>
              A kapcsolatfelvételhez, a vásárláshoz és a szabályszerű számla
              kiállításához szükséges.
            </base-text>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              <strong>E-mail cím:</strong>
            </li>
            <base-text>
              Kapcsolattartás, a számlázással, vagy a szállítással kapcsolatos
              kérdések hatékonyabb egyeztetése.
            </base-text>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              <strong>Számlázási név és cím:</strong>
            </li>
            <base-text>
              A szabályszerű számla kiállítása, továbbá a szerződés létrehozása,
              tartalmának meghatározása, módosítása, teljesítésének figyelemmel
              kísérése, az abból származó díjak számlázása, valamint az azzal
              kapcsolatos követelések érvényesítése.
            </base-text>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              <strong>Szállítási név és cím:</strong>
            </li>
            <base-text>
              A házhoz szállítás lehetővé tétele.
            </base-text>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              <strong>A vásárlás/regisztráció időpontja:</strong>
            </li>
            <base-text>
              Technikai művelet végrehajtása.
            </base-text>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              <strong>A vásárlás/regisztráció kori IP cím:</strong>
            </li>
            <base-text>
              Technikai művelet végrehajtása.
            </base-text>
          </ul>
          <base-text>
            Sem a felhasználónév, sem az e-mail cím esetében nem szükséges, hogy
            személyes adatot tartalmazzon.
          </base-text>
          <ul>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              Az érintettek köre: A webshop weboldalon regisztrált/vásárló
              valamennyi érintett.
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              Az adatkezelés időtartama, az adatok törlésének határideje: A
              regisztráció törlésével azonnal. Az érintett által megadott
              bármely személyes adat törléséről az adatkezelő a GDPR 19. cikke
              alapján, elektronikus úton tájékoztatja az érintettet. Ha az
              érintett törlési kérelme kiterjed az általa megadott e-mail címre
              is, akkor az adatkezelő a tájékoztatást követően az e-mail címet
              is törli. Kivéve a számviteli bizonylatok esetében, hiszen a
              számvitelről szóló 2000. évi C. törvény 169. § (2) bekezdése
              alapján 8 évig meg kell őrizni ezeket az adatokat.
            </li>
          </ul>
          <base-text class="font-italic">
            A könyvviteli elszámolást közvetlenül és közvetetten alátámasztó
            számviteli bizonylatot (ideértve a főkönyvi számlákat, az
            analitikus, illetve részletező nyilvántartásokat is), legalább 8
            évig kell olvasható formában, a könyvelési feljegyzések hivatkozása
            alapján visszakereshető módon megőrizni.
          </base-text>
          <h3 class="text-h6 font-weight-bold mb-4">
            Az adatok megismerésére jogosult lehetséges adatkezelők személye, a
            személyes adatok címzettjei:
          </h3>
          <ul>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              A személyes adatokat az adatkezelő sales és marketing munkatársai
              kezelhetik, a fenti alapelvek tiszteletben tartásával.
            </li>
          </ul>
          <h3 class="text-h6 font-weight-bold mb-4">
            Az érintettek adatkezeléssel kapcsolatos jogainak ismertetése:
          </h3>
          <ul>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              Az érintett kérelmezheti az adatkezelőtől a rá vonatkozó személyes
              adatokhoz való hozzáférést, azok helyesbítését, törlését vagy
              kezelésének korlátozását, és
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              tiltakozhat az ilyen személyes adatok kezelése ellen, valamint
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              az érintettnek joga van az adathordozhatósághoz, továbbá a
              hozzájárulás bármely időpontban történő visszavonásához.
            </li>
          </ul>
          <h3 class="text-h6 font-weight-bold mb-4">
            A személyes adatokhoz való hozzáférést, azok törlését, módosítását,
            vagy kezelésének korlátozását, az adatok hordozhatóságát, az
            adatkezelések elleni tiltakozást az alábbi módokon tudja érintett
            kezdeményezni:
          </h3>
          <ul>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              postai úton a
              <a
                href="https://goo.gl/maps/FSJeLezxtNxFL3tG8"
                class="underline black--text"
                target="_blank"
              >
                {{ seat }} cím alatt,</a
              >
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              e-mail útján
              <a
                class="underline black--text"
                href="mailto:info@ezsolutions.hu"
              >
                {{ email }}</a
              >
              e-mail címen,
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              telefonon a
              <a class="underline black--text" href="tel:+36 70 398 5988">{{
                phone
              }}</a>
              számon
            </li>
          </ul>
          <h3 class="text-h6 font-weight-bold mb-4">
            Az adatkezelés jogalapja:
          </h3>
          <ul>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              a GDPR 6. cikk (1) bekezdés b) pontja,
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              Az elektronikus kereskedelemi szolgáltatások, valamint az
              információs társadalommal összefüggő szolgáltatások egyes
              kérdéseiről szóló 2001. évi CVIII. törvény (a továbbiakban: Elker
              tv.) 13/A. § (3) bekezdése:
            </li>
          </ul>
          <base-text class="font-italic">
            A szolgáltató a szolgáltatás nyújtása céljából kezelheti azon
            személyes adatokat, amelyek a szolgáltatás nyújtásához technikailag
            elengedhetetlenül szükségesek. A szolgáltatónak az egyéb feltételek
            azonossága esetén úgy kell megválasztania és minden esetben oly
            módon kell üzemeltetnie az információs társadalommal összefüggő
            szolgáltatás nyújtása során alkalmazott eszközöket, hogy személyes
            adatok kezelésére csak akkor kerüljön sor, ha ez a szolgáltatás
            nyújtásához és az e törvényben meghatározott egyéb célok
            teljesüléséhez feltétlenül szükséges, azonban ebben az esetben is
            csak a szükséges mértékben és ideig.
          </base-text>
          <ul>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              A számviteli jogszabályoknak megfelelő számlát kiállítása esetén a
              6. cikk (1) bekezdés c) pontja.
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              A szerződésből eredő követelések érvényesítése esetén a Polgári
              Törvénykönyvről szóló 2013. évi V. törvény 6:21. §-a szerint 5 év.
              <span class="font-italic mb-4 body-2 text-lg-body-1 black--text"
                ><br />6:22. § [Elévülés]<br />
                (1) Ha e törvény eltérően nem rendelkezik, a követelések öt év
                alatt évülnek el.<br />
                (2) Az elévülés akkor kezdődik, amikor a követelés esedékessé
                válik.<br />
                (3) Az elévülési idő megváltoztatására irányuló megállapodást
                írásba kell foglalni.<br />
                (4) Az elévülést kizáró megállapodás semmis.<br />
              </span>
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              <strong>az adatkezelés szerződés teljesítéséhez szükséges</strong
              >.
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              <strong>köteles</strong> a személyes adatokat megadni, hogy tudjuk
              a rendelését teljesíteni
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              az adatszolgáltatás elmaradása azzal a
              <strong>következményekkel</strong> jár, hogy nem tudjuk a
              rendelését feldolgozni.
            </li>
          </ul>
        </div>

        <!-- IGÉNYBE VETT ADATFELDOLGOZÓK -->

        <!-- SZÁLLÍTÁS -->
        <div class="mb-8">
          <h2 class="overline font-weight-bold mb-2 green--text text--darken-2">
            Igénybe vett adatfeldolgozók
          </h2>
          <h3 class="text-h6 font-weight-bold mb-4">Szállítás</h3>
          <base-text class=" mb-4 body-2 text-lg-body-1 black--text">
            Adatfeldolgozó által ellátott tevékenység: Termékek kiszállítása,
            fuvarozás
          </base-text>
          <base-text class=" mb-4 body-2 text-lg-body-1 black--text">
            Adatfeldolgozó megnevezése és elérhetősége:
          </base-text>
          <ul>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              Express One Hungary Kft.<br />
              1239 Budapest Európa u. 12.<br />
              +3618777400<br />
              ugyfelszolgalat@expressone.hu
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              GLS General Logistics Systems Hungary Csomag-Logisztikai Kft.<br />
              2351 Alsónémedi<br />
              GLS Európa u. 2.<br />
              info@gls-hungary.com<br />
              +3618020265
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              Sprinter Futárszolgálat Kft.<br />
              1097 Budapest Táblás utca 39.<br />
              +3613473000<br />
              info@sprinter.hu
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              Foxpost Zrt.<br />
              3200 GyöngyösBatsányi utca 9.<br />
              +36-1-999-0369
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              Magyar Posta<br />
              3512 Miskolc<br />
              Ügyfélszolgálati igazgatóság
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              Nextflix Kft.<br />
              7100 Szekszárd Wesselényi utca 16.<br />
              +36-30-624-94-84
            </li>
          </ul>
          <base-text>
            Az adatkezelés ténye, a kezelt adatok köre: Szállítási név,
            szállítási cím, telefonszám, e-mail cím.
          </base-text>
          <base-text>
            Az érintettek köre: A házhozszállítást kérő valamennyi érintett.
          </base-text>
          <base-text>
            Az adatkezelés célja: A megrendelt termék házhoz szállítása.
          </base-text>
          <base-text>
            Az adatkezelés időtartama, az adatok törlésének határideje: A
            házhozszállítás lebonyolításáig tart.
          </base-text>
          <base-text>
            Az adatfeldolgozás jogalapja: 6. cikk (1) bekezdés b) pontja.
          </base-text>
        </div>

        <!-- TÁRHELY SZOLGÁLTATÓ -->
        <div class="mb-8">
          <h3 class="text-h6 font-weight-bold mb-4">Tárhely szolgáltató</h3>

          <base-text>
            Adatfeldolgozó által ellátott tevékenység: Tárhely-szolgáltatás
          </base-text>
          <base-text>
            Adatfeldolgozó által ellátott tevékenység: Tárhely-szolgáltatás
            Adatfeldolgozó megnevezése és elérhetősége: Tárhelyszolgáltató
            adatai Név: https://www.nethely.hu
          </base-text>
          <base-text>
            Az adatkezelés ténye, a kezelt adatok köre: Az érintett által
            megadott valamennyi személyes adat.
          </base-text>
          <base-text>
            Az érintettek köre: A weboldalt használó valamennyi érintett.
          </base-text>
          <base-text>
            Az adatkezelés célja: A weboldal elérhetővé tétele, megfelelő
            működtetése.
          </base-text>
          <base-text>
            Az adatkezelés időtartama, az adatok törlésének határideje: Az
            adatkezelő és a tárhely-szolgáltató közötti megállapodás
            megszűnéséig, vagy az érintettnek a tárhely-szolgáltató felé
            intézett törlési kérelméig tart az adatkezelés.
          </base-text>
          <base-text>
            Az adatfeldolgozás jogalapja: a 6. cikk (1) bekezdés c) és f)
            pontja, illetve az elektronikus kereskedelemi szolgáltatások,
            valamint az információs társadalommal összefüggő szolgáltatások
            egyes kérdéseiről szóló 2001. évi CVIII. törvény 13/A. § (3)
            bekezdése.
          </base-text>
        </div>

        <!-- ONLINE FIZETÉS -->
        <div class="mb-8">
          <h2 class="overline font-weight-bold mb-2 green--text text--darken-2">
            Címzettek, akikkel a személyes adatokat közlik (adattovábbítás)
          </h2>
          <h3 class="text-h6 font-weight-bold mb-4">Online fizetés</h3>

          <base-text
            >A Címzett által ellátott tevékenység: Online fizetés
          </base-text>
          <base-text
            >Címzett megnevezése és elérhetősége:<br />
            Simple Pay<br />
            Tel: +36-1-5100374<br />
            info@simplepay.hu<br />
            www.simplepay.hu
          </base-text>
          <base-text
            >Az adatkezelés ténye, a kezelt adatok köre: Számlázási adatok, név,
            e-mail cím
          </base-text>
          <base-text
            >Az érintettek köre: A weboldalon fizetést választó valamennyi
            érintett.
          </base-text>
          <base-text
            >Az adatkezelés célja: Az online fizetés lebonyolítása, a
            tranzakciók visszaigazolása és a felhasználók védelme érdekében
            végzett fraud-monitoring (visszaélések ellenőrzése)
          </base-text>
          <base-text
            >Az adatkezelés időtartama, az adatok törlésének határideje: Az
            online fizetés lebonyolításáig tart.
          </base-text>
          <base-text
            >Az adatfeldolgozás jogalapja: a GDPR 6. cikk (1) bekezdés b)
            pontja. Az adatkezelés az érintett kérésére történő online fizetés
            teljesítéséhez szükséges.
          </base-text>
          <base-text>Az érintett jogai:</base-text>
          <ol type="a">
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              Ön tájékozódhat az adatkezelés körülményeiről
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              Ön jogosult arra, hogy az adatkezelőtől visszajelzést kapjon, hogy
              a személyes adatainak kezelése folyamatban van-e, illetve
              hozzáférhet az adatkezeléssel kapcsolatos valamennyi információhoz
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              Ön jogosult arra, hogy az Önre vonatkozó személyes adatait tagolt,
              széles körben használt, géppel olvasható formátumban megkapja
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              Ön jogosult arra, hogy kérésére az adatkezelő indokolatlan
              késedelem nélkül helyesbítse a pontatlan személyes adatait.
            </li>
          </ol>
        </div>

        <!-- SÓTIK KEZELÉSE -->
        <div class="mb-8">
          <h3 class="text-h6 font-weight-bold mb-4">
            Cookie-k (sütik) kezelése
          </h3>

          <base-text
            >Webáruházakra jellemző cookie-k az úgynevezett „jelszóval védett
            munkamenethez használt cookie”, „bevásárlókosárhoz szükséges
            cookie-k” és „biztonsági cookie-k”, melyek használatához nem
            szükséges előzetes hozzájárulást kérni az érintettektől.
          </base-text>
          <base-text
            >Az adatkezelés ténye, a kezelt adatok köre: Egyedi azonosítószám,
            dátumok, időpontok</base-text
          >
          <base-text
            >Az érintettek köre: A weboldalt látogató valamennyi érintett.
          </base-text>
          <base-text
            >Az adatkezelés célja: A felhasználók azonosítása, a
            „bevásárlókosár” nyilvántartására és a látogatók nyomon követése.
          </base-text>
          <base-text
            >Az adatkezelés időtartama, az adatok törlésének határideje:
          </base-text>

          <ul>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              <strong>Süti típusa:</strong> Munkamenet sütik (session)
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              <strong>adatkezelés jogalapja:</strong> Az elektronikus
              kereskedelmi szolgáltatások, valamint az információs társadalmi
              szolgáltatások egyes kérdéseiről szóló 2001. CVIII. törvény
              (Elkertv.) 13/A. § (3) bekezdése
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              <strong>adatkezelés:</strong> A felhasználó vagy a szolgáltató
              visszavonásig.
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              <strong>kezelt adatkör:</strong> connect.sid
            </li>
          </ul>

          <base-text
            >Az adatok megismerésére jogosult lehetséges adatkezelők személye: A
            cookie-k használatával nem kezel személyes adatokat az adatkezelő.
          </base-text>
          <base-text
            >Az érintettek adatkezeléssel kapcsolatos jogainak ismertetése: Az
            érintettnek lehetőségük van a cookie-kat törölni a böngészők
            Eszközök/Beállítások menüjében általában az Adatvédelem menüpont
            beállításai alatt.
          </base-text>
          <base-text
            >Az adatkezelés jogalapja: Az érintettől hozzájárulás nem szükséges,
            amennyiben a cookie-k használatának kizárólagos célja az
            elektronikus hírközlő hálózaton keresztül történő közléstovábbítás
            vagy arra az előfizető vagy felhasználó által kifejezetten kért, az
            információs társadalommal összefüggő szolgáltatás nyújtásához a
            szolgáltatónak feltétlenül szüksége van.
          </base-text>
        </div>

        <!-- GOOGLE ADWORDS KONVERZIÓKÖVETÉS HASZÁLATA -->
        <div class="mb-8">
          <h3 class="text-h6 font-weight-bold mb-4">
            Google Adwords konverziókövetés használata
          </h3>

          <base-text>
            A „Google AdWords” nevű online reklámprogramot használja az
            adatkezelő, továbbá annak keretein belül igénybe veszi a Google
            konverziókövető szolgáltatását. A Google konverziókövetés a Google
            Inc. elemző szolgáltatása (1600 Amphitheatre Parkway, Mountain View,
            CA 94043, USA; „Google“).
          </base-text>
          <base-text>
            Amikor Felhasználó egy weboldalt Google-hirdetés által ér el, akkor
            egy a konverziókövetéshez szükséges cookie kerül a számítógépére.
            Ezeknek a cookie-knak az érvényessége korlátozott, és nem
            tartalmaznak semmilyen személyes adatot, így a Felhasználó nem is
            azonosítható általuk.
          </base-text>
          <base-text
            >Amikor a Felhasználó a weboldal bizonyos oldalait böngészi, és a
            cookie még nem járt le, akkor a Google és az adatkezelő is láthatja,
            hogy Felhasználó a hirdetésre kattintott.
          </base-text>
          <base-text
            >Minden Google AdWords ügyfél másik cookie-t kap, így azokat az
            AdWords ügyfeleinek weboldalain keresztül nem lehet nyomon követni.
          </base-text>
          <base-text
            >Az információk - melyeket a konverziókövető cookie-k segítségével
            szereztek - azt a célt szolgálják, hogy az AdWords konverziókövetést
            választó ügyfeleinek számára konverziós statisztikákat készítsenek.
            Az ügyfelek így tájékozódnak a hirdetésükre kattintó és
            konverziókövető címkével ellátott oldalra továbbított felhasználók
            számáról. Azonban olyan információkhoz nem jutnak hozzá, melyekkel
            bármelyik felhasználót azonosítani lehetne.
          </base-text>
          <base-text
            >Az adatok megismerésére jogosult lehetséges adatkezelők személye: A
            cookie-k használatával nem kezel személyes adatokat az adatkezelő.
          </base-text>
          <base-text
            >Ha nem szeretne részt venni a konverziókövetésben, akkor ezt
            elutasíthatja azáltal, hogy böngészőjében letiltja a cookie-k
            telepítésének lehetőségét. Ezután Ön nem fog szerepelni a
            konverziókövetési statisztikákban.
          </base-text>
          <base-text
            >További információ, valamint a Google adatvédelmi nyilatkozata az
            alábbi oldalon érhető el: https://www.google.de/policies/privacy/
          </base-text>
        </div>

        <!-- GOOGLE ANALYTICS ALKALMAZÁSA -->
        <div class="mb-8">
          <h3 class="text-h6 font-weight-bold mb-4">
            A Google Analytics alkalmazása
          </h3>

          <ul>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              Ez a honlap a Google Analytics alkalmazást használja, amely a
              Google Inc. („Google”) webelemző szolgáltatása. A Google Analytics
              úgynevezett „cookie-kat”, szövegfájlokat használ, amelyeket a
              számítógépére mentenek, így elősegítik Felhasználó által
              látogatott weblap használatának elemzését.
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              A Felhasználó által használt weboldallal kapcsolatos cookie-kkal
              létrehozott információk rendszerint a Google egyik USA-beli
              szerverére kerülnek és tárolódnak. Az IP-anonimizálás weboldali
              aktiválásával a Google a Felhasználó IP-címét az Európai Unió
              tagállamain belül vagy az Európai Gazdasági Térségről szóló
              megállapodásban részes más államokban előzőleg megrövidíti.
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              A teljes IP-címnek a Google USA-ban lévő szerverére történő
              továbbítására és ottani lerövidítésére csak kivételes esetekben
              kerül sor. Eme weboldal üzemeltetőjének megbízásából a Google
              ezeket az információkat arra fogja használni, hogy kiértékelje,
              hogyan használta a Felhasználó a honlapot, továbbá, hogy a
              weboldal üzemeltetőjének a honlap aktivitásával összefüggő
              jelentéseket készítsen, valamint, hogy a weboldal- és az
              internethasználattal kapcsolatos további szolgáltatásokat
              teljesítsen.
            </li>
          </ul>

          <base-text
            >A Google Analytics keretein belül a Felhasználó böngészője által
            továbbított IP-címet nem vezeti össze a Google más adataival. A
            cookie-k tárolását a Felhasználó a böngészőjének megfelelő
            beállításával megakadályozhatja, azonban felhívjuk figyelmét, hogy
            ebben az esetben előfordulhat, hogy ennek a honlapnak nem minden
            funkciója lesz teljes körűen használható. Megakadályozhatja továbbá,
            hogy a Google gyűjtse és feldolgozza a cookie-k általi, a
            Felhasználó weboldalhasználattal kapcsolatos adatait (beleértve az
            IP-címet is), ha letölti és telepíti a következő linken elérhető
            böngésző plugint.
          </base-text>
        </div>

        <!-- HÍRLEVÉL, DM TEVÉKENYSÉG -->
        <div class="mb-8">
          <h3 class="text-h6 font-weight-bold mb-4">
            Hírlevél, DM tevékenység
          </h3>

          <ul>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              A gazdasági reklámtevékenység alapvető feltételeiről és egyes
              korlátairól szóló 2008. évi XLVIII. törvény 6. §-a értelmében
              Felhasználó előzetesen és kifejezetten hozzájárulhat ahhoz, hogy
              Szolgáltató reklámajánlataival, egyéb küldeményeivel a
              regisztrációkor megadott elérhetőségein megkeresse.
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              Továbbá Ügyfél a jelen tájékoztató rendelkezéseit szem előtt
              tartva hozzájárulhat ahhoz, hogy Szolgáltató a reklámajánlatok
              küldéséhez szükséges személyes adatait kezelje.
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              Szolgáltató nem küld kéretlen reklámüzenetet, és Felhasználó
              korlátozás és indokolás nélkül, ingyenesen leiratkozhat az
              ajánlatok küldéséről. Ebben az esetben Szolgáltató minden - a
              reklámüzenetek küldéséhez szükséges - személyes adatát törli
              nyilvántartásából és további reklámajánlataival nem keresi meg a
              Felhasználót. Felhasználó a reklámokról leiratkozhat az üzenetben
              lévő linkre kattintva.
            </li>
          </ul>

          <base-text
            >Az adatgyűjtés ténye, a kezelt adatok köre és az
            <strong>adatkezelés célja:</strong>
          </base-text>

          <ul>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              <strong>Név, e-mail cím:</strong> Azonosítás, a hírlevélre való
              feliratkozás lehetővé tétele.
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              <strong>A feliratkozás időpontja:</strong>Technikai művelet
              végrehajtása.
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              <strong>A feliratkozás kori IP cím:</strong>Technikai művelet
              végrehajtása.
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              Az érintettek köre: A hírlevélre feliratkozó valamennyi érintett.
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              Az adatkezelés célja: reklámot tartalmazó elektronikus üzenetek
              (e-mail, sms, push üzenet) küldése az érintett részére,
              tájékoztatás nyújtása az aktuális információkról, termékekről,
              akciókról, új funkciókról stb.
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              Az adatkezelés időtartama, az adatok törlésének határideje: a
              hozzájáruló nyilatkozat visszavonásáig, azaz a leiratkozásig tart
              az adatkezelés.
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              Az adatkezelés nyilvántartási száma: folyamatban...
            </li>
          </ul>

          <base-text>
            <strong
              >Az adatok megismerésére jogosult lehetséges adatkezelők személye,
              a személyes adatok címzettjei:</strong
            >
            A személyes adatokat az adatkezelő sales és marketing munkatársai
            kezelhetik, a fenti alapelvek tiszteletben tartásával.
          </base-text>
          <base-text>
            <strong
              >Az érintettek adatkezeléssel kapcsolatos jogainak ismertetése:
            </strong>
          </base-text>
          <ul>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              Az érintett kérelmezheti az adatkezelőtől a rá vonatkozó személyes
              adatokhoz való hozzáférést, azok helyesbítését, törlését vagy
              kezelésének korlátozását, és
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              tiltakozhat az ilyen személyes adatok kezelése ellen, valamint
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              az érintettnek joga van az adathordozhatósághoz, továbbá a
              hozzájárulás bármely időpontban történő visszavonásához.
            </li>
          </ul>
          <base-text>
            <strong
              >A személyes adatokhoz való hozzáférést, azok törlését,
              módosítását, vagy kezelésének korlátozását, az adatok
              hordozhatóságát, az adatkezelések elleni tiltakozást az alábbi
              módokon tudja érintett kezdeményezni:
            </strong>
          </base-text>
          <ul>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              postai úton a {{ seat }} címen
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              e-mail útján a {{ email }} címen
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              telefonon a {{ phone }} számon
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              Az érintett bármikor, ingyenesen leiratkozhat a hírlevélről.
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              <stong>Az adatkezelés jogalapja:</stong> az érintett
              hozzájárulása, 6. cikk (1) bekezdés a) és f) pontja, és a
              gazdasági reklámtevékenység alapvető feltételeiről és egyes
              korlátairól szóló 2008. évi XLVIII. törvény 6. § (5) bekezdése:
              <span class="font-italic body-2 body-lg-1"
                >A reklámozó, a reklámszolgáltató, illetve a reklám közzétevője
                a hozzájárulásban meghatározott körben - a náluk hozzájáruló
                nyilatkozatot tevő személyek személyes adatairól nyilvántartást
                vezet. Az ebben a nyilvántartásban rögzített - a reklám
                címzettjére vonatkozó - adat csak a hozzájáruló nyilatkozatban
                foglaltaknak megfelelően, annak visszavonásáig kezelhető, és
                harmadik fél számára kizárólag az érintett személy előzetes
                hozzájárulásával adható át.
              </span>
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              Tájékoztatjuk, hogy
              <strong>az adatkezelés az Ön hozzájárulásán</strong> alapul.
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              <strong>köteles</strong> a személyes adatokat megadni, ha
              hírlevelet szeretne kapni tőlünk.
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              az adatszolgáltatás elmaradása azzal a
              <strong>következményekkel</strong> jár, hogy nem tudunk Önnek
              hírlevelet küldeni.
            </li>
          </ul>
        </div>

        <!-- PANASZKEZELÉS -->
        <div class="mb-8">
          <h3 class="text-h6 font-weight-bold mb-4">
            Panaszkezelés
          </h3>

          <base-text
            >Az adatgyűjtés ténye, a kezelt adatok köre és az
            <strong>adatkezelés célja:</strong>
          </base-text>

          <ul>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              <strong>Vezeték-és keresztnév</strong>Azonosítás, kapcsolattartás.
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              <strong>E-mail cím:</strong>Azonosítás, kapcsolattartás.
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              <strong>Számlázási név és cím:</strong>Azonosítás, a megrendelt
              termékekkel kapcsolatosan felmerülő minőségi kifogások, kérdések
              és problémák kezelése. végrehajtása.
            </li>
          </ul>

          <base-text>
            <strong>Az érintettek köre:</strong> A webshop weboldalon vásárló és
            minőségi kifogással élő, panaszt tevő valamennyi érintett.
          </base-text>
          <base-text>
            <strong
              >Az adatkezelés időtartama, az adatok törlésének
              határideje:</strong
            >
            A felvett kifogásról felvett jegyzőkönyv, átirat és az arra adott
            válasz másolati példányait a fogyasztóvédelemről szóló 1997. évi
            CLV. törvény 17/A. § (7) bekezdése alapján 5 évig kell megőrizni.
          </base-text>
          <base-text>
            <strong
              >Az adatok megismerésére jogosult lehetséges adatkezelők személye,
              a személyes adatok címzettjei:</strong
            >
            A személyes adatokat az adatkezelő sales és marketing munkatársai
            kezelhetik, a fenti alapelvek tiszteletben tartásával.
          </base-text>
          <base-text>
            <strong
              >Az érintettek adatkezeléssel kapcsolatos jogainak
              ismertetése:</strong
            >
          </base-text>
          <ul>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              Az érintett kérelmezheti az adatkezelőtől a rá vonatkozó személyes
              adatokhoz való hozzáférést, azok helyesbítését, törlését vagy
              kezelésének korlátozását, és
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              tiltakozhat az ilyen személyes adatok kezelése ellen, valamint
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              az érintettnek joga van az adathordozhatósághoz, továbbá a
              hozzájárulás bármely időpontban történő visszavonásához.
            </li>
          </ul>
          <base-text>
            <strong
              >A személyes adatokhoz való hozzáférést, azok törlését,
              módosítását, vagy kezelésének korlátozását, az adatok
              hordozhatóságát, az adatkezelések elleni tiltakozást az alábbi
              módokon tudja érintett kezdeményezni:
            </strong>
          </base-text>
          <ul>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              postai úton a {{ seat }} címen
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              e-mail útján a {{ email }} címen
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              telefonon a {{ phone }} számon
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              Az érintett bármikor, ingyenesen leiratkozhat a hírlevélről.
            </li>
          </ul>
          <base-text>
            <strong
              >Az adatkezelés jogalapja: 6. cikk (1) bekezdés c) pont, és a
              fogyasztóvédelemről szóló 1997. évi CLV. törvény 17/A. § (7)
              bekezdése.
            </strong>
          </base-text>
          <ul>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              a személyes adat szolgáltatása szerződéses kötelezettségen alapul.
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              a szerződés megkötésének előfeltétele a személyes adatok kezelése.
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              <strong>köteles</strong> a személyes adatokat megadni, hogy
              panaszát kezelni tudjuk. az adatszolgáltatás elmaradása azzal a
              <strong>következményekkel</strong> jár, hogy nem tudjuk kezelni a
              hozzánk beérkezett panaszát.
            </li>
          </ul>
        </div>

        <!-- KÖZÖSSÉGI OLDALAK -->
        <div class="mb-8">
          <h3 class="text-h6 font-weight-bold mb-4">
            Közösségi oldalak
          </h3>

          <ul>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              Az adatgyűjtés ténye, a kezelt adatok köre:
              Facebook/Google+/Twitter/Pinterest/Youtube/Instagram stb.
              közösségi oldalakon regisztrált neve, illetve a felhasználó
              nyilvános profilképe.
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              Az érintettek köre: Valamennyi érintett, aki regisztrált a
              Facebook/Google+/Twitter/Pinterest/Youtube/Instagram stb.
              közösségi oldalakon, és „lájkolta” a weboldalt.
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              Az adatgyűjtés célja: A közösségi oldalakon, a weboldal egyes
              tartalmi elemeinek, termékeinek, akcióinak vagy magának a
              weboldalnak a megosztása, illetve „lájkolása”, népszerűsítése.
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              Az adatkezelés időtartama, az adatok törlésének határideje, az
              adatok megismerésére jogosult lehetséges adatkezelők személye és
              az érintettek adatkezeléssel kapcsolatos jogainak ismertetése: Az
              adatok forrásáról, azok kezeléséről, illetve az átadás módjáról,
              és jogalapjáról az adott közösségi oldalon tájékozódhat az
              érintett. Az adatkezelés a közösségi oldalakon valósul meg, így az
              adatkezelés időtartamára, módjára, illetve az adatok törlési és
              módosítási lehetőségeire az adott közösségi oldal szabályozása
              vonatkozik.
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              Az adatkezelés jogalapja: az érintett önkéntes hozzájárulása
              személyes adatai kezeléséhez a közösségi oldalakon.
            </li>
          </ul>
        </div>

        <!-- ÜGYFÉLKAPCSOLATOK ÉS EGYÉB ADATKEZELÉSEK -->
        <div class="mb-8">
          <h2 class="overline font-weight-bold mb-2 green--text text--darken-2">
            egyéb adatkezelések
          </h2>
          <h3 class="text-h6 font-weight-bold mb-4">
            Ügyfélkapcsolatok és egyéb adatkezelések
          </h3>

          <ul>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              Amennyiben az adatkezelő szolgáltatásaink igénybevétele során
              kérdés merülne fel, esetleg problémája lenne az érintettnek, a
              honlapon megadott módokon (telefon, e-mail, közösségi oldalak
              stb.) kapcsolatba léphet az adatkezelővel.
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              Adatkezelő a beérkezett e-maileket, üzeneteket, telefonon,
              Facebook-on stb. megadott adatokat az érdeklődő nevével és e-mail
              címével, valamint más, önként megadott személyes adatával együtt,
              az adatközléstől számított legfeljebb 2 év elteltével törli.
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              E tájékoztatóban fel nem sorolt adatkezelésekről az adat
              felvételekor adunk tájékoztatást.
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              Kivételes hatósági megkeresésre, illetőleg jogszabály
              felhatalmazása alapján más szervek megkeresése esetén a
              Szolgáltató köteles tájékoztatás adására, adatok közlésére,
              átadására, illetőleg iratok rendelkezésre bocsátására.
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              A Szolgáltató ezen esetekben a megkereső részére – amennyiben az a
              pontos célt és az adatok körét megjelölte – személyes adatot csak
              annyit és olyan mértékben ad ki, amely a megkeresés céljának
              megvalósításához elengedhetetlenül szükséges.
            </li>
          </ul>
        </div>

        <!-- INTÉZKEDÉSI HATÁRIDŐ -->
        <div class="mb-8">
          <h3 class="text-h6 font-weight-bold mb-4">
            Intézkedési határidő
          </h3>

          <base-text>
            Az adatkezelő indokolatlan késedelem nélkül, de mindenféleképpen a
            kérelem beérkezésétől számított
            <strong>1 hónapon belül</strong> tájékoztatja Önt a fenti kérelmek
            nyomán hozott intézkedésekről.
          </base-text>
          <base-text>
            Szükség esetén ez <strong>2 hónappal meghosszabbítható</strong>. A
            határidő meghosszabbításáról az adatkezelő a késedelem okainak
            megjelölésével a kérelem kézhezvételétől számított
            <strong>1 hónapon</strong> belül tájékoztatja Önt.
          </base-text>
          <base-text>
            Ha az adatkezelő nem tesz intézkedéseket Ön kérelme nyomán,
            <strong
              >késedelem nélkül, de legkésőbb a kérelem beérkezésétől számított
              egy hónapon belül tájékoztatja Önt az intézkedés elmaradásának
              okairól</strong
            >, valamint arról, hogy Ön panaszt nyújthat be valamely felügyeleti
            hatóságnál, és élhet bírósági jogorvoslati jogával.
          </base-text>
        </div>

        <!-- TÁJÉKOZTATÁS ADATVÉDELMI INCIDENSRŐL -->
        <div class="mb-8">
          <h3 class="text-h6 font-weight-bold mb-4">
            Az érintett tájékoztatása az adatvédelmi incidensről
          </h3>

          <base-text>
            Ha az adatvédelmi incidens valószínűsíthetően magas kockázattal jár
            a természetes személyek jogaira és szabadságaira nézve, az
            adatkezelő indokolatlan késedelem nélkül tájékoztatja az érintettet
            az adatvédelmi incidensről.
          </base-text>
          <base-text>
            Az érintettet nem kell tájékoztatni, ha a következő feltételek
            bármelyike teljesül:
          </base-text>

          <ul>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              az adatkezelő megfelelő technikai
              <strong>és szervezési védelmi intézkedéseket hajtott végre</strong
              >, és ezeket az intézkedéseket az adatvédelmi incidens által
              érintett adatok tekintetében alkalmazták, különösen azokat az
              intézkedéseket - mint például a titkosítás alkalmazása -, amelyek
              a személyes adatokhoz való hozzáférésre fel nem jogosított
              személyek számára
              <strong>értelmezhetetlenné teszik az adatokat</strong>;
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              az adatkezelő az adatvédelmi incidenst követően olyan további
              intézkedéseket tett, amelyek
              <strong
                >biztosítják, hogy az érintett jogaira és szabadságaira
                jelentett, magas kockázat a továbbiakban valószínűsíthetően nem
                valósul meg</strong
              >;
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              a tájékoztatás
              <strong>aránytalan erőfeszítést tenne szükségessé</strong>. Ilyen
              esetekben az érintetteket nyilvánosan közzétett információk útján
              kell tájékoztatni, vagy olyan hasonló intézkedést kell hozni,
              amely biztosítja az érintettek hasonlóan hatékony tájékoztatását.
            </li>
          </ul>

          <base-text>
            Ha az adatkezelő még nem értesítette az érintettet az adatvédelmi
            incidensről, a felügyeleti hatóság, miután mérlegelte, hogy az
            adatvédelmi incidens valószínűsíthetően magas kockázattal jár-e,
            elrendelheti az érintett tájékoztatását.
          </base-text>
        </div>

        <!-- INCIDENS BEJELENTÉSE HATÓSÁGNAK -->
        <div class="mb-8">
          <h3 class="text-h6 font-weight-bold mb-4">
            Adatvédelmi incidens bejelentése a hatóságnak
          </h3>

          <base-text>
            Az adatvédelmi incidenst az adatkezelő indokolatlan késedelem
            nélkül, és ha lehetséges, legkésőbb 72 órával azután, hogy az
            adatvédelmi incidens a tudomására jutott, bejelenti az 55. cikk
            alapján illetékes felügyeleti hatóságnak, kivéve, ha az adatvédelmi
            incidens valószínűsíthetően nem jár kockázattal a természetes
            személyek jogaira és szabadságaira nézve. Ha a bejelentés nem
            történik meg 72 órán belül, mellékelni kell hozzá a késedelem
            igazolására szolgáló indokokat is
          </base-text>
        </div>

        <!-- PANASZTÉTELI LEHETŐSÉG -->
        <div class="mb-8">
          <h3 class="text-h6 font-weight-bold mb-4">
            Panasztételi lehetőség
          </h3>

          <base-text>
            Az adatkezelő esetleges jogsértése ellen panasszal a Nemzeti
            Adatvédelmi és Információszabadság Hatóságnál lehet élni:
          </base-text>
          <base-text>
            Nemzeti Adatvédelmi és Információszabadság Hatóság<br />
            1125 Budapest, Szilágyi Erzsébet fasor 22/C.<br />
            Levelezési cím: 1530 Budapest, Postafiók: 5.<br />
            Telefon: +36 -1-391-1400<br />
            Fax: +36-1-391-1410<br />
            E-mail: ugyfelszolgalat@naih.hu
          </base-text>
          <base-text>
            A tájékoztató elkészítése során figyelemmel voltunk az alábbi
            jogszabályokra:
          </base-text>
          <ul>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              A természetes személyeknek a személyes adatok kezelése
              tekintetében történő védelméről és az ilyen adatok szabad
              áramlásáról, valamint a 95/46/EK rendelet hatályon kívül
              helyezéséről (általános adatvédelmi rendelet) AZ EURÓPAI PARLAMENT
              ÉS A TANÁCS (EU) 2016/679 RENDELETE (2016. április 27.)
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              2011. évi CXII. törvény - az információs önrendelkezési jogról és
              az információszabadságról (a továbbiakban: Infotv.) 2001. évi
              CVIII. törvény - az elektronikus kereskedelmi szolgáltatások,
              valamint az információs társadalommal összefüggő szolgáltatások
              egyes kérdéseiről (főképp a 13/A. §-a)
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              2008. évi XLVII. törvény - a fogyasztókkal szembeni
              tisztességtelen kereskedelmi gyakorlat tilalmáról;
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              2008. évi XLVIII. törvény - a gazdasági reklámtevékenység alapvető
              feltételeiről és egyes korlátairól (különösen a 6.§-a)
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              2005. évi XC. törvény az elektronikus információszabadságról
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              2003. évi C. törvény az elektronikus hírközlésről (kifejezetten a
              155.§-a)
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              16/2011. sz. vélemény a viselkedésalapú online reklám bevált
              gyakorlatára vonatkozó EASA/IAB-ajánlásról
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              A Nemzeti Adatvédelmi és Információszabadság Hatóság ajánlása az
              előzetes tájékoztatás adatvédelmi követelményeiről
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              Az Európai Parlament és a Tanács (EU) 2016/679 rendelete (2016.
              április 27.) a természetes személyeknek a személyes adatok
              kezelése tekintetében történő védelméről és az ilyen adatok szabad
              áramlásáról, valamint a 95/46/EK rendelet hatályon kívül
              helyezéséről
            </li>
          </ul>
        </div>

        <!--  -->
        <div class="mb-8">
          <base-text>
            A jelen adatkezelési szabályzat az EZ Solutions Kft weboldalára és
            egyéb elektronikus és nem elektronikus értékesítési felületeire a
            látogatók által önkéntes hozzájárulással megadott adatok tárolására
            és kezelésére vonatkozik.
          </base-text>
          <base-text>
            Az adatok kezelését és feldolgozását az EZ Solutions Kft. 9022 Győr
            Móricz Zs. rkp. 1. fsz. 9. alatti székhelyű cég, továbbiakban
            adatkezelő végzi. Az adatokat az adatkezelő harmadik személynek, -
            kivételt képeznek ez alól az értékesítési felületre látogató vevő
            által igénybe vett, az adatkezelő értékesítési csatornáival
            összekapcsolt pénzügyi szolgáltatók, - a nem adjuk ki, azokat
            kizárólag az adatkezelő által az ügyfél külön hozzájárulásával
            megküldött hírlevelek megküldésére, az ezzel kapcsolatos írásbeli
            tájékoztatás fenntartására használja.
          </base-text>
        </div>

        <!-- VONATKOZÓ JOGSZABÁLYOK -->
        <div class="mb-8">
          <h3 class="text-h6 font-weight-bold mb-4">
            Vonatkozó jogszabályok
          </h3>

          <base-text>
            Az adatkezelő kötelezettséget vállal arra, hogy ez irányú
            tevékenységét a mindenkor hatályos jogszabályok szerint végzi. Ezek
            a jelen dokumentum kiadásakor az alábbiak:
          </base-text>

          <ul>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              2001.évi CVIII. törvény az elektronikus kereskedelmi
              szolgáltatások, valamint az információs társadalommal összefüggő
              szolgáltatások egyes kérdéseiről (a továbbiakban: elektronikus
              kereskedelmi törvény).
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              2001.évi XLVIII. törvény a gazdasági reklámtevékenység alapvető
              feltételeiről és egyes korlátairól (a továbbiakban: gazdasági
              reklámtörvény).
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              2001.évi CXII. törvény az információs önrendelkezési jogról és az
              információszabadságról. A jogszabály legfrissebb állapota elérhető
              a net.jogtar.hu oldalán, ide kattintva.
            </li>
          </ul>
        </div>

        <!-- FOGALMAK -->
        <div class="mb-8">
          <h3 class="text-h6 font-weight-bold mb-4">
            Fogalmak
          </h3>

          <base-text>
            2001.évi CXII. törvény 3. § alapján
          </base-text>
          <base-text>
            érintett: bármely meghatározott, személyes adat alapján azonosított
            vagy - közvetlenül vagy közvetve - azonosítható természetes személy;
          </base-text>
          <base-text>
            személyes adat: az érintettel kapcsolatba hozható adat – különösen
            az érintett neve, azonosító jele, valamint egy vagy több fizikai,
            fiziológiai, mentális, gazdasági, kulturális vagy szociális
            azonosságára jellemző ismeret -, valamint az adatból levonható, az
            érintettre vonatkozó következtetés;
          </base-text>
          <base-text>
            különleges adat:
          </base-text>

          <ul>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              a faji eredetre, a nemzeti és etnikai kisebbséghez tartozásra, a
              politikai véleményre vagy pártállásra, a vallásos vagy más
              világnézeti meggyőződésre, az érdek-képviseleti szervezeti
              tagságra, a szexuális életre vonatkozó személyes adat,
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              az egészségi állapotra, a kóros szenvedélyre vonatkozó személyes
              adat, valamint a bűnügyi személyes adat;
            </li>
          </ul>
          <base-text>
            bűnügyi személyes adat: a büntetőeljárás során vagy azt megelőzően a
            bűncselekménnyel vagy a büntetőeljárással összefüggésben, a
            büntetőeljárás lefolytatására, illetve a bűncselekmények
            felderítésére jogosult szerveknél, továbbá a büntetés-végrehajtás
            szervezeténél keletkezett, az érintettel kapcsolatba hozható,
            valamint a büntetett előéletre vonatkozó személyes adat;
          </base-text>
          <base-text>
            közérdekű adat: az állami vagy helyi önkormányzati feladatot,
            valamint jogszabályban meghatározott egyéb közfeladatot ellátó szerv
            vagy személy kezelésében lévő és tevékenységére vonatkozó vagy
            közfeladatának ellátásával összefüggésben keletkezett, a személyes
            adat fogalma alá nem eső, bármilyen módon vagy formában rögzített
            információ vagy ismeret, függetlenül kezelésének módjától, önálló
            vagy gyűjteményes jellegétől, így különösen a hatáskörre,
            illetékességre, szervezeti felépítésre, szakmai tevékenységre, annak
            eredményességére is kiterjedő értékelésére, a birtokolt adatfajtákra
            és a működést szabályozó jogszabályokra, valamint a gazdálkodásra, a
            megkötött szerződésekre vonatkozó adat;
          </base-text>
          <base-text>
            közérdekből nyilvános adat: a közérdekű adat fogalma alá nem tartozó
            minden olyan adat, amelynek nyilvánosságra hozatalát,
            megismerhetőségét vagy hozzáférhetővé tételét törvény közérdekből
            elrendeli;
          </base-text>
          <base-text>
            hozzájárulás: az érintett akaratának önkéntes és határozott
            kinyilvánítása, amely megfelelő tájékoztatáson alapul, és amellyel
            félreérthetetlen beleegyezését adja a rá vonatkozó személyes adatok
            - teljes körű vagy egyes műveletekre kiterjedő - kezeléséhez;
          </base-text>
          <base-text>
            tiltakozás: az érintett nyilatkozata, amellyel személyes adatainak
            kezelését kifogásolja, és az adatkezelés megszüntetését, illetve a
            kezelt adatok törlését kéri;
          </base-text>
          <base-text>
            adatkezelő: az a természetes vagy jogi személy, illetve jogi
            személyiséggel nem rendelkező szervezet, aki vagy amely önállóan
            vagy másokkal együtt az adatok kezelésének célját meghatározza, az
            adatkezelésre (beleértve a felhasznált eszközt) vonatkozó döntéseket
            meghozza és végrehajtja, vagy az általa megbízott adatfeldolgozóval
            végrehajtatja;
          </base-text>
          <base-text>
            adatkezelés: az alkalmazott eljárástól függetlenül az adatokon
            végzett bármely művelet vagy a műveletek összessége, így különösen
            gyűjtése, felvétele, rögzítése, rendszerezése, tárolása,
            megváltoztatása, felhasználása, lekérdezése, továbbítása,
            nyilvánosságra hozatala, összehangolása vagy összekapcsolása,
            zárolása, törlése és megsemmisítése, valamint az adatok további
            felhasználásának megakadályozása, fénykép-, hang- vagy képfelvétel
            készítése, valamint a személy azonosítására alkalmas fizikai
            jellemzők (pl. ujj- vagy tenyérnyomat, DNS-minta, íriszkép)
            rögzítése;
          </base-text>
          <base-text>
            adattovábbítás: az adat meghatározott harmadik személy számára
            történő hozzáférhetővé tétele;
          </base-text>
          <base-text>
            nyilvánosságra hozatal: az adat bárki számára történő hozzáférhetővé
            tétele;
          </base-text>
          <base-text>
            adattörlés: az adatok felismerhetetlenné tétele oly módon, hogy a
            helyreállításuk többé nem lehetséges;
          </base-text>
          <base-text>
            adatmegjelölés: az adat azonosító jelzéssel ellátása annak
            megkülönböztetése céljából;
          </base-text>
          <base-text>
            adatzárolás: az adat azonosító jelzéssel ellátása további
            kezelésének végleges vagy meghatározott időre történő korlátozása
            céljából;
          </base-text>
          <base-text>
            adatmegsemmisítés: az adatokat tartalmazó adathordozó teljes fizikai
            megsemmisítése;
          </base-text>
          <base-text>
            adatfeldolgozás: az adatkezelési műveletekhez kapcsolódó technikai
            feladatok elvégzése, függetlenül a műveletek végrehajtásához
            alkalmazott módszertől és eszköztől, valamint az alkalmazás
            helyétől, feltéve, hogy a technikai feladatot az adatokon végzik;
          </base-text>
          <base-text>
            adatfeldolgozó: az a természetes vagy jogi személy, illetve jogi
            személyiséggel nem rendelkező szervezet, aki vagy amely az
            adatkezelővel kötött szerződése alapján - beleértve a jogszabály
            rendelkezése alapján történő szerződéskötést is - adatok
            feldolgozását végzi;
          </base-text>
          <base-text>
            adatfelelős: az a közfeladatot ellátó szerv, amely az elektronikus
            úton kötelezően közzéteendő közérdekű adatot előállította, illetve
            amelynek a működése során ez az adat keletkezett;
          </base-text>
          <base-text>
            adatközlő: az a közfeladatot ellátó szerv, amely - ha az adatfelelős
            nem maga teszi közzé az adatot - az adatfelelős által hozzá
            eljuttatott adatait honlapon közzéteszi;
          </base-text>
          <base-text>
            adatállomány: az egy nyilvántartásban kezelt adatok összessége;
          </base-text>
          <base-text>
            harmadik személy: olyan természetes vagy jogi személy, illetve jogi
            személyiséggel nem rendelkező szervezet, aki vagy amely nem azonos
            az érintettel, az adatkezelővel vagy az adatfeldolgozóval;
          </base-text>
          <base-text>
            EGT-állam: az Európai Unió tagállama és az Európai Gazdasági
            Térségről szóló megállapodásban részes más állam, továbbá az az
            állam, amelynek állampolgára az Európai Unió és tagállamai, valamint
            az Európai Gazdasági Térségről szóló megállapodásban nem részes
            állam között létrejött nemzetközi szerződés alapján az Európai
            Gazdasági Térségről szóló megállapodásban részes állam
            állampolgárával azonos jogállást élvez;
          </base-text>
          <base-text>
            harmadik ország: minden olyan állam, amely nem EGT-állam.
          </base-text>
        </div>

        <!-- ADATKEZELÉSI ALAPELVEK -->
        <div class="mb-8">
          <h3 class="text-h6 font-weight-bold mb-4">
            Adatkezelési alapelvek az EZ Solutions Kft. adatkezelése során
          </h3>

          <base-text>
            Személyes adat akkor kezelhető, ha
          </base-text>
          <ul>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              ahhoz az érintett hozzájárul, vagy
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              azt törvény vagy - törvény felhatalmazása alapján, az abban
              meghatározott körben - helyi önkormányzat rendelete elrendeli.
            </li>
          </ul>
          <base-text>
            Cselekvőképtelen és korlátozottan cselekvőképes kiskorú személy
            nyilatkozatához a törvényes képviselőjének hozzájárulása szükséges,
            kivéve azon szolgáltatás részeket, ahol a nyilatkozat a mindennapi
            életben tömegesen előforduló regisztrációt céloz, és különösebb
            megfontolást nem igényel.
          </base-text>
          <base-text
            >Személyes adatot kezelni csak meghatározott célból, jog gyakorlása
            és kötelezettség teljesítése érdekében lehet. Az adatkezelésnek
            minden szakaszában meg kell felelnie e célnak.
          </base-text>
          <base-text
            >Csak olyan személyes adat kezelhető, amely az adatkezelés céljának
            megvalósulásához elengedhetetlen, a cél elérésére alkalmas, csak a
            cél megvalósulásához szükséges mértékben és ideig.
          </base-text>
          <base-text
            >Személyes adat csak megfelelő tájékoztatáson alapuló beleegyezéssel
            kezelhető.
          </base-text>
          <base-text
            >Az érintettet - egyértelműen, közérthetően és részletesen -
            tájékoztatni kell az adatai kezelésével kapcsolatos minden tényről,
            így különösen az adatkezelés céljáról és jogalapjáról, az
            adatkezelésre és az adatfeldolgozásra jogosult személyéről, az
            adatkezelés időtartamáról, illetve arról, hogy kik ismerhetik meg az
            adatokat. A tájékoztatásnak ki kell terjednie az érintett
            adatkezeléssel kapcsolatos jogaira és jogorvoslati lehetőségeire is.
          </base-text>
          <base-text
            >A kezelt személyes adatoknak meg kell felelniük az alábbi
            követelményeknek:
          </base-text>
          <ul>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              felvételük és kezelésük tisztességes és törvényes;
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              pontosak, teljesek és ha szükséges időszerűek;
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              tárolásuk módja alkalmas arra, hogy az érintettet csak a tárolás
              céljához szükséges ideig lehessen azonosítani.
            </li>
          </ul>
          <base-text>
            Korlátozás nélkül használható, általános és egységes
            személyazonosító jel alkalmazása tilos.
          </base-text>
          <base-text>
            A személyes adatok akkor továbbíthatók, valamint a különböző
            adatkezelések akkor kapcsolhatók össze, ha az érintett ahhoz
            hozzájárult, vagy törvény azt megengedi, és ha az adatkezelés
            feltételei minden egyes személyes adatra nézve teljesülnek.
          </base-text>
          <base-text>
            Az adatkezelő megnevezése: EZ Solutions Kft., akit képvisel Dr.
            Jakab Tamás ügyvezető
          </base-text>
          <base-text>
            Az adatkezelés megnevezése: EZ Solutions Kft. által folytatott
            elektronikus és nem elektronikus értékesítési csatornák és weboldal.
          </base-text>
          <base-text>
            Az adatkezelés célja: EZ Solutions Kft. által készített és
            értékesített elektronikus könyvek, videok és egyéb tartalmak.
          </base-text>
          <base-text>
            Az adatkezelés jogalapja: Az érintett önkéntes hozzájárulása (2011.
            évi CXII. törvény 5. § (1) a))
          </base-text>
          <base-text>
            A tényleges adatkezelés helye: 9022 Győr Móricz Zsigmond rkp. 1.
            fsz. 9.
          </base-text>
          <base-text>
            Az adatkezelés automatizáltsága: gépi
          </base-text>
          <base-text>
            Az adatok törlési határideje: A vásárló vásárlásának befejezése,
            illetve a feliratkozó önkéntes törlési kérelme, melyet minden
            hírlevél végéhez csatolt linken, önállóan megtehet.
          </base-text>
          <base-text>
            Az érintettek köre: vevők és hírlevélre feliratkozók.
          </base-text>
          <base-text>
            Az adatkezelő adatai, elérhetősége
          </base-text>
          <base-text> Név: {{ name }} </base-text>
          <base-text>
            cg.: 08-09-031012
          </base-text>
          <base-text> Cím: {{ seat }} </base-text>
          <base-text>
            Adószám: 26751380-2-08
          </base-text>
          <base-text>
            Adatkezelés nyilvántartási száma: nem releváns
          </base-text>
          <base-text> Telefon: {{ phone }} </base-text>
          <base-text> Email: {{ email }} </base-text>
        </div>

        <!-- JOGORVOSLAT -->
        <div class="mb-8">
          <h3 class="text-h6 font-weight-bold mb-4">
            Jogorvoslat
          </h3>

          <base-text>
            Az érintett tájékoztatást kérhet személyes adatai kezeléséről,
            valamint kérheti személyes adatainak helyesbítését, illetve - a
            jogszabályban elrendelt adatkezelések kivételével - törlését az
            adatfelvételénél jelzett módon, illetve az adatkezelő
            ügyfélszolgálata útján.
          </base-text>

          <base-text>
            Az érintett kérelmére az adatkezelő tájékoztatást ad az általa
            kezelt adatairól, az adatkezelés céljáról, jogalapjáról,
            időtartamáról, az adatfeldolgozó nevéről, címéről (székhelyéről) és
            az adatkezeléssel összefüggő tevékenységéről, továbbá arról, hogy
            kik és milyen célból kapják vagy kapták meg az adatokat. Az
            adatkezelő a kérelem benyújtásától számított legrövidebb idő alatt,
            legfeljebb azonban 30 napon belül írásban, közérthető formában adja
            meg a tájékoztatást. E tájékoztatás ingyenes, ha a tájékoztatást
            kérő a folyó évben azonos területre vonatkozó tájékoztatási kérelmet
            az adatkezelőhöz még nem nyújtott be. Egyéb esetekben az adatkezelő
            költségtérítést állapíthat meg.
          </base-text>
          <base-text
            >Az adatkezelő a személyes adatot törli, ha kezelése jogellenes, az
            érintett kéri, az adatkezelés célja megszűnt, vagy az adatok
            tárolásának törvényben meghatározott határideje lejárt, azt a
            bíróság vagy az adatvédelmi biztos elrendelte.
          </base-text>
          <base-text
            >Az adatkezelő a helyesbítésről és a törlésről az érintettet,
            továbbá mindazokat értesíti, akiknek korábban az adatot adatkezelés
            céljára továbbították. Az értesítést mellőzi, ha ez az adatkezelés
            céljára való tekintettel az érintett jogos érdekét nem sérti.
          </base-text>
          <base-text
            >Az érintett tiltakozhat személyes adatának kezelése ellen, ha
          </base-text>

          <ul>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              a személyes adatok kezelése (továbbítása) kizárólag az adatkezelő
              vagy az adatátvevő jogának vagy jogos érdekének érvényesítéséhez
              szükséges, kivéve, ha az adatkezelést törvény rendelte el;
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              a személyes adat felhasználása vagy továbbítása közvetlen
              üzletszerzés, közvélemény-kutatás vagy tudományos kutatás céljára
              történik;
            </li>
            <li class="mb-4 body-2 text-lg-body-1 black--text">
              a tiltakozás jogának gyakorlását egyébként törvény lehetővé teszi.
            </li>
          </ul>

          <base-text>
            Az adatkezelő - az adatkezelés egyidejű felfüggesztésével - a
            tiltakozást a kérelem benyújtásától számított legrövidebb időn
            belül, de legfeljebb 15 nap alatt megvizsgálja, és annak
            eredményéről a kérelmezőt írásban tájékoztatja. Amennyiben a
            tiltakozás indokolt, az adatkezelő az adatkezelést - beleértve a
            további adatfelvételt és adattovábbítást is - megszünteti, és az
            adatokat zárolja, valamint a tiltakozásról, illetőleg az annak
            alapján tett intézkedésekről értesíti mindazokat, akik részére a
            tiltakozással érintett személyes adatot korábban továbbította, és
            akik kötelesek intézkedni a tiltakozási jog érvényesítése érdekében.
          </base-text>
          <base-text>
            Amennyiben az érintett az adatkezelőnek a meghozott döntésével nem
            ért egyet, az ellen - annak közlésétől számított 30 napon belül -
            bírósághoz fordulhat.
          </base-text>
          <base-text>
            Az adatkezelő az érintett adatát nem törölheti, ha azt az
            adatkezelést törvény rendelte el. Az adat azonban nem továbbítható
            az adatátvevő részére, ha az adatkezelő egyetértett a tiltakozással,
            illetőleg a bíróság a tiltakozás jogosságát megállapította.
          </base-text>

          <base-text>
            Az érintett a jogainak megsértése esetén az adatkezelő ellen
            bírósághoz fordulhat. A bíróság az ügyben soron kívül jár el.
          </base-text>
          <base-text>
            Jogorvoslati lehetőséggel, panasszal a Nemzeti Adatvédelmi és
            Információs Hatóságnál lehet élni:
          </base-text>
          <base-text>
            Név: Nemzeti Adatvédelmi és Információs Hatóság
          </base-text>
          <base-text>
            Székhely: 1125 Budapest Szilágyi Erzsébet fasor 22/c.
          </base-text>
          <base-text>
            Postacím: 1530 Budapest, Pf.: 5.
          </base-text>
          <base-text>
            Telefon: +36 (1) 391-1400
          </base-text>
          <base-text>
            Fax: +36 (1) 391-1410
          </base-text>
          <base-text>
            Honlap: https://naih.hu
          </base-text>
        </div>
      </v-col>
    </v-container>
  </Layout>
</template>

<script>
import BaseText from '../components/BaseText.vue';

export default {
  name: 'PrivacyPolicy',
  components: { BaseText },
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
