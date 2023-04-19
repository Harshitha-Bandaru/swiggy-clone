import { IMG_CDN_URL } from "../constants";
const RestaurantCard = ({ name, cloudinaryImageId, cuisines, avgRating }) => {
  // console.log(props);
  // const { restaurant } = props;
  // const { data } = restaurant;
  // const { name, cloudinaryImageId, cuisines, avgRating } = data;
  return (
    <div className="card">
      <img src={`${IMG_CDN_URL}${cloudinaryImageId}`} alt="subway-image"></img>
      <h2>{name}</h2>
      <h3>{cuisines.join(",")}</h3>
      <h4>{avgRating} Stars</h4>
    </div>
  );
};

export default RestaurantCard;
