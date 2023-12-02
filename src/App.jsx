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
      link: "https://www.youtube.com/embed/V_PgKNS0mAI?start=2"
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
    link: "https://www.youtube.com/embed/Fx_68kFo9Po?start=21"
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
    link: "https://www.youtube.com/embed/ZHuUcaw4Yz4?start=0"
    },

    21: {
    pytanie: "PYTANIE OBRAZKOWE Jak nazywa się ta grafika?",
    kategoria: "memy",
    odpowiedz: "Cenzopapa",
    link: "https://www.youtube.com/embed/5Uio3mIvoCg?start=2"
    },

    22: {
    pytanie: "Do kogo zwracał się Kamil Durczok w studiu Faktów, odnośnie upierdolonego stołu?",
    kategoria: "memy",
    odpowiedz: "Rurku",
    },

    23: {
    pytanie: "PYTANIE OBRAZKOWE Jak nazywa się ten pan?",
    kategoria: "memy",
    odpowiedz: "Jerzy Urban",
    link: "https://www.youtube.com/embed/fL7S7KfV3KQ?start=0"
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
      pytanie: "Jaki kolor ma grzegirz",
      kategoria: "masa",
      odpowiedz: "biały",
    },

    1: {
      pytanie: "jaki kolor ma drzewo",
      kategoria: "natura",
      odpowiedz: "zielony-brazowy",
    },

    2: {
      pytanie: "jaki kolor ma discorddddddddddddddddddddddddddd ddddddddddd",
      kategoria: "socialmedia",
      odpowiedz: "szary",
      link: "https://www.youtube.com/embed/msnZaDlBb3Q?start=164",
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
