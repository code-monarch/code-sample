import Head from "next/head";
import type { NextPage } from "next";
import DashboardPanel from "@design-system/components/layout/dashhboard-panel";
import Layout from "@design-system/templates/shared/layout";
import RequireAuth from "@design-system/templates/shared/require-auth";
import BottomSection from "@design-system/templates/service-activation/bottom-section";
import TopSection from "@design-system/templates/service-activation/top-section";
import { useServiceActivationQuery } from "@app/services/user/service-activation.api-slice";

const ServiceActivation: NextPage = () => {
    const {
      data,
      isLoading,
      isSuccess,
      isError,
    } = useServiceActivationQuery();
    console.log("SERVICE ACTIVATION DATA: ", data)
  return (
    <RequireAuth>
      <div className='min-h-screen'>
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
            <TopSection />
            <BottomSection />
          </DashboardPanel>
        </Layout>
      </div>
    </RequireAuth>
  );
};

export default ServiceActivation;
