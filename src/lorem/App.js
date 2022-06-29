import { useState } from "react";
import data from "./data";
const App = () => {
  const [text, setText] = useState([]);
  const [count, setCount] = useState(0);
  const handleSetText = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (amount > 8) amount = 8;
    if (amount < 0) amount = 1;
    setText(data.slice(0, amount));
  };

  return (
    <div className="lorem-body">
      <section className="section-center">
        <h1>tired of boring lorem ipsum?</h1>
        <form className="form-control">
          <label htmlFor="amount">Paragraphs</label>
          <input
            id="amount"
            type="number"
            placeholder="0"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          ></input>
          <button onClick={handleSetText}>Generate</button>
        </form>
        {text.map((item, index) => {
          return (
            <p className="text" key={index}>
              {item}
            </p>
          );
        })}
      </section>
    </div>
  );
};

export default App;
