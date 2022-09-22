import React, {
  useContext,
  createContext,
  useState,
  useEffect,
  // SetStateAction,
} from "react";
import { supabase } from "../utils/supabaseClient";
import { login, logout } from "./auth";
// import { useRouter } from 'next/router'

// TODO fix typescript errors

interface IAuthContext {
  userLoaded: boolean;
  user: string | null;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
}

export function AuthProvider({ children }: React.PropsWithChildren) {
  const [userLoaded, setUserLoaded] = useState(false);
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      console.log(data);
      const { session } = data;
      // @ts-ignore
      setSession(session);
      setUserLoaded(session ? true : false);

      if (session?.user) {
        // signIn();
        // router.push("/channels/[id]", "/channels/1");
        // @ts-ignore
        setUser(session.user);
      }
    });

    const {
      data: { subscription: authListener },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log("subscription", authListener);
      // @ts-ignore
      setSession(session);
      const currentUser = session?.user;
      // @ts-ignore
      setUser(currentUser ?? null);
      setUserLoaded(!!currentUser);
      // if (currentUser) {
      //   signIn(currentUser.id, currentUser.email);
      //   router.push("/channels/[id]", "/channels/1");
      // }
    });

    return () => {
      authListener.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        userLoaded,
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
