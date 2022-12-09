import { apiSlice } from "@/app/api/apiSlice";

export interface ICallLogsResData {
  data: [
    {
      userId: string;
      callId: string;
      statusCode: number;
      status: "success" | "pending" | "cancelled" | "failed";
      createdOn: number;
      service: string;
    }
  ];
}

export const callLogsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    callLogs: builder.query<ICallLogsResData, void>({
      query: () => ({
        url: "user/call-logs",
        method: "GET",
      }),
    }),
  }),
});

export const { useCallLogsQuery } = callLogsApiSlice;
