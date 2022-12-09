import React, { useEffect, useState } from "react";
import Heading from "@design-system/components/inputs/heading";
import Paragraph from "@design-system/components/inputs/paragragh";
import CalenderIcon from "@public/img/dashboard/total-logs-calender-icon.svg";
import EmptyTotalLogsChart from "@public/img/dashboard/empty-total-logs-pie-chart.svg";
import PopOverDropdownIcon from "@public/img/dashboard/dropdown-icon.svg";
import Flex from "@design-system/components/layout/flex";
import {
  PopOver,
  PopOverTrigger,
  PopOverContent,
} from "@design-system/components/data-display/popover";
import { useGetDashboardDataQuery } from "@app/services/user/dashboard-data.api-slice";
import DisplayFeatures from "@design-system/components/data-display/display-features";
import { joinClasses } from "@design-system/utils/join-classes";

const styles = {
  serviceLogs: `text-[13px] text-semBlack font-serif`,
  serviceLogsListBullet: `w-[12px] h-[12px] rounded-[99999%] bg-[#EDEBFD]`,
};

const TotalLogs = () => {
  const {
    data: dashboardData,
    isLoading,
    isSuccess,
    isError,
  } = useGetDashboardDataQuery();

  const [dailyLogs, setDailyLogs] = useState<number>();
  const [weeklyLogs, setWeeklyLogs] = useState<number>();
  const [monthlyLogs, setMonthlyLogs] = useState<number>();

  useEffect(() => {
    const logs = dashboardData?.data?.callStatistics;
    if (isSuccess) {
      setDailyLogs(logs?.day);
      setWeeklyLogs(logs?.week);
      setMonthlyLogs(logs?.month);
    }
  }, [isSuccess, dashboardData?.data?.callStatistics]);

  return (
    <div className='flex flex-col justify-between bg-white w-[438px] h-[376px] py-[29px] px-[24px] rounded-[8px] shadow-md'>
      <Flex classstyle='w-full'>
        <Paragraph
          textsize='sm'
          classstyle='font-serif !text-semBlack font-[500]'
        >
          Total Logs
        </Paragraph>
        <PopOver>
          <PopOverTrigger>
            <div className='h-[35px] flex items-center space-x-[8px] py-[8px] px-[12px] border-[1px] border-border-gray-300 rounded-[8px] cursor-pointer'>
              <CalenderIcon />
              <p className='text-[14px] text-[#8E8AB5]'>Monthly</p>
              <PopOverDropdownIcon />
            </div>
          </PopOverTrigger>
          <PopOverContent>Whatever should be here</PopOverContent>
        </PopOver>
      </Flex>
      <Flex classstyle='!justify-start !items-center space-x-[20px]'>
        <div>
          <EmptyTotalLogsChart />
        </div>
        <div className='space-y-[16px]'>
          {/* Compliance unit training */}
          <div className='flex items-center space-x-[12px]'>
            <span className={styles.serviceLogsListBullet}></span>
            <p className={styles.serviceLogs}>Compliance unit training</p>
          </div>
          {/* Compliance unit training End */}

          {/* Travel rule compliance */}
          <div className='flex items-center space-x-[12px]'>
            <span className={styles.serviceLogsListBullet}></span>
            <p className={styles.serviceLogs}>Travel rule compliance</p>
          </div>
          {/* Travel rule compliance End */}

          {/* Wallet screening */}
          <div className='flex items-center space-x-[12px]'>
            <span className={styles.serviceLogsListBullet}></span>
            <p className={styles.serviceLogs}>Wallet screening</p>
          </div>
          {/* Wallet screening End */}

          {/* KYC/KYV Verification */}
          <div className='flex items-center space-x-[12px]'>
            <span className={styles.serviceLogsListBullet}></span>
            <p className={styles.serviceLogs}>KYC/KYV verification</p>
          </div>
          {/* KYC/KYV Verification End */}
        </div>
      </Flex>
      <Flex classstyle='w-full !justify-start !space-x-[64px]'>
        {/* Daily */}
        <div className='flex flex-col space-y-[8px]'>
          <Heading textsize='xl' classstyle='!text-semBlack !font-serif'>
            <DisplayFeatures
              isLoading={isLoading ? true : false}
              isError={isError ? true : false}
              error_placeholder='--'
              isSuccess={isSuccess ? true : false}
              classstyles={joinClasses(
                isLoading && "min-h-[34px] min-w-[40px]"
              )}
            >
              {dailyLogs}
            </DisplayFeatures>
          </Heading>
          <Paragraph textsize='xs' classstyle='!font-serif text-semBlack'>
            Daily
          </Paragraph>
        </div>
        {/* Daily End */}

        {/* Weekly */}
        <div className='flex flex-col space-y-[8px]'>
          <Heading textsize='xl' classstyle='!text-semBlack !font-serif'>
            <DisplayFeatures
              isLoading={isLoading ? true : false}
              isError={isError ? true : false}
              error_placeholder='--'
              isSuccess={isSuccess ? true : false}
              classstyles={joinClasses(
                isLoading && "min-h-[34px] min-w-[40px]"
              )}
            >
              {weeklyLogs}
            </DisplayFeatures>
          </Heading>
          <Paragraph textsize='xs' classstyle='!font-serif text-semBlack'>
            Weekly
          </Paragraph>
        </div>
        {/* Weekly End */}

        {/* Monthly */}
        <div className='flex flex-col space-y-[8px]'>
          <Heading textsize='xl' classstyle='!text-semBlack !font-serif'>
            <DisplayFeatures
              isLoading={isLoading ? true : false}
              isError={isError ? true : false}
              error_placeholder='--'
              isSuccess={isSuccess ? true : false}
              classstyles={joinClasses(
                isLoading && "min-h-[34px] min-w-[40px]"
              )}
            >
              {monthlyLogs}
            </DisplayFeatures>
          </Heading>
          <Paragraph textsize='xs' classstyle='!font-serif text-semBlack'>
            Monthly
          </Paragraph>
        </div>
        {/* Monthly End */}
      </Flex>
    </div>
  );
};

export default TotalLogs;
