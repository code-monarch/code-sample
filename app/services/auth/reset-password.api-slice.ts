import { apiSlice } from "@/app/api/apiSlice";

export const resetPasswordApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    resetPassword: builder.mutation({
      query: (resetPasswordDetails: Record<string, string>) => ({
        url: "auth/reset-password",
        method: "POST",
        headers: { "content-type": "application/json" },
        body: resetPasswordDetails,
      }),
    }),
  }),
});

export const { useResetPasswordMutation } = resetPasswordApiSlice;
