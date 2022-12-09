import React, { ReactElement, ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
} from "@design-system/components/data-display/accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import PersonIcon from "@public/img/dashboard/person-icon.svg";
import BusinessDetailsIcon from "@public/img/dashboard/business-details-icon.svg";
import UploadKYCIcon from "@public/img/dashboard/upload-kyc-icon.svg";
import KycCompleted from "@public/img/dashboard/kyc-completed-form-icon.svg";
import classes from "@design-system/design/accordion.data-display.classes";
import Heading from "@design-system/components/inputs/heading";
import Paragraph from "@design-system/components/inputs/paragragh";
import AddPersonaldetailsForm from "./add-personal-details-form";
import AddBusinessdetailsForm from "./add-business-details-form";
import UploadKYCForm from "./upload-kyc";

interface IKycStepsItem {
  header: string;
  icon?: ReactElement;
  complete?: boolean // This status would be gotten from the Backend
  content: ReactNode;
}

const items: IKycStepsItem[] = [
  {
    header: "Verify email",
    // What the heck is this
    icon: (
      <svg
        width='20'
        height='18'
        viewBox='0 0 20 18'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M14.939 0C16.28 0 17.57 0.53 18.519 1.481C19.469 2.43 20 3.71 20 5.05V12.95C20 15.74 17.73 18 14.939 18H5.06C2.269 18 0 15.74 0 12.95V5.05C0 2.26 2.259 0 5.06 0H14.939ZM16.53 6.54L16.61 6.46C16.849 6.17 16.849 5.75 16.599 5.46C16.46 5.311 16.269 5.22 16.07 5.2C15.86 5.189 15.66 5.26 15.509 5.4L11 9C10.42 9.481 9.589 9.481 9 9L4.5 5.4C4.189 5.17 3.759 5.2 3.5 5.47C3.23 5.74 3.2 6.17 3.429 6.47L3.56 6.6L8.11 10.15C8.67 10.59 9.349 10.83 10.06 10.83C10.769 10.83 11.46 10.59 12.019 10.15L16.53 6.54Z'
          fill='#8E8AB5'
        />
      </svg>
    ),
    complete: true,
    content: "",
  },
  {
    header: "Add Personal Detials",
    icon: <PersonIcon />,
    content: <AddPersonaldetailsForm />,
  },
  {
    header: "Business Details",
    icon: <BusinessDetailsIcon />,
    content:<AddBusinessdetailsForm/>
  },
  {
    header: "Upload KYC Document",
    icon: <UploadKYCIcon />,
    content:
      <UploadKYCForm/>,
  },
];

const KYCSteps = () => {
  return (
    <div className='w-full h-fit p-[40px] rounded-[8px] space-y-[20px]'>
      <Accordion type='multiple' classstyle='!space-y-[32px]'>
        {items.map((item, i) => (
          <AccordionItem
            key={`header-${i}`}
            value={`item-${i + 1}`}
            classstyle='!w-full !shadow-[0px_4px_12px_rgba(24,_39,_75,_0.12)] !border-0'
            disabled={i === 0 && true} // Disable the first Kyc section(Verify Email) by default
          >
            <AccordionHeader>
              <AccordionTrigger classstyle='!bg-white !h-[56px]'>
                <div className='flex items-center space-x-[24px]'>
                  {item.icon}
                  <Heading
                    textsize='sm'
                    boldness='medium'
                    classstyle='text-gray-900 font-serif'
                  >
                    {item.header}
                  </Heading>
                </div>
                {/* Change Icon here whenever the Kyc has been completed */}
                {item.complete ? (
                  <KycCompleted />
                ) : (
                  <ChevronDownIcon className={classes.accordionArrow} />
                )}
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent classstyle='!w-full !grow-0'>
              <Paragraph
                textsize='sm'
                color='gray'
                classstyle='text-gray-700 font-serif'
              >
                <p>{item.content}</p>
              </Paragraph>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default KYCSteps;
