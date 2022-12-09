import React from "react";
import { useRouter } from "next/router";
import Container from "@design-system/components/layout/container";
import FullWidth from "@design-system/components/layout/full-width";
import BrandLogo from "@public/img/login-brand-logo.svg";
import ConfirmEmailTemplate from "@design-system/templates/shared/confirm-email-template";

const ConfirmEmail = () => {
  return (
    <div className='min-h-[100vh] bg-dashboardBg'>
      <FullWidth classstyle='bg-dashboardBg pt-[80px] pb-[120px] relative'>
        <Container classstyle='!flex-col !items-center space-y-[32px]'>
          <BrandLogo />
          <ConfirmEmailTemplate/>
        </Container>
      </FullWidth>
    </div>
  );
};

export default ConfirmEmail;
