import Head from "next/head";
import type { NextPage } from "next";
import Flex from "@design-system/components/layout/flex";
import ActiveServices from "@design-system/templates/dashboard-page/Active-services";
import ApiCreditStatus from "@design-system/templates/dashboard-page/Api-credits-status";
import ApiTransacLogs from "@design-system/templates/dashboard-page/Api-transac-logs";
import CompleteRegistration from "@design-system/templates/dashboard-page/Complete-registration";
import TotalLogs from "@design-system/templates/dashboard-page/Total-logs";
import UserIdentity from "@design-system/templates/dashboard-page/User-identity";
import DashboardPanel from "@design-system/components/layout/dashhboard-panel";
import Layout from "@design-system/templates/shared/layout";
import RequireAuth from "@design-system/templates/shared/require-auth";
import { useGetDashboardDataQuery } from "@app/services/user/dashboard-data.api-slice";

const Home: NextPage = () => {
  // We will get this from the store later
  const { data: dashboardData, isSuccess, error } = useGetDashboardDataQuery();

  // Get Complete KYC status from Query
  let completekyc;
  if (isSuccess) {
    completekyc = dashboardData?.data.userInfo.kycComplete;
  }
  return (
    <RequireAuth>
      <div>
        <Head>
          <title>CaaS by A&D Forensics</title>
          <meta
            name='description'
            content='Let our CaaS solution guide you easily through your complete
              Crypto Compliance Process'
          />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Layout>
          <DashboardPanel>
            <UserIdentity />
            {/* Show Complete KYC  only when KYC hasn't been completed */}
            {!completekyc && <CompleteRegistration />}
            <Flex classstyle='!w-full !space-x-[20px] !items-start !justify-start'>
              {/* Left Pane */}
              <div className='grow flex flex-col space-y-[20px]'>
                <ApiCreditStatus />
                <ApiTransacLogs />
              </div>
              {/* Left Pane End */}

              {/* Right Pane */}
              <div className='grow-0 flex flex-col space-y-[20px]'>
                <TotalLogs />
                <ActiveServices />
              </div>
              {/* Right Pane End */}
            </Flex>
          </DashboardPanel>
        </Layout>
      </div>
    </RequireAuth>
  );
};

export default Home;
