import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu, ShoppingCart } from "lucide-react";
import { ThemeToggle } from "./ui/themeToggle";
import ProfileButton from "./ui/profileButton";
import { useSelector } from "react-redux";

const Header = () => {
  // subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    // Header Container
    <header className="mx-auto h-20 flex justify-between py-6 px-4 md:px-20 border-b items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md">
      {/* Logo Container */}
      <div className="logo-container flex h-full space-x-3 items-center">
        {/* Logo for larger screens */}
        <img
          className="hidden md:block w-10"
          src={require("../assets/images/logo.png")}
          alt="Logo"
        />

        {/* Logo for smaller screens */}
        <img
          className="hidden md:block w-24"
          src={require("../assets/images/ZWIGGY.png")}
          alt="Zwiggy Logo"
        />

        {/* Sheet Menu for mobile */}
        <Sheet>
          <SheetTrigger>
            {/* Menu icon for triggering the sheet */}
            <Menu className="h-6 md:hidden w-6" />
          </SheetTrigger>

          {/* Sheet Content with navigation links for mobile */}
          <SheetContent side="left">
            <nav className="flex flex-col items-center gap-4">
              <Button variant="ghost" className="w-20">
                <Link to="/">Home</Link>
              </Button>
              <Button variant="ghost" className="w-20">
                <Link to="/about">About Us</Link>
              </Button>
              <Button variant="ghost" className="w-20">
                <Link to="/grocery">Grocery</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Navigation on desktop */}
      <nav className="md:flex hidden items-center gap-4">
        <Button variant="ghost" className="w-20">
          <Link to="/">Home</Link>
        </Button>
        <Button variant="ghost" className="w-20">
          <Link to="/about">About Us</Link>
        </Button>
        <Button variant="ghost" className="w-20">
          <Link to="/grocery">Grocery</Link>
        </Button>
      </nav>

      {/* Other navigation items */}
      <div className="flex items-center gap-x-6 ">
      <Link to="/cart">
        {/* Shopping Cart icon */}
        <div className="relative py-2">

          <div className="t-0 -top-2 absolute left-3">
            <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
              {cartItems.length}
            </p>
          </div>
          <ShoppingCart className="h-6 w-6" />
        </div>
      </Link>

        {/* Theme Toggle button */}
        <ThemeToggle />

        {/* Profile Button */}
        <ProfileButton />
      </div>
    </header>
  );
};

export default Header;
