import { createSlice } from "@reduxjs/toolkit";
import driver from "../Model/Driver";
const DriverSlice = createSlice({
  name: "Driver",
  initialState: {
    DriverData: new driver(),
    DriverList: [],
  },
  reducers: {
    getDriverById: (state, action) => {
      console.log(state);
      console.log(action.payload);
      state.DriverData = action.payload;
    },
    setDriverList: (state, action) => {
      console.log(state);
      console.log(action.payload);
      state.DriverData = action.payload;
    },
    getAllDrivers: (state, action) => {
      console.log(state);
      console.log(action.payload);
      state.DriverList = action.payload;
    },
    getBestDrivers: (state, action) => {
      console.log(state);
      console.log(action.payload);
      state.DriverList = action.payload;
    },
  },
});
export const { getDriverById, getAllDrivers, getBestDrivers, setDriverList } =
  DriverSlice.actions;

export default DriverSlice.reducer;
