import React from 'react'
import Paragraph from '@design-system/components/inputs/paragragh';
import UsedApiCredIcon from "@public/img/dashboard/used-api-credit-icon.svg";

const UsedCreditCard = () => {
  return (
    <div className='w-[310px] h-[105px] flex items-center bg-white space-x-[20px] py-[24px] px-[21px] rounded-[10px] shadow-[0px_12px_25px_rgba(3,_47,_60,_0.07)]'>
      <UsedApiCredIcon />
      <div className='space-y-[8px]'>
        <Paragraph
          textsize='xl'
          classstyle='text-semBlack font-[700] !font-sans'
        >
          234
        </Paragraph>
        <Paragraph classstyle='text-semBlack !text-base !text-serif font-[400] !font-sans'>
          Used Credits
        </Paragraph>
      </div>
    </div>
  );
}

export default UsedCreditCard