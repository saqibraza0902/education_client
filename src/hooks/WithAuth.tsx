import { URLS } from "@/utils/URLS";
import { useAppSelector } from "./hooks";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const WithAuth = <P extends object>(
  WrappedComponent: React.ComponentType<P>
): React.FC<P> => {
  const AuthComponent: React.FC<P> = (props) => {
    const authState = useAppSelector((s) => s.auth);
    const router = useRouter();
    useEffect(() => {
      if (!authState.isLoggedIn) {
        router.push(URLS.LOGIN);
      }
    }, [authState.isLoggedIn, router]);
    if (!authState.isLoggedIn) {
      return null;
    }
    return <WrappedComponent {...props} />;
  };
  return AuthComponent;
};

export default WithAuth;
