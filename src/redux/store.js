import { configureStore } from "@reduxjs/toolkit";

import TripReducer from "./TripSlice";
import appUserReducer from "./AppUserSlice";
import DriverReducer from "./DriverSlice";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import ReduxThunk from "redux-thunk";

console.log("store initialized...");

const persitConfig = {
  key: "TripData",
  storage: storage,
  whitelist: ["TripList"],
  blacklist: [],
};

const store = configureStore({
  reducer: {
    Trip: persistReducer(persitConfig, TripReducer),
    appUser: appUserReducer,
    Driver: DriverReducer,
    // parent: parentReducer
    // , more reducers
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  middleware: [ReduxThunk],
});

export default store;
export const persistor = persistStore(store);
