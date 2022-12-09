import React from "react";
import Button from "@design-system/components/inputs/button";
import Paragraph from "@design-system/components/inputs/paragragh";
import Flex from "@design-system/components/layout/flex";
import { useRouter } from "next/router";
import { useGetDashboardDataQuery } from "@app/services/user/dashboard-data.api-slice";

const CompleteRegistration = () => {
  const {
    data: dashboardData,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetDashboardDataQuery();
  const router = useRouter();
  return (
    <div className='bg-[#EDEBFD] w-full h-[106px] py-[24px] px-[20px] rounded-[8px]'>
      <Flex>
        <div className='space-y-[8px]'>
          <Paragraph
            textsize='md'
            classstyle='!font-serif !font-[500] text-[#433A81]'
          >
            Complete your Registration!
          </Paragraph>
          <Paragraph textsize='sm' color='gray' classstyle='!font-serif'>
            Fill out the KYC section to gain access to our amazing services.
            Find out more about{" "}
            <span className='text-semBlue600 font-[600] hover:underline cursor-pointer'>
              CaaS KYC Process
            </span>
          </Paragraph>
        </div>
        {/* CTA */}
        <Button
          size='lg'
          classstyle='uppercase'
          onClick={() => {
            router.push("/kyc");
          }}
        >
          Complete KYC
        </Button>
      </Flex>
    </div>
  );
};

export default CompleteRegistration;
