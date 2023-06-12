import { IMG_CDN_URL } from "../constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import StarIcon from "@mui/icons-material/Star";
const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  avgRating,
  costForTwo,
  sla,
}) => {
  // console.log(props);
  // const { restaurant } = props;
  // const { data } = restaurant;
  // const { name, cloudinaryImageId, cuisines, avgRating } = data;
  // console.log({ costForTwo, sla });
  const { user } = useContext(UserContext);
  return (
    <div className="card w-72 p-4 m-3 h-80  hover:shadow-xl hover:border hover:border-gray-200 flex flex-col justify-between items-start">
      <img
        src={`${IMG_CDN_URL}${cloudinaryImageId}`}
        alt="subway-image"
        className="h-[25vh] w-full"
      ></img>
      <h2 className="font-semibold text-base pt-2">{name}</h2>
      <h3 className="break-words text-sm text-gray-600 pt-1">
        {cuisines?.join(", ")}
      </h3>
      <div className="mt-2 flex flex-row justify-between items-center w-full">
        <div
          className={`w-12 flex items-center p-1 ${
            avgRating >= 4.0 ? "bg-[#48c479]" : "bg-[#db7c38]"
          }`}
        >
          {/* <img src={star} className="h-4 w-4"></img> */}
          <StarIcon fontSize="22px" className="text-white" />
          <span className="text-xs text-white ml-1">{avgRating}</span>
        </div>

        <span className="text-xs">{sla?.deliveryTime} MINS</span>
        <span className="text-xs">₹{costForTwo / 100} FOR TWO</span>
      </div>

      {/* <h4 className="text-sm">{user.userName}</h4> */}
    </div>
  );
};

export default RestaurantCard;
