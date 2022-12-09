import SignUpForm from "@design-system/templates/form/signup-form";
import AuthBrandLogo from "@design-system/components/icons/auth-brand-logo";
import Container from "@design-system/components/layout/container";
import FullWidth from "@design-system/components/layout/full-width";
import { useRouter } from "next/router";
import React from "react";

const SignUp = () => {
  const router = useRouter();
  return (
    <div className='min-h-[100vh] bg-dashboardBg'>
      <FullWidth classstyle='bg-dashboardBg py-[50px] desktop:py-[120px] relative'>
        <Container classstyle='!flex-col !items-center space-y-[32px]'>
          <AuthBrandLogo />
          <SignUpForm />
        </Container>
      </FullWidth>
    </div>
  );
};

export default SignUp;
