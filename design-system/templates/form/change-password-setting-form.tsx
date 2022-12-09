import React from "react";
import FieldSet from "../../components/inputs/fieldset";
import InputLabel from "../../components/inputs/label";
import PasswordInput from "../../components/inputs/password-input";
import IconButton from "../../components/inputs/icon-button";

const ChangePasswordForm = () => {
  return (
    <form className='w-full bg-[#F9F8FB] flex flex-col space-y-[20px] p-[20px] rounded-[8px]'>
      {/* Old Password */}
      <FieldSet>
        <InputLabel labelfor='old-password'>Old Password</InputLabel>
        <PasswordInput name='old-password' placeholder='******8|' />
      </FieldSet>
      {/* Old Password End */}

      {/* New Password */}
      <FieldSet>
        <InputLabel labelfor='new-password'>New Password</InputLabel>
        <PasswordInput name='new-password' placeholder='******8|' />
      </FieldSet>
      {/* New Password End */}

      {/* Confirm Password */}
      <FieldSet>
        <InputLabel labelfor='confirm-password'>Confirm Password</InputLabel>
        <PasswordInput name='confirm-password' placeholder='******8|' />
      </FieldSet>
      {/* Confirm Password End */}

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

export default ChangePasswordForm;
