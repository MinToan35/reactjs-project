import { useState } from "react";

const Tour = ({ tour }) => {
  const { image, id, name, price, info } = tour;
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="tour">
      <img src={image} alt={name} />
      <div className="title-info">
        <h3>{name}</h3>
        <span>${price}</span>
      </div>
      <p className="text-info">
        {readMore ? `${info}` : `${info.substring(0, 200)}...`}
        <button className="readMore" onClick={() => setReadMore(!readMore)}>
          {readMore ? "Show Less" : "Read More"}
        </button>
      </p>
    </article>
  );
};

export default Tour;
