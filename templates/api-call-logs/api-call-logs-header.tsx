import React from 'react'
import Flex from '@design-system/components/layout/flex';
import InputSearchIcon from "@public/img/dashboard/input-search-icon.svg";
import Input from '@design-system/components/inputs/input';
import { PopOver, PopOverContent, PopOverTrigger } from '@design-system/components/data-display/popover';
import PopOverDropdownIcon from "@public/img/dashboard/dropdown-icon.svg";
import FilterIcon from "@public/img/dashboard/filter-icon.svg";
import ExportIcon from "@public/img/dashboard/export-icon.svg";

const ApiCallLogsHeader = () => {
  return (
    <Flex>
      <div className='flex items-center justify-start space-x-[20px]'>
        <div className='!bg-white !h-[44px] !w-[450px] relative'>
          <span className='absolute left-[10px] top-[23px] bottom-0 translate-y-[-50%]'>
            <InputSearchIcon />
          </span>
          <Input
            type='search'
            name='search-services'
            placeholder='Search services'
            classstyle='!w-full !h-full !bg-white pl-[50px] placeholder:!text-[14px] focus-within:ring focus-within:ring-[#EDEBFD] focus-within:ring-opacity-75'
          />
        </div>
        <PopOver>
          <PopOverTrigger>
            <div className='h-[44px] flex items-center space-x-[12px] py-[12px] px-[16px] border-[1px] border-border-gray-300 rounded-[8px] cursor-pointer'>
              <FilterIcon />
              <p className='text-[14px] text-[#8E8AB5]'>Filter</p>
            </div>
          </PopOverTrigger>
          <PopOverContent>Whatever should be here</PopOverContent>
        </PopOver>
      </div>
      <div className='flex items-center font-serif font-[500] text-semPrimary py-[8px] px-[12px] space-x-[9px] border-[1px] border-semPrimary rounded-[6px] cursor-pointer'>
        <ExportIcon />
        <p>Export</p>
      </div>
    </Flex>
  );
}

export default ApiCallLogsHeader