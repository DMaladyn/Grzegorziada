import { useState } from "react";

import classes from "./question.module.css";
import audioR from "../../assets/right.mp3";
import audioW from "../../assets/wrong.mp3";
import audioS from "../../assets/swap.mp3";

function Question(props) {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("data" + props.category))
  );
  let keys = Object.keys(data);
  let randomKey = keys[Math.floor(Math.random() * keys.length)];

  let question = data[randomKey].pytanie;
  let category = data[randomKey].kategoria;
  let answer = data[randomKey].odpowiedz;
  let link = data[randomKey].link;

  let remaining = keys.length - 1;

  delete data[randomKey];

  if (Object.keys(data).length === 0) {
    localStorage.setItem(
      "data" + props.category,
      localStorage.getItem("allData" + props.category)
    );
  } else {
    localStorage.setItem("data" + props.category, JSON.stringify(data));
  }

  let audioRight = new Audio(audioR);
  let audioWrong = new Audio(audioW);
  let audioSwap = new Audio(audioS);

  const playRight = () => {
    audioRight.play();
  };

  const playWrong = () => {
    audioWrong.play();
  };

  const playSwap = () => {
    audioSwap.play();
  };

  function reroll() {
    playSwap();
    setData(JSON.parse(localStorage.getItem("data" + props.category)));
  }

  return (
    <div className={classes.container}>
      <div className={classes.question}>Pytanie: {question}</div>
      <div className={classes.category}>Kategoria: {category}</div>
      {link ? <iframe allowFullScreen src={link}></iframe> : null}
      <div className={classes.answer}>Odpowiedz: {answer}</div>
      <div className={classes.remaining}>Pozostało: {remaining}</div>
      <div className={classes.buttons}>
        <button className={classes.wrong} onClick={() => playWrong()}>
          ŹLE
        </button>
        <button className={classes.reroll} onClick={() => reroll()}>
          Nowe Pytanie
        </button>
        <button className={classes.right} onClick={() => playRight()}>
          DOBRZE
        </button>
      </div>
    </div>
  );
}
export default Question;
