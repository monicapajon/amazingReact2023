import React from 'react';
import { Link, useParams } from 'react-router-dom';
import 'bulma/css/bulma.css';
import Layout from '../layouts/Layout';

const Details = ({ eventos }) => {
  const { id } = useParams();
  const evento = eventos.find((evento) => evento._id.toString() === id);

  return (
    <Layout>
      {evento ? (
        <div className="card_details">
          <div className="image-container">
            <img
              src={evento.image}
              alt="Bold typography"
              style={{
                display: 'block',
                objectFit: 'cover',
                width: '100%',
                height: 140,
                backgroundColor: 'var(--gray-5)',
              }}
            />
          </div>
          <div className="details_content">
            <h2>{evento.name}</h2>
            <h3>
              {evento.date} at {evento.place}
            </h3>
            <p>{evento.description}</p>
            <p>Category: {evento.category}</p>
            <p>Price: ${evento.price}</p>
            <div className="button-container">
              <Link className="button is-primary go_back" to="/">
                Go Back
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div>Evento no encontrado.</div>
      )}
    </Layout>
  );
};

export default Details;
