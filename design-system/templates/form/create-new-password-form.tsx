import React, { useEffect, useState } from "react";
import FieldSet from "../../components/inputs/fieldset";
import InputLabel from "../../components/inputs/label";
import Heading from "../../components/inputs/heading";
import Paragraph from "../../components/inputs/paragragh";
import NotARobot from "./not-a-robot";
import { useRouter } from "next/router";
import PasswordInput from "../../components/inputs/password-input";
import IconButton from "../../components/inputs/icon-button";
import ArrowLeft from "@public/img/arrow-left.svg";

const CreateNewPasswordForm = () => {
  const router = useRouter();
  return (
    <form className='w-[622px] bg-white flex flex-col space-y-[20px] p-[40px] pb-[64px] rounded-[12px] shadow-semShadow2 z-[3]'>
      <div className='space-y-[8px] mb-[24px]'>
        {/* Go back Icon */}
        <button
          type='button'
          onClick={() => router.back()}
          className='flex items-center space-x-[10px] mb-[30px]'
        >
          <ArrowLeft />
          <Paragraph
            textsize='sm'
            classstyle='text-semPrimary font-serif font-[500]'
          >
            Back
          </Paragraph>
        </button>
        {/* Go back Icon End */}

        {/* Form Heading and Description */}
        <Heading
          textsize='xl'
          classstyle='text-white text-semGrey500 font-serif !font-[500]'
        >
          Welcome back!
        </Heading>

        <Paragraph
          textsize='sm'
          classstyle='text-semPrimary font-serif font-[400]'
        >
          Sign into your account to stay ahead
        </Paragraph>
      </div>
      {/* Form Heading and Description End */}

      {/* New Password */}
      <FieldSet>
        <InputLabel labelfor='password'>New Password</InputLabel>
        <PasswordInput name='password' placeholder='enter new password' />
      </FieldSet>
      {/* New Password End */}

      {/* Confirm Password */}
      <FieldSet>
        <InputLabel labelfor='password'>Confirm Password</InputLabel>
        <PasswordInput name='password' placeholder='enter new password' />
      </FieldSet>
      {/* Confirm Password End */}

      <NotARobot />

      {/* Sign In Button */}
      <IconButton
        variant='primary'
        // loading={true}
        size='lg'
        type='submit'
        classstyle='uppercase shadow-semShadow2'
      >
        Change Password
      </IconButton>
    </form>
  );
};

export default CreateNewPasswordForm;
