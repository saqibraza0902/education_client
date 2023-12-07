import { useAppSelector } from "./hooks";
import { URLS } from "@/utils/URLS";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
const ProtectedAuth = <P extends object>(
  WrappedComponent: React.ComponentType<P>
): React.FC<P> => {
  const AuthComponent: React.FC<P> = (props) => {
    const authState = useAppSelector((state) => state.auth);
    const router = useRouter();
    useEffect(() => {
      if (authState.isLoggedIn) {
        router.push(URLS.HOME);
      }
    }, [authState.isLoggedIn, router]);
    if (authState.isLoggedIn) {
      return null;
    }
    return <WrappedComponent {...props} />;
  };
  return AuthComponent;
};

export default ProtectedAuth;
