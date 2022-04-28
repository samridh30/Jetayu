import { createSlice } from "@reduxjs/toolkit";
import Trip from '../Model/Trip';
// import Cabservicedto from "../Model/Cabservicedto";
// import Customer from "../Model/Customer";
// import driver from "../Model/driver";

const TripSlice = createSlice({

    //  name is only one 
    name: 'Trip',

    initialState: {
        TripList: new Trip(),
        AllTripsList: [],

        // , other objects in state 
    },

    reducers: {

        setTripList: (state, action) => {
            // console.log(state);
            // console.log(action.payload);
            state.TripList = action.payload;
            localStorage.setItem("Trip", JSON.stringify(state.TripList))

        },
        setAllTripsList: (state, action) => {
            // console.log(state);
            // console.log(action.payload);
            state.AllTripsList = action.payload;
        }
        // , more methods in reducers   
    }
});

export const { setTripList, setAllTripsList } = TripSlice.actions;

export default TripSlice.reducer;