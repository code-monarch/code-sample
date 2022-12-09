import React from "react";
import BrandLogo from "@public/img/login-brand-logo.svg";
import { useRouter } from "next/router";

const AuthBrandLogo = () => {
  const router = useRouter();
  return (
    <div
    className="cursor-pointer"
      onClick={() => {
        router.push("https://caas-frontend.herokuapp.com/");
      }}
    >
      <BrandLogo />
    </div>
  );
};

export default AuthBrandLogo;
