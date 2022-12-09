import LocalStore from "@helpers/session-manager";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUserDetailsSlice {
  currentPlan: string;
  businessName: string;
  isVerified: boolean;
  email2fa: boolean;
  sms2fa: boolean;
  google2fa: boolean;
}

const initialState: IUserDetailsSlice = {
  currentPlan: "",
  businessName: "",
  isVerified: false,
  email2fa: false,
  sms2fa: false,
  google2fa: false,
};

// Profile 2FA security Preferences. To be stored in Local storage
type I2FApref = Pick<IUserDetailsSlice, "email2fa" | "sms2fa" | "google2fa">;

export const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    setPlan: (state, action: PayloadAction<string>) => {
      state.currentPlan = action.payload;
    },
    set2FaPreference: (state, action: PayloadAction<I2FApref>) => {
      state.email2fa = action.payload.email2fa;
      state.google2fa = action.payload.google2fa;
      state.sms2fa = action.payload.sms2fa;
      LocalStore.setItem()
    },
    setBusinessName: (state, action: PayloadAction<string>) => {
      state.businessName = action.payload;
    },
    setIsVerified: (state, action: PayloadAction<boolean>) => {
      state.isVerified = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPlan, setBusinessName, setIsVerified, set2FaPreference } =
  userDetailsSlice.actions;

export default userDetailsSlice.reducer;
