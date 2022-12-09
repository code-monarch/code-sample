import { RootState } from "@/app/store";
import { createSlice } from "@reduxjs/toolkit";

interface IBillingPaymentSlice {
  amount: string;
  billingPlan: "TIER ONE" | "TIER TWO" | "";
}

const initialState: IBillingPaymentSlice = {
  amount: "",
  billingPlan: "",
};

export const billingPaymentSlice = createSlice({
  name: "billingPayment",
  initialState,
  reducers: {
    setBillingAmount: (state, action) => {
      state.amount = action.payload;
    },
    setBillingPlan: (state, action) => {
      state.billingPlan = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setBillingAmount, setBillingPlan } = billingPaymentSlice.actions;


export default billingPaymentSlice.reducer;
