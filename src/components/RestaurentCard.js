import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constant";
import { Clock, Star, StarIcon } from "lucide-react";

const RestaurentCard = (props) => {
  const { resData } = props;
  const {
    name,
    avgRating,
    cuisines,
    areaName,
    cloudinaryImageId,
    aggregatedDiscountInfoV3 = "",
    costForTwo = "",
    sla,
  } = resData?.info;

  const cardBackgroundColor = avgRating >= 4 ? "bg-green-700" : "bg-red-700";

  return (
    // Main Card Container
    <div className="rounded-lg border-2 w-[300px] relative group overflow-hidden">
      {/* Image container */}
      <div className="h-full bg-foreground/5 dark:bg-background transform transition-transform group-hover:scale-105">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt={name}
          className="object-cover w-full h-[180px] rounded-lg"
        />
        <div className="text-white text-xl font-extrabold absolute bottom-2 left-4">
          {aggregatedDiscountInfoV3?.header}
        </div>
      </div>
      {/* Discription Container */}
      <div className="p-4 ">
        <h3 className="font-extrabold text-lg truncate">{name}</h3>
        <div className="mt-2 flex items-center justify-between">
          <p
            className={`${cardBackgroundColor}  text-sm text-white rounded-md px-2 py-1 font-semibold inline-flex item-center  text-primary/80`}
          >
            <Star className="mr-1  my-auto" size={15} />
            {avgRating}
          </p>

          <h3 className=" px-4">{costForTwo}</h3>
        </div>
        <p className="truncate mt-2">{cuisines.join(", ")}</p>
        <div className="flex items-center mt-2 justify-between">
          <p className="">{areaName}</p>

          <p className="flex items-center mx-[35px] gap-x-2">
            <Clock size={14} />
            {sla?.deliveryTime} min
          </p>
        </div>
      </div>
    </div>
  );
};

export default RestaurentCard;
