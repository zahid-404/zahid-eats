import { CDN_URL } from "../utils/constant";
import { Clock, Star } from "lucide-react";

const RestaurentCard = (props) => {
  // Destructure properties from props
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

  // Determine the background color based on average rating
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
        {/* Display discount information */}
        <div className="text-white text-xl font-extrabold absolute bottom-2 left-4">
          {aggregatedDiscountInfoV3?.header}
        </div>
      </div>
      
      {/* Description Container */}
      <div className="p-4">
        {/* Restaurant name */}
        <h3 className="font-extrabold text-lg truncate">{name}</h3>
        
        {/* Ratings and Cost for Two */}
        <div className="mt-2 flex items-center justify-between">
          {/* Display star ratings */}
          <p
            className={`${cardBackgroundColor} text-sm text-white rounded-md px-2 py-1 font-semibold inline-flex item-center  text-primary/80`}
          >
            <Star className="mr-1 my-auto" size={15} />
            {avgRating}
          </p>

          {/* Display cost for two */}
          <h3 className="px-4">{costForTwo}</h3>
        </div>
        
        {/* Cuisines */}
        <p className="truncate mt-2">{cuisines.join(", ")}</p>
        
        {/* Location and Delivery Time */}
        <div className="flex items-center mt-2 justify-between">
          <p>{areaName}</p>

          {/* Display clock icon and delivery time */}
          <p className="flex items-center mx-[35px] gap-x-2">
            <Clock size={14} />
            {sla?.deliveryTime} min
          </p>
        </div>
      </div>
    </div>
  );
};

// Higher-order component
export const withPromotedLabel = (RestaurentCard) => {
  return (props) => {
    // Wrapper component to add a "Promoted" label
    return (
      <div>
        <label>Promoted</label>
        <RestaurentCard {...props} />
      </div>
    );
  };
};

export default RestaurentCard;
