import { useRouteError } from "react-router-dom";
import errorImg from "../assets/images/error.png";

const Error = () => {
  // Use the useRouteError hook from react-router-dom to get information about the route error
  const err = useRouteError();

  // Log the error information to the console for debugging purposes
  console.log(err);

  return (
    // Main Container
    <div className="relative">
      {/* Display the error image as a background */}
      <img
        className="w-screen h-screen object-fit"
        src={errorImg}
        alt="Error background"
      />

      {/* Display a message indicating that there might be some error */}
      <h1 className="absolute top-16 left-10 z-10">
        There might be some error
      </h1>

      {/* Display the status code and status text of the error */}
      <h2 className="absolute top-24 left-10 z-10">
        {err.status}:{err.statusText}
      </h2>
    </div>
  );
};

export default Error;
