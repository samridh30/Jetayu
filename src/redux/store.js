<<<<<<< HEAD

// steps to use redux in react app - 
// 1. create store (only one) 
// 2. provide the store to index.js 
// 3. create slices for components (one for each)
// 4. import methods from slices in components and use them 
// note - redux store can be created in multiple different ways. 

import { configureStore } from "@reduxjs/toolkit";
import empReducer from './EmpSlice';
import parentReducer from './EmpSlice';
import appUserReducer from './AppUserSlice';
=======
import { configureStore } from "@reduxjs/toolkit";
import TripReducer from './TripSlice';
import parentReducer from './TripSlice';
>>>>>>> 404c5b827719a7d31891669301afafdc7a870129


console.log('store initialized...');

const store = configureStore(
<<<<<<< HEAD
        {
                reducer: {
                        emp: empReducer,
                        parent: parentReducer,
                        appUser: appUserReducer
                        // , more reducers 
                }
        }
=======
    {
        reducer: {
            Trip: TripReducer,
            // parent: parentReducer
            // , more reducers 
        }
    }
>>>>>>> 404c5b827719a7d31891669301afafdc7a870129
);

export default store;