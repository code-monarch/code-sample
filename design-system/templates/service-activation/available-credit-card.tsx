import React from "react";
import AvailableCreditIcon from "@public/img/dashboard/blue-available-api-credit-icon.svg";
import Paragraph from "@design-system/components/inputs/paragragh";

const AvailableCreditCard = () => {
  return (
    <div className='w-[310px] h-[105px] flex items-center bg-white space-x-[20px] py-[24px] px-[21px] rounded-[10px] shadow-[0px_12px_25px_rgba(3,_47,_60,_0.07)]'>
      <AvailableCreditIcon />
      <div className='space-y-[8px]'>
        <Paragraph
          textsize='xl'
          classstyle='text-semBlack font-[700] !font-sans'
        >
          6,800
        </Paragraph>
        <Paragraph classstyle='text-semBlack !text-base !text-serif font-[400] !font-sans'>
          Available API Credits
        </Paragraph>
      </div>
    </div>
  );
};

export default AvailableCreditCard;
