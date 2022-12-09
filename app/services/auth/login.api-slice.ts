import { apiSlice } from "@/app/api/apiSlice";

interface ILoginResData {
  error: boolean;
  accessToken: string;
  email2fa: boolean;
  sms2fa: boolean;
  google2fa: boolean;
  isVerified: boolean;
}

interface ILoginPayload {
  email: string;
  password: string;
}

// Since we've already created a base apiSlice for our application with our base URl, we will simply be injecting other apiSlices, authApiSlice for example, into our apiSlice
export const loginApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<ILoginResData, ILoginPayload>({
      query: (loginDetails) => ({
        url: "auth/login",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: loginDetails,
      }),
    }),
  }),
});

export const { useLoginMutation } = loginApiSlice;
