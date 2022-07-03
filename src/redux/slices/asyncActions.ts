import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';
import { Flowers } from './types';

export const fetchFlowers = createAsyncThunk<Flowers[]>( // create AsyncThunk with Flowers array type
  'flowers/fetchFlowersStatus',
  async (params) => { 
    console.log("Загружаем данные...");
    
    const { data } = await axios.get<Flowers[]>(`http://localhost:4444/getall`); // get from request (Array Flowers Type)
    console.log("Данные загружены...", data);
    
    return data;
  },
);