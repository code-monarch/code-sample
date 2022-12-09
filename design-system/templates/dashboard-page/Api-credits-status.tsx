import React from "react";
import Flex from "@design-system/components/layout/flex";
import AvailableApiCreditIcon from "@public/img/dashboard/available-api-credit-icon.svg";
import UsedApiCredIcon from "@public/img/dashboard/used-api-credit-icon.svg";
import MoreOptionsIcon from "@public/img/dashboard/api-credit-more-options-icon.svg";
import BlackMoreOptionsIcon from "@public/img/dashboard/api-credit-black-more-options-icon.svg";
import Paragraph from "@design-system/components/inputs/paragragh";
import Button from "@design-system/components/inputs/button";
import { joinClasses } from "@design-system/utils/join-classes";
import {
  PopOver,
  PopOverContent,
  PopOverTrigger,
} from "@design-system/components/data-display/popover";
import {
  AlertDialogue,
  AlertDialogueOverlay,
  AlertDialogueTrigger,
} from "@design-system/components/data-display/alert-dialogue";
import { useToggle } from "@hooks/useToggle";
import FundWalletModal from "../modals/fund-wallet-modal";
import dashboardData from "@app/features/dashboard-data";

const styles = {
  card: `w-[380px] h-[198px] space-y-[24px] px-[20px] py-[26.5px] rounded-[8px] shadow-md`,
  cardDetails: `!w-full !items-start !space-x-[20px]`,
  cardBtnWrapper: `w-full flex justify-end`,
};

const ApiCreditStatus = () => {
  const [isModalOpen, setIsModalOpen] = useToggle(false);
  return (
    <Flex classstyle='!space-x-[20px] !justify-start !w-full'>
      {/* Available API Credit Card */}
      <div className={joinClasses("bg-[#5D51C6] text-white", styles.card)}>
        <Flex classstyle={styles.cardDetails}>
          <Flex classstyle='!space-x-[20px] !justify-start !items-start'>
            <AvailableApiCreditIcon />
            <div className='space-y-[8px]'>
              <Paragraph
                textsize='2xl'
                classstyle='text-[#EFD9CE] font-[700] !font-sans min-h-[3rem] min-w-[50px]'
              >
                {/* Get Available Credit from features */}
                <dashboardData.AvailableCredit />
              </Paragraph>
              <Paragraph classstyle='text-[#D9C5BB] !text-base !text-serif font-[400] !font-sans'>
                Available API Credits
              </Paragraph>
            </div>
          </Flex>
          <PopOver>
            <PopOverTrigger>
              <div className='cursor-pointer'>
                <MoreOptionsIcon className='cursor-pointer' />
              </div>
            </PopOverTrigger>
            <PopOverContent classstyle='bg-white w-[100px] py-[36px] px-[32px] shadow-md'>
              <p className='text-black'>Whatever Should be here</p>
            </PopOverContent>
          </PopOver>
        </Flex>
        <div className={styles.cardBtnWrapper}>
          <Button size='md' classstyle='uppercase !bg-semBlue600'>
            Topup credit
          </Button>
        </div>
      </div>
      {/* Available API credit Card End */}

      {/* Wallet Balance Card */}
      <div className={joinClasses("bg-white text-black", styles.card)}>
        <Flex classstyle={styles.cardDetails}>
          <Flex classstyle='!space-x-[20px] !justify-start !items-start'>
            <UsedApiCredIcon />
            <div className='space-y-[8px]'>
              <Paragraph
                textsize='2xl'
                classstyle='flex items-center text-semBlack font-[700] !font-sans'
              >
                <span className='font-[400] !text-[45px]'>$</span>&nbsp;
                {/* Get Wallet Balance from features */}
                <dashboardData.WalletBalance />
              </Paragraph>
              <Paragraph classstyle='text-[#6F6A94] !text-base !text-serif font-[400] !font-sans'>
                Wallet Balance
              </Paragraph>
            </div>
          </Flex>
          <PopOver>
            <PopOverTrigger>
              <div className='cursor-pointer'>
                <BlackMoreOptionsIcon className='cursor-pointer' />
              </div>
            </PopOverTrigger>
            <PopOverContent classstyle='bg-white w-[100px] py-[36px] px-[32px] shadow-md'>
              <p className='text-black'>Whatever Should be here</p>
            </PopOverContent>
          </PopOver>
        </Flex>
        <div className={styles.cardBtnWrapper}>
          {/* Fund Wallet Button And Modal */}
          <AlertDialogue isopen={isModalOpen} setisopen={setIsModalOpen}>
            <AlertDialogueTrigger classstyle='!text-red-500'>
              <Button
                size='md'
                classstyle='uppercase !bg-white !text-semBlue600 border-[1px] border-semBlue600 hover:!text-white hover:!bg-semBlue600'
              >
                FUND WALLET
              </Button>
            </AlertDialogueTrigger>
            <AlertDialogueOverlay isopen={isModalOpen}>
              <FundWalletModal />
            </AlertDialogueOverlay>
          </AlertDialogue>
          {/* Fund Wallet Button And Modal End */}
        </div>
      </div>
      {/* Wallet Balance Card End*/}
    </Flex>
  );
};

export default ApiCreditStatus;
