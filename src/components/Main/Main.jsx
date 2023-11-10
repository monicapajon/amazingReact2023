import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CardComponent from '../Card';
import SearchFilter from '../SearchFilter';
import Checkbox from '../Checkbox';
import './Main.css';

const Main = ({ title }) => {
  const eventos = useSelector((store) => store.eventos);
  let [filteredEvents, setFilteredEvents] = useState([]);
  let [eventName, setEventName] = useState('');
  let [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    if (title === 'Past events') {
      setFilteredEvents(eventos.filter((event) => event.assistance));
    } else if (title === 'Upcoming events') {
      setFilteredEvents(eventos.filter((event) => event.estimate));
    } else {
      setFilteredEvents(eventos);
    }
  }, [eventos, title]);

  const filterEvents = (name, categories) => {
    const eventsFilter = eventos.filter((event) => {
      let nameMatch = event.name.toLowerCase().includes(name.toLowerCase());
      const categoryMatch =
        categories.length === 0 || categories.includes(event.category);
      return nameMatch && categoryMatch;
    });
    setFilteredEvents(eventsFilter);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    filterEvents(eventName, selectedCategories);
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setEventName(inputValue);
    filterEvents(inputValue, selectedCategories);
  };

  const filterEventsByCategories = (categories) => {
    let eventsFilter = eventos.filter((evento) =>
      categories.includes(evento.category)
    );
    setFilteredEvents(eventsFilter);
  };

  const handleCategoryChange = (categories) => {
    setSelectedCategories(categories);
    filterEvents(eventName, categories);
  };

  return (
    <div>
      <h1 className="page_title text-shadow-diagonal" role="mainElement">
        {title}
      </h1>
      <form className="search" onSubmit={handleSearchSubmit}>
        <Checkbox
          className="checkbox"
          selectedCategories={selectedCategories}
          handleCategoryChange={handleCategoryChange}
        />
        <SearchFilter
          className="search_bar"
          eventName={eventName}
          handleInputChange={handleInputChange}
        />
      </form>
      <div className="event_cards">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((evento, index) => (
            <CardComponent key={index} evento={evento} />
          ))
        ) : eventName ? (
          <p>No events found matching your search.</p>
        ) : (
          <div className="card-container">
            {eventos.map((evento, index) => (
              <CardComponent key={index} evento={evento} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
