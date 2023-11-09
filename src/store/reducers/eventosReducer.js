import { createReducer } from '@reduxjs/toolkit'; //los reductores son los q van a modificar los eventos
import eventosActions from '../actions/eventosActions';

const initialState = {
  //inicio con un array vacio
  eventos: [],
};
//el createReducer va a recibir una funcion inicial y un callback

const eventosReducer = createReducer(initialState, (builder) => {
  //el builder va a manejar las acciones del reductor y como se va a manejar despues
  return builder.addCase(eventosActions.get_eventos, (state, action) => {
    //Pueden haber varias addcase .Me devuelve el state q es el estado actual q tiene el reduce y una action asociada y de ahi se va apoder sacar los datos
    // let newState = {...state, details: action.payload}//vamos a crear un nuevo estado, le vamos a clonar el estado anterior y le vamos a agregar datos. details va a hacer lo q tengo en action.payload. (Es un ejemplo)
    let newState = {...state, eventos: action.payload.eventos}//siempre hay que clonarlo

    return newState; //vamos al index.js
  });
});
export default eventosReducer;
