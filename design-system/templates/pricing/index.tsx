import Heading from "@design-system/components/inputs/heading";
import Container from "@design-system/components/layout/container";
import React, { useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@design-system/components/data-display/tabs";

import Switch from "@design-system/components/inputs/switch";
import MonthlyPricing from "./monthly-pricing";
import BiAnnualPricing from "./bi-annual-pricing";
import AnnualPricing from "./annual-pricing";

export const pricingTabStyle = {
  tabs: `w-full flex flex-col items-center space-y-[32px]`,
  tabsList: `flex items-center space-x-[64px]`,
  tabsTrigger: `nav-link nav-link-ltr !text-semPrimary !text-[18px] !font-[500] before:!bg-semPrimary !px-[10px] radix-state-inactive:!text-inputPlaceholder radix-state-active:before:!w-[100%]`,
  tierWrapper: `w-full max-w-[1391.99px] flex space-x-[16px] desktop:space-x-[32px]`,
  card: `h-fit w-[360px] desktop:w-[453.33px] !bg-white !shadow-semShadow2`,
};

const Pricing = () => {
  const [currency, setcurrency] = useState<boolean>(true); // Currency is NGN when switch is false and USD when switch is true
  return (
    <div className='w-full py-[24px] rounded-[10px]'>
      <Container classstyle='!flex-col !items-center z-[3] !px-0'>
        {/* Currency Switch */}
        <div className='w-full flex justify-center items-center space-x-[16px] mb-[38px]'>
          <Heading
            textsize='md'
            boldness='light'
            classstyle={!currency ? "!text-primaryText" : "!text-secondaryText"}
          >
            NGN
          </Heading>
          <Switch
            name='currency'
            value='currency'
            checked={currency}
            oncheckedchange={setcurrency}
          />
          <Heading
            textsize='md'
            boldness='light'
            classstyle={!currency ? "!text-secondaryText" : "!text-primaryText"}
          >
            USD
          </Heading>
        </div>
        {/* Currency Switch End */}

        {/* Pricing  */}
        <Tabs defaultvalue='monthly' classstyle={pricingTabStyle.tabs}>
          {/* Tab control lists */}
          <TabsList arialabel='Pricing plans' classstyle={pricingTabStyle.tabsList}>
            <TabsTrigger value='monthly' classstyle={pricingTabStyle.tabsTrigger}>
              MONTHLY
            </TabsTrigger>
            <TabsTrigger value='bi-annual' classstyle={pricingTabStyle.tabsTrigger}>
              BI-ANNUAL
            </TabsTrigger>
            <TabsTrigger value='annual' classstyle={pricingTabStyle.tabsTrigger}>
              ANNUAL
            </TabsTrigger>
          </TabsList>
          {/* Tab control lists End */}

          {/* Tab Content */}
          <TabsContent value='monthly'>
            <MonthlyPricing />
          </TabsContent>
          <TabsContent value='bi-annual'>
            <BiAnnualPricing />
          </TabsContent>
          <TabsContent value='annual'>
            <AnnualPricing />
          </TabsContent>
          {/* Tab Content End */}
        </Tabs>
        {/* Pricing End */}
      </Container>
    </div>
  );
};

export default Pricing;
