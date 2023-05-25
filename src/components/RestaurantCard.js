import { IMG_CDN_URL } from "../constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import star from "../assets/img/star.svg";
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
  console.log({ costForTwo, sla });
  const { user } = useContext(UserContext);
  return (
    <div className="card w-64 p-2 m-3 h-72 hover:shadow-lg flex flex-col justify-between items-start">
      <img
        src={`${IMG_CDN_URL}${cloudinaryImageId}`}
        alt="subway-image"
        className="h-[25vh] w-full"
      ></img>
      <h2 className="font-semibold text-base pt-2">{name}</h2>
      <h3 className="break-words text-sm text-gray-600 pt-1">
        {cuisines?.join(", ")}
      </h3>
      <div className="mt-2 flex flex-row justify-around">
        <div className="bg-green-400 pl-0 ml-0 pt-0">
          <img src={star} className="h-4 w-4 inline"></img>
          <span className="text-sm ml-1">{avgRating}</span>
        </div>
        <span className="text-sm">{sla?.deliveryTime} MINS</span>
        <span className="text-sm">₹{costForTwo / 100} FOR TWO</span>
      </div>

      {/* <h4 className="text-sm">{user.userName}</h4> */}
    </div>
  );
};

export default RestaurantCard;
