import { ReactNode } from "react";

export interface IAuthContext {
  user: {
    name: string;
    email: string;
    password: string;
  };
  setUser: (user: any) => void;
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
}

export interface AuthProviderProps {
  children: ReactNode;
}
