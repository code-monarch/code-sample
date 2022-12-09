import React from "react";
import GrayUsedApiCredIcon from "@public/img/dashboard/gray-used-api-credit-icon.svg";
import RightArrowIcon from "@public/img/dashboard/right-arrow.svg";
import Heading from "@design-system/components/inputs/heading";
import Paragraph from "@design-system/components/inputs/paragragh";

interface IMoreServicesCardProps {
  cardTitle: string;
  cardDesc: string;
  activateService?: () => void;
}

const MoreServicesCard = ({ cardTitle, cardDesc }: IMoreServicesCardProps) => {
  return (
    <div className='bg-white w-[350px] desktop:w-[370px] lgDesktops:w-[383px] h-[224px] flex flex-col justify-between py-[24px] px-[20px] border-[2px] border-[#DBD8FB] rounded-[16px]'>
      {/* Card Title and Description */}
      <div className='w-full flex space-x-[20px]'>
        {/* Card Icon */}
        <div>
          <GrayUsedApiCredIcon />
        </div>
        {/* Card Icon End */}
        <div className='max-w-[267px] space-y-[8px]'>
          <Heading textsize='sm' boldness='medium'>
            {cardTitle}
          </Heading>
          <Paragraph textsize='xs' classstyle='!text-[#756D82]'>
            {cardDesc}
          </Paragraph>
        </div>
      </div>
      {/* Card Title and Description End */}
      
      {/* Switch */}
      <div className='w-full flex justify-end items-center space-x-[6px] hover:underline cursor-pointer'>
        <p className='font-serif font-[500] text-semPrimary'>
          Activate service
        </p>
        <RightArrowIcon />
      </div>
      {/* Switch End */}
    </div>
  );
};

export default MoreServicesCard;
