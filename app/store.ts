import { configureStore } from "@reduxjs/toolkit";

import authReducer from "@app/features/auth-slice";
import activeSidebarNavReducer from "@app/features/active-sidebar-nav-slice";
import billingPaymentReducer from "@app/features/billing-payment-slice";
import userDetailsSliceReducer from "@app/features/user-slice";

import { apiSlice } from "@app/api/apiSlice";

// Import Setup Listener
import { setupListeners } from "@reduxjs/toolkit/query";

// Create Redux Store with our base apiSlice
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    activeSidebarNav: activeSidebarNavReducer,
    billingPayment: billingPaymentReducer,
    userDetails: userDetailsSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

// enable listener behavior for the store
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
