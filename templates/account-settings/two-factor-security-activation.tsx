import Heading from "@design-system/components/inputs/heading";
import Paragraph from "@design-system/components/inputs/paragragh";
import Switch, { ISwitchProps } from "@design-system/components/inputs/switch";
import React, { useState } from "react";
import GoogleAuthModal from "../modals/google-auth-modal";

interface IProps extends ISwitchProps {
  type?: string;
  desc?: string;
  checked?: boolean;
  oncheckedchange?: (value: boolean) => void;
}

const TwoFactorActivationTemplate = (props: IProps) => {
  return (
    <div
      {...props}
      className='flex items-center justify-between w-full h-[130px] border-[1.5px] border-semBlue600 py-[24px] px-[20px] rounded-[16px]'
    >
      <div className='space-y-[8px] max-w-[435.41px]'>
        <Heading
          textsize='md'
          color='#433A81'
          classstyle='!font-sans !font-[700] !text-[18px]'
        >
          {props.type}
        </Heading>
        <Paragraph
          textsize='xs'
          classstyle='text-semPrimary font-serif font-[400]'
        >
          {props.desc}
        </Paragraph>
      </div>
      <Switch
        name={props.name}
        value={props.value}
        checked={props.checked}
        oncheckedchange={props.oncheckedchange}
      />
    </div>
  );
};

const TwoFactorSecurityActivation = () => {
  const [openGoogleAuthModal, setOpenGoogleAuthModal] =
    useState<boolean>(false);
  console.log("OPEN GOOGLE AUTH MODAL: ", openGoogleAuthModal);
  const [openEmailAuthModal, setOpenEmailAuthModal] = useState<boolean>(false);
  console.log("OPEN EMAIL AUTH MODAL: ", openEmailAuthModal);
  const [openPhoneAuthModal, setOpenPhoneAuthModal] = useState<boolean>(false);
  console.log("OPEN PHONE AUTH MODAL: ", openPhoneAuthModal);
  return (
    <div className='space-y-[24px]'>
      <TwoFactorActivationTemplate
        type='Google Authenticator'
        desc='Use the Google Authenticator app to generate one time security codes'
        name='Google Authenticator'
        value='Google Authenticator'
        checked={openGoogleAuthModal}
        oncheckedchange={setOpenGoogleAuthModal}
      />
      <GoogleAuthModal
        isopen={openEmailAuthModal}
        setisopen={setOpenEmailAuthModal}
      />
      <TwoFactorActivationTemplate
        type='Email'
        desc='Use the Google Authenticator app to generate one time security codes'
        name='Email'
        value='Email'
        checked={openEmailAuthModal}
        oncheckedchange={setOpenEmailAuthModal}
      />
      <TwoFactorActivationTemplate
        type='Text message (SMS)'
        desc='Use the Google Authenticator app to generate one time security codes'
        name='Text message (SMS)'
        value='Text message (SMS)'
        checked={openPhoneAuthModal}
        oncheckedchange={setOpenPhoneAuthModal}
      />
    </div>
  );
};

export default TwoFactorSecurityActivation;
