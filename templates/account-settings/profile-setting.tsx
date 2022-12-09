import React from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@design-system/components/data-display/tabs";
import Heading from "@design-system/components/inputs/heading";
import Paragraph from "@design-system/components/inputs/paragragh";
import ProfileSettingForm from "@design-system/templates/form/profile-setting-form";
import Avatar from "@public/img/dashboard/avatar.svg";
import { joinClasses } from "@design-system/utils/join-classes";

const style = {
  tabs: `w-[585px] flex flex-col items-center space-y-[32px]`,
  tabsList: `w-full !bg-[#EDEBFD] flex items-center rounded-[8px]`,
  tabsTrigger: `w-[50%] font-sans text-[#8E8AB5] text-[16px] font-[700] py-[8px] radix-state-active:bg-semBlue600 radix-state-active:text-white radix-state-active:outline-none radix-state-active:border-none`,
};

const ProfileSetting = () => {
  return (
    <div className='w-full min-h-screen bg-white flex items-start justify-start space-x-[36px] p-[35px] rounded-[8px] shadow-md transition-all duration-1200 ease-in-out'>
      {/* Form */}
      <div className='space-y-[40px]'>
        {/* Heading and Description */}
        <div className='space-y-[8px]'>
          <Heading textsize='md' classstyle='text-black font-serif !font-[500]'>
            General
          </Heading>

          <Paragraph
            textsize='sm'
            classstyle='text-semPrimary font-serif font-[400]'
          >
            Let&apos;s setup your general product settings first!
          </Paragraph>
        </div>
        {/* Heading and Description End */}
        <Tabs defaultvalue='organisation-profile' classstyle={style.tabs}>
          {/* Tab control lists */}
          <TabsList arialabel='Pricing plans' classstyle={style.tabsList}>
            <TabsTrigger
              value='organisation-profile'
              classstyle={joinClasses(
                "radix-state-active:rounded-l-[8px]",
                style.tabsTrigger
              )}
            >
              Organisation Profile
            </TabsTrigger>
            <TabsTrigger
              value='user-profile'
              classstyle={joinClasses(
                "radix-state-active:rounded-r-[8px]",
                style.tabsTrigger
              )}
            >
              Contact-person-Profile
            </TabsTrigger>
          </TabsList>
          {/* Tab control lists End */}

          {/* Tab Content */}
          <TabsContent value='organisation-profile' classstyle='!w-full'>
            <ProfileSettingForm />
          </TabsContent>
          <TabsContent value='user-profile' classstyle='!w-full'>
            <ProfileSettingForm />
          </TabsContent>
          {/* Tab Content End */}
        </Tabs>
      </div>
      {/* Form End */}
      {/* Avatar */}
      <div className='bg-white w-[240px] h-fit flex flex-col justify-center items-center py-[24px] space-y-[24px] mt-[100px] shadow-[0px_6px_12px_rgba(24,_39,_75,_0.12)]'>
        <div>
          {" "}
          <Avatar />
        </div>
        <div className=''>
          <Heading
            textsize='md'
            classstyle='text-black !text-center font-serif !font-[500] mb-[8px]'
          >
            Isotetik Hub
          </Heading>
          <Paragraph
            textsize='xs'
            classstyle='text-semPrimary !text-center !text-[14px] !text-[#8E8AB5] font-serif font-[400]'
          >
            CHATS115009
          </Paragraph>
          <Paragraph
            textsize='xs'
            classstyle='text-semPrimary !text-center !text-[14px] !text-semBlue600 font-serif font-[400]'
          >
            www.pentagon.org
          </Paragraph>
        </div>
      </div>
      {/* Avatar End */}
    </div>
  );
};

export default ProfileSetting;
