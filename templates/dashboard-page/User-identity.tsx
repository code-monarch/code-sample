import React from "react";
import Chip from "@design-system/components/data-display/chips";
import Paragraph from "@design-system/components/inputs/paragragh";
import Flex from "@design-system/components/layout/flex";
import DisplayFeatures from "@design-system/components/data-display/display-features";
import { useGetDashboardDataQuery } from "@app/services/user/dashboard-data.api-slice";
import { joinClasses } from "@design-system/utils/join-classes";

const UserIdentity = () => {
  // dashboard Data query
  const {
    data: dashboardData,
    isLoading, 
    isSuccess,
    isError,
    error,
  } = useGetDashboardDataQuery();

  // Get Full Name from Query
  let fullName;
  if (isSuccess) {
    fullName = dashboardData?.data.userInfo.fullName;
  }

  // Get isVerified status from query
  let isVerified;
  if (isSuccess) {
    isVerified = dashboardData?.data.userInfo.isVerified;
  }
  return (
    <Flex classstyle='!space-x-[24px] !justify-start !w-full'>
      <Paragraph
        textsize='lg'
        classstyle='flex items-center font-serif text-primaryText whitespace-nowrap'
      >
        Welcome,&nbsp;
        <span className='font-[700] text-black whitespace-nowrap'>
          {" "}
          <DisplayFeatures
            isLoading={isLoading ? true : false}
            isError={isError ? true : false}
            error_placeholder='__'
            isSuccess={isSuccess ? true : false}
            bg='!bg-[#EDEBFD]'
            classstyles={joinClasses(
              isLoading && "min-h-[35px] min-w-[153px] rounded-[4px]"
            )}
          >
            {fullName} {isSuccess && <>👋</>}
          </DisplayFeatures>
        </span>{" "}
      </Paragraph>
      <Chip
        variant={`${isVerified ? "green" : "gray"}`}
        classstyle={joinClasses(
          "!text-font !px-[10px]",
          isVerified ? "text-white" : "!text-[#8E8AB5]"
        )}
      >
        {isVerified ? "Verified" : "Not verified"}
      </Chip>
      {/* <Chip variant='green'classstyle='!text-font !px-[10px]'>
        Verified
      </Chip> */}
    </Flex>
  );
};

export default UserIdentity;
