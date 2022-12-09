import Button from "@design-system/components/inputs/button";
import Heading from "@design-system/components/inputs/heading";
import Paragraph from "@design-system/components/inputs/paragragh";
import ViewMoreRightArrow from "@public/img/dashboard/view-more-right-arrow.svg";
import Switch from "@design-system/components/inputs/switch";
import Flex from "@design-system/components/layout/flex";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useGetDashboardDataQuery } from "@app/services/user/dashboard-data.api-slice";
import PulsePlaceholder from "@design-system/components/icons/pulse-placeholder-icon";

const styles = {
  activeService: `text-base text-semBlack font-serif`,
};

interface IActiveServices {
  serviceName?: string;
  isActive?: boolean;
  canActivate?: boolean;
}

const NoActiveServices = () => {
  return (
    <div className='w-full h-full flex flex-col justify-start items-start space-y-[36px]'>
      <Heading
        textsize='sm'
        classstyle='font-serif !text-semBlack text-[20px] !font-[500]'
      >
        Active Services
      </Heading>
      <div className='flex flex-col justify-start items-center space-y-[16px] pt-[40px]'>
        <Heading
          textsize='sm'
          classstyle='text-primaryText !text-[18px] font-[400] !font-serif'
        >
          No avialable service
        </Heading>
        <Paragraph
          textsize='sm'
          classstyle='!text-black text-[14px] text-center !font-serif'
        >
          Subscribe to a plan to start using our services
        </Paragraph>
        <Button size='lg'>
          {" "}
          <Link href='/account-settings'>
            <a>Subscribe now</a>
          </Link>
        </Button>
      </div>
    </div>
  );
};

const ActiveServices = () => {
  const [activeServices, setActiveServices] = useState<IActiveServices[]>();
  const {
    data: dashboardData,
    isLoading,
    isSuccess,
    isError,
  } = useGetDashboardDataQuery();

  // Set the value of the active services gotten from the API
  useEffect(() => {
    if (isSuccess) {
      setActiveServices(dashboardData?.data.activeServices);
    }
  }, [dashboardData?.data.activeServices, isSuccess]);

  console.log("ACTIVE SERVICES: ", activeServices);
  return (
    <div className=' bg-white w-[438px] min-h-[415px] h-[415px] py-[29px] px-[24px] rounded-[8px] shadow-md'>
      {/* Active Services Wrapper */}
      {isSuccess && activeServices?.length !== 0 ? (
        <div className='h-full flex flex-col justify-between'>
          <div className='flex !flex-col items-start space-y-[20px]'>
            <Heading
              textsize='sm'
              classstyle='font-serif !text-semBlack text-[20px] !font-[500]'
            >
              Active Services
            </Heading>
            <div className='w-full space-y-[32px]'>
              {activeServices?.map((service, id) => (
                <Flex
                  key={service.serviceName}
                  classstyle='!w-full !justify-between'
                >
                  <p className={styles.activeService}>{service.serviceName}</p>
                  <Switch
                    name={`${service.serviceName}`}
                    value={`${service.serviceName}`}
                    checked={service.isActive}
                    disabled={!service.canActivate}
                  />
                </Flex>
              ))}
            </div>
          </div>
          <Flex classstyle='w-full !justify-end mt-[20px]'>
            <Link href='/service-activation'>
              <a className='flex items-center text-semBlue600 font-serif font-[500] hover:underline'>
                View More &nbsp; <ViewMoreRightArrow />
              </a>
            </Link>
          </Flex>
        </div>
      ) : isLoading ? (
        <div className='pt-[150px]'>
          <PulsePlaceholder height='50' width='50' />
        </div>
      ) : (
        isError && <NoActiveServices />
      )}
      {/* Active Services Wrapper End */}
    </div>
  );
};

export default ActiveServices;
