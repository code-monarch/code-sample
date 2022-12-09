import { apiSlice } from "@/app/api/apiSlice";

export const updateProfileApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateProfile: builder.mutation({
      query: (userProfile: Record<string, string>) => ({
        url: "user/update-profile",
        method: "PATCH",
        body: userProfile,
      }),
      // invalidatesTags: [{"dashboardData"}], // A providesTags array in query endpoints, listing a set of tags describing the data in that query
    }),
  }),
});

export const { useUpdateProfileMutation } = updateProfileApiSlice;
