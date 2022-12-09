import { apiSlice } from "@/app/api/apiSlice";

export const changePasswordApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    changePassword: builder.mutation({
      query: (changePasswordDetails: Record<"password", string>) => ({
        url: "auth/change-password",
        method: "POST",
        headers: { "content-type": "application/json" },
        body: changePasswordDetails,
      }),
    }),
  }),
});

export const { useChangePasswordMutation } = changePasswordApiSlice;
