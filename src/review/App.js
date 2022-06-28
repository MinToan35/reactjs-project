import { useState } from "react";
import data from "./data";
const App = () => {
  const [index, setIndex] = useState(0);
  const { image, name, job, text } = data[index];
  const checkIndex = (number) => {
    if (number > data.length - 1) return 0;
    if (number < 0) return data.length - 1;
    return number;
  };
  const nextPeople = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };
  const prevPeople = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };
  const ramdomPeople = () => {
    setIndex((index) => {
      let newIndex = Math.floor(Math.random() * data.length);
      if (newIndex === index) newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };
  return (
    <div className="review-body">
      <section className="section-center">
        <h1>Our Reviews</h1>
        <div className="underline"></div>
        <article className="info-container">
          <img src={image} alt={name} />
          <h3>{name}</h3>
          <p className="job">{job}</p>
          <p className="text">{text}</p>
          <div className="btn-control">
            <button onClick={prevPeople}>
              <i className="fa-solid fa-angle-left"></i>
            </button>
            <button onClick={nextPeople}>
              <i className="fa-solid fa-angle-right"></i>
            </button>
          </div>
          <button className="btn-random" onClick={ramdomPeople}>
            Suprises Me
          </button>
        </article>
      </section>
    </div>
  );
};

export default App;
