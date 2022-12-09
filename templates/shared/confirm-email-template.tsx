import Button from "@design-system/components/inputs/button";
import Heading from "@design-system/components/inputs/heading";
import Paragraph from "@design-system/components/inputs/paragragh";
import Flex from "@design-system/components/layout/flex";
import { useRouter } from "next/router";
import React from "react";

const ConfirmEmailTemplate = () => {
  const router = useRouter();
  return (
    <div className='bg-white flex flex-col space-y-[20px] p-[40px] pb-[64px] rounded-[12px] shadow-semShadow2 z-[3]'>
      <div className='max-w-[542px] space-y-[8px] mb-[24px]'>
        <Heading
          textsize='xl'
          classstyle='text-semBlue600 font-serif !font-[500]'
        >
          Confirm Email
        </Heading>

        <Paragraph
          textsize='sm'
          classstyle='text-semPrimary font-serif font-[400]'
        >
          An email has been sent to imranchimuchi@cass.com Click the link in the
          email to reset your password.
        </Paragraph>
      </div>
      <Flex classstyle='space-x-[20px]'>
        <Button
          onClick={() => {
            router.push("https://caas-dashboard.herokuapp.com/signup");
          }}
          variant='transparent'
          classstyle='uppercase !w-full !bg-transparent !text-semBlue600 font-serif font-[500] py-[14px] !border-semBlue600'
        >
          Resend
        </Button>
        <Button
          onClick={() => router.back()}
          variant='primary'
          classstyle='uppercase !w-full font-serif font-[500] py-[14px]'
        >
          Done
        </Button>
      </Flex>
    </div>
  );
};

export default ConfirmEmailTemplate;
