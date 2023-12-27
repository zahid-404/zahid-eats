import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import { Star } from "lucide-react";

const RestaurentMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurentMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    costForTwoMessage,
    avgRating,
    cuisines,
    areaName,
    totalRatingsString,
  } = resInfo?.data?.cards[0]?.card?.card?.info || {};

  const { itemCards = [] } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || {};

  const categories =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="my-8 md:my-16 mx-4 md:mx-auto flex justify-between md:w-2/3">
      {/* container for res name and rating */}
      <div className="flex flex-col">
        <h1 className="font-bold leading-4 text-xl">{name}</h1>
        <h4 className="">{cuisines.join(", ")}</h4>
        <h4 className="">{areaName}</h4>
      </div>
      {/* container for ratings */}
      <div className="flex flex-col">
        <div className="flex">
          <Star className="bg-green-800" />
          <h4 className="md:px-4 ">{avgRating}</h4>
        </div>
        <h5 className="md: py-2">{totalRatingsString}</h5>
      </div>
    </div>
  );
};

export default RestaurentMenu;
