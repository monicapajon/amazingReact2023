import React from 'react';
import 'bulma/css/bulma.css';
import './SearchFilter.css';

const SearchFilter = ({ eventName, handleInputChange }) => {
  return (
    <div className="field inputSearch" >
      <p className="control has-icons-left">
        <input
          className="input"
          type="text"
          placeholder="Search events"
          value={eventName}
          onChange={handleInputChange}  role='buttonEvent'
        />
        {/* aqui abajo seria el boton de busqueda*/}
        <span className="icon is-small is-left"  role='searchEvent'>
          <i className="fas fa-search"></i>
        </span>
      </p>
    </div>
  );
};

export default SearchFilter;



