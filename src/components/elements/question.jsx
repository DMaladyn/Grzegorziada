import classes from "./question.module.css";

function Question(props) {
  let data = JSON.parse(localStorage.getItem("data" + props.category));
  let keys = Object.keys(data);
  let randomKey = keys[Math.floor(Math.random() * keys.length)];

  const question = data[randomKey].pytanie;
  const category = data[randomKey].kategoria;
  const answer = data[randomKey].odpowiedz;
  const link = data[randomKey].link;

  delete data[randomKey];

  if (Object.keys(data).length === 0) {
    localStorage.setItem(
      "data" + props.category,
      localStorage.getItem("allData" + props.category)
    );
  } else {
    localStorage.setItem("data" + props.category, JSON.stringify(data));
  }

  return (
    <div className={classes.container}>
      <div className={classes.question}>Pytanie: {question}</div>
      <div className={classes.category}>Kategoria: {category}</div>
      {link ? (
        <a
          className={classes.link}
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          {link}
        </a>
      ) : null}
      <div className={classes.answer}>Odpowiedz: {answer}</div>
    </div>
  );
}
export default Question;
