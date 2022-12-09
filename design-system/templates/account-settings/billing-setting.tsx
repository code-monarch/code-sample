import React from "react";
import Heading from "@design-system/components/inputs/heading";
import { useToggle } from "@hooks/useToggle";
import Pricing from "../pricing";
import TopbarUserActivePlan from "@design-system/components/data-display/topbar-user-active-plan";
import Button from "@design-system/components/inputs/button";
import Flex from "@design-system/components/layout/flex";
import DropdownIcon from "@design-system/components/icons/dropdown-icon";
import { joinClasses } from "@design-system/utils/join-classes";
import PaystackLogo from "@design-system/components/icons/paystack-logo";
import AvailableCreditCard from "../service-activation/available-credit-card";
import UsedCreditCard from "../service-activation/used-credit-card";

const BillingSetting = () => {
  const [hidePricingPlans, setHidePricingPlans] = useToggle(true);
  return (
    <div className='bg-white w-full space-y-[47px] py-[40px] px-[21px] rounded-[10px] shadow-[0px_12px_25px_rgba(3,_47,_60,_0.07)] '>
      {/* Top Section */}
      <section className='bg-white w-full flex flex-col space-y-[20px] px-[21px] transition-all duration-700 ease-in-out'>
        <Flex classstyle='!justify-between'>
          <Heading textsize='sm' color='text-[#433A81]' boldness='bold'>
            Subscription information
          </Heading>
          <div className='flex items-center space-x-[30px]'>
            <Button
              size='lg'
              variant='transparent'
              classstyle='w-full border-semBlue600 uppercase !text-semBlue600 hover:!bg-semBlue600 hover:!text-white'
            >
              Cancel renewal
            </Button>
            <Button size='lg' classstyle='uppercase'>
              Topup Credit
            </Button>
          </div>
        </Flex>
        {/*  */}
        <div className='flex flex-col space-y-[20px]'>
          {/* Current Plan */}
          <div className='flex items-center space-x-[12px]'>
            <Heading textsize='xs' boldness='light'>
              Current Plan:
            </Heading>
            {/* Created this same component using Chip from the design system */}
            <TopbarUserActivePlan
              activePlan='TIER ONE'
              classstyle='w-[85px] h-[30px] !text-[14px]'
            />
          </div>
          {/* Current Plan End */}
          <Flex classstyle='!justify-start space-x-[20px]'>
            {/* Available Credit */}
            <AvailableCreditCard />
            {/* Available Credit End */}

            {/* Used Credits */}
            <UsedCreditCard/>
            {/* Used Credits End */}
          </Flex>
          {/* Next payment date */}
          <div className='space-y-[12px] !mt-[40px]'>
            <Heading textsize='xs' color='!text-semBlack' boldness='light'>
              Your next bill is for $1,800 ON 17/11/2022
            </Heading>
            <div className='flex space-x-[11px] items-center'>
              <PaystackLogo width='102' height='18' />{" "}
              <p className='font-serif text-semBlack text-[14px]'>
                Visa ending 4003
              </p>{" "}
              <p className='font-serif text-semBlack text-[14px]'>
                Exp: 07/2025
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section
        className={joinClasses(
          "space-y-[20px] px-[21px] rounded-[10px] transition-all duration-700 ease-in-out",
          !hidePricingPlans && "py-[24px]"
        )}
      >
        {/* Hide Plans when Toggles */}
        <div
          className='flex items-center space-x-[8px] cursor-pointer'
          onClick={() => setHidePricingPlans()}
        >
          <Heading
            textsize='sm'
            classstyle='uppercase !font-serif !text-semBlue600 text-[20px] !font-[500]'
          >
            {hidePricingPlans ? "Show Plans" : "Hide Plans"}
          </Heading>
          <DropdownIcon
            color='#5D51C6'
            width='22'
            height='22'
            className={`${!hidePricingPlans && "!rotate-180"}`}
          />
        </div>
        {/* Hide Plans when Toggles End */}

        {/* Show Pricing When Dropdown in toggled */}
        {!hidePricingPlans && (
          <div className='transition-all duration-1200 ease-in-out'>
            <Pricing />
          </div>
        )}
      </section>
      {/* Top Section End */}
    </div>
  );
};

export default BillingSetting;
