import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import FieldSet from "../../components/inputs/fieldset";
import InputLabel from "../../components/inputs/label";
import Input from "../../components/inputs/input";
import Heading from "../../components/inputs/heading";
import Paragraph from "../../components/inputs/paragragh";
import NotARobot from "./not-a-robot";
import PasswordInput from "../../components/inputs/password-input";
import IconButton from "../../components/inputs/icon-button";
import Flex from "../../components/layout/flex";
import TermsAndConditionsCheckbox from "./terms-and-conditions-checkbox";
import { useForm, SubmitHandler } from "react-hook-form"; // Simple form validation with React Hook Form.
import FormError from "./form-error";
import { useSignupMutation } from "@app/services/auth/signup.api-slice";
import { toastError, toastSuccess } from "../../components/feedback/toast";
import { ISignupFormInput } from "@design-system/types";

const SignUpForm = () => {
  const router = useRouter();
  const [
    signup, // This is the mutation trigger
    { data, isLoading, error, isSuccess }, // This is the destructured mutation result
  ] = useSignupMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignupFormInput>();

  const onSubmit: SubmitHandler<ISignupFormInput> = (data) =>
    signup({
      email: data?.email,
      password: data?.password,
      firstName: data?.firstName,
      lastName: data?.lastName,
      businessName: data?.businessName,
    })
      .unwrap()
      .then((res: { message: string }) => {
        toastSuccess(`${res?.message}`);
        router.push("auth/login");
        console.log("DATA: ", res);
      })
      .catch((err: { data: { message: string } }) => {
        toastError(`${err?.data?.message}`);
        console.log("ERROR: ", err);
      });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=' bg-white flex flex-col space-y-[20px] p-[40px] pb-[64px] rounded-[12px] shadow-semShadow2 z-[3]'
    >
      {/* Form Heading and Description */}
      <div className='space-y-[8px] mb-[24px]'>
        <Heading
          textsize='xl'
          classstyle='text-semGrey500 font-serif !font-[500]'
        >
          Welcome to CaaS
        </Heading>

        <Paragraph
          textsize='sm'
          classstyle='text-semPrimary font-serif font-[400]'
        >
          Create a free account to get started
        </Paragraph>
      </div>
      {/* Form Heading and Description End */}

      {/* First Name and Last Name */}
      <Flex classstyle='!w-full !justify-start !space-x-[24px]'>
        {/* First Name */}
        <FieldSet>
          <InputLabel labelfor='firstName'>First Name</InputLabel>
          {/* register your input into the hook by invoking the "register" function */}
          <Input
            width='!w-full'
            type='text'
            // name='first-name'
            placeholder='first name'
            {...register("firstName", { required: "Please enter First name" })}
          />
          <FormError errors={errors} name='firstName' />
        </FieldSet>
        {/* First Name End */}

        {/* Last Name */}
        <FieldSet>
          <InputLabel labelfor='last-name'>Last Name</InputLabel>
          <Input
            width='!w-full'
            type='text'
            // name='last-name'
            placeholder='lastName'
            {...register("lastName", { required: "please enter last name" })}
          />
          <FormError errors={errors} name='lastName' />
        </FieldSet>
        {/* Last Name End */}
      </Flex>

      {/* Business email */}
      <FieldSet>
        <InputLabel labelfor='businessName'>Business name</InputLabel>
        <Input
          width='!w-full'
          type='text'
          // name='business-name'
          placeholder='enter business name'
          {...register("businessName", {
            required: "Please enter business name",
          })}
        />
        <FormError errors={errors} name='businessName' />
      </FieldSet>
      {/* Business email End */}

      {/* Email */}
      <FieldSet>
        <InputLabel labelfor='email'>Email address</InputLabel>
        <Input
          width='!w-full'
          type='email'
          // name='email'
          placeholder='enter business email address'
          {...register("email", {
            required: "Please enter business Email address",
          })}
        />
        <FormError errors={errors} name='email' />
      </FieldSet>
      {/* Business email End */}

      {/* Password */}
      <FieldSet>
        <InputLabel labelfor='password'>Password</InputLabel>
        <PasswordInput
          // name='password'
          placeholder='password'
          {...register("password", { required: "Please enter a Password" })}
        />
        <FormError errors={errors} name='password' />
      </FieldSet>
      {/* Password End */}

      <TermsAndConditionsCheckbox />
      <NotARobot />

      {/* Sign In Button */}
      <IconButton
        variant='primary'
        loading={isLoading}
        loadingtext='signing up...'
        size='lg'
        type='submit'
        classstyle='uppercase shadow-semShadow2'
      >
        Create Account
      </IconButton>

      {/* Sign Up */}
      <Paragraph textsize='xs' align='center' classstyle=''>
        Already have an account? &nbsp;
        <Link href='/login'>
          <a className='uppercase text-semBlue600 text-base font-serif font-[500] hover:underline'>
            Login
          </a>
        </Link>
      </Paragraph>
    </form>
  );
};

export default SignUpForm;
