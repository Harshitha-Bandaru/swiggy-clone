import { createContext } from "react";
const UserContext = createContext({
  user: { userName: "dummy name", userEmail: "dummymail@dmail.com" },
});
export default UserContext;
