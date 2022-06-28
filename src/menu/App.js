import { useState } from "react";
import data from "./data";
const allCategory = ["all", ...new Set(data.map((item) => item.category))];
const App = () => {
  const category = allCategory;

  const [menu, setMenu] = useState(data);
  const handleFilter = (category) => {
    if (category === "all") {
      setMenu(data);
      return;
    }
    const newMenu = data.filter((item) => item.category === category);
    setMenu(newMenu);
  };
  return (
    <div className="menu-body">
      <section className="section-center">
        <h1>Our Menu</h1>
        <div className="underline"></div>
        <div className="btn-control">
          {category.map((item) => {
            return (
              <button key={item.id} onClick={() => handleFilter(item)}>
                {item}
              </button>
            );
          })}
        </div>
        <section className="menu-content">
          {menu.map(({ title, img, id, price, desc }) => {
            return (
              <article key={id} className="menu-item">
                <img src={img} alt="title" />
                <div className="info-container">
                  <div className="header">
                    <h3>{title}</h3>
                    <span>${price}</span>
                  </div>
                  <p className="desc">{desc}</p>
                </div>
              </article>
            );
          })}
        </section>
      </section>
    </div>
  );
};

export default App;
