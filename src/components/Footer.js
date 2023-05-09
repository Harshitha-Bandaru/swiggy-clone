import { useContext } from "react";
import UserContext from "../utils/UserContext";
const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <h4>
      This site is developed by {user.userName}. For any concerns, feel free to
      reach me at {user.userEmail}
    </h4>
  );
};

export default Footer;
