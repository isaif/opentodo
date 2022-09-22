import { useAuth } from "../utils/AuthContext";
import styles from "../styles/Navbar.module.css";

const AuthButton = () => {
  const { user, login, logout } = useAuth();
  console.log(user);
  if (!user)
    return (
      <button
        onClick={(e) => {
          e.preventDefault();
          login();
        }}
        className=""
        // disabled={loading}
      >
        {/* <span>{loading ? "Loading" : "login with google"}</span> */}
        <span>login</span>
      </button>
    );

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        logout();
      }}
      className=""
      // disabled={loading}
    >
      {/* <span>{loading ? "Loading" : "login with google"}</span> */}
      <span>Logout</span>
    </button>
  );
};

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <p className={styles.logo}>Opentask</p>
      <AuthButton />
    </nav>
  );
}
