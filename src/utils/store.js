import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
export default store;
/**
 *      Flow
 * Create Store
 *  - configureStore - from rtk
 * Create Slice
 *  - from rtk - createSlice({
 *      name : "",
 *      initialState:{},
 *      reducers : {
 *          action : reducer
 *          addItem : (state,action)=>{state = action.payload}
 *          }
 *      })
 *  - export
 *      export const {addItem, removeItem} = cartSlice.actions
 *      export default cartSlice.reducer
 *  Put that slice into store
 *      configureStore({
 *          reducer:{
 *              name of the slice : variable name
 *              cart : cartSlice
 *          }
 *      })
 */
