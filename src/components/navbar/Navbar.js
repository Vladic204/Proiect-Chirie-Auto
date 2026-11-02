import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="logo" aria-label="Chirie Auto, pagina principală">
            <span className="logo__mark" aria-hidden="true">C</span><span>CHIRIE<strong>AUTO </strong></span>
          </NavLink>

          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  "nav-list__link" + (isActive ? " nav-list__link--active" : "")
                }
              >
                Acasă
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink
                to="/auto"
                className={({ isActive }) =>
                  "nav-list__link" + (isActive ? " nav-list__link--active" : "")
                }
              >
                Mașini
              </NavLink>
            </li>
            <li className="nav-list__item">
              <a href="/#despre" className="nav-list__link">Despre noi</a>
            </li>
          </ul>
          <NavLink to="/auto" className="nav-cta">Găsește o mașină <span aria-hidden="true">↗</span></NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;