
import React, { useEffect, useState } from "react";
import CardComponent from "../Card";
import SearchFilter from "../SearchFilter";
import Checkbox from "../Checkbox";
import "./Main.css";

const Main = (props) => {
  let [eventos, setEventos] = useState([]);
  let [filteredEvents, setFilteredEvents] = useState([]);
  let [eventName, setEventName] = useState("");
  let [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    setEventos(props.events);
    setFilteredEvents(props.events);
  }, [props.events]);

  const filterEvents = (name, categories) => {
    const eventsFilter = eventos.filter((event) => {
      let nameMatch = event.name.toLowerCase().includes(name.toLowerCase());
      const categoryMatch =
        categories.length === 0 || categories.includes(event.category);
      return nameMatch && categoryMatch;
    });
    setFilteredEvents(eventsFilter);
  };
//search
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    filterEvents(eventName, selectedCategories);
  };

//este es el del buscador search
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
    <>
      <h1 className="page_title text-shadow-diagonal">{props.title}</h1>
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
          eventos.map((evento, index) => (
            <CardComponent key={index} evento={evento} />
          ))
        )}
      </div>
    </>
  );
};

export default Main;
