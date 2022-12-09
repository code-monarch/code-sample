import React, { useMemo } from "react";
import Link from "next/link";
import Heading from "@design-system/components/inputs/heading";
import Paragraph from "@design-system/components/inputs/paragragh";
import ApiTransacLogsTr from "./Api-transac-logs-tr";
import ApiTransacLogsThead from "./Api-transac-logs-thead";
import ApiTransacLogsHeader from "./Api-transac-logs-header";
import { useGetDashboardDataQuery } from "@app/services/user/dashboard-data.api-slice";
import Flex from "@design-system/components/layout/flex";
import ViewMoreRightArrow from "@public/img/dashboard/view-more-right-arrow.svg";
import PulsePlaceholder from "@design-system/components/icons/pulse-placeholder-icon";

const NoApiTransacLogs = () => {
  return (
    <div className='w-full h-[322px] flex flex-col justify-start items-center space-y-[12px] pt-[150px]'>
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
        You do not have any successful transactions yet. Go ahead, share your
        payment pages and start selling.
      </Paragraph>
    </div>
  );
};

const ApiTransacLogs = () => {
  const {
    data: dashboardData,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetDashboardDataQuery();

  // Get last five transactions from Transactions query
  const transactionPlusOffset = useMemo(() => {
    return dashboardData?.data?.callLogs?.slice(0, 5);
  }, [dashboardData?.data?.callLogs]);

  return (
    <div className='w-full h-[593px] flex flex-col justify-between bg-white p-[24px] pb-[29px] rounded-[8px]  shadow-md'>
      <div className='flex flex-col space-y-[20px]'>
        {/* Header */}
        <ApiTransacLogsHeader />
        {/* Header End */}

        {/* Transaction Table */}
        {isSuccess && dashboardData?.data?.callLogs ? (
          <table className='w-full'>
            <ApiTransacLogsThead />
            <tbody className='divide-y divide-gray-200 bg-white'>
              {transactionPlusOffset?.map((transaction, idx) => (
                <ApiTransacLogsTr transaction={transaction} key={idx} />
              ))}
            </tbody>
          </table>
        ) : isLoading ? (
          <div className='pt-[80px]'>
            <PulsePlaceholder />
          </div>
        ) : (
          isError && (<NoApiTransacLogs />)
        )}
        {/* Transaction Table End */}
      </div>
      {/* View More Button */}
      {isSuccess && dashboardData?.data?.callLogs ? (
        <Flex classstyle='w-full !justify-end'>
          <Link href='/transactions'>
            <a className='flex items-center text-semBlue600 font-serif font-[500] hover:underline'>
              View More &nbsp; <ViewMoreRightArrow />
            </a>
          </Link>
        </Flex>
      ) : null}
      {/* View More Button End */}
    </div>
  );
};

export default ApiTransacLogs;
