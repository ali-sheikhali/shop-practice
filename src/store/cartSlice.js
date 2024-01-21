import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      return [...state, action.payload];
    },
    removeToCart(state, action) {
      const indexToRemove = state.findIndex((id) => id === action.payload );
      // console.log(indexToRemove);
      // console.log(state.map(i=>i.id));
      console.log(action.payload);
      if (indexToRemove !== -1) {
        state.splice(indexToRemove, 1);
      }

      return state;
    },
  },
});
export const { addToCart, removeToCart } = cartSlice.actions;
export default cartSlice.reducer;
