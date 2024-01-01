import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { MENU_IMG_URL } from "../utils/constant";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemAccordian = ({ categ }) => {
  const dispatch = useDispatch();
  const handleAddItem = () => {
    dispatch(addItem("pizza"));
  };

  return (
    <AccordionItem value={categ?.card?.card?.title}>
      {/* Accordion Trigger: Category title and item count */}
      <AccordionTrigger>
        {categ?.card?.card?.title} ({categ?.card?.card?.itemCards.length})
      </AccordionTrigger>

      {/* Accordion Content: List of menu items under the category */}
      {categ?.card?.card?.itemCards.map((menu, index) => (
        <div key={index}>
          <AccordionContent className="flex justify-between">
            {/* Display menu item name and price */}
            {menu?.card?.info?.name} ₹ {menu?.card?.info?.price / 100}
            {/* Display menu item image and add to cart button */}
            <div className="relative">
              <img
                className="w-32 h-32 rounded-lg "
                src={MENU_IMG_URL + menu?.card?.info?.imageId}
                alt="Menu Img"
                loading="lazy"
              />
              <Button
                variant="outline"
                className="bottom-2 z-10 absolute left-1/2 transform -translate-x-1/2"
                onClick={handleAddItem}
              >
                Add <Plus />
              </Button>
            </div>
          </AccordionContent>
        </div>
      ))}
    </AccordionItem>
  );
};

export default ItemAccordian;
