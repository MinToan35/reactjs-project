import { useState, useEffect } from "react";
const url = "https://course-api.com/react-tabs-project";
const App = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const reponse = await fetch(url);
    const newJobs = await reponse.json();
    setJobs(newJobs);
    setLoading(false);
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    );
  }
  const { company, dates, duties, title } = jobs[value];
  return (
    <div className="tabs-body">
      <section className="section-center">
        <h1>Experience</h1>
        <div className="underline"></div>
        <div className="info-container">
          <div className="btn-control">
            {jobs.map((item, index) => {
              return (
                <button
                  key={item.id}
                  onClick={() => setValue(index)}
                  className={` ${index === value && "btn-active"} `}
                >
                  {item.company}
                </button>
              );
            })}
          </div>
          <div className="info">
            <h3>{title}</h3>
            <strong>{company}</strong>
            <p className="date">{dates}</p>
            {duties.map((item, index) => {
              return (
                <p key={index} className="text">
                  <i className="fa-solid fa-angles-right"></i> {item}
                </p>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
