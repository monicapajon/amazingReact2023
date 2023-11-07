import { configureStore } from '@reduxjs/toolkit';

//el reducer es el que reduce las porciones de estado a uno solo
//el configureStore recibe un objeto que va a recibir el reduce
export const store = configureStore({
  reducer: {
    eventos: [],
    // clientes: ,cada uno de estos va a estar llamando a un reductor, ahora llamamos solo a uno
    // usuario: ,
  },
});
