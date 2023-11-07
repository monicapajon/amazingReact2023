import React from 'react';
import 'bulma/css/bulma.css';

function Footer() {
  return (
    <footer
      className="footer has-background-primary"
      aria-label="footer presentation"
      role="presentation">
      <div className="container">
        <div className="columns is-vcentered is-mobile">
          <div className="column is-5">
            <div className="social-icons">
              <a href="#" className="social-icon">
                <i className="fab fa-instagram has-text-black is-size-4"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-facebook has-text-black is-size-4"></i>
              </a>
              <a href="https://wa.me/+5493516508121" className="social-icon">
                <i className="fab fa-whatsapp has-text-black is-size-4"></i>
              </a>
            </div>
          </div>
          <div className="column is-2 has-text-centered">
            <p className="has-text-weight-bold has-text-black is-size-5">
              Cohort
            </p>
          </div>
          <div className="column is-5 has-text-centered">
            Hecho por Mónica Pajón{' '}
            <i className="fas fa-heart has-text-black is-size-4"></i>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
