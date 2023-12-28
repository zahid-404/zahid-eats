import { useEffect, useState } from "react";
import { RES_MENU_URL } from "../utils/constant";

// Custom hook to fetch and manage restaurant menu information
const useRestaurentMenu = (resId) => {
  // State to store restaurant menu informationloc
  const [resInfo, setResInfo] = useState(null);

  // Effect to fetch menu data when the component mounts
  useEffect(() => {
    fetchMenu();
  }, []);

  // Function to fetch restaurant menu data asynchronously
  const fetchMenu = async () => {
    // Fetch data from the provided restaurant menu URL
    const data = await fetch(RES_MENU_URL + resId);

    // Parse the fetched data as JSON
    const menuData = await data.json();

    // Simulate a delay (e.g., loading indicator) for 2 seconds
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Update the state with the fetched restaurant menu information
    setResInfo(menuData);
  };

  // Return the restaurant menu information
  return resInfo;
};

export default useRestaurentMenu;
