import React, { useEffect, useMemo, useState } from "react";
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
import { useCallLogsQuery } from "@app/services/user/call-logs.api-slice";
import { convertDate } from "@design-system/utils/convertDate";
import ApiCallLogsHeader from "./api-call-logs-header";
import ApiCallLogsThead from "./api-call-logs-thead";
import ApiCallLogsTr from "./api-call-logs-tr";
import PulsePlaceholder from "@design-system/components/icons/pulse-placeholder-icon";

interface ICallLogsData {
  userId: string;
  callId: string;
  statusCode: number;
  status: "success" | "pending" | "cancelled" | "failed";
  createdOn: number;
  service: string;
}

const NoCallLogs = () => {
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

const CallLogsTable = () => {
  const {
    data: callLogsData,
    isLoading,
    isSuccess,
    isError
  } = useCallLogsQuery();

  const [callLogs, setCallLogs] = useState<ICallLogsData[]>();

  useEffect(() => {
    if (isSuccess) {
      setCallLogs(callLogsData.data);
    }
  }, [callLogsData?.data, isSuccess]);

  console.log("CALL LOGS: ", callLogs);

  // Will Sort this out later. Looks messy
  /**
   * This function sorts the dates each Call Log was created in a Chronological order
   */
  const sortedCallLogs = useMemo(() => {
    const sortedCallLogs = callLogs?.slice();
    // Sort date in descending chronological order
    sortedCallLogs?.sort((a, b) =>
      b.createdOn.toString().localeCompare(a.createdOn.toString())
    );
    return sortedCallLogs;
  }, [callLogs]);

  console.log("SORTED POSTS: ", sortedCallLogs);

  return (
    <div className='w-full h-full min-h-screen bg-white p-[24px] rounded-[8px] space-y-[40px] shadow-md'>
      <ApiCallLogsHeader />
      {/*  */}
      <div className='space-y-[21px] px-[28px]'>
        {/* Table title */}
        <Flex classstyle='!justify-between'>
          <Heading
            textsize='sm'
            classstyle='font-serif !text-semBlack text-[20px] !font-[500]'
          >
            Call Logs
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

        {isSuccess && sortedCallLogs ? (
          <table className='w-full min-h-full'>
            <ApiCallLogsThead />
            <tbody className='divide-y divide-gray-200 bg-white'>
              {/*  Create a component for this */}
              {sortedCallLogs?.map((callLog, idx) => (
                <ApiCallLogsTr
                  key={idx}
                  callLog={callLog}
                  isLoading={isLoading}
                />
              ))}
            </tbody>
          </table>
        ) : isLoading ? (
          <div className='pt-[150px]'>
            <PulsePlaceholder />
          </div>
        ) : (
          isError && <NoCallLogs />
        )}
      </div>
    </div>
  );
};

export default CallLogsTable;
