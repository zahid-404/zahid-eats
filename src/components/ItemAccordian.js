import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

import { MENU_IMG_URL } from "../utils/constant";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

const ItemAccordian = ( {categ} ) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          {categ?.card?.card?.title} ({categ?.card?.card?.itemCards.length})
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
  );
};

export default ItemAccordian;
