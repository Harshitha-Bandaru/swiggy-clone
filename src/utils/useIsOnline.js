import { useState } from "react";

const useIsOnline = () => {
  const [isOnline, setIsOnline] = useState(true);
  window.addEventListener("online", () => {
    setIsOnline(true);
  });
  window.addEventListener("offline", () => {
    setIsOnline(false);
  });
  return isOnline;
};

export default useIsOnline;
