import Head from "next/head";
import type { NextPage } from "next";
import Layout from "@design-system/templates/shared/layout";
import RequireAuth from "@design-system/templates/shared/require-auth";

const ApiLibrary: NextPage = () => {
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
          <p className='pt-[30px]'>API Library</p>
        </Layout>
      </div>
    </RequireAuth>
  );
};

export default ApiLibrary;
