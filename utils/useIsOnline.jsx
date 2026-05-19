import { useState, useEffect } from "react";

const useIsOnline = () => {
  const [isOnline, setisOnline] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setisOnline(false);
    });

    window.addEventListener("online", () => {
      setisOnline(true);
    });
  }, []);

  return isOnline;
};

export default useIsOnline;
