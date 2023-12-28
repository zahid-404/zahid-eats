import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import { Star, Plus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { MENU_IMG_URL } from "../utils/constant";
import { Button } from "./ui/button";
import RestaurentMenuShimmer from "./ResMenuShimmer";

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

  const { itemCards = [] } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || {};

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
      <div className="my-16">
        {categories.map((categ, index) => (
          <Accordion className="" key={index} type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                {categ?.card?.card?.title} (
                {categ?.card?.card?.itemCards.length})
              </AccordionTrigger>
              {categ?.card?.card?.itemCards.map((menu, index) => (
                <div key={index}>
                  <AccordionContent className="flex justify-between">
                    {/* Display menu item name and price */}
                    {menu?.card?.info?.name} ₹ {menu?.card?.info?.price / 100}
                    <div className="relative">
                      {/* Display menu item image */}
                      <img
                        className="w-32 h-32 rounded-lg "
                        src={MENU_IMG_URL + menu?.card?.info?.imageId}
                        alt="Menu Img"
                        loading="lazy"
                      />
                      {/* Display button for adding item to the cart */}
                      <Button
                        variant="outline"
                        className="bottom-2 z-10 absolute left-1/2 transform -translate-x-1/2"
                      >
                        Add <Plus />
                      </Button>
                    </div>
                  </AccordionContent>
                </div>
              ))}
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </section>
  );
};

export default RestaurentMenu;
