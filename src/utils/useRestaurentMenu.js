import { useEffect, useState } from "react";
import { RES_MENU_URL } from "../utils/constant";

const useRestaurentMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(RES_MENU_URL + resId);
    const list = await data.json();
    setResInfo(list);
  };
  return resInfo;
};

export default useRestaurentMenu;
