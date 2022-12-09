import React from "react";
import { useGetDashboardDataQuery } from "@app/services/user/dashboard-data.api-slice";
import DisplayFeatures from "@design-system/components/data-display/display-features";
import { joinClasses } from "@design-system/utils/join-classes";

// Available Credit
const AvailableCredit = () => {
  const {
    data: dashboardData,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetDashboardDataQuery();

  let availableCredit;
  if (isSuccess) {
    availableCredit = dashboardData?.data.apiCredits.availableCredit;
  }
  console.log(
    "AVAILABLE CREDIT: ",
    dashboardData?.data.apiCredits.availableCredit
  );

  return (
    <>
      <DisplayFeatures
        isLoading={isLoading ? true : false}
        isError={isError ? true : false}
        isSuccess={isSuccess ? true : false}
        error_placeholder='--'
        classstyles={joinClasses(isLoading && "min-h-[3rem] min-w-[50px]")}
      >
        {availableCredit}
      </DisplayFeatures>
    </>
  );
};
// Available Credit End

// Wallet Balance
const WalletBalance = () => {
  const {
    data: dashboardData,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetDashboardDataQuery();

  let walletBalance;
  if (isSuccess) {
    walletBalance = dashboardData?.data.apiCredits.walletAmount;
  }
  console.log("WALLET BALANCE: ", walletBalance);

  return (
    <>
      <DisplayFeatures
        isLoading={isLoading ? true : false}
        isError={isError ? true : false}
        isSuccess={isSuccess ? true : false}
        error_placeholder='--'
        classstyles={joinClasses(isLoading && "min-h-[27px] min-w-[353px]")}
      >
        {walletBalance}
      </DisplayFeatures>
    </>
  );
};
// Wallet Balance End

const dashboardData = { AvailableCredit, WalletBalance };

export default dashboardData;
