import React from "react";
import Link from "next/link";
import FieldSet from "../../components/inputs/fieldset";
import InputLabel from "../../components/inputs/label";
import Input from "../../components/inputs/input";
import Heading from "../../components/inputs/heading";
import Paragraph from "../../components/inputs/paragragh";
import NotARobot from "./not-a-robot";
import { useRouter } from "next/router";
import PasswordInput from "../../components/inputs/password-input";
import IconButton from "../../components/inputs/icon-button";
import { ILoginFormInput } from "@design-system/types";
import { SubmitHandler, useForm } from "react-hook-form";
import { toastError, toastSuccess } from "../../components/feedback/toast";
import FormError from "./form-error";
import { useLoginMutation } from "@app/services/auth/login.api-slice";
import { setCredentials } from "@app/features/auth-slice";
import { useDispatch } from "react-redux";
import { set2FaPreference, setIsVerified } from "@app/features/user-slice";

const LoginForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [
    signup, // This is the mutation trigger
    { data, isLoading, error, isSuccess }, // This is the destructured mutation result
  ] = useLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormInput>();

  const onSubmit: SubmitHandler<ILoginFormInput> = (data) =>
    signup({
      email: data?.email,
      password: data?.password,
    })
      .unwrap()
      .then((res) => {
        toastSuccess("Logged In Successfully");
        const user: string = res.accessToken;
        const accessToken: string = res.accessToken;
        dispatch(setCredentials({ user, accessToken }));
        dispatch(setIsVerified(res.isVerified)); // dispatch isVerified status
        dispatch(
          set2FaPreference({
            email2fa: res.email2fa,
            sms2fa: res.sms2fa,
            google2fa: res.google2fa,
          })
        );
        if (accessToken) {
          router.push("/");
        }
        console.log("DATA: ", res);
      })
      .catch((err) => {
        toastError(`${err.error || err?.data?.message}`);
        console.log("ERROR: ", err);
      });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='w-[622px] h-[649px] bg-white flex flex-col space-y-[20px] p-[40px] pb-[64px] rounded-[12px] shadow-semShadow2 z-[3]'
    >
      {/* Form Heading and Description */}
      <div className='space-y-[8px] mb-[24px]'>
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

      {/* Business email */}
      <FieldSet>
        <InputLabel labelfor='email'>Business email</InputLabel>
        <Input
          width='!w-full'
          type='email'
          placeholder='business-email@email.com'
          {...register("email", { required: "Please enter Business Email" })}
        />
        <FormError errors={errors} name='email' />
      </FieldSet>
      {/* Business email End */}

      {/* Password */}
      <FieldSet>
        <InputLabel labelfor='password'>Password</InputLabel>
        <PasswordInput
          placeholder='password'
          {...register("password", { required: "Please enter password" })}
        />
        <FormError errors={errors} name='password' />
      </FieldSet>
      {/* Password End */}

      {/* Forgot Password */}
      <Link href='/forgot-password'>
        <a className='uppercase text-semBlue600 font-serif font-[500] hover:underline'>
          forgot password?
        </a>
      </Link>
      <NotARobot />

      {/* Sign In Button */}
      <IconButton
        variant='primary'
        loading={isLoading ? true : false}
        loadingtext='signing in...'
        size='lg'
        type='submit'
        classstyle='uppercase shadow-semShadow2'
      >
        Sign in
      </IconButton>

      {/* Sign Up */}
      <Paragraph textsize='xs' align='center' classstyle=''>
        Don&apos;t have an account? &nbsp;
        <Link href='/sign-up'>
          <a className='uppercase text-semBlue600 text-base font-serif font-[500] hover:underline'>
            Sign Up
          </a>
        </Link>
      </Paragraph>
    </form>
  );
};

export default LoginForm;
