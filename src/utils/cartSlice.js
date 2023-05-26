import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      var flag = 0;
      state.items.forEach((item, i) => {
        if (action.payload.menuItemId === item.menuItemId) {
          flag = 1;
          item.quantity += 1;
          // console.log(i);
          return;
        }
      });
      if (!flag) {
        state.items.push(action.payload);
      }
      // console.log(state.items.includes(cartItem));
      // state.items.push(action.payload);
      // reducers are normal functions,
      // but they don't return anything, they automagically update the UI
    },
    removeItem: (state, action) => {
      state.items.forEach((item, i) => {
        if (action.payload.menuItemId === item.menuItemId) {
          if (item.quantity === 1) {
            state.items.splice(i, 1);
            return;
          } else {
            item.quantity -= 1;
            return;
          }
        }
      });
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
