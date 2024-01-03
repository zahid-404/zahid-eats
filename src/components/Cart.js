import { useDispatch, useSelector } from "react-redux";
import { MENU_IMG_URL } from "../utils/constant";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "./ui/button";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {
  // Get cart items from Redux store
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  // State to track quantities of each item in the cart
  const [quantities, setQuantities] = useState({});

  // State to track the subtotal of items in the cart
  const [subtotal, setSubtotal] = useState(0);

  // Effect to initialize quantities state with initial quantities from the cart
  useEffect(() => {
    // Create an object with item IDs as keys and initial quantity as 1 for each item
    const initialQuantities = cartItems.reduce((acc, item) => {
      acc[item.id] = 1; // Set the initial quantity to 1 for each item
      return acc;
    }, {});

    // Set the quantities state with the initial quantities
    setQuantities(initialQuantities);
  }, [cartItems]);

  // Effect to recalculate subtotal whenever cartItems or quantities change
  useEffect(() => {
    // Calculate subtotal by summing up the quantity * price for each item in the cart
    const newSubtotal = cartItems.reduce((acc, item) => {
      const quantity = quantities[item.id] || 0;
      const price = item.price / 100 || item.defaultPrice / 100;
      return acc + quantity * price;
    }, 0);

    // Set the subtotal state with the new calculated subtotal
    setSubtotal(newSubtotal);
  }, [cartItems, quantities]);

  // Handler to increment quantity of a specific item
  const handleIncrement = (itemId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: (prevQuantities[itemId] || 0) + 1,
    }));
  };

  // Handler to decrement quantity of a specific item
  const handleDecrement = (itemId) => {
    if (quantities[itemId] > 1) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [itemId]: prevQuantities[itemId] - 1,
      }));
    }
  };

  // Handler to clear cart items
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // Handler to remove item
  const handlRemoveItem = (index) => {
    dispatch(removeItem(index));
  };

  return (
    <div className="h-screen bg-gray-100 pt-20">
      <div className="flex items-center justify-center mb-10">
        {/* Cart Items Title */}
        <h1 className="mx-8 text-center text-2xl font-bold">Cart Items</h1>

        {/* Button for clearing cart */}
        <Button onClick={handleClearCart}>Clear Cart</Button>
      </div>

      {/* Cart Items Container */}
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        {/* Cart Items Section */}
        <div className="rounded-lg md:w-2/3">
          {/* Iterate over each item in the cart */}
          {cartItems.map((info, index) => (
            <div
              className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
              key={index}
            >
              {/* Display product image */}
              <img
                src={MENU_IMG_URL + info?.imageId}
                alt="product-image"
                className="w-full rounded-lg sm:w-40"
              />

              {/* Display product details and quantity controls */}
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                  <h2 className="text-lg font-bold text-gray-900">
                    {info?.name}
                  </h2>
                  <p className="mt-1 text-xs text-gray-700">{info?.category}</p>
                </div>

                {/* Quantity controls */}
                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                  <div className="flex items-center border-gray-100">
                    {/* Decrease quantity button */}
                    <span
                      onClick={() => handleDecrement(info.id)}
                      className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                    >
                      {" "}
                      -{" "}
                    </span>

                    {/* Display quantity */}
                    <span className="h-8 w-8 border bg-white text-center text-xl outline-none left-2">
                      {quantities[info.id] || 1}
                    </span>

                    {/* Increase quantity button */}
                    <span
                      onClick={() => handleIncrement(info.id)}
                      className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                    >
                      {" "}
                      +{" "}
                    </span>
                  </div>

                  {/* Display product price and remove button */}
                  <div className="flex items-center space-x-4">
                    <p className="text-sm">
                      ₹ {info?.price / 100 || info?.defaultPrice / 100}
                    </p>
                    <span className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                      <X onClick={() => handlRemoveItem(index)} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Subtotal Section */}
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          {/* Subtotal */}
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">₹{subtotal.toFixed(2)}</p>
          </div>

          {/* Shipping */}
          <div className="flex justify-between">
            <p className="text-gray-700">Shipping</p>
            <p className="text-gray-700">₹50</p>
          </div>

          {/* Separator Line */}
          <hr className="my-4" />

          {/* Total */}
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">
                ₹{(subtotal + 50).toFixed(2)}
              </p>
              <p className="text-sm text-gray-700">including GST</p>
            </div>
          </div>

          {/* Checkout Button */}
          <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
            Check out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
