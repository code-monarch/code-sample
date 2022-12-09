import React from "react";
import Flex from "@design-system/components/layout/flex";
import PopOverDropdownIcon from "@public/img/dashboard/dropdown-icon.svg";
import GrayWalletIcon from "@public/img/dashboard/gray-wallet-icon.svg";
import {
  PopOver,
  PopOverContent,
  PopOverTrigger,
} from "@design-system/components/data-display/popover";
import Heading from "@design-system/components/inputs/heading";
import Paragraph from "@design-system/components/inputs/paragragh";
import { useGetTransactionsQuery } from "@app/services/user/transactions.api-slice";
import TransactionsHeader from "./transactions-header";
import TransactionsTr from "./transactions.tr";
import TransactionsThead from "./transactions-thead";
import PulsePlaceholder from "@design-system/components/icons/pulse-placeholder-icon";
import { joinClasses } from "@design-system/utils/join-classes";

const NoTransactions = () => {
  return (
    <div className='w-full h-[322px] flex flex-col justify-start items-center space-y-[12px] pt-[80px]'>
      <GrayWalletIcon />
      <Heading
        textsize='sm'
        classstyle='text-primaryText !text-[19px] font-[400] !font-serif'
      >
        You have not made any transactions
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

const TransactionsTable = () => {
  const {
    data: transactionData,
    isLoading,
    isSuccess,
    isError,
  } = useGetTransactionsQuery();

  console.log("SERVICES: ", transactionData);
  return (
    <div className='w-full h-full min-h-screen bg-white p-[24px] rounded-[8px] space-y-[40px] shadow-md'>
      {/* Transactions Header */}
      <TransactionsHeader />
      {/* Transactions Header End */}

      <div className={"h-full space-y-[21px] px-[28px]"}>
        {/* Table title */}
        <Flex classstyle='!justify-between'>
          <Heading
            textsize='sm'
            classstyle='font-serif !text-semBlack text-[20px] !font-[500]'
          >
            Transactions
          </Heading>
          <div className='flex items-center space-x-[20px]'>
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
              <PopOverContent classstyle='z-[20]'>
                Whatever should be here
              </PopOverContent>
            </PopOver>
          </div>
        </Flex>
        {/* Table title End */}
        {isSuccess && transactionData?.data ? (
          <table className='w-full'>
            <thead className='bg-gray-50'>
              <TransactionsThead />
            </thead>
            <tbody className='divide-y divide-gray-200 bg-white'>
              {transactionData?.data?.map((transac, idx) => (
                <TransactionsTr
                  transac={transac}
                  isLoading={isLoading}
                  key={idx}
                />
              ))}
            </tbody>
          </table>
        ) : isLoading ? (
          <div className='pt-[150px]'>
            <PulsePlaceholder />
          </div>
        ) : (
          isError && <NoTransactions />
        )}
      </div>
    </div>
  );
};

export default TransactionsTable;
