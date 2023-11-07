import React from 'react';
import 'bulma/css/bulma.css';

import { Link, useNavigate } from 'react-router-dom';

const CardComponent = ({ evento }) => {
  let navigate = useNavigate();
  let handleDetailsClick = () => {
    navigate(`/details/${evento._id}`);
  };

  return (
    <div className="container">
      {Object.keys(evento).length > 0 ? (
        <div className="card card_bg" style={{ maxWidth: '240px' }}>
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={evento.image} alt="Bold typography" />
            </figure>
          </div>
          <div className="card-content">
            <div className="content">
              <h3 className="title is-3 event_title">
                {evento.name ? evento.name : 'no hay titulo'}
              </h3>
              <p className="event_description">
                {evento.description ? evento.description : 'no hay descripción'}
              </p>
              <br />
              <div className="price_button">
                <p>${evento.price}</p>
                <Link to={`/details/${evento._id}`}>
                  <button
                    className="button is-crimson DetailsButton"
                    onClick={handleDetailsClick}>
                    Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CardComponent;
