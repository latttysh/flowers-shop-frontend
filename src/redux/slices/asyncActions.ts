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

export const fetchOne = createAsyncThunk( // create AsyncThunk with Flowers array type
  'flowers/fetchOne',
  async (id: string) => { 
    console.log("Загружаем данные...");
    
    const { data } = await axios.get<Flowers>(`http://localhost:4444/getone/${id}`); // get from request (Array Flowers Type)
    console.log("Данные загружены...", data);
    
    return data;
  },
);


export const fetchLogin = createAsyncThunk( // create AsyncThunk with Flowers array type
  'flowers/fetchLogin',
  async (params: Object) => { 
    console.log("Пытаемся авторизоваться");
    
    const { data } = await axios.post<string>(`http://localhost:4444/login`, params); // get from request (Array Flowers Type)
    console.log("Итог", data);
    
    return data;
  },
);