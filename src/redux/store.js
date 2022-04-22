
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


console.log('store initialized...');

const store = configureStore(
        {
                reducer: {
                        emp: empReducer,
                        parent: parentReducer,
                        appUser: appUserReducer
                        // , more reducers 
                }
        }
);

export default store;