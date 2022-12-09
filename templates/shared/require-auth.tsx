import React, { ReactElement, useEffect } from "react";
import { useRouter } from "next/router";
import { getSessionToken } from "@helpers/session-manager";

interface IProps {
  children: ReactElement;
}

const RequireAuth = ({ children }: IProps) => {
  const router = useRouter();

  // Get User Authentication Token
   let authToken = getSessionToken()

  useEffect(() => {
    if (!authToken || authToken === null) {
      router.push("/auth/login");
    } else return;
  }, [authToken, router]);

  return <>{authToken && children}</>;
};

export default RequireAuth;
