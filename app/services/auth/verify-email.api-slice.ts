import { apiSlice } from "@/app/api/apiSlice";

export const verifyEmailApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    verifyEmail: builder.query({
      query: (credentials) => ({
        url: "auth/verify-email",
        method: "GET",
         headers: { "content-type": "application/json" },
        body: { ...credentials },
      }),
    }),
  }),
});

export const { useVerifyEmailQuery } = verifyEmailApiSlice;
