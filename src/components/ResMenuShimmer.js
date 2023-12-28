import { Skeleton } from "./ui/skeleton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

// Shimmer component for individual menu cards within the restaurant menu
const MenuCardShimmer = () => {
  return (
    <Accordion className="my-4" type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          {/* Shimmer for menu card title */}
          <Skeleton className="h-6 w-2/3 mb-2" />
        </AccordionTrigger>
        {/* Shimmer for menu card content */}
        <AccordionContent>
          {[...Array(3)].map((_, index) => (
            <div key={index} className="mb-2">
              <Skeleton className="h-4 w-full" />
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

// Shimmer component for the entire restaurant menu
const RestaurentMenuShimmer = () => {
  return (
    <section className="my-8 md:my-16 mx-4 md:mx-auto flex flex-col md:w-2/3">
      {/* Rating and restaurant card */}
      <div className="w-full flex justify-between">
        {/* Container for restaurant name and details */}
        <div className="flex flex-col">
          {/* Shimmer for restaurant name */}
          <Skeleton className="h-8 w-2/3 mb-2" />
          {/* Shimmer for restaurant details */}
          <Skeleton className="h-4 w-4/5 mb-2" />
          <Skeleton className="h-4 w-2/3" />
        </div>
        {/* Container for ratings */}
        <div className="flex flex-col">
          <div className="flex">
            {/* Shimmer for star icon */}
            <Skeleton className="h-4 w-8" />
            {/* Shimmer for average rating */}
            <Skeleton className="md:px-4 h-4 w-12" />
          </div>
          {/* Shimmer for total ratings */}
          <Skeleton className="md: py-2 h-4 w-20" />
        </div>
      </div>

      {/* Accordions */}
      <div className="my-16">
        {/* Display multiple shimmering menu cards */}
        {[...Array(8)].map((_, index) => (
          <MenuCardShimmer key={index} />
        ))}
      </div>
    </section>
  );
};

export default RestaurentMenuShimmer;
