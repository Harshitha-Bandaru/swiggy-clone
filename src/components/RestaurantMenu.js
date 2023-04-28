import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  //   const params = useParams();
  //   const { id } = params;
  // Destructure on the fly
  const { id } = useParams();
  // const [restaurant, setRestaurant] = useState({});
  const [restaurant, setRestaurant] = useState(null);
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5912716&lng=73.73890899999999&restaurantId=${id}&submitAction=ENTER`
    );
    const json = await data.json();
    // console.log(json.data.cards[0].card.card.info);
    // console.table(json.data);
    setRestaurant(json?.data?.cards[0]?.card?.card?.info);
  }

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
