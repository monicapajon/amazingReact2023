import React from 'react';
import { Link } from 'react-router-dom';
import 'bulma/css/bulma.css';
import Icon from '../../assets/icon-stage.png';
import Calendar from '../../assets/calendar.png';

const Navbar = () => {
  return (
    <nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <img className="imgLogo" src={Icon} alt="Logo" />
        </Link>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-item has-dropdown is-hoverable">
            <Link to="/" className="navbar-link">
              EVENTS
            </Link>
            <div className="navbar-dropdown">
              <Link to="/" className="navbar-item">
                <img src={Calendar} className="calendar" alt="Calendar" />
                <div className="CalloutHeading">AMAZING EVENTS</div>
                <p className="CalloutText">
                  Encuentra aqui los mejores eventos
                </p>
              </Link>
              <Link to="/" className="navbar-item">
                All events
                <p>¡Mira todos los eventos geniales!</p>
              </Link>
              <Link to="/past" className="navbar-item">
                Past events
                <p>Obtén mas información</p>
              </Link>
              <Link to="/upcoming" className="navbar-item">
                Upcoming events
                <p>Lo que vendra</p>
              </Link>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <Link to="/stats" className="navbar-item">
            STATS
          </Link>
          <Link to="/contact" className="navbar-item">
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
