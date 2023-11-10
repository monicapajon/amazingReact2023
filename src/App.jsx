import './App.css';
import 'bulma/css/bulma.css';
import Home from './pages/Home';
import Stats from './pages/Stats';
import Contact from './pages/Contact';
import Details from './pages/Details';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; //me va a disparar el eventos actions
import eventosActions from './store/actions/eventosActions';

function App() {
  let [pastEvents, setPastEvents] = useState([]);
  let [upcomingEvents, setUpcomingEvents] = useState([]);

  const dispatch = useDispatch(); //antes del useEffect porque es donde se carga el componente. Hay que meterlo adentro del despachante porque los hooks no se pueden meyter dentro de otro hook
  const eventos = useSelector((store) => store.eventos);

  useEffect(() => {
    dispatch(eventosActions.get_eventos());
  }, []);

  //   useEffect(() => {
  //     if (eventos.length == 0) {
  //       dispatch(eventosActions.get_eventos());
  //     } else {
  //       setEventosFiltrados(eventos);
  //     }
  //   }, []);//Este es para home

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home title="Amazing events" events={eventos} />}
          />
          <Route
            path="/past"
            element={<Home title="Past events" events={pastEvents} />}
          />
          <Route
            path="/upcoming"
            element={<Home title="Upcoming events" events={upcomingEvents} />}
          />
          <Route path="/stats" Component={Stats} />
          <Route path="/contact" Component={Contact} />
          <Route path="/details/:id" element={<Details eventos={eventos} />} />
          <Route
            path="*"
            element={<div className="error">404: not found</div>}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
