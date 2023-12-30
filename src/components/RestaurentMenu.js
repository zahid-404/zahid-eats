import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import RestaurentMenuShimmer from "./ResMenuShimmer";
import ItemAccordian from "./ItemAccordian";
import { Star } from "lucide-react";
import { Accordion } from "./ui/accordion";

const RestaurentMenu = () => {
  // Get restaurant ID from URL parameters
  const { resId } = useParams();

  // Fetch restaurant menu information using a custom hook
  const resInfo = useRestaurentMenu(resId);

  // If menu information is still loading, display the shimmer effect
  if (resInfo === null) return <RestaurentMenuShimmer />;

  // Destructure relevant information from the fetched data
  const { name, avgRating, cuisines, areaName, totalRatingsString } =
    resInfo?.data?.cards[0]?.card?.card?.info || {};

  // Filter and get the menu categories
  const categories =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <section className="my-8 md:my-16 mx-4 md:mx-auto flex flex-col md:w-2/3">
      {/* Rating and restaurant card section */}
      <div className="w-full flex justify-between">
        {/* Container for restaurant name and rating */}
        <div className="flex flex-col">
          <h1 className="font-bold leading-4 text-xl">{name}</h1>
          <h4 className="">{cuisines.join(", ")}</h4>
          <h4 className="">{areaName}</h4>
        </div>
        {/* Container for ratings */}
        <div className="flex flex-col">
          <div className="flex">
            <Star className="bg-green-800" />
            <h4 className="md:px-4 ">{avgRating}</h4>
          </div>
          <h5 className="md:py-2">{totalRatingsString}</h5>
        </div>
      </div>

      {/* Accordion section for menu categories */}
      <Accordion className="my-16" type="single" collapsible>
        {categories.map((categ, index) => (
          <ItemAccordian key={index} categ={categ} />
        ))}
      </Accordion>
    </section>
  );
};

export default RestaurentMenu;
