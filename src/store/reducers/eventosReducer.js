import { createReducer } from '@reduxjs/toolkit'; //los reductores son los q van a modificar los eventos
import eventosActions from '../actions/eventosActions';

const initialState = [];
//inicio con un array vacio
//eventos: [],
//el createReducer va a recibir una funcion inicial y un callback

const eventosReducer = createReducer(initialState, (builder) => {
  //el builder va a manejar las acciones del reductor y como se va a manejar despues
  return builder.addCase(
    eventosActions.get_eventos.fulfilled,
    (state, action) => {
      //Pueden haber varias addcase .Me devuelve el state q es el estado actual q tiene el reduce y una action asociada y de ahi se va apoder sacar los datos

      //console.log(action, payload);
      let newState = action.payload;

      return newState;
      //         [
      //           //aqui haciamos una solicitud con la API AXIOS fetch
      //           { name: 'Evento1', description: 'description1' },
      //           { name: 'Evento2', description: 'description2' },
      //           { name: 'Evento3', description: 'description3' },
      //           { name: 'Evento4', description: 'description4' },
      //           { name: 'Evento5', description: 'description5' },
      //         ],

      //
      //siempre hay que clonarlo

      return newState;
    }
  );
});

export default eventosReducer;
