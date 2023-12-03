/* import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg"; */
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import "./App.css";

import Layout from "./components/layout/layout";
import A4A from "./components/pages/a4a";
import Final from "./components/pages/final";

function App() {
  //const [count, setCount] = useState(0);
  const dataFinal = {
    0: {
      pytanie: "ile certyfikatów posiada główny protagonista jestem hardkorem?",
      kategoria: "memy",
      odpowiedz: "cztery",
    },

    1: {
      pytanie: "W jakiej miejscowości dzieje się akcja Ale urwał?",
      kategoria: "memy",
      odpowiedz: "Szczecin",
    },

    2: {
      pytanie: "Z jakim środkiem alkoholowym mierzył się Poziomka13 w swoim debiucie w Internecie?",
      kategoria: "memy",
      odpowiedz: "Denaturat",
    },
    
    3: {
      pytanie: "PYTANIE OBRAZKOWE Jaki gest wykonał Wojciech Cejrowski na tym nagraniu?",
      kategoria: "memy",
      odpowiedz: "Swastyka, hinduski symbol szczęścia",
      link: "https://www.youtube.com/embed/V_PgKNS0mAI?start=2",
    },
    
    4: {
    pytanie: "Z jakiego działu matematycznego poradnik nagrał Testoviron?",
    kategoria: "memy",
    odpowiedz: "Całki, analiza matematyczna",
    },

    5: {
    pytanie: "Kto powiedział to by nic nie dało nie dałoby nic",
    kategoria: "sławni polacy",
    odpowiedz: "Mariusz Pudzianowski",
    },
    
    6: {
    pytanie: "Z jakiego przedmiotu szkolnego, prowadzi szkolenia Matemaks?",
    kategoria: "sławni polacy",
    odpowiedz: "matematyka",
    },

    7: {
    pytanie: "W którym roku miał miejsce pierwszy sylwester z Andrzejem Dudą na Facebooku?",
    kategoria: "sławni polacy",
    odpowiedz: "2016",
    },

    8: {
    pytanie: "W wywiadzie dla radia PolskaLive, ile łyżeczek cukru wsypał do herbaty Janusz Korwin-Mikke? Możesz pomylić się o 1",
    kategoria: "sławni polacy",
    odpowiedz: "10",
    },

    9: {
    pytanie: "W którym roku Musical.ly został wykupione przez TikToka?",
    kategoria: "Internet",
    odpowiedz: "2017",
    },

    10: {
    pytanie: "Do kogo należy seria Masochista?",
    kategoria: "Internet",
    odpowiedz: "Mietczyński",
    },

    11: {
    pytanie: "Kto ma więcej subskrypcji na YT? Blowek czy Friz",
    kategoria: "Internet",
    odpowiedz: "Friz, ma 5,11 mln a Blowek 5,07",
    },

    12: {
    pytanie: "Jak nazywa się talk-show prowadzone przez Tomasza Gimpera Działowego w latach 2017-2019?",
    kategoria: "Internet",
    odpowiedz: "Lekko nie będzie",
    },

    13: {
    pytanie: "Jak nazywał się Książulo zanim zmienił swój nick?",
    kategoria: "Internet",
    odpowiedz: "KolorowyVlog",
    },

    14: {
    pytanie: "W filmie AiO Misja Kleopatra (2002) według Marnypopisa bez jakiego elementu nie będzie pałacu?",
    kategoria: "kultura",
    odpowiedz: "bez budulca i pałacu",
    },

    15: {
    pytanie: "PYTANIE MUZYCZNE Z jakiego filmu pochodzi ten utwór?",
    kategoria: "kultura",
    odpowiedz: "Vabank, Vabank 2 czyli riposta",
    link: "https://www.youtube.com/embed/Fx_68kFo9Po?start=21",
    },
    
    16: {
    pytanie: "W piosence braci Golec, co będzie stało w miejscu kretowiska?",
    kategoria: "kultura",
    odpowiedz: "Bank",
    },

    17: {
    pytanie: "Wymień 2 głównych protagonistów Zwariowanych Melodii",
    kategoria: "kultura",
    odpowiedz: "Kaczor Daffy i królik Bugs",
    },

    18: {
    pytanie: "Gdzie był zatrudniony Fred Flinstone, główny bohater kreskówki Flinstonowie?",
    kategoria: "kultura",
    odpowiedz: "W kamieniołomie",
    },

    19: {
    pytanie: "Jak nazywał się program wsparcia finansowego żuli postulowany przez Stanisława Żółtka w wyborach w 2020r?",
    kategoria: "sławni polacy",
    odpowiedz: "Menelowe+",
    },
    
    20: {
    pytanie: "PYTANIE MUZYCZNE [do 8s] Zgodnie z tą piosenką, jaka była cena mistrzostwa Polski w PN?",
    kategoria: "memy",
    odpowiedz: "Ząb",
    link: "https://www.youtube.com/embed/ZHuUcaw4Yz4?start=0",
    },

    21: {
    pytanie: "PYTANIE OBRAZKOWE Jak nazywa się ta grafika?",
    kategoria: "memy",
    odpowiedz: "Cenzopapa",
    link: "https://www.youtube.com/embed/5Uio3mIvoCg?start=2",
    },

    22: {
    pytanie: "Do kogo zwracał się Kamil Durczok w studiu Faktów, odnośnie upierdolonego stołu?",
    kategoria: "memy",
    odpowiedz: "Rurku",
    },

    23: {
    pytanie: "PYTANIE MUZYCZNE Na jakim instrumencie został zagrany ten utwór?",
    kategoria: "memy",
    odpowiedz: "na 300-letnich organach",
    link: "https://www.youtube.com/embed/MtZQpvfmpmw?start=0",
    },

    24: {
    pytanie: "Ile czasu na opuszczenie domu miała pani, która w rozmowie telefonicznej usłyszała że w jej domu jest bomba? Możesz pomylić się o godzinę",
    kategoria: "memy",
    odpowiedz: "3 godziny",
    },

    25: {
    pytanie: "W jakiej miejscowości na urząd prezydenta miasta kandydował Krzysztof Kononowicz",
    kategoria: "sławni polacy",
    odpowiedz: "Białystok",
    },

    26: {
    pytanie: "Według Janusza Korwin-Mikkego, jakie zwierzęta żyją na dnie rowu Mariańskiego?",
    kategoria: "sławni polacy",
    odpowiedz: "rurkowce",
    },

    27: {
    pytanie: "Według Ewy Kopacz, w bardzo dawnych czasach, czym ludzie bronili się przed dinozaurami?",
    kategoria: "sławni polacy",
    odpowiedz: "kamieniami",
    },

    28: {
    pytanie: "Ile lat ma Remigiusz Maciaszek znany pod pseudonimem Rock/RockAlone2k, możesz pomylić się o 3 lata",
    kategoria: "sławni polacy",
    odpowiedz: "46",
    },

    29: {
    pytanie: "Ile razy Polacy wygrali MŚ w piłce nożnej mężczyzn?",
    kategoria: "sławni polacy",
    odpowiedz: "Zero",
    },

    30: {
    pytanie: "Jakiej firmy była paczka żelków w paście Chcecie schudnąć, jedzcie żelki?",
    kategoria: "Internet",
    odpowiedz: "haribo",
    },

    31: {
    pytanie: "Ile trwała pasta dziennik bułgarskiego ninja? możesz pomylić się o 5 dni",
    kategoria: "Internet",
    odpowiedz: "58",
    },

    32: {
    pytanie: "Pasta Mój stary to fanatyk leczo, jest prequelem czy sequelem do fanatyka wędkarstwa?",
    kategoria: "Internet",
    odpowiedz: "prequelem",
    },

    33: {
    pytanie: "Jak nazywał się serwer minecraft dla YT-berów założony w 2012 roku przez SKKF-a?",
    kategoria: "Internet",
    odpowiedz: "Kwadratowa Masakra",
    },

    34: {
    pytanie: "Kto ustanowił rekord polskiego Twitcha mając jednocześnie na strimie ponad 190k widzów?",
    kategoria: "Internet",
    odpowiedz: "Marcin Xayoo Majkut",
    },

    35: {
    pytanie: "Jakimi gatunkami zwierząt byli Timon i Pumba z króla lwa?",
    kategoria: "kultura",
    odpowiedz: "Surykatka i guziec",
    },

    36: {
    pytanie: "Jaki aktor wciela się w Nicka Furiego w Marvel Cinematic Universe?",
    kategoria: "kultura",
    odpowiedz: "Samuel L. Jackson",
    },

    37: {
    pytanie: "Przed wymiarem sprawiedliwości jakiego kraju musiał ukrywać się Skipper z Pingwinów z Madagaskaru?",
    kategoria: "kultura",
    odpowiedz: "Dania",
    },

    38: {
    pytanie: "Blok ekipa ma więcej czy mniej niż 300 odcinków?",
    kategoria: "kultura",
    odpowiedz: "Mniej",
    },

    39: {
    pytanie: "Jak nazywało się królestwo, którym rządzili rodzicie Fiony w Shreku 2?",
    kategoria: "kultura",
    odpowiedz: "Zasiedmiogórogród",
    },

  };
  const dataA4a = {
    0: {
      pytanie: "Jaki kolor koszulki miał Paweł Jumper",
      kategoria: "memy",
      odpowiedz: "Zielony",
    },

    1: {
      pytanie: "W jakim kolorze była kurtka Najmana, w której udał się na sparing?",
      kategoria: "memy",
      odpowiedz: "Niebieski",
    },

    2: {
      pytanie: "Podaj tytuł parodii Gucci Gang autorstwa Klocucha",
      kategoria: "memy",
      odpowiedz: "Kruci gang",
    },
    3: {
    pytanie: "Z jakiego przedmiotu nie zdał Dawid Pasieka?",
    kategoria: "memy",
    odpowiedz: "fizyka",
    },

    4: {
    pytanie: "PYTANIE OBRAZKOWE Jak ankietowany zamierzał spędzić sylwestra?",
    kategoria: "memy",
    odpowiedz: "Będzie grau w gre - Tomb Raider",
    link: "https://www.youtube.com/embed/Elh-QH6oN5M?start=0",
    },

    5: {
    pytanie: "PYTANIE OBRAZKOWE Jakie pytanie zostało zadane temu panu?",
    kategoria: "memy",
    odpowiedz: "Czy często się pan uśmiecha?",
    link: "https://www.youtube.com/embed/GErTpQ4Vg_w?start=5",
    },

    6: {
    pytanie: "PYTANIE OBRAZKOWE O jaką kwotę pieniężną zapytał ten pan?",
    kategoria: "memy",
    odpowiedz: "2,3,5 zł",
    link: "https://www.youtube.com/embed/nVHrgH0XXls?start=7",
    },

    7: {
    pytanie: "Do którego piętra wspiął się protagonista filmu jestem hardkorem?",
    kategoria: "memy",
    odpowiedz: "do drugiego",
    },

    8: {
    pytanie: "W jakiej sprawie zadzwoniła na policję Hymel Jadwiga?",
    kategoria: "memy",
    odpowiedz: "Styrta się pali",
    },

    9: {
    pytanie: "PYTANIE OBRAZKOWE Z czym zjadł kanapki ten chłopiec?",
    kategoria: "memy",
    odpowiedz: "z pasztetem zajebistym",
    link: "https://www.youtube.com/embed/srCBrtoN3kc?start=26",
    },

    10: {
    pytanie: "Wymień 3 składniki domowego sprita z poradnika spryciarze.pl",
    kategoria: "memy",
    odpowiedz: "woda (gazowana), cukier i cytryna (sok)",
    },

    11: {
    pytanie: "PYTANIE MUZYCZNE Z jakiego filmu pochodzi ten utwór?",
    kategoria: "memy",
    odpowiedz: "Keyboard Cat",
    link: "https://www.youtube.com/embed/J---aiyznGQ?start=0",
    },

    12: {
    pytanie: "PYTANIE OBRAZKOWE O losy jakiego zwierzęcia obawia się ten pan?",
    kategoria: "memy",
    odpowiedz: "Cietrzewia",
    link: "https://www.youtube.com/embed/JtTaFpM6SsE?start=0",
    },
    
    13: {
    pytanie: "PYTANIE MUZYCZNE Do jakiego gifa ten utwór stanowił podkład",
    kategoria: "memy",
    odpowiedz: "Dancing polish cow, tańcząca krowa",
    link: "https://www.youtube.com/embed/rRPQs_kM_nw?start=0",
    },

    14: {
    pytanie: "Jaki rodzaj trybuny interesował zamawiającego bilety na mecz ligi mistrzów w Warszawie?",
    kategoria: "memy",
    odpowiedz: "żyleta/na krytą",
    link: "https://www.youtube.com/embed/dJJy4ONKjVg?start=0",
    },

    15: {
    pytanie: "PYTANIE OBRAZKOWE Ryk jakiego zwierzęcia wydał uczeń przedstawiony na zdjęciu?",
    kategoria: "memy",
    odpowiedz: "https://www.youtube.com/embed/C0C3NK55tI8?start=15",
    },

    16: {
    pytanie: "Jakiej farby potrzebujemy do pomalowania amelinowej blachy?",
    kategoria: "memy",
    odpowiedz: "Amelinową",
    },

    17: {
    pytanie: "Podaj nazwę uniwersum, którego głównymi bohaterami są Krzysztof Konon Kononowicz i Wojciech Major Suchodolski",
    kategoria: "memy",
    odpowiedz: "Szkolna 17",
    },

    18: {
    pytanie: "Zgodnie z klasycznym pytaniem w familiadzie, proszę odpowiedzieć: więcej niż 1 zwierzę to?",
    kategoria: "memy",
    odpowiedz: "lama/owca",
    },

    19: {
    pytanie: "Jaki pojazd zasypywał drogę dojazdową domku w Karkonoszach?",
    kategoria: "memy",
    odpowiedz: "Pług śnieżny/drogowy",
    },

    20: {
    pytanie: "Jakiej kwocie pieniężnej odpowiada 1 Sasin?",
    kategoria: "memy",
    odpowiedz: "70 mln złotych",
    },

    21: {
    pytanie: "PYTANIE OBRAZKOWE Czego życzy sobie ten pan w przyszłym roku?",
    kategoria: "memy",
    odpowiedz: "Tego samego co w obecnym/wódki/pieniędzy/snu",
    link: "https://www.youtube.com/embed/CE5_YtPIPRU?start=0",
    },

    22: {
    pytanie: "Z jakiego miasta pochodzi chytra baba, która w 2012 roku na miejskiej wigilii, zgarniała butelki napoju zbyszko 3 cytryny?",
    kategoria: "memy",
    odpowiedz: "Radom",
    link: "https://www.youtube.com/embed/Gz52q8pdY60?start=10",
    },

    23: {
    pytanie: "PYTANIE OBRAZKOWE Co tego pana na co dzień denerwuje?",
    kategoria: "memy",
    odpowiedz: "Woda, ziemia, halucynacja, hemoglobina, taka sytuacja",
    link: "https://www.youtube.com/embed/5pHDY7S-zmQ?start=10",
    },

    24: {
    pytanie: "PYTANIE OBRAZKOWE O co walczyli Ci trzej panowie?",
    kategoria: "memy",
    odpowiedz: "O worek z puszkami",
    link: "https://www.youtube.com/embed/22kw2ChujF0?start=10",
    },

    25: {
    pytanie: "Jak nazywała się żona Tigera Bonzo?",
    kategoria: "memy",
    odpowiedz: "Kobra",
    },

    26: {
    pytanie: "Co miał na sobie stary Rafonixa w opowieści Mój stary miał nową kobietę",
    kategoria: "memy",
    odpowiedz: "sweter",
    },

    27: {
    pytanie: "PYTANIE OBRAZKOWE Jak nazywa się smutna żaba z emotek twitchowych i memów?",
    kategoria: "memy",
    odpowiedz: "Pepe",
    },

    28: {
    pytanie: "PYTANIE OBRAZKOWE Jak nazywa się oryginalny film, którego parodię właśnie obejrzeliśmy?",
    kategoria: "memy",
    odpowiedz: "SHrek is love, shrek is life",
    link: "https://www.youtube.com/embed/a9bBEbAO8Ik",
    },

    29: {
    pytanie: "PYTANIE OBRAZKOWE [10s] Komu jest dedykowany ten film?",
    kategoria: "memy",
    odpowiedz: "Karolinie",
    link: "https://www.youtube.com/embed/awaKDdwxu44?start=0",
    },

    30: {
    pytanie: "PYTANIE OBRAZKOWE Kto był kierowcą tego pojazdu?",
    kategoria: "memy",
    odpowiedz: "Chorąży",
    link: "https://www.youtube.com/embed/fc3qeAuxeuo?start=5",
    },

    31: {
    pytanie: "Czy Tomasz Hajto poniósł konsekwencją za potrącenie starej baby na pasach w 2007",
    kategoria: "sławni polacy",
    odpowiedz: "Tak, zapłacił grzywnę 7k i odbył wyrok 2 lat, stracił też prawo jazdy na rok",
    },

    32: {
    pytanie: "Ile partii założył Janusz Korwin-Mikke?",
    kategoria: "sławni polacy",
    odpowiedz: "Cztery: KORWiN, KNP, UPR i WiP",
    },

    33: {
    pytanie: "Jak naprawdę nazywa się Aleksander Jabłonowski, członek grupy Rodacy Kamraci?",
    kategoria: "sławni polacy",
    odpowiedz: "Wojciech Olszański",
    },

    34: {
    pytanie: "Według Janusza Korwin-Mikkego, ile wynosi nagroda za wskazania cienia dowodu że Adolf H. wiedział?",
    kategoria: "sławni polacy",
    odpowiedz: "0,5 mln funtów",
    },

    35: {
    pytanie: "Ile pompek wycisnął Matemaks w challengu pompkowym? Możesz pomylić się o 10",
    kategoria: "sławni polacy",
    odpowiedz: "81",
    },

    36: {
    pytanie: "Wymień 2 polskich skoczków narciarskich, którzy brali udział w turnieju 4 skoczni",
    kategoria: "sławni polacy",
    odpowiedz: "Małysz, Stoch, Żyła, Kubacki",
    },

    37: {
    pytanie: "Kto jest autorem takich serii jak Piątek serial oryginalny, czarne owce show czy holocron?",
    kategoria: "sławni polacy",
    odpowiedz: "Grzegorz Dakann Barański",
    },

    38: {
    pytanie: "Jak nazywa się piłkasz reprezentacji Polski, który jest nazywany przez ludzi Jezusem?",
    kategoria: "sławni polacy",
    odpowiedz: "Grzegorz Krychowiak",
    },

    39: {
    pytanie: "Czy Karol i Krzysztof Krawczyk to bracia?",
    kategoria: "sławni polacy",
    odpowiedz: "Nie, Karol Krawczyk to postać fikcyjna",
    },

    40: {
    pytanie: "W jakiej dyscyplinie sportowej rywalizował Robert Kubica?",
    kategoria: "sławni polacy",
    odpowiedz: "w wyścigach np. F1",
    },

    41: {
    pytanie: "Jakiego pochodzenia jest Robert Burneika czyli Hardkorowy Koksu?",
    kategoria: "sławni polacy",
    odpowiedz: "litewskiego",
    },

    42: {
    pytanie: "Podaj markę samochodu z jakim zderzyła się kolumna rządowa Beaty Szydło w 2017r.",
    kategoria: "sławni polacy",
    odpowiedz: "fiat seicento",
    },

    43: {
    pytanie: "Jak nazywa się program restrukturyzacji polskich lokali gastronomicznych prowadzony przez Magdę Gessler?",
    kategoria: "sławni polacy",
    odpowiedz: "Kuchenne Rewolucje",
    },

    44: {
    pytanie: "W którym roku powstał serwis YT?",
    kategoria: "Internet",
    odpowiedz: "2005",
    },

    45: {
    pytanie: "Z którego roku pochodzi NyanCat? [pokazać obrazek]",
    kategoria: "Internet",
    odpowiedz: "2011",
    },

    46: {
    pytanie: "Jak długo teledysk Gangnam Style utrzymywał pozycję najpopularniejszego filmu pod względem wyświetleń?",
    kategoria: "Internet",
    odpowiedz: "5 lat",
    },

    47: {
    pytanie: "Z jakiego kraju pochodzi syntezator mowy IVONA?",
    kategoria: "Internet",
    odpowiedz: "Polska",
    },

    48: {
    pytanie: "Ile powstało części Płaska Ziemia Sci-Funa",
    kategoria: "Internet",
    odpowiedz: "5",
    },

    49: {
    pytanie: "PYTANIE MUZYCZNE Z jakiego komunikatora pochodzi ten dźwięk?",
    kategoria: "Internet",
    odpowiedz: "Skype",
    link: "https://www.youtube.com/embed/fTNMGDqq0AE?start=0",
    },

    50: {
    pytanie: "Ile minut wytrzymał Rafonix w challengu dzień bez słowa na K, możesz się pomylić o 5 minut",
    kategoria: "Internet",
    odpowiedz: "20 minut",
    },

    51: {
    pytanie: "Do kogo należy seria Zapytaj Beczkę?",
    kategoria: "Internet",
    odpowiedz: "Krzysztof Gonciarz",
    },

    52: {
    pytanie: "Z którego roku pochodzi Ice Bucket Challenge?",
    kategoria: "Internet",
    odpowiedz: "2014",
    },

    53: {
    pytanie: "Lekko stronniczy posiada więcej czy mniej niż 1000 odcinków?",
    kategoria: "Internet",
    odpowiedz: "więcej",
    },

    54: {
    pytanie: "Za przekroczenie 100k subów na YT otrzymujemy srebrny przycisk YT, jaki otrzymujemy po przekroczeniu 1 mln?",
    kategoria: "Internet",
    odpowiedz: "Złoty",
    },

    55: {
    pytanie: "Podaj treść najbardziej lajkowanego komentarza na YT lub nazwę jego autora",
    kategoria: "Internet",
    odpowiedz: "I'm the bald guy/Seth Everman",
    },

    56: {
    pytanie: "Podaj tytuł filmu krótkometrażowego, opartym na paście o starym fanatyku wędkarstwa",
    kategoria: "Internet",
    odpowiedz: "Fanatyk",
    },

    57: {
    pytanie: "Na jaki temat protagonista pasty Naukowa Dyskusja przygotował prezentację?",
    kategoria: "Internet",
    odpowiedz: "Metylacja DNA",
    },

    58: {
    pytanie: "Wymień 2 z 4 założycieli Kanału Sportowego",
    kategoria: "Internet",
    odpowiedz: "Krzysztof Stanowski, Michał Pol, Mateusz Borek, Tomasz Smokowski",
    },

    59: {
    pytanie: "Jakie słowo wygrało plebiscyt Młodzieżowego Słowa Roku w 2021?",
    kategoria: "Internet",
    odpowiedz: "Śpiulkolot",
    },

    60: {
    pytanie: "W którym roku zostało założone Fame MMA?",
    kategoria: "Internet",
    odpowiedz: "2018",
    },

    61: {
    pytanie: "Jak nazywał się program rozrywkowy prowadzony przez Mandzia i kolegę Ignacego na licencji Good Mythical Morning w latach 2018-2021?",
    kategoria: "Internet",
    odpowiedz: "Mniej więcej",
    },

    62: {
    pytanie: "Ile kosztował kurs Friza Jak zostać jutuberem, wydanym w 2020 roku?",
    kategoria: "Internet",
    odpowiedz: "1000zł",
    },

    63: {
    pytanie: "Ile było edycji Team X",
    kategoria: "Internet",
    odpowiedz: "3",
    },

    64: {
    pytanie: "Podaj nazwę ulicy na której znajduje się mieszkanie Daniela Magicala w Toruniu",
    kategoria: "Internet",
    odpowiedz: "Urzędnicza 2",
    },

    65: {
    pytanie: "Czy serwis Albicla jest nadal dostępny?",
    kategoria: "Internet",
    odpowiedz: "Tak",
    },

    66: {
    pytanie: "W którym roku firma Adobe zaprzestała obsługi wtyczki Flash w przeglądarkach?",
    kategoria: "Internet",
    odpowiedz: "2021",
    },

    67: {
    pytanie: "Która kategoria na twitchu jest bardziej popularna: Rozmowy czy League of Legends?",
    kategoria: "Internet",
    odpowiedz: "Rozmowy (Just Chatting)",
    },

    68: {
    pytanie: "O jakiej grze mówiła Grażyna Żarko w filmie Dzisiaj o maltretowaniu zwierząt?",
    kategoria: "Internet",
    odpowiedz: "Engri Berds",
    },

    69: {
    pytanie: "Jak nazywa się grupa filmowa założona w 2012 roku przez Jana Jurkowskiego i Marka Hucza, odpowiedzialna za takie serie jak Wielkie Konflikty?",
    kategoria: "Internet",
    odpowiedz: "Darwin",
    },

    70: {
    pytanie: "Jak nazywa się wydawnictwo książek, założone przez Radosława Kotarskiego?",
    kategoria: "Internet",
    odpowiedz: "Altenberg",
    },

    71: {
    pytanie: "W jaki dzień tygodnia nie jest czynny sklep internetowy Wojciecha Cejrowskiego?",
    kategoria: "Internet",
    odpowiedz: "Niedziela",
    },

    72: {
    pytanie: "Czy HejtPark z Marcinem Najmanem ma mniej czy więcej niż 10 mln wyświetleń?",
    kategoria: "Internet",
    odpowiedz: "więcej",
    },

    73: {
    pytanie: "Kto jest autorem przeróbki Star-Treka, w której pada zdanie Pan Maruda, niszczyciel dobrej zabawy, pogromca uśmiechów dzieci?",
    kategoria: "Internet",
    odpowiedz: "Dem3000",
    },

    74: {
    pytanie: "PYTANIE MUZYCZNE [21s] O jakim warzywie śpiewa wokalista?",
    kategoria: "Internet",
    odpowiedz: "żółty ziemniaczek",
    link: "https://www.youtube.com/embed/5qAcqnTVbM0?start=0",
    },

    75: {
    pytanie: "Jak nazywałą się seria vlogowa Jjayjokera?",
    kategoria: "Internet",
    odpowiedz: "Pod kapeluszem",
    },

    76: {
    pytanie: "Jak nazywał się pierwszy prowadzący programu Matura to Bzdura",
    kategoria: "Internet",
    odpowiedz: "Jakub Jankowski",
    },

    77: {
    pytanie: "Wymień 2 produkty spożywcze sprzedawane przez ekipę Friza",
    kategoria: "Internet",
    odpowiedz: "lody, batony, pączki, praliny, czekolada",
    },

    78: {
    pytanie: "Kto jest autorem pranka pies-pająk?",
    kategoria: "Internet",
    odpowiedz: "Sylwester Wardęga",
    },

    79: {
    pytanie: "W jakim mieście rozgrywa się główna akcja Ojca Mateusza?",
    kategoria: "kultura",
    odpowiedz: "Sandomierz",
    },

    80: {
    pytanie: "Jak nazywa się studio produkujące takie pozycje jak Kapitan Bomba, Blok Ekipa czy Piesek Leszek?",
    kategoria: "kultura",
    odpowiedz: "Git Produkcja/SPInka Film Studio",
    },

    81: {
    pytanie: "Z którego roku pochodzi gra Flappy Bird?",
    kategoria: "kultura",
    odpowiedz: "2013",
    },

    82: {
    pytanie: "W którym roku wyszedłm pierwszy zwiastun Magnaci i Czarodzieje?",
    kategoria: "kultura",
    odpowiedz: "2013",
    },

    83: {
    pytanie: "Który teledysk ma więcej wyświetleń na YT: Despacito czy Shape of You?",
    kategoria: "kultura",
    odpowiedz: "Despacito",
    },

    84: {
    pytanie: "Jak nazywał się człowiek, który zasugerował Fionę na królową lordowi Farquadowi w Shreku?",
    kategoria: "kultura",
    odpowiedz: "Telloniusz/kat",
    },

    85: {
    pytanie: "Wymień 2 pozostałe królewny jakie miał do wyboru lord Farquad oprócz Fiony",
    kategoria: "kultura",
    odpowiedz: "Kopciuszek i Królewna śnieżka",
    },

    86: {
    pytanie: "W jakie zwierzę przemienił się Osioł po wypiciu eliksiru żyj długo i szczęśliwie",
    kategoria: "kultura",
    odpowiedz: "Biały koń",
    },

    87: {
    pytanie: "W jakiej dzielnicy NY znajdowało się zoo, w którym mieszkali główni bohaterowie Madagaskaru?",
    kategoria: "kultura",
    odpowiedz: "Manhattan/Central Park",
    },

    88: {
    pytanie: "Wymień 4 z 8 członków Ligi Sprawiedliwości",
    kategoria: "kultura",
    odpowiedz: "Batman, superman, wonder woman, flash, cyborg, zielona latarnia, aquaman i marsjanin",
    },

    89: {
    pytanie: "Czy filmy Megamocny i Iniemamocni wyprodukowało to samo studio?",
    kategoria: "kultura",
    odpowiedz: "Nie, Megamocny - Dreamworks, Iniemamocni - Pixar",
    },

    90: {
    pytanie: "Ile lat uczył się angielskiego syn Adama Miaczyńskiego w Dniu Świra?",
    kategoria: "kultura",
    odpowiedz: "5 lat",
    },

    91: {
    pytanie: "Jak nazywał się trener Potężnej Piątki z Kung Fu Pandy?",
    kategoria: "kultura",
    odpowiedz: "Shifu",
    },

    92: {
    pytanie: "Ile powstało filmów w ToyStory w nazwie?",
    kategoria: "kultura",
    odpowiedz: "4",
    },

    93: {
    pytanie: "Ile sezonów ma gra o tron?",
    kategoria: "kultura",
    odpowiedz: "8",
    },

    94: {
    pytanie: "Jak nazywa się aktorka wcielająca się w rolę Denerys Tangarien w GoT?",
    kategoria: "kultura",
    odpowiedz: "Emilia Clarke",
    },

    95: {
    pytanie: "Przez kogo został założony amatorski zespół filmowy Skurcz",
    kategoria: "kultura",
    odpowiedz: "Bartosz Walaszek",
    },

    96: {
    pytanie: "Co ceni najbardziej w życiu Otis z filmu AiO Misja Kleopatra?",
    kategoria: "kultura",
    odpowiedz: "Ludzi",
    },

    97: {
    pytanie: "Z jakiego kraju pochodzą takie kreskówki jak Sąsiedzi, Krecik czy bajki z mchu i paproci?",
    kategoria: "kultura",
    odpowiedz: "Czechy/Czechosłowacja",
    },

    98: {
    pytanie: "W której części Kevina samego w domu wystąpiło cameo Donalda Trumpa?",
    kategoria: "kultura",
    odpowiedz: "Kevin sam w NY",
    },

    99: {
    pytanie: "Jaka jest ulubiona potrawa Po z Kung Fu Pandy?",
    kategoria: "kultura",
    odpowiedz: "kluski",
    },

    100: {
    pytanie: "Jakim gatunkiem zwierzęcia był dr Bulgot - największy wróg pingwinów z madagaskaru",
    kategoria: "kultura",
    odpowiedz: "delfin",
    },

    101: {
    pytanie: "Czy Jacek Soplica i Ksiądz Robak to ta samam osoba?",
    kategoria: "kultura",
    odpowiedz: "tak",
    },

    102: {
    pytanie: "Według Rickiego z chłopaków z baraków, na czym polega odpowiedzialność?",
    kategoria: "kultura",
    odpowiedz: "na wstawaniu rano po zachlanej nocy",
    },

    103: {
    pytanie: "Jaki zawód wykonywał Karol Krawczyk, jeden z głównych bohaterów Miodowych Lat?",
    kategoria: "kultura",
    odpowiedz: "Motorniczy tramwaju",
    },

    104: {
    pytanie: "Gdzie odbywała się główna akcja serialu Ucho prezesa?",
    kategoria: "kultura",
    odpowiedz: "W gabinecie prezesa na nowogrodzkiej",
    },

    105: {
    pytanie: "Podaj tytuł serialu, którego głównym antagonistą jest Janusz Tracz",
    kategoria: "kultura",
    odpowiedz: "Plebania",
    },

    106: {
    pytanie: "Odmianę jakiego czasownika angielskiego ćwiczył Adam Miaczyński z swoim synem w Dniu Świra?",
    kategoria: "kultura",
    odpowiedz: "Być, to be",
    },

    107: {
    pytanie: "Z jakiego filmu pochodzi piosenka miłość rośnie wokół nas",
    kategoria: "kultura",
    odpowiedz: "król lew",
    },

    108: {
    pytanie: "Jak nazywał się startowy pokemon Asha Ketchuma, którego otrzymał od prof. Oaka/Dębu",
    kategoria: "kultura",
    odpowiedz: "Pikachu",
    },

    109: {
    pytanie: "Ile synów miała matka w piosence radiotelegrafisty w 13-posterunku?",
    kategoria: "kultura",
    odpowiedz: "Trzech",
    },

    110: {
    pytanie: "Jak miała na imię ukochana Stanisława Wokulskiego w powieści Lalka?",
    kategoria: "kultura",
    odpowiedz: "Izabela Łęcka",
    },

    111: {
    pytanie: "Kto skomponował muzykę do takich filmów jak Indiana Jones, Gwiezdne Wojny, Park Jurajski czy Piraci z Karaibów?",
    kategoria: "kultura",
    odpowiedz: "John Wiliams",
    },

    112: {
    pytanie: "Jak nazywał się dziobak z kreskówki Fineasz i Ferb?",
    kategoria: "kultura",
    odpowiedz: "Pepe Pan Dziobak",
    },

    113: {
    pytanie: "Który z reżyserów: Stanisław Bareja czy Juliusz Machulski zrealizował takie filmy jak Seksmisja czy Vabank?",
    kategoria: "kultura",
    odpowiedz: "Juliusz Machulski",
    },

    114: {
    pytanie: "Według Martiego z Madagaskaru, który to jest kontynent? [6s]",
    kategoria: "kultura",
    odpowiedz: "Manhattan",
    link: "https://www.youtube.com/embed/_AVbRClk3HY?start=0",
    },

    115: {
    pytanie: "Jak nazywała się poboczna bohaterka pingwinów z madagaskaru, która była wydrą?",
    kategoria: "kultura",
    odpowiedz: "Marlenka",
    },

    116: {
    pytanie: "Podaj tytuł najpopularniejszego klipu z monologiem skryby z AiO Misja Kleopatra",
    kategoria: "memy",
    odpowiedz: "Idealna matura ustna z języka polskiego",
    },

    117: {
    pytanie: "W filmie AiO Misja Kleopatra, jak inaczej została nazwana winda?",
    kategoria: "kultura",
    odpowiedz: "dźwig bezwysiłkowy",
    },

    118: {
    pytanie: "Na jakiej piosence z telewizji był wzorowany film parabole tańczą?",
    kategoria: "memy",
    odpowiedz: "Chrześcijanin tańczy",
    },

    119: {
    pytanie: "Ile przypinek posiadał Jjayjoker na swoim kapeluszu?",
    kategoria: "Internet",
    odpowiedz: "2",
    },

    120: {
    pytanie: "W której edycji Tańca z Gwiazdami wziął udział Gimper?",
    kategoria: "Internet",
    odpowiedz: "9",
    },

    121: {
    pytanie: "W którym roku miała miejsce bitwa pod Empikiem na Marszu Niepodległości w Warszawie?",
    kategoria: "sławni polacy",
    odpowiedz: "2020",
    },

    122: {
    pytanie: "PYTANIE OBRAZKOWE Gdzie spędził wakacje ten pan?",
    kategoria: "memy",
    odpowiedz: "W mieście",
    link: "https://www.youtube.com/embed/P-dW2lsR3bY?start=0",
    },

    123: {
    pytanie: "Podaj nazwę kanału CTSG, który skupiał się na grze Minecraft",
    kategoria: "Internet",
    odpowiedz: "MinecraftPl",
    },

    124: {
    pytanie: "Kto jest odpowiedzialny za takie serie jak cichy żart czy cichy żarcik?",
    kategoria: "Internet",
    odpowiedz: "CichyWuj",
    },

    125: {
    pytanie: "Jaki film na YT posiada najwięcej dislikeów?",
    kategoria: "Internet",
    odpowiedz: "YT Rewind 2018",
    },

    126: {
    pytanie: "Ile sezonów ma South Park? Możesz pomylić się o 2",
    kategoria: "kultura",
    odpowiedz: "26",
    },

    127: {
    pytanie: "Jak nazywała się sowiecka wersja Toma i Jerrego?",
    kategoria: "kultura",
    odpowiedz: "Wilk i Zając",
    },

    128: {
    pytanie: "Podaj nazwę firmy, która miała pozwać Piotra Ogińskiego z kanału Kocham Gotować w 2013",
    kategoria: "Internet",
    odpowiedz: "Sokołów",
    },

    129: {
    pytanie: "PYTANIE OBRAZKOWE Jak nazywa się ten pan?",
    kategoria: "memy",
    odpowiedz: "Stachu Jones",
    link: "https://www.youtube.com/embed/_3JXCiWVCcg?start=0"
    },

    130: {
    pytanie: "Podaj nazwę jednego gatunku kosmitów z serialu Kapitan Bomba",
    kategoria: "kultura",
    odpowiedz: "kurvinox, dodupyzaur, skurwol, chujew, c'qrwozaur, zdupydomordyzaur, skurwywij, kurwaczerw, kutanoid",
    },

    131: {
    pytanie: "",
    kategoria: "",
    odpowiedz: "",
    },
  };

  if (!localStorage.getItem("dataFinal")) {
    localStorage.setItem("dataFinal", JSON.stringify(dataFinal));
  }
  if (!localStorage.getItem("allDataFinal")) {
    localStorage.setItem("allDataFinal", JSON.stringify(dataFinal));
  }

  if (!localStorage.getItem("dataA4a")) {
    localStorage.setItem("dataA4a", JSON.stringify(dataA4a));
  }
  if (!localStorage.getItem("allDataA4a")) {
    localStorage.setItem("allDataA4a", JSON.stringify(dataA4a));
  }

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/grzegorziada" element={<A4A />} />
          <Route path="/grzegorziada/final" element={<Final />} />
        </Routes>
      </Layout>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React test</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
