import React from "react";
import Paragraph from "@design-system/components/inputs/paragragh";
import Flex from "@design-system/components/layout/flex";

const UserKYCDesc = () => {
  return (
    <Flex classstyle='!flex-col !space-y-[8px] !items-start !w-full'>
      <Paragraph textsize='lg' classstyle='font-serif text-primaryText'>
        Welcome, <span className='font-[700] text-black'>Imran Chimuchi!</span>{" "}
        👋{" "}
        <span className='text-primaryText'>
          Take some minutes to setup your account
        </span>
      </Paragraph>
      <Paragraph
        textsize='sm'
        classstyle='font-serif text-primaryText max-w-[880px]'
      >
        Your account has been created, and you can use our sevices. We only need
        to verify your account so that it is fully functional. The steps below
        will get you started
      </Paragraph>
    </Flex>
  );
};

export default UserKYCDesc;
