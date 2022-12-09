import { apiSlice } from "@/app/api/apiSlice";

export const toggleServiceApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    toggleService: builder.query({
      query: (serviceId: Record<string, string>) => ({
        url: "user/toggle-service",
        method: "PATCH",
        body: serviceId,
      }),
    }),
  }),
});

export const { useToggleServiceQuery } = toggleServiceApiSlice;
