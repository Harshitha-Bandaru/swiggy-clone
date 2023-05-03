import { useState, useEffect } from "react";
const useRestaurant = (id) => {
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
  return restaurant;
};

export default useRestaurant;
