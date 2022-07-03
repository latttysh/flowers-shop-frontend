import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchFlowers, fetchOne, fetchLogin } from './asyncActions';
import { Flowers, FlowersSliceState, Status } from './types';

const initialState: FlowersSliceState = {
  items: [],
  cart: [],
  oneItem: {
    _id: "null",
    title: "null",
    price: "null",
    imageUrl: "null",
    type: "null",
    filter: "null"
  },
  status: Status.LOADING,
  auth: false,
  jwt: "null"
};

const flowersSlice = createSlice({
  name: 'flowers',
  initialState,
  reducers: {
    setItems(state, action) { //Action = Array of Flowers 
      console.log(action.payload);
      
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFlowers.pending, (state, action) => {
      state.status = Status.LOADING;
      state.items = [];
    });

    builder.addCase(fetchFlowers.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchFlowers.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.items = [];
    });
    builder.addCase(fetchOne.pending, (state, action) => {
      state.status = Status.LOADING;
      // state.oneItem = {null};
    });

    builder.addCase(fetchOne.fulfilled, (state, action) => {
      state.oneItem = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchOne.rejected, (state, action) => {
      state.status = Status.ERROR;
      // state.oneItem = {};
    });
    builder.addCase(fetchLogin.pending, (state, action) => {
      state.status = Status.LOADING;
      // state.oneItem = {null};
    });
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.jwt = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchLogin.rejected, (state, action) => {
      state.status = Status.ERROR;
      // state.oneItem = {};
    });
  },
});

export const { setItems } = flowersSlice.actions;

export default flowersSlice.reducer;
