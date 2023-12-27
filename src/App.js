import { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import RestaurentMenu from "./components/RestaurentMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { ThemeProvider } from "./components/ui/theme";

// Lazily load the Grocery component for code splitting
const Grocery = lazy(() => import("./components/Grocery"));

// Define the layout for the entire application
const AppLayout = () => {
  return (
    // Wrap the entire application in the ThemeProvider to provide a consistent theme
    <ThemeProvider>
      {/* Main application container */}
      <div className="app">
        {/* Display the Header component at the top */}
        <Header />
        
        {/* Outlet for rendering the child components based on the current route */}
        <Outlet />
      </div>
    </ThemeProvider>
  );
};

// Create a browser router with defined routes and elements
const appRouter = createBrowserRouter([
  {
    // Root route configuration
    path: "/",
    element: <AppLayout />, // Render the AppLayout component for the root route
    children: [
      {
        path: "/", // Child route for the home page
        element: <Body />, // Render the Body component
      },
      {
        path: "/about", // Child route for the About page
        element: <About />, // Render the About component
      },
      {
        path: "/grocery", // Child route for the Grocery page
        element: (
          // Use Suspense to lazy-load the Grocery component with a loading fallback
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId", // Child route for displaying restaurant menus
        element: <RestaurentMenu />, // Render the RestaurentMenu component
      },
    ],
    // Error element to render when there's an error in the route
    errorElement: <Error />,
  },
]);

// Create a root instance for rendering the application
const root = ReactDOM.createRoot(document.getElementById("root"));
// Render the application with the RouterProvider, providing the appRouter configuration
root.render(<RouterProvider router={appRouter} />);
