import { configureStore } from "@reduxjs/toolkit";
import TripReducer from './TripSlice';
import appUserReducer from './AppUserSlice'
import DriverReducer from './DriverSlice'


console.log('store initialized...');

const store = configureStore(
        {
                reducer: {
                        Trip: TripReducer,
                        appUser: appUserReducer,
                        Driver: DriverReducer
                        // parent: parentReducer
                        // , more reducers 
                },
                // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
        });

export default store;