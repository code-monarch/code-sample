import CallLogsTable from "@design-system/templates/api-call-logs";
import DashboardPanel from "@design-system/components/layout/dashhboard-panel";
import Layout from "@design-system/templates/shared/layout";
import RequireAuth from "@design-system/templates/shared/require-auth";
import type { NextPage } from "next";
import Head from "next/head";

const ApiCallLogs: NextPage = () => {
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
            <CallLogsTable />
          </DashboardPanel>
        </Layout>
      </div>
    </RequireAuth>
  );
};

export default ApiCallLogs;
