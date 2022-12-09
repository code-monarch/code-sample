import { apiSlice } from "@/app/api/apiSlice";

export const forgotPasswordApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    forgotPassword: builder.query({
      query: (forgotPasswordDetails: Record<"email", string>) => ({
        url: "auth/forgot-password",
        method: "GET",
        headers: { "content-type": "application/json" },
        body: forgotPasswordDetails,
      }),
    }),
  }),
});

export const { useForgotPasswordQuery } = forgotPasswordApiSlice;
