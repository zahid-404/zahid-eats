import React from "react";
import { Skeleton } from "./ui/skeleton";

const RestaurantCardSkeleton = () => {
  return (
    <div className="rounded-lg border-2 w-[300px] overflow-hidden">
      {/* Image skeleton */}
      <Skeleton className="h-[180px] w-full rounded-t-lg" />

      {/* Description skeleton */}
      <div className="p-4 space-y-4">
        {/* Restaurant name skeleton */}
        <Skeleton className="h-6 w-2/3 mb-2" />

        {/* Rating and cost skeleton */}
        <div className="flex items-center justify-between">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-20" />
        </div>

        {/* Cuisines skeleton */}
        <Skeleton className="h-4 w-4/5" />

        {/* Location and delivery time skeleton */}
        <div className="flex items-center justify-between">
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-20" />
        </div>
      </div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="flex flex-wrap items-center justify-center my-16 gap-4">
      {/* Display multiple skeleton cards */}
      {[...Array(16)].map((_, index) => (
        <div key={index}>
          <RestaurantCardSkeleton />
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
