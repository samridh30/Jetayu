import { createSlice } from "@reduxjs/toolkit";
import AppUser from '../Model/AuthUser';

const AppUserSlice = createSlice({

        name: 'appUser',

        initialState: {
                loggedInUser: new AppUser(),
        },

        reducers: {

                getAppUser: (state, action) => {
                        console.log(action.payload);
                        state.loggedInUser = action.payload;
                        localStorage.setItem('loggedInUser', action.payload);
                        console.log(action.payload);
                }
        }
});

export const { getAppUser } = AppUserSlice.actions;

export default AppUserSlice.reducer;

