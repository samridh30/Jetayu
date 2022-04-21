import { configureStore } from "@reduxjs/toolkit";
import TripReducer from './TripSlice';
import parentReducer from './TripSlice';


console.log('store initialized...');

const store = configureStore(
    {
        reducer: {
            Trip: TripReducer,
            // parent: parentReducer
            // , more reducers 
        }
    }
);

export default store;