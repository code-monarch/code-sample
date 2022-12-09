import React from "react";
import Input from "@design-system/components/inputs/input";
import Flex from "@design-system/components/layout/flex";
import PopOverDropdownIcon from "@public/img/dashboard/dropdown-icon.svg";
import NoApiCallsIcon from "@public/img/dashboard/no-api-calls-icon.svg";
import {
  PopOver,
  PopOverContent,
  PopOverTrigger,
} from "@design-system/components/data-display/popover";
import Heading from "@design-system/components/inputs/heading";
import Paragraph from "@design-system/components/inputs/paragragh";
import StatusIndicator from "@design-system/components/data-display/table-status-indicator";

interface IServices {
  date: string;
  id: string;
  type: string;
  amount: string;
  status: "success" | "pending" | "cancelled" | "failed";
  action: string;
}

// Add to a data file
const services: IServices[] = [
  {
    date: "20 Aug, 2022",
    id: "#1234",
    type: "KYC/KYV verification",
    amount: "$3,476,000",
    status: "pending",
    action: "...",
  },
  {
    date: "20 Aug, 2022",
    id: "#1234",
    type: "KYC/KYV verification",
    amount: "$3,476,000",
    status: "pending",
    action: "...",
  },
  {
    date: "20 Aug, 2022",
    id: "#1234",
    type: "KYC/KYV verification",
    amount: "$3,476,000",
    status: "pending",
    action: "...",
  },
  {
    date: "20 Aug, 2022",
    id: "#1234",
    type: "KYC/KYV verification",
    amount: "$3,476,000",
    status: "pending",
    action: "...",
  },
  {
    date: "20 Aug, 2022",
    id: "#1234",
    type: "KYC/KYV verification",
    amount: "$3,476,000",
    status: "pending",
    action: "...",
  },
  {
    date: "20 Aug, 2022",
    id: "#1234",
    type: "KYC/KYV verification",
    amount: "$3,476,000",
    status: "pending",
    action: "...",
  },
  {
    date: "20 Aug, 2022",
    id: "#1234",
    type: "KYC/KYV verification",
    amount: "$3,476,000",
    status: "pending",
    action: "...",
  },
  {
    date: "20 Aug, 2022",
    id: "#1234",
    type: "KYC/KYV verification",
    amount: "$3,476,000",
    status: "pending",
    action: "...",
  },
  {
    date: "20 Aug, 2022",
    id: "#1234",
    type: "KYC/KYV verification",
    amount: "$3,476,000",
    status: "pending",
    action: "...",
  },
];

const NoActivityLogs = () => {
  return (
    <div className='w-full h-[322px] flex flex-col justify-start items-center space-y-[12px] pt-[80px]'>
      <NoApiCallsIcon />
      <Heading
        textsize='sm'
        classstyle='text-primaryText !text-[19px] font-[400] !font-serif'
      >
        No Records Found
      </Heading>
      <Paragraph
        textsize='sm'
        align='center'
        classstyle='!text-black text-[15px] !font-serif max-w-[476px]'
      >
        Go ahead and subscribe to a plan to get started
      </Paragraph>
    </div>
  );
};

const ActivityLogsTable = () => {
  return (
    <div className='w-full h-full bg-white p-[24px] rounded-[8px] space-y-[40px] shadow-md'>
      {/*  */}
      <div className='space-y-[21px]'>
        {/* Table title */}
        <Flex classstyle='!justify-between'>
          <Heading
            textsize='sm'
            classstyle='font-serif !text-semBlack text-[20px] !font-[500]'
          >
            Audit Logs
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
        {/* Table title End */}

        <table className='w-full'>
          <thead className='bg-gray-50'>
            <tr>
              <th
                scope='col'
                className='py-3.5 pr-[48px] pl-3 whitespace-nowrap text-left text-sm font-[500] font-serif !text-semBlack opacity-60'
              >
                Date
              </th>
              <th
                scope='col'
                className='py-3.5 pl-4 pr-[48px] whitespace-nowrap text-left text-sm font-[500] font-serif !text-semBlack opacity-60'
              >
                ID
              </th>
              <th
                scope='col'
                className='py-3.5 pl-4 pr-[48px] whitespace-nowrap text-left text-sm font-[500] font-serif !text-semBlack opacity-60'
              >
                Type
              </th>
              <th
                scope='col'
                className='py-3.5 pl-[200px] whitespace-nowrap text-left text-sm font-[500] font-serif !text-semBlack opacity-60'
              >
                Amount
              </th>
              <th
                scope='col'
                className='pr-3 py-3.5 pl-[35px] whitespace-nowrap text-sm text-left font-[500] font-serif !text-semBlack opacity-60'
              >
                Status
              </th>
              <th
                scope='col'
                className='pr-3 py-3.5 pl-[88px] whitespace-nowrap text-left text-sm font-[500] font-serif !text-semBlack opacity-60'
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200 bg-white'>
            {services.map((person, idx: React.Key | null | undefined) => (
              <tr key={idx}>
                <td className='whitespace-nowrap px-3 py-4 text-base font-serif text-gray-500 space-x-[8px]'>
                  {person.date}
                </td>
                <td className='whitespace-nowrap pl-4 pr-3 py-4 text-base font-serif text-gray-500'>
                  {person.id}
                </td>
                <td className='whitespace-nowrap pl-4 pr-3 py-4 text-base font-serif text-gray-500'>
                  {person.type}
                </td>
                <td className='whitespace-nowrap pr-[50px] py-4 text-base text-right font-serif text-gray-500'>
                  {person.amount}
                </td>
                <td className='flex items-center justify-end !space-x-[8px] whitespace-nowrap pr-3 pl-0 py-4 text-base text-right font-serif text-gray-500'>
                  <StatusIndicator status={person.status} /> &nbsp;
                  {person.status}
                </td>
                <td className='whitespace-nowrap pr-3 pl-[88px] py-4 text-base font-serif text-gray-500'>
                  {person.action}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <NoActivityLogs/> */}
    </div>
  );
};

export default ActivityLogsTable;
