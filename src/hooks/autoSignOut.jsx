import { signout } from "@/auth/auth";
import { useEffect, useRef } from "react"; 

const useAutoSignOut = (timeout = 15 * 60 * 1000) => { // Default 15 minutes
  const timerRef = useRef(null);

  const resetTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      signout(); // Automatically sign out the user
    }, timeout);
  };

  useEffect(() => {
    const handleActivity = () => resetTimer();

    window.addEventListener("mousemove", handleActivity);
    window.addEventListener("keydown", handleActivity);
    window.addEventListener("scroll", handleActivity);
    window.addEventListener("click", handleActivity);

    resetTimer(); // Initialize the timer

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener("mousemove", handleActivity);
      window.removeEventListener("keydown", handleActivity);
      window.removeEventListener("scroll", handleActivity);
      window.removeEventListener("click", handleActivity);
    };
  }, [timeout]);

  return null;
};

export default useAutoSignOut;
