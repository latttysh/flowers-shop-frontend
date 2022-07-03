import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchFlowers, fetchOne } from './asyncActions';
import { Flowers, FlowersSliceState, Status } from './types';

const initialState: FlowersSliceState = {
  items: [],
  oneItem: {
    id: "null",
    title: "null",
    price: "null",
    imageUrl: "null",
    type: "null",
    filter: "null"
  },
  status: Status.LOADING, // loading | success | error
};

const flowersSlice = createSlice({
  name: 'flowers',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Flowers[]>) { //Action = Array of Flowers 
      state.items = action.payload;
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
  },
});

export const { setItems } = flowersSlice.actions;

export default flowersSlice.reducer;