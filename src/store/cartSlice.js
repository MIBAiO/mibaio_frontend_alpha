import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  model1_qty: 0,
  model1_price: 5499,
}



export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addModel1: (state, action) => {
      state.model1_qty++;

    },

    removeModel1: (state, action) => {
      state.model1_qty--;
    }
  },
})


export const { addModel1, removeModel1 } = cartSlice.actions;

export default cartSlice.reducer;
