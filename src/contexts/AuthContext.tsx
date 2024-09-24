"use client"

import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";
import { AuthProviderProps, IAuthContext } from "./@types/AuthContextTypes";

export const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter()

  useEffect(() => {
    if (isLogin) {
      router.push("/dashboard")
    } else {
      router.push("/login")
    }
  }, [isLogin])

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isLogin,
        setIsLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
