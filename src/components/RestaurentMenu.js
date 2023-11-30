import { useEffect, useState } from "react";
import { RES_MENU_URL } from "../utils/constant";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurentMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  // console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(RES_MENU_URL + resId);
    const list = await data.json();
    // console.log(list);
    setResInfo(list);
  };
  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines } =
    resInfo?.data?.cards[0]?.card?.card?.info || {};

  const { itemCards = [] } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || {};

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>
        {cuisines.join(",")} - {costForTwoMessage}
      </h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{" "}
            {`Rs: ${
              item.card.info.price / 100 || item.card.defaultPrice / 100
            }`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurentMenu;
