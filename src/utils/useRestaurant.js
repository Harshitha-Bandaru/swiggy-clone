import { useState, useEffect } from "react";
import { restaurantMenuData } from "../data/restaurantMenuData";
import { CleaningServices } from "@mui/icons-material";

const useRestaurant = (id) => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [restaurantMenu, setRestaurantMenu] = useState([{}]);
  useEffect(() => {
    getRestaurantInfo();
  }, []);
  async function getRestaurantInfo() {
    // const data = await fetch(
    //   `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    // );
    // const json = await data?.json();
    const json = restaurantMenuData[id];
    console.log(json);
    console.log(json?.data?.cards[0]);
    setRestaurantData(json?.data?.cards[0]?.card?.card?.info);
    // console.log(json?.data?.cards[0]?.card?.card?.info);
    // console.log(json);

    const menuItems = [];
    const regularCard =
      json?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    console.log(regularCard);
    regularCard?.map((c) => {
      const categoryCard = c?.card?.card;
      if (categoryCard?.categories) {
        categoryCard?.categories?.map((i) => {
          const itemCard = i?.itemCards;
          // console.log(itemCard);
          itemCard?.map((item) => {
            const menuItem = item?.card?.info;
            console.log({ menuItem });
            const {
              id: menuItemId,
              name: menuItemName,
              price,
              imageId,
              description,
              defaultPrice,
              isVeg,
            } = menuItem;
            menuItems.push({
              menuItemId,
              menuItemName,
              price,
              imageId,
              description,
              defaultPrice,
              isVeg,
            });
            // menuItems.push(menuItem);
          });
        });
      } else {
        // console.log({ categoryCard });
        const itemCard = categoryCard?.itemCards;
        // console.log(itemCard);
        itemCard?.map((j) => {
          const menuItem = j?.card?.info;
          console.log(menuItem);
          const {
            id: menuItemId,
            name: menuItemName,
            price,
            imageId,
            description,
            defaultPrice,
            isVeg,
          } = menuItem;
          menuItems.push({
            menuItemId,
            menuItemName,
            price,
            imageId,
            description,
            defaultPrice,
            isVeg,
          });
        });
      }
    });
    setRestaurantMenu(menuItems);
  }
  return [restaurantData, restaurantMenu];
};

export default useRestaurant;
