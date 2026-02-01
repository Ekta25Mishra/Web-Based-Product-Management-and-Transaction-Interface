import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products:[],
}
const productSlice=createSlice({
  name:"product",
  initialState,
  reducers:
  {
    loadlazyproduct:(state,action)=>{
      state.products=[...state.products, ...action.payload];
    },
  },
});

export default productSlice.reducer;
export const { loadproduct, loadlazyproduct}= productSlice.actions;