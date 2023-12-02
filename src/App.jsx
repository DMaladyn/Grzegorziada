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
