import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: ["Apples", "Grapes"],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      // reducers are normal functions,
      // but they don't return anything, they automagically update the UI
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
