import Head from "next/head";
import type { NextPage } from "next";
import DashboardPanel from "@design-system/components/layout/dashhboard-panel";
import Layout from "@design-system/templates/shared/layout";
import RequireAuth from "@design-system/templates/shared/require-auth";
import TransactionsTable from "@design-system/templates/transactions";

const Transaction: NextPage = () => {
  return (
    <RequireAuth>
      <div>
        <Head>
          <title>CaaS by A&D forensics</title>
          <meta
            name='description'
            content='Let our CaaS solution guide you easily through your complete
              Crypto Compliance Process'
          />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Layout>
          <DashboardPanel>
            <TransactionsTable />
          </DashboardPanel>
        </Layout>
      </div>
    </RequireAuth>
  );
};

export default Transaction;
