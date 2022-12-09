import React from "react";
import FieldSet from "../../components/inputs/fieldset";
import InputLabel from "../../components/inputs/label";
import Input from "../../components/inputs/input";
import IconButton from "../../components/inputs/icon-button";
import Flex from "../../components/layout/flex";

const ProfileSettingForm = () => {
  return (
    <form className='w-full bg-white flex flex-col space-y-[20px]'>
      {/* Industry */}
      <FieldSet>
        <InputLabel labelfor='first-name'>Industry</InputLabel>
        <Input
          width='!w-full'
          classstyle=''
          type='text'
          name='first-name'
          placeholder='industry'
        />
      </FieldSet>

      {/* Website and Registration ID */}
      <Flex classstyle='!w-full !justify-start !space-x-[24px]'>
        {/* Website */}
        <FieldSet classstyle='!w-full'>
          <InputLabel labelfor='website'>Website</InputLabel>
          <Input
            width='!w-full'
            classstyle=''
            type='text'
            name='website'
            placeholder='www.isoterikhub.org'
          />
        </FieldSet>
        {/* Website End */}

        {/* Registration ID */}
        <FieldSet classstyle='!w-full'>
          <InputLabel labelfor='red-id'>Registration ID</InputLabel>
          <Input
            width='!w-full'
            classstyle=''
            type='text'
            name='red-id'
            placeholder='Registration ID'
          />
        </FieldSet>
        {/* Registration ID End */}
      </Flex>
      {/* Website and Registration ID End */}

      {/* Address */}
      <FieldSet>
        <InputLabel labelfor='address'>Address</InputLabel>
        <Input
          width='!w-full'
          classstyle=''
          type='text'
          name='address'
          placeholder='24 Roentgen Ave, Houston, TX.'
        />
      </FieldSet>
      {/* Address End */}

      {/* Country */}
      <FieldSet>
        <InputLabel labelfor='country'>Country</InputLabel>
        <Input
          width='!w-full'
          classstyle=''
          type='text'
          name='country'
          placeholder='United states'
        />
      </FieldSet>
      {/* Country End */}

      {/* Year Founded and State */}
      <Flex classstyle='!w-full !justify-start !space-x-[24px]'>
        {/* Year Founded */}
        <FieldSet classstyle='!w-full'>
          <InputLabel labelfor='year-founded'>Year Founded</InputLabel>
          <Input
            width='!w-full'
            classstyle=''
            type='text'
            name='year-founded'
            placeholder='2000'
          />
        </FieldSet>
        {/* Year Founded End */}

        {/* State */}
        <FieldSet classstyle='!w-full'>
          <InputLabel labelfor='state'>State</InputLabel>
          <Input
            width='!w-full'
            classstyle=''
            type='text'
            name='state'
            placeholder='Texas'
          />
        </FieldSet>
        {/* State End */}
      </Flex>
      {/* Year Founded and State End */}

      {/* About Us */}
      <FieldSet classstyle='!w-full'>
        <InputLabel labelfor='about-us'>About Us</InputLabel>
        <Input
          width='!w-full'
          classstyle=''
          type='text'
          name='about-us'
          placeholder='Enter a brief info about your company'
        />
      </FieldSet>
      {/* About Us End */}

      {/* Save Button */}
      <div className='w-full flex justify-end items-center space-x-[52px] mt-[4px]'>
        <span className='uppercase text-semBlue600 font-[18px] font-serif font-[500] cursor-pointer'>
          CANCEL
        </span>
        <IconButton
          variant='primary'
          // loading={true}
          loadingtext='signing in...'
          size='lg'
          type='submit'
          classstyle='uppercase !bg-[#6658D9] shadow-semShadow2'
        >
          Save
        </IconButton>
      </div>
    </form>
  );
};

export default ProfileSettingForm;
