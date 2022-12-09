import React from "react";
import {
  AlertDialogueAction,
  AlertDialogueContent,
  //   AlertDialogueDescription,
  AlertDialogueTitle,
} from "@design-system/components/data-display/alert-dialogue";
import IconButton from "@design-system/components/inputs/icon-button";
import Chip from "@design-system/components/data-display/chips";
import Flex from "@design-system/components/layout/flex";
import Paragraph from "@design-system/components/inputs/paragragh";
import Heading from "@design-system/components/inputs/heading";
import { useSelector } from "react-redux";
import { RootState } from "@app/store";
import Tooltip from "@design-system/components/data-display/tooltip";
import PaystackLogo from "@design-system/components/icons/paystack-logo";
import LockIcon from "@public/img/dashboard/lock.svg"

const style = {
  label: `!text-[#8E8AB5] !text-[18px] !font-[500] !font-serif`,
};

const BillingPaymentModal = () => {
  // Get Billing Plan
  const billing = useSelector((state: RootState) => state.billingPayment);
  return (
    <AlertDialogueContent
      classstyle='bg-white w-[90vw] smLaptops:w-[600px] h-fit text-black'
      // aschild={true}
    >
      <AlertDialogueTitle classstyle='text-serif text-[18px] font-[500] mb-[32px]'>
        Payment Details
      </AlertDialogueTitle>
      <div className='mb-[32px] flex flex-col space-y-[32px]'>
        {/* Payment Details */}
        <div className='flex flex-col space-y-[20px]'>
          {/* Plan */}
          <Flex classstyle='!justify-start space-x-[12px] items-center'>
            {/* label */}
            <Heading textsize='xs' classstyle={style.label}>
              Plan:
            </Heading>
            {/* Pricing Tier */}
            <Chip
              variant='gold'
              classstyle='font-serif font-[700] text-base px-[6px] py-[4px]'
            >
              {billing.billingPlan}
            </Chip>
          </Flex>
          {/* Amount */}
          <Flex classstyle='!justify-start space-x-[12px] items-center'>
            {/* label */}
            <h3 className={style.label}>Amount:</h3>
            {/* Value */}
            <Paragraph textsize='md' classstyle='font-[700] !text-[#5D51C6]'>
              ${billing.amount}
            </Paragraph>
          </Flex>
          {/* Total Credit */}
          <Flex classstyle='!justify-start space-x-[12px] items-center'>
            {/* label */}
            <h3 className={style.label}>Total Credit:</h3>
            {/* Value */}
            <div className='flex items-center'>
              <Paragraph
                textsize='md'
                classstyle='font-[700] !text-[#5D51C6] mr-[8px]'
              >
                0.00
              </Paragraph>
              <span className='!text-[#8E8AB5] !text-[16px] font-serif !font-[400] mr-[21px]'>
                credits
              </span>
              <Tooltip>Tooltip</Tooltip>
            </div>
          </Flex>
          {/* Powered by Paystack */}
          <div className='flex flex-col space-y-[8px] w-full items-start'>
            <p className='text-gray-900 italic font-[500] text-base'>
              Powered by
            </p>
            <span className='w-full flex justify-center items-center py-[15px] border-[1px] border-gray-300 rounded-[8px]'>
              <PaystackLogo width='136' height='24' />
            </span>
          </div>
        </div>
      </div>
      <div className="space-y-[28px]">
        <AlertDialogueAction classstyle='w-full'>
          <IconButton classstyle='w-full uppercase' size='lg'>
            Pay now &nbsp;$
            <span className='font-[700] text-[18px]'>{billing.amount}</span>
          </IconButton>
        </AlertDialogueAction>
        {/* Page redirection warning */}
        <div className='w-full flex justify-center items-center space-x-[13px]'>
          <LockIcon />
          <Paragraph color='gray' classstyle='text-[12px] font-serif'>
            You will be redirected to the third party&apos;s webpage to make
            this payment
          </Paragraph>
        </div>
      </div>
    </AlertDialogueContent>
  );
};

export default BillingPaymentModal;
