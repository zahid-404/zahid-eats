import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStaus";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu, Moon, MoonIcon, Sun, SunIcon } from "lucide-react";

const Header = () => {
  let [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    // Header Container
    <header className=" bg-blue-500 mx-auto max-w-7xl h-20 flex justify-between py-3 px-4 border-b items-center ">
      {/* Logo Container */}
      <div className="logo-container flex h-full  items-center">
        <img
          className="logo hidden  md:block w-16"
          src={require("../assets/images/logo.png")}
        />
        <h1 className=" hidden sm:block text-xl mx-4 font-mono font-bold  ">
          ZAHID EATS
        </h1>
        {/* Sheet Menu */}
        <Sheet>
          <SheetTrigger>
            <Menu className="h-6 md:hidden w-6" />
          </SheetTrigger>
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
              <Button
                variant="ghost"
                className="login w-20"
                onClick={() => {
                  btnName === "Login"
                    ? setBtnName("Logout")
                    : setBtnName("Login");
                }}
              >
                {btnName}
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
      {/* Navigation on desktop */}
      <nav className="md:flex hidden  items-center gap-4">
        <Button variant="ghost" className="w-20">
          <Link to="/">Home</Link>
        </Button>
        <Button variant="ghost" className="w-20">
          <Link to="/about">About Us</Link>
        </Button>
        <Button variant="ghost" className="w-20">
          <Link to="/grocery">Grocery</Link>
        </Button>
        <Button
          variant="ghost"
          className="login w-20"
          onClick={() => {
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
          }}
        >
          {btnName}
        </Button>
      </nav>
      {/* Other navigation items */}
      <div className="flex items-center ">
        <Button
          variant="ghost"
          size="icon"
          aria-label="Toggle Theme"
          className="mr-6"
          // onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <SunIcon className="absolute h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className=" h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
