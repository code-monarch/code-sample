import React from "react";
import FieldSet from "../../components/inputs/fieldset";
import InputLabel from "../../components/inputs/label";
import IconButton from "../../components/inputs/icon-button";
import Input from "../../components/inputs/input";
import Heading from "../../components/inputs/heading";
import Paragraph from "../../components/inputs/paragragh";
import ArrowLeft from "@public/img/arrow-left.svg";
import { useRouter } from "next/router";

const ResetPasswordForm = () => {
  const router = useRouter();
  return (
    <form className='max-w-[558px] bg-white flex flex-col space-y-[20px] p-[40px] pb-[64px] rounded-[12px] shadow-semShadow2 z-[3]'>
      <div className='space-y-[8px]'>
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
        <div className='space-y-[15px]'>
          <Heading
            textsize='xl'
            classstyle='text-white text-semGrey500 font-serif !font-[500]'
          >
            Forgot your password
          </Heading>

          <Paragraph
            textsize='sm'
            classstyle='text-semPrimary font-serif font-[400] !mb-[10px]'
          >
            Kindly enter your registered email and we&apos;ll send you a
            verification code to reset your password.
          </Paragraph>
        </div>
      </div>
      {/* Form Heading and Description End */}

      {/* email */}
      <FieldSet>
        <InputLabel labelfor='email'>Email address</InputLabel>
        <Input
          width='!w-full'
          type='email'
          name='email'
          placeholder='enter email address'
        />
      </FieldSet>
      {/* email End */}

      {/* Send Email Button */}
      <IconButton
        variant='primary'
        // loading={true}
        // loadingtext='sending email...'
        size='lg'
        type='submit'
        classstyle='uppercase shadow-semShadow2'
      >
        Send Email
      </IconButton>
    </form>
  );
};

export default ResetPasswordForm;
