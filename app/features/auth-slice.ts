import { setSessionToken } from "@helpers/session-manager";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// initial State is either empty or not
interface ISliceState {
  user: null | string;
  token: null | string;
}
const initialState: ISliceState = { user: null, token: null };

// Let's get User onboarded, shall we?
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // User info and their access token is important, retrieve this and store them in state
    setCredentials: (state: { user: any; token: any; }, action: { payload: { user: any; accessToken: any; }; }) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.token = accessToken;
      const value = accessToken;
      setSessionToken(value);
    },
    // They are frustrated, life sucks, so they would like to log out of our platform, help them out by removing their credentials from state. They're prolly owing a lot of tax
    logOut: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

// We've created our Authentication actions, now let's expose them so we are able to use them in our App
export const { setCredentials, logOut } = authSlice.actions;

/**
 * 
 * This will help us get our user details in a useSelector hook without nesting i.e useSelector((state)=> {state.auth.user}) 
 */
export const selectCurrentUser = (state: { auth: { user: string } }) => {
  state.auth.user;
};

// Get the their refresh token with this function and store it in local storage. The refresh token gets their access token as implemented the apiSlice
export const selectCurrentToken = (state: { auth: { token: string } }) => {
  state.auth.token;
};
// This goes to our redux store
export default authSlice.reducer;
