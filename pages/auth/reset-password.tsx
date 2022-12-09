import React from "react";
import ResetPasswordForm from "@design-system/templates/form/reset-password-form";
import Container from "@design-system/components/layout/container";
import FullWidth from "@design-system/components/layout/full-width";
import RequireAuth from "@design-system/templates/shared/require-auth";
import BrandLogo from "@public/img/login-brand-logo.svg";

const ResetPassword = () => {
  return (
    <RequireAuth>
      <div className='min-h-[100vh] bg-dashboardBg'>
        <FullWidth classstyle='bg-dashboardBg py-[50px] desktop:py-[120px] relative'>
          <Container classstyle='!flex-col !items-center space-y-[32px]'>
            <BrandLogo />
            <ResetPasswordForm />
          </Container>
        </FullWidth>
      </div>
    </RequireAuth>
  );
};

export default ResetPassword;
