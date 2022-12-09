import React from "react";
import UsedApiCredIcon from "@public/img/dashboard/used-api-credit-icon.svg";
import Heading from "@design-system/components/inputs/heading";
import Paragraph from "@design-system/components/inputs/paragragh";
import Switch from "@design-system/components/inputs/switch";

interface IActiveServicesCardProps {
  cardTitle: string;
  cardDesc: string;
  switchValue: string;
}

const ActiveServicesCard = ({
  cardTitle,
  cardDesc,
  switchValue,
}: IActiveServicesCardProps) => {
  return (
    <div className='bg-white w-[350px] desktop:w-[370px] lgDesktops:w-[383px] h-[200px] flex flex-col justify-between py-[24px] px-[20px] border-[2px] border-[#E5E8EA] rounded-[16px] shadow-[0px_12px_25px_rgba(3,_47,_60,_0.07)]'>
      {/* Card Title and Description */}
      <div className='w-full flex space-x-[20px]'>
        {/* Card Icon */}
        <div>
          <UsedApiCredIcon />
        </div>
        {/* Card Icon End */}
        <div className='max-w-[267px] space-y-[8px]'>
          <Heading textsize='sm' boldness='medium'>
            {cardTitle}
            {/* KYC/KYV verification */}
          </Heading>
          <Paragraph textsize='xs' classstyle='!text-[#756D82]'>
            {cardDesc}
          </Paragraph>
        </div>
      </div>
      {/* Card Title and Description End */}
      {/* Switch */}
      <div className='w-full flex justify-end'>
        <Switch name={`${switchValue}`} value={`${switchValue}`} />
      </div>
      {/* Switch End */}
    </div>
  );
};

export default ActiveServicesCard;
