import { useContext } from "react";
import UserContext from "../utils/UserContext";
import CopyrightIcon from "@mui/icons-material/Copyright";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { socialMediaLinks } from "../constants";

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="bg-black p-6 mt-auto w-full flex items-center justify-center">
      <CopyrightIcon className="text-white mr-2" />
      <h4 className="text-white mr-2">
        This site is developed by {user.userName}. For any concerns, feel free
        to reach me at {user.userEmail}
      </h4>
      <a target={"_blank"} href={socialMediaLinks?.linkedin}>
        <LinkedInIcon className="text-white mr-2" />
      </a>
      <a target={"_blank"} href={socialMediaLinks?.github}>
        <GitHubIcon className="text-white mr-2" />
      </a>
    </div>
  );
};

export default Footer;
