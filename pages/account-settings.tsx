import Head from "next/head";
import type { NextPage } from "next";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@design-system/components/data-display/tabs";
import ProfileSetting from "@design-system/templates/account-settings/profile-setting";
import SecuritySetting from "@design-system/templates/account-settings/security-setting";
import Layout from "@design-system/templates/shared/layout";
import BillingSetting from "@design-system/templates/account-settings/billing-setting";
import ApiKeysSetting from "@design-system/templates/account-settings/api-keys-setting";
import RequireAuth from "@design-system/templates/shared/require-auth";

const style = {
  tabs: `w-full flex flex-col items-start pt-[30px]`,
  tabsList: `flex items-center space-x-[40px]`,
  tabsTrigger: `nav-link nav-link-ltr !uppercase radix-state-active:!text-semBlue600 radix-state-inactive:hover:!text-semBlue600 radix-state-inactive:!text-inputPlaceholder !text-[18px] !font-[500] before:!bg-semBlue600 !px-[10px] radix-state-active:before:!w-[100%]`,
};

const Account: NextPage = () => {
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
          <Tabs defaultvalue='profile' classstyle={style.tabs}>
            {/* Tab control lists */}
            <TabsList arialabel='Pricing plans' classstyle={style.tabsList}>
              <TabsTrigger value='profile' classstyle={style.tabsTrigger}>
                PROFILE
              </TabsTrigger>
              <TabsTrigger value='security' classstyle={style.tabsTrigger}>
                SECURITY
              </TabsTrigger>
              <TabsTrigger value='billing' classstyle={style.tabsTrigger}>
                BILLING
              </TabsTrigger>
              <TabsTrigger value='api-keys' classstyle={style.tabsTrigger}>
                API-KEYS
              </TabsTrigger>
            </TabsList>
            {/* Tab control lists End */}
            <div className='w-full'>
              {/* Profile setting */}
              <TabsContent value='profile'>
                <ProfileSetting />
              </TabsContent>
              {/* Profile setting End */}

              {/* Security setting */}
              <TabsContent value='security'>
                <SecuritySetting />
              </TabsContent>
              {/* Security setting End */}

              {/* Billing Setting */}
              <TabsContent value='billing'>
                <BillingSetting />
              </TabsContent>
              {/* Billing Setting End */}

              {/* API-Keys setting */}
              <TabsContent value='api-keys'>
                <ApiKeysSetting />
              </TabsContent>
              {/* API-Keys setting End */}
            </div>
          </Tabs>
        </Layout>
      </div>
    </RequireAuth>
  );
};

export default Account;
