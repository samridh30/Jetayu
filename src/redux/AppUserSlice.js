import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";
import AppUser from "../Model/AuthUser";

const AppUserSlice = createSlice({
  name: "appUser",

  initialState: {
    loggedInUser: new AppUser(),
  },

  reducers: {
    getAppUser: (state, action) => {
      console.log(action.payload);
      state.loggedInUser = action.payload;
      // localStorage.setItem('loggedInUser', JSON.stringify(action.payload));
      // console.log(localStorage.getItem("loggedInUser"));
    },
  },
});

export const { getAppUser } = AppUserSlice.actions;

export default AppUserSlice.reducer;
