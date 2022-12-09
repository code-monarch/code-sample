import React, { useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@design-system/components/data-display/tabs";
import Heading from "@design-system/components/inputs/heading";
import Paragraph from "@design-system/components/inputs/paragragh";
import { joinClasses } from "@design-system/utils/join-classes";
import ChangePasswordForm from "@design-system/templates/form/change-password-setting-form";
import TwoFactorSecurityActivation from "./two-factor-security-activation";

const style = {
  tabs: `w-[585px] flex flex-col items-center space-y-[32px]`,
  tabsList: `w-full !bg-[#EDEBFD] flex items-center rounded-[8px]`,
  tabsTrigger: `w-[50%] font-sans text-[#8E8AB5] text-[16px] font-[700] py-[8px] radix-state-active:bg-semBlue600 radix-state-active:text-white radix-state-active:outline-none radix-state-active:border-none`,
};

const SecuritySetting = () => {
  const [value, setValue] = useState<string>("change-password");
  return (
    <div className='w-full min-h-screen bg-white flex items-start justify-start space-x-[36px] p-[35px] rounded-[8px] shadow-md transition-all duration-1200 ease-in-out'>
      {/* Form */}
      <div className='space-y-[40px]'>
        {/* Heading and Description */}
        <div className='space-y-[8px]'>
          <Heading textsize='md' classstyle='text-black font-serif !font-[500]'>
            {value === "auth" ? "2-Factor Authentication" : "Change password"}
          </Heading>

          <Paragraph
            textsize='sm'
            classstyle='text-semPrimary font-serif font-[400]'
          >
            {value === "auth"
              ? "Setup Two factor verification to increase security"
              : "Choose a new password, something easy to remember."}
          </Paragraph>
        </div>
        {/* Heading and Description End */}
        <Tabs
          value={`${value}`}
          onValueChange={(value) => {
            setValue(value);
          }}
          defaultvalue='change-password'
          classstyle={style.tabs}
        >
          {/* Tab control lists */}
          <TabsList
            arialabel='Manage your account setting'
            classstyle={style.tabsList}
          >
            <TabsTrigger
              value='change-password'
              classstyle={joinClasses(
                "radix-state-active:rounded-l-[8px]",
                style.tabsTrigger
              )}
            >
              Change Password
            </TabsTrigger>
            <TabsTrigger
              value='auth'
              classstyle={joinClasses(
                "radix-state-active:rounded-r-[8px]",
                style.tabsTrigger
              )}
            >
              2-Factor Authentication
            </TabsTrigger>
          </TabsList>
          {/* Tab control lists End */}

          {/* Tab Content */}
          <TabsContent value='change-password' classstyle='!w-full'>
            <ChangePasswordForm />
          </TabsContent>
          <TabsContent value='auth' classstyle='!w-full'>
            <TwoFactorSecurityActivation />
          </TabsContent>
          {/* Tab Content End */}
        </Tabs>
      </div>
      {/* Form End */}
    </div>
  );
};

export default SecuritySetting;
