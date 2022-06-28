import { useState, useEffect } from "react";
import Tour from "./Tour";
const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchTours = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const newTour = await res.json();
      setTours(newTour);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);

  const handleDelete = (id) => {
    const newTours = tours.filter((item) => item.id !== id);
    setTours(newTours);
  };

  return (
    <div className="tour-body">
      {loading ? (
        <h2>Loading</h2>
      ) : (
        <div>
          <div className="tour-container">
            <div className="header-title">
              <h1>our tour</h1>
              <div className="underline"></div>
            </div>
            {tours.map((item) => {
              return (
                <section className="list-tour" key={item.id}>
                  <Tour tour={item} />
                  <button
                    className="btn-delete"
                    onClick={() => handleDelete(item.id)}
                  >
                    Not Interesting
                  </button>
                </section>
              );
            })}
          </div>
          {tours.length === 0 && (
            <button className="refresh-btn" onClick={fetchTours}>
              Refresh
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
