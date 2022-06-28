import { useState } from "react";
import question from "./data";
import Question from "./Question";
const App = () => {
  return (
    <div className="question-body">
      <section className="section-center">
        <h2>Questions And Answers About Login</h2>
        <div className="question-container">
          {question.map((item) => {
            return (
              <article className="question-item" key={item.id}>
                <Question item={item} />
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default App;
