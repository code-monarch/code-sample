import { apiSlice } from "@/app/api/apiSlice";

export const signUpApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (signupdetails: Record<string, string>) => ({
        url: `auth/signup`,
        method: "POST",
        headers: { "Content-Type": "application/json; charset=UTF-8", "Accept": "application/json" },
        body: JSON.stringify(signupdetails),
      }),
    }),
  }),
});

export const { useSignupMutation } = signUpApiSlice;
