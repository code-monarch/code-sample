import React from "react";
import TopbarUserActivePlan from "@design-system/components/data-display/topbar-user-active-plan";
import Button from "@design-system/components/inputs/button";
import Heading from "@design-system/components/inputs/heading";
import Flex from "@design-system/components/layout/flex";
import { useRouter } from "next/router";
import AvailableCreditCard from "./available-credit-card";
import UsedCreditCard from "./used-credit-card";

const TopSection = () => {
  const router = useRouter();
  return (
    <div className='w-full bg-white flex flex-col space-y-[20px] py-[24px] px-[21px] rounded-[10px] shadow-[0px_12px_25px_rgba(3,_47,_60,_0.07)]'>
      <Flex classstyle='!justify-between'>
        {/* Current Plan */}
        <div className='flex items-center space-x-[12px]'>
          <Heading textsize='xs' boldness='light'>
            Current Plan:
          </Heading>
          <TopbarUserActivePlan activePlan='TIER ONE' />
        </div>
        {/* Current Plan End */}
        <div className='flex items-center space-x-[30px]'>
          <Button
            size='lg'
            variant='transparent'
            classstyle='w-full border-semBlue600 uppercase !text-semBlue600 hover:!bg-semBlue600 hover:!text-white'
          >
            Cancel renewal
          </Button>
          <Button
            size='lg'
            classstyle='uppercase'
            onClick={() => {
              router.push("/kyc");
            }}
          >
            Complete KYC
          </Button>
        </div>
      </Flex>
      <Flex classstyle='!justify-start space-x-[20px]'>
        {/* Available Credit */}
        <AvailableCreditCard />
        {/* Available Credit End */}

        {/* Used Credits */}
        <UsedCreditCard />
        {/* Used Credits End */}
      </Flex>
    </div>
  );
};

export default TopSection;
