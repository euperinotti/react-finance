import { IAuthContext } from "@/contexts/@types/AuthContextTypes";
import { AuthContext } from "@/contexts/AuthContext";
import { useContext } from "react";

export const useAuth = () => {
  const { user, setUser, isLogin, setIsLogin } = useContext(
    AuthContext
  ) as IAuthContext;

  const signIn = ({ email, password }: { email: string; password: string }) => {
    setIsLogin(true);
  };

  const signUp = (user: any) => {
    setUser(user);
    setIsLogin(true);
  };

  const signOut = () => {
    setUser({ name: "", email: "", password: "" });
    setIsLogin(false);
  };

  return {
    user,
    setUser,
    signIn,
    signUp,
    signOut,
  };
};
