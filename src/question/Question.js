import { useState } from "react";
const Question = ({ item }) => {
  const [showMore, setShowMore] = useState(false);
  const { question, info } = item;
  return (
    <div>
      <div className="header">
        <h3>{question}</h3>
        <button onClick={() => setShowMore(!showMore)}>
          {showMore ? (
            <i className="fa-solid fa-minus"></i>
          ) : (
            <i className="fa-solid fa-plus"></i>
          )}
        </button>
      </div>
      {showMore && <p className="info">{info}</p>}
    </div>
  );
};

export default Question;
