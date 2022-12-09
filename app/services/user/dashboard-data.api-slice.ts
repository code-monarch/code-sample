import { apiSlice } from "@/app/api/apiSlice";

export interface IDashboardData {
  data: {
    apiCredits: {
      usedCredit: number;
      totalCredit: number;
      availableCredit: number;
      walletAmount: number;
    };
    userInfo: {
      kycComplete: boolean;
      isVerified: boolean;
      fullName: string;
    };
    activeServices: [
      {
        serviceName: string;
        isActive: boolean;
        canActivate: boolean;
      }
    ];
    callStatistics: {
      month: number;
      week: number;
      day: number;
      services: [
        {
          serviceName: string;
          count: number;
          monthly: [];
          weekly: [];
          daily: [];
          monthlyCalls: number;
          weeklyCalls: number;
          dailyCalls: number;
          monthlyPercentage: number;
          weeklyPercentage: number;
          dailyPercentage: number;
        }
      ];
    };
    callLogs: [
      {
        userId: string;
        callId: string;
        statusCode: number;
        status: "success" | "pending" | "cancelled" | "failed";
        createdOn: number;
        service: string;
      }
    ];
  };
}

export const dashboardDataApiSlice = apiSlice
  .enhanceEndpoints({ addTagTypes: ["dashboardData"] })
  .injectEndpoints({
    endpoints: (builder) => ({
      getDashboardData: builder.query<IDashboardData, void>({
        query: () => ({
          url: "user/dashboard",
          method: "GET",
        }),
        providesTags: ["dashboardData"], // A providesTags array in query endpoints, listing a set of tags describing the data in that query
      }),
    }),
  });

export const { useGetDashboardDataQuery } = dashboardDataApiSlice;
