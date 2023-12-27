import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStaus";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu, ShoppingCart } from "lucide-react";
import { ThemeToggle } from "./ui/themeToggle";
import ProfileButton from "./ui/profileButton";

const Header = () => {
  // Check online status
  const onlineStatus = useOnlineStatus();

  return (
    // Header Container
    <header className="mx-auto h-20 flex justify-between py-6 px-4 md:px-20 border-b items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md">
      
      {/* Logo Container */}
      <div className="logo-container flex h-full space-x-3 items-center">
        {/* Logo for larger screens */}
        <img
          className="logo hidden md:block w-10"
          src={require("../assets/images/logo.png")}
          alt="Logo"
        />
        
        {/* Logo for smaller screens */}
        <img
          className="hidden sm:block w-24"
          src={require("../assets/images/zwiggy.png")}
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
        {/* Shopping Cart icon */}
        <ShoppingCart className="h-6 w-6" />
        
        {/* Theme Toggle button */}
        <ThemeToggle />
        
        {/* Profile Button */}
        <ProfileButton />
      </div>
    </header>
  );
};

export default Header;
