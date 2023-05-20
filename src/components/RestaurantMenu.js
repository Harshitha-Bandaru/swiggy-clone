import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice.js";

const RestaurantMenu = () => {
  //   const params = useParams();
  //   const { id } = params;
  // Destructure on the fly
  const { id } = useParams();
  // const [restaurant, setRestaurant] = useState({});
  const [restaurantData, restaurantMenu] = useRestaurant(id);
  const {
    name,
    areaName,
    cuisines,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
  } = restaurantData;
  const lastMileTravelString = restaurantData?.sla?.lastMileTravelString;
  const deliveryTime = restaurantData?.sla?.slaString;

  console.log(restaurantMenu);

  const dispatch = useDispatch();
  const handleAddItem = () => {
    dispatch(addItem("Carrot"));
  };

  //   console.log(params);
  // console.log(restaurant.name);
  // if (!restaurant) {
  //   return <Shimmer />;
  // }
  return !restaurantData ? (
    <Shimmer />
  ) : (
    <div className="flex flex-col justify-center items-center ">
      <div className="flex flex-row justify-items-center">
        <div>
          <h2 className="text-base font-bold ">{name}</h2>
          <h3 className="text-gray-400">{cuisines?.join(",")}</h3>
          <span className="text-gray-400">{areaName}, </span>
          <span className="text-gray-400">{lastMileTravelString}</span>
          <div>
            <span className="text-gray-400 mt-2">
              {lastMileTravelString + "|"}
            </span>
            <span className="text-gray-400 mt-2">
              ₹40 delivery fee will apply
            </span>
          </div>
          <div>
            <span>{deliveryTime + ""}</span>
            <span>{costForTwoMessage}</span>
          </div>
        </div>
        <div className="border-solid">
          <h3>{avgRating} stars</h3>
        </div>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {/* {regularCard?.map((c) => (
            <>
              {c?.card?.card?.categories?.map((i) => (
                <>
                  <li className="list-disc">{i?.title}</li>
                  <>
                    {i?.itemCards?.map((item) => (
                      <li>{item?.card?.info?.name}</li>
                    ))}
                  </>
                </>
              ))}
            </>
          ))} */}
          {restaurantMenu.map((i) => (
            <div className="flex flex-row justify-between items-center p-1 m-2">
              <div>
                <li className="font-sans text-xl font-medium mt-1">
                  {i?.menuItemName}
                </li>
                <li className=" font-normal text-lg mt-1">₹{i?.price / 100}</li>
                <p className="text-base font-thin text-gray-400 mt-1">
                  {i?.description}
                </p>
                <button
                  className="p-1 m-2 bg-green-400"
                  onClick={() => handleAddItem()}
                >
                  Add
                </button>
              </div>
              <div>
                <img
                  className="h-32 w-32"
                  src={IMG_CDN_URL + i?.menuItemImageId}
                />
              </div>
              <hr />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
