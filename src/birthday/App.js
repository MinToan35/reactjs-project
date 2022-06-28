import { useState } from "react";
import data from "./data";
const App = () => {
  const [character, setCharacter] = useState(data);
  const [refresh, setRefresh] = useState(false);
  const handleClear = () => {
    setRefresh(!refresh);
    if (!refresh) {
      setCharacter([]);
    } else {
      setCharacter(data);
    }
  };
  return (
    <div className="birthday-body">
      <section className="section-center">
        <h1>{data.length} birthdays today </h1>
        {character.map(({ id, image, name, age }) => {
          return (
            <article className="character" key={id}>
              <img className="image-character" src={image} alt={name} />
              <div className="info">
                <h3>{name}</h3>
                <p>{age}</p>
              </div>
            </article>
          );
        })}
        <button className="btn-clear" onClick={handleClear}>
          {refresh ? "Refresh All" : "Clear All"}
        </button>
      </section>
    </div>
  );
};

export default App;
