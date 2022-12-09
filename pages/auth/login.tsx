import LoginForm from "@design-system/templates/form/login-form";
import AuthBrandLogo from "@design-system/components/icons/auth-brand-logo";
import Container from "@design-system/components/layout/container";
import FullWidth from "@design-system/components/layout/full-width";
import React from "react";

const Login = () => {
  return (
    <div className='min-h-[100vh] bg-dashboardBg'>
      <FullWidth classstyle='bg-dashboardBg py-[50px] desktop:py-[120px] relative'>
        <Container classstyle='!flex-col !items-center space-y-[32px]'>
          <AuthBrandLogo />
          <LoginForm />
        </Container>
      </FullWidth>
    </div>
  );
};

export default Login;
