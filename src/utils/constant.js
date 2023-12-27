// Base URL for Swiggy's content delivery network (CDN)
export const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

// API endpoint URL for fetching restaurant listings
export const API_URL =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=24.585445&lng=73.712479&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

// URL for fetching restaurant menus based on restaurant ID
export const RES_MENU_URL =
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=24.585445&lng=73.712479&restaurantId=";
