import {
  createSlice
} from "@reduxjs/toolkit";
import Cab from '../Model/Cab';
const CabSlice = createSlice({
name:'Cab',
initialState:{
    CabData: new Cab(),
    CabList: []
} ,
reducers:{
    getCabById: (state,action) =>{
      console.log(state);
      console.log(action.payload);
      state.CabData = action.payload;

    },
    setCabList:(state,action)=>{
      console.log(state);
      console.log(action.payload);
      state.CabData = action.payload;
    },
    getAllCabs: (state,action) => {
      console.log(state);
      console.log(action.payload);
      state.CabList = action.payload;
    },
    getCabType:(state,action)=>{
      console.log(state);
      console.log(action.payload);
      state.CabList = action.payload;

    },
    getCabStatus:(state,action)=>{
      console.log(state);
      console.log(action.payload);
      state.CabList = action.payload;

    }
} 
});
export const {
  getCabById,
  getAllCabs,
  getCabType,
  getCabStatus,
  setCabList
} = CabSlice.actions;

export default CabSlice.reducer;