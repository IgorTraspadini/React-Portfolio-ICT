import './style.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return <>
    <nav className="navbar fixed-top navbar-expand-lg ">
      <div className="container-fluid d-flex">
        <h1 className="navbar-brand fw-bolder"><img src='./src/assets/logo.JPG' width='50px' alt='logo'></img> Igor Traspadini </h1>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav fw-bolder">
            <li className="nav-item">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/projects"
                end
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                end
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
}

export default Header;