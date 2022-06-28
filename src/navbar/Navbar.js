import { useRef, useState, useEffect } from "react";
import link from "./data";
import logo from "./navbar.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const linksHeightContainer = useRef(0);
  const linksHeightList = useRef(0);
  useEffect(() => {
    const heighLinks = linksHeightList.current.getBoundingClientRect().height;
    if (toggle) {
      linksHeightContainer.current.style.height = `${heighLinks}px`;
    } else {
      linksHeightContainer.current.style.height = 0;
    }
  }, [toggle]);

  return (
    <nav className="nav-bar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="logo" />
          <button className="toggle-btn" onClick={() => setToggle(!toggle)}>
            <i className="fas fa-bars toggle"></i>
          </button>
        </div>

        <div className="list-container" ref={linksHeightContainer}>
          <ul className="lists-item" ref={linksHeightList}>
            {link.map(({ id, url, text }) => {
              return (
                <li key={id} className="list-item">
                  <Link to={url} className="list-link">
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
