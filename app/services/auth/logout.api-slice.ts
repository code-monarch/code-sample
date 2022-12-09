import { apiSlice } from "@/app/api/apiSlice";

export const logoutApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    logout: builder.query({
      query: (credentials) => ({
        url: "auth/logout",
        method: "GET",
         headers: { "content-type": "application/json" },
        body: { ...credentials },
      }),
    }),
  }),
});

export const { useLogoutQuery } = logoutApiSlice;
