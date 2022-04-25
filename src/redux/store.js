import { configureStore } from "@reduxjs/toolkit";
import TripReducer from './TripSlice';
import appUserReducer from './AppUserSlice'


console.log('store initialized...');

const store = configureStore(
        {
                reducer: {
                        Trip: TripReducer,
                        appUser: appUserReducer
                        // parent: parentReducer
                        // , more reducers 
                },
                // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
        });

export default store;