import DropdownIcon from "@design-system/components/icons/dropdown-icon";
import Heading from "@design-system/components/inputs/heading";
import React from "react";
import MoreServicesCard from "./more-services-card";
import ActiveServicesCard from "./active-services-card";
import { useToggle } from "@hooks/useToggle";

// TODO: Make these services an Array and Loop over them.

const BottomSection = () => {
  const [hideMoreServices, setHideMoreServices] = useToggle(false);
  return (
    <div className='w-full bg-white space-y-[38px] py-[24px] px-[21px] rounded-[10px] shadow-[0px_12px_25px_rgba(3,_47,_60,_0.07)]'>
      {/* Active Services */}
      <div className='space-y-[20px]'>
        <div>
          <Heading
            textsize='sm'
            color='gray'
            classstyle='uppercase !font-serif text-[20px] !font-[500] !opacity-60'
          >
            Active Services
          </Heading>
        </div>
        <div className='w-full flex flex-wrap gap-[20px]'>
          <ActiveServicesCard
            cardTitle='KYC/KYV verification'
            cardDesc='KYC is basically to confirm participants before admitting them using their documents.'
            switchValue='KYC/KYV verification'
          />
          <ActiveServicesCard
            cardTitle='Wallet screening'
            cardDesc='KYC is basically to confirm participants before admitting them using their documents.'
            switchValue='Wallet screening'
          />
          <ActiveServicesCard
            cardTitle='Travel rule compliance'
            cardDesc='KYC is basically to confirm participants before admitting them using their documents.'
            switchValue='Travel rule compliance'
          />
          <ActiveServicesCard
            cardTitle='Travel rule compliance'
            cardDesc='KYC is basically to confirm participants before admitting them using their documents.'
            switchValue='Travel rule compliance'
          />
          <ActiveServicesCard
            cardTitle='Compliance unit training'
            cardDesc='KYC is basically to confirm participants before admitting them using their documents.'
            switchValue='Compliance unit training'
          />
          <ActiveServicesCard
            cardTitle='Compliance unit training'
            cardDesc='KYC is basically to confirm participants before admitting them using their documents.'
            switchValue='Compliance unit training'
          />
        </div>
      </div>
      {/* Active Services End */}

      {/* More Services */}
      <div className='space-y-[20px]'>
        {/* Hide More Services when Toggles */}
        <div
          className='flex items-center space-x-[8px] cursor-pointer transition-all duration-1200 ease-in-out'
          onClick={() => setHideMoreServices()}
        >
          <Heading
            textsize='sm'
            classstyle='uppercase !font-serif !text-semBlue600 text-[20px] !font-[500]'
          >
            More Services
          </Heading>
          <DropdownIcon color='#5D51C6' width='22' height='22' />
        </div>
        {/* Hide More Services when Toggles End */}
        {hideMoreServices && (
          <div className='w-full flex flex-wrap gap-[20px]'>
            <MoreServicesCard
              cardTitle='Monitor client transaction activities.'
              cardDesc='KYC is basically to confirm participants before admitting them using their documents.'
            />
            <MoreServicesCard
              cardTitle='Crypto asset fraud mitigation'
              cardDesc='KYC is basically to confirm participants before admitting them using their documents.'
            />
            <MoreServicesCard
              cardTitle='Monitor client transaction activities.'
              cardDesc='KYC is basically to confirm participants before admitting them using their documents.'
            />
            <MoreServicesCard
              cardTitle='Monitor client transaction activities.'
              cardDesc='KYC is basically to confirm participants before admitting them using their documents.'
            />
            <MoreServicesCard
              cardTitle='Crypto asset fraud mitigation'
              cardDesc='KYC is basically to confirm participants before admitting them using their documents.'
            />
            <MoreServicesCard
              cardTitle='Monitor client transaction activities.'
              cardDesc='KYC is basically to confirm participants before admitting them using their documents.'
            />
            <MoreServicesCard
              cardTitle='Monitor client transaction activities.'
              cardDesc='KYC is basically to confirm participants before admitting them using their documents.'
            />
            <MoreServicesCard
              cardTitle='Crypto asset fraud mitigation'
              cardDesc='KYC is basically to confirm participants before admitting them using their documents.'
            />
            <MoreServicesCard
              cardTitle='Monitor client transaction activities.'
              cardDesc='KYC is basically to confirm participants before admitting them using their documents.'
            />
          </div>
        )}
      </div>
      {/* More Services End */}
    </div>
  );
};

export default BottomSection;
