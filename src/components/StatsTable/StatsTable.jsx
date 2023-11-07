import React, { useState, useEffect } from 'react';
import 'bulma/css/bulma.css';
import './StatsTable.css';
import axios from 'axios';

const StatsTable = () => {
  const [data, setData] = useState({
    mostVisitedEvent: null,
    lessVisitedEvent: null,
    maxCapacityEvent: null,
  });

  const [upcomingEventsData, setUpcomingEventsData] = useState([]);
  const [pastEventsData, setPastEventsData] = useState([]);

  useEffect(() => {
    axios
      .get('src/data/data.json')
      .then((response) => {
        const fetchedData = response.data;
        processData(fetchedData);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  function formatPercentage(a, b) {
    return ((a / b) * 100).toFixed(2) + '%';
  }

  function updateScoreBoardTable(eventsData) {
    const eventsSortedByConcurrency = eventsData.sort(
      (a, b) =>
        (b.assistance / b.capacity) * 100 - (a.assistance / a.capacity) * 100
    );

    const mostVisitedEvent = eventsSortedByConcurrency[0];
    const lessVisitedEvent =
      eventsSortedByConcurrency[eventsSortedByConcurrency.length - 1];

    const maxCapacityEvent = eventsData.reduce(function (prev, current) {
      return prev.capacity > current.capacity ? prev : current;
    });

    setData({
      mostVisitedEvent,
      lessVisitedEvent,
      maxCapacityEvent,
    });
  }

  function processData(data) {
    const pastEventsCategoryStats = {};
    const futureEventsCategoryStats = {};

    const pastEvents = data.events.filter((event) => event.assistance);
    const futureEvents = data.events.filter((event) => !event.assistance);

    pastEvents.forEach((event) => {
      const category = event.category;
      if (!pastEventsCategoryStats[category]) {
        pastEventsCategoryStats[category] = {
          category,
          revenues: 0,
          attendanceTotal: 0,
          capacityTotal: 0,
        };
      }
      pastEventsCategoryStats[category].revenues += Number(
        event.price * event.assistance
      );
      pastEventsCategoryStats[category].attendanceTotal += Number(
        event.assistance
      );
      pastEventsCategoryStats[category].capacityTotal += Number(event.capacity);
    });

    futureEvents.forEach((event) => {
      const category = event.category;
      if (!futureEventsCategoryStats[category]) {
        futureEventsCategoryStats[category] = {
          category,
          revenues: 0,
          attendanceTotal: 0,
          capacityTotal: 0,
        };
      }
      futureEventsCategoryStats[category].revenues += Number(
        event.price * event.estimate
      );
      futureEventsCategoryStats[category].attendanceTotal += Number(
        event.estimate
      );
      futureEventsCategoryStats[category].capacityTotal += Number(
        event.capacity
      );
    });

    updateScoreBoardTable(pastEvents);

    setUpcomingEventsData(Object.values(futureEventsCategoryStats));
    setPastEventsData(Object.values(pastEventsCategoryStats));
  }

  return (
    <div>
      <div className="tableContainer">
        <div className="tableTitle">EVENTS STATISTICS</div>
        <table className="table">
          <thead>
            <tr>
              <th>Event with the highest percentage of attendance</th>
              <th>Event with the lowest percentage of attendance</th>
              <th>Event with larger capacity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.mostVisitedEvent ? data.mostVisitedEvent.name : ''}</td>
              <td>{data.lessVisitedEvent ? data.lessVisitedEvent.name : ''}</td>
              <td>{data.maxCapacityEvent ? data.maxCapacityEvent.name : ''}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="tableContainer">
        <div className="tableTitle">UPCOMING EVENTS STATISTICS BY CATEGORY</div>
        <table className="table table-striped stats-color">
          <thead className="stats-color">
            <tr>
              <th>Categories</th>
              <th>Revenues</th>
              <th>Percentage of attendance</th>
            </tr>
          </thead>
          <tbody>
            {upcomingEventsData.map((event) => (
              <tr key={event.category}>
                <td>{event.category}</td>
                <td>{event.revenues}</td>
                <td>
                  {formatPercentage(event.attendanceTotal, event.capacityTotal)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="tableContainer">
        <div className="tableTitle">PAST EVENTS STATISTICS BY CATEGORY</div>
        <table className="table table-striped stats-color">
          <thead className="stats-color">
            <tr>
              <th>Categories</th>
              <th>Revenues</th>
              <th>Percentage of attendance</th>
            </tr>
          </thead>
          <tbody>
            {pastEventsData.map((event) => (
              <tr key={event.category}>
                <td>{event.category}</td>
                <td>{event.revenues}</td>
                <td>
                  {formatPercentage(event.attendanceTotal, event.capacityTotal)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StatsTable;
