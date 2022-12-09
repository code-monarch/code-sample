import { PopOver, PopOverContent, PopOverTrigger } from "@design-system/components/data-display/popover";
import Heading from "@design-system/components/inputs/heading";
import Input from "@design-system/components/inputs/input";
import Paragraph from "@design-system/components/inputs/paragragh";
import Flex from "@design-system/components/layout/flex";
import InputSearchIcon from "@public/img/dashboard/input-search-icon.svg";
import FilterIcon from "@public/img/dashboard/filter-icon.svg";
import PopOverDropdownIcon from "@public/img/dashboard/dropdown-icon.svg";

const ApiTransacLogsHeader = () => {
  return (
    <div className='flex flex-col space-y-[20px]'>
      <Flex>
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
            <div className='h-[44px] flex items-center space-x-[12px] py-[8px] px-[16px] border-[1px] border-border-gray-300 rounded-[8px] cursor-pointer'>
              <FilterIcon />
              <p className='text-[14px] text-[#8E8AB5]'>Filter</p>
            </div>
          </PopOverTrigger>
          <PopOverContent>Whatever should be here</PopOverContent>
        </PopOver>
      </Flex>
      {/* Bottom */}
      <Flex classstyle='!justify-between'>
        <Heading
          textsize='sm'
          classstyle='font-serif !text-semBlack text-[20px] !font-[500]'
        >
          API Call Logs
        </Heading>
        <div className='flex items-center space-x-[8px]'>
          <Paragraph textsize='xs' classstyle='text-[14px] text-[#8E8AB5]'>
            Filter by:
          </Paragraph>
          <PopOver>
            <PopOverTrigger>
              <div className='flex items-center space-x-[8px] cursor-pointer'>
                <p className='text-[14px] text-[#8E8AB5]'>Today</p>
                <PopOverDropdownIcon />
              </div>
            </PopOverTrigger>
            <PopOverContent>Whatever should be here</PopOverContent>
          </PopOver>
        </div>
      </Flex>
    </div>
  );
};

export default ApiTransacLogsHeader;