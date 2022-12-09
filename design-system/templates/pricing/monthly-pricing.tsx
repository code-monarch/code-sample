import {
  AlertDialogue,
  AlertDialogueOverlay,
  AlertDialogueTrigger,
} from "@design-system/components/data-display/alert-dialogue";
import {
  Card,
  CardContent,
  CardCTA,
  CardDescription,
  CardHeader,
} from "@design-system/components/data-display/card";
import Heading from "@design-system/components/inputs/heading";
import Paragraph from "@design-system/components/inputs/paragragh";
import Flex from "@design-system/components/layout/flex";
import FullWidth from "@design-system/components/layout/full-width";
import {
  setBillingAmount,
  setBillingPlan,
} from "@app/features/billing-payment-slice";
import { useToggle } from "@hooks/useToggle";
import { useDispatch } from "react-redux";
import BillingPaymentModal from "../modals/billing-payment-modal";
import ListStyleType from "@/public/img/list-style-check-type.svg";
import {
  teir_one_offers,
  monthlyPricing,
  teir_two_offers,
  teir_three_offers,
} from "./pricing-tier-offers.data";
import { pricingTabStyle } from ".";

const MonthlyPricing = () => {
  const [isModalOpen, setIsModalOpen] = useToggle(false);
  const dispatch = useDispatch();
  return (
    <div className={pricingTabStyle.tierWrapper}>
      {/* Tier One Pricing Card */}
      <Card classstyle={pricingTabStyle.card}>
        {/* Card Header */}
        <CardHeader classstyle='!p-[24px] !pb-0'>
          <FullWidth classstyle='flex flex-col items-start pb-[24px] space-y-[16px] border-b-[1px]'>
            <Paragraph
              textsize='xs'
              align='left'
              classstyle='font-serif font-[700]'
            >
              Teir 1
            </Paragraph>
            <Heading
              textsize='xs'
              align='left'
              classstyle='font-serif font-[400] text-[12px] text-semPrimary'
            >
              USD{" "}
              <p className='inline font-[600] text-[24px] text-black'>
                {monthlyPricing.map(({ tierOne }, i) => (
                  <span key={i} className='inline'>
                    {" "}
                    {tierOne}
                  </span>
                ))}
              </p>
            </Heading>
          </FullWidth>
        </CardHeader>
        {/* Card Header End */}

        {/* Card Content */}
        <CardContent classstyle='px-[24px] !mt-[24px]'>
          <div className='space-y-[32px]'>
            {/* Card CTA */}
            <AlertDialogue isopen={isModalOpen} setisopen={setIsModalOpen}>
              <AlertDialogueTrigger>
                <CardCTA
                  variant='transparent'
                  classstyle='uppercase !text-semBlue600 hover:!bg-semBlue600 hover:!text-white border-semBlue600'
                  onClick={() => {
                    dispatch(setBillingPlan("TIER ONE"));
                    dispatch(setBillingAmount(`${monthlyPricing[0].tierOne}`));
                  }}
                >
                  Subscribe Now
                </CardCTA>
              </AlertDialogueTrigger>
              <AlertDialogueOverlay isopen={isModalOpen}>
                {/* Billing Payment Modal goes here */}
                <BillingPaymentModal />
              </AlertDialogueOverlay>
            </AlertDialogue>
            {/* Card Title End */}

            {/* Card description */}
            <CardDescription>
              <div className='flex flex-col space-y-[10px]'>
                {teir_one_offers.map((desc, index) => (
                  <Flex
                    key={index}
                    classstyle='!items-start !justify-start space-x-[23px]'
                  >
                    <div>
                      <ListStyleType />
                    </div>
                    <Paragraph
                      textsize='xs'
                      align='left'
                      classstyle='font-serif font-[400] text-[#554A68] leading-[25.6px]'
                    >
                      {desc}
                    </Paragraph>
                  </Flex>
                ))}
              </div>
            </CardDescription>
            {/* Card description End */}
          </div>
        </CardContent>
        {/* Card Content End */}
      </Card>
      {/* Tier One Pricing Card End */}

      {/* Tier Two Pricing Card */}
      <Card classstyle={pricingTabStyle.card}>
        {/* Card Header */}
        <CardHeader classstyle='!p-[24px] !pb-0'>
          <FullWidth classstyle='flex flex-col items-start pb-[24px] space-y-[16px] border-b-[1px]'>
            <Paragraph
              textsize='xs'
              align='left'
              classstyle='font-serif font-[700]'
            >
              Teir 2
            </Paragraph>
            <Heading
              textsize='xs'
              align='left'
              classstyle='font-serif font-[400] text-[12px] text-semPrimary'
            >
              USD{" "}
              <p className='inline font-[600] text-[24px] text-black'>
                {" "}
                {monthlyPricing.map(({ tierTwo }, i) => (
                  <span key={i} className='inline'>
                    {" "}
                    {tierTwo}
                  </span>
                ))}
              </p>{" "}
              &nbsp;
              {/* Previous Price */}
              <p className='inline line-through text-[16px]'>10,139.4</p>
            </Heading>
          </FullWidth>
        </CardHeader>
        {/* Card Header End */}

        {/* Card Content */}
        <CardContent classstyle='px-[24px] !mt-[24px]'>
          <div className='space-y-[32px]'>
            {/* Card CTA */}
            <AlertDialogue isopen={isModalOpen} setisopen={setIsModalOpen}>
              <AlertDialogueTrigger>
                <CardCTA
                  variant='transparent'
                  classstyle='uppercase !bg-semBlue600 hover:!text-white border-semBlue600 shadow-md'
                  onClick={() => {
                    dispatch(setBillingPlan("TIER TWO"));
                    dispatch(setBillingAmount(`${monthlyPricing[0].tierTwo}`));
                  }}
                >
                  Subscribe Now
                </CardCTA>
              </AlertDialogueTrigger>
              <AlertDialogueOverlay isopen={isModalOpen}>
                {/* Billing Payment Modal goes here */}
                <BillingPaymentModal />
              </AlertDialogueOverlay>
            </AlertDialogue>
            {/* Card Title End */}

            {/* Card description */}
            <CardDescription>
              <div className='flex flex-col space-y-[10px]'>
                {teir_two_offers.map((desc, index) => (
                  <Flex
                    key={index}
                    classstyle='!items-start !justify-start space-x-[23px]'
                  >
                    <div>
                      <ListStyleType />
                    </div>
                    <Paragraph
                      textsize='xs'
                      align='left'
                      classstyle='font-serif font-[400] text-[#554A68] leading-[25.6px]'
                    >
                      {desc}
                    </Paragraph>
                  </Flex>
                ))}
              </div>
            </CardDescription>
            {/* Card description End */}
          </div>
        </CardContent>
        {/* Card Content End */}
      </Card>
      {/* Tier Two Pricing Card End */}

      {/* Tier Three Pricing Card */}
      <Card classstyle={pricingTabStyle.card}>
        {/* Card Header */}
        <CardHeader classstyle='!p-[24px] !pb-0'>
          <FullWidth classstyle='flex flex-col items-start pb-[24px] space-y-[16px] border-b-[1px]'>
            <Paragraph
              textsize='xs'
              align='left'
              classstyle='font-serif font-[700]'
            >
              Teir 3
            </Paragraph>
            <Heading
              textsize='xs'
              align='left'
              classstyle='font-serif font-[400] text-[12px] text-semPrimary'
            >
              USD{" "}
              <p className='inline font-[600] text-[24px] text-black'>
                {" "}
                {monthlyPricing.map(({ tierThree }, i) => (
                  <span key={i} className='inline'>
                    {" "}
                    {tierThree}
                  </span>
                ))}
              </p>{" "}
              &nbsp;
              {/* Previous Price */}
              <p className='inline line-through text-[16px]'>20,278.8</p>
            </Heading>
          </FullWidth>
        </CardHeader>
        {/* Card Header End */}

        {/* Card Content */}
        <CardContent classstyle='px-[24px] !mt-[24px]'>
          <div className='space-y-[32px]'>
            {/* Card CTA */}
            <CardCTA
              variant='transparent'
              classstyle='uppercase !text-[18px] !text-semBlue600 before:!bg-semBlue600 nav-link nav-link-ltr border-white shadow-none'
            >
              Contact Us
            </CardCTA>
            {/* Card Title End */}

            {/* Card description */}
            <CardDescription>
              <div className='flex flex-col space-y-[10px]'>
                {teir_three_offers.map((desc, index) => (
                  <Flex
                    key={index}
                    classstyle='!items-start !justify-start space-x-[23px]'
                  >
                    <div>
                      <ListStyleType />
                    </div>
                    <Paragraph
                      textsize='xs'
                      align='left'
                      classstyle='font-serif font-[400] text-[#554A68] leading-[25.6px]'
                    >
                      {desc}
                    </Paragraph>
                  </Flex>
                ))}
              </div>
            </CardDescription>
            {/* Card description End */}
          </div>
        </CardContent>
        {/* Card Content End */}
      </Card>
      {/* Tier Three Pricing Card End */}
    </div>
  );
};

export default MonthlyPricing;
