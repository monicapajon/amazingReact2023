import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const get_eventos = createAsyncThunk('get_eventos', async () => {
                      
  try {
    let eventos = await axios.get('/src/data/data.json').then((response) => {
      return response.data.events;
    });

    return eventos;
  } catch (e) {
    console.log(e);
  }
});

const eventosActions = { get_eventos };

export default eventosActions;
