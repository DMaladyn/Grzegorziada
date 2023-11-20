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
      pytanie: "Jaki kolor ma papiesz",
      kategoria: "kultura",
      odpowiedz: "żółty",
    },

    1: {
      pytanie: "jaki kolor miała kurtka najmana",
      kategoria: "memy",
      odpowiedz: "niebieski",
    },

    2: {
      pytanie: "jaki kolor ma krzysztof",
      kategoria: "tim",
      odpowiedz: "zloty",
      link: "https://www.youtube.com/embed/WM7Se7iS7is?start=164",
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
