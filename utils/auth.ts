import { supabase } from "../utils/supabaseClient";
import { AuthError } from "@supabase/supabase-js";

const login = async () => {
  try {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) throw error;
  } catch (error) {
    if (error instanceof AuthError) {
      console.log(error.message);
    }
  }
};

const logout = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  } catch (error) {
    if (error instanceof AuthError) {
      console.log(error.message);
    }
  }
};

export { login, logout };
