import { configureStore } from '@reduxjs/toolkit';
import eventosReducer from'./reducers/eventosReducer'

//el reducer es el que reduce las porciones de estado a uno solo
//el configureStore recibe un objeto que va a recibir el reduce
export const store = configureStore({
  reducer: {
    eventos: eventosReducer //antes habia un array vacio
    // clientes: ,cada uno de estos va a estar llamando a un reductor, ahora llamamos solo a uno
    // usuario: ,
  },
});
