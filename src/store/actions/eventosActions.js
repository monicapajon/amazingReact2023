import { createAction } from '@reduxjs/toolkit';

const get_eventos = createAction('get_eventos', () => {
  //la funcion callback va a devolver un array q va a ser la carga util
  //identificación unica de la accion y la accion q va a realizar por ej traer un array de eventos
  try {
    //aqui vamos a meter la funcion, o lo q queramos que haga la funcion
    let eventos = [
      //aqui hacemos una solicitud con la API AXIOS fetch
      { name: 'Evento1', description: 'description1' },
      { name: 'Evento2', description: 'description2' },
      { name: 'Evento3', description: 'description3' },
      { name: 'Evento4', description: 'description4' },
      { name: 'Evento5', description: 'description5' },
    ];
    return {
      //retorna un objeto dentro de una propiedad
      eventos: eventos,
    };
  } catch (e) {
    console.log('Error:  ' + e);
  }
});

const eventosActions = { get_eventos };
export default eventosActions;
