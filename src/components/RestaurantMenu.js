import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  //   const params = useParams();
  //   const { id } = params;
  // Destructure on the fly
  const { id } = useParams();
  // const [restaurant, setRestaurant] = useState({});
  const restaurant = useRestaurant(id);

  //   console.log(params);
  // console.log(restaurant.name);
  // if (!restaurant) {
  //   return <Shimmer />;
  // }
  return !restaurant ? (
    <Shimmer />
  ) : (
    <div>
      <h1>Restaurant id:{id}</h1>
      <h2>{restaurant.name}</h2>
      <img
        className="restaurant-img"
        src={IMG_CDN_URL + restaurant.cloudinaryImageId}
      ></img>
      <h3>{restaurant.areaName}</h3>
      {console.log(restaurant.cuisines)}
      <h3>{restaurant.cuisines?.join(",")}</h3>
      <h3>{restaurant.avgRating} stars</h3>
      <h3>Cost for two:{restaurant.costForTwoMessage}</h3>
    </div>
  );
};
export default RestaurantMenu;
