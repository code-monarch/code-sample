import { apiSlice } from "@/app/api/apiSlice";

interface IServiceActivationResData {
  data: {
    services: [
      {
        serviceName: "Compliance unit training";
        isActive: false;
        canActivate: false;
      },
      {
        serviceName: "Travel rule compliance";
        isActive: false;
        canActivate: false;
      },
      {
        serviceName: "Wallet Screening";
        isActive: false;
        canActivate: false;
      }
    ];
    moreServices: [
      {
        serviceName: "KYC/KYV verification";
        isActive: false;
        canActivate: false;
      }
    ];
    plan: "free";
    usedCredit: 0;
    totalCredit: 0;
    availableCredit: 0;
  };
}

export const serviceActivationApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    serviceActivation: builder.query<IServiceActivationResData, void>({
      query: () => ({
        url: "user/service-activation",
        method: "GET"
      }),
    }),
  }),
});

export const { useServiceActivationQuery } = serviceActivationApiSlice;
