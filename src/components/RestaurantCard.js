import { IMG_CDN_URL } from "../constants";
const RestaurantCard = ({ name, cloudinaryImageId, cuisines, avgRating }) => {
  // console.log(props);
  // const { restaurant } = props;
  // const { data } = restaurant;
  // const { name, cloudinaryImageId, cuisines, avgRating } = data;
  return (
    <div className="card w-64 bg-teal-100 p-2 m-3 h-72">
      <img
        src={`${IMG_CDN_URL}${cloudinaryImageId}`}
        alt="subway-image"
        className="h-[25vh] w-full"
      ></img>
      <h2 className="font-bold text-lg">{name}</h2>
      <h3 className="break-words text-sm">{cuisines.join(",")}</h3>
      <h4 className="text-sm">{avgRating} Stars</h4>
    </div>
  );
};

export default RestaurantCard;
