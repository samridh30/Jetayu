import { createSlice } from "@reduxjs/toolkit";
import Trip from '../Model/Trip';

const TripSlice = createSlice({

    //  name is only one 
    name: 'Trip',

    initialState: {
        TripList: new Trip(),
        TripsList:[]
        // , other objects in state 
    },

    reducers: {

        setTripList: (state, action) => {
            console.log(state);
            console.log(action.payload);
            state.TripList = action.payload;
        },
        getTripsList: (state, action) => {
            console.log(state);
            console.log(action.payload);
            state.TripsList = action.payload;
        }
        // , more methods in reducers   
    }
});

export const { setTripList, getTripsList } = TripSlice.actions;

export default TripSlice.reducer;