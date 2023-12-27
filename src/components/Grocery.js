const Grocery = () => {
  return (
    // Main Container with a gray background
    <section className="bg-gray-100">
      {/* Content container */}
      <div className="min-h-screen flex flex-col justify-center items-center w-full">
        {/* Grocery page under maintenance logo */}
        <img
          src="https://www.svgrepo.com/show/426192/cogs-settings.svg"
          alt="Logo"
          className="mb-8 h-40"
        />

        {/* Title indicating that the Grocery page is under maintenance */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-700 mb-4">
          Grocery page is under maintenance
        </h1>

        {/* Subtitle providing additional information about the maintenance */}
        <p className="text-center text-gray-500 text-lg md:text-xl lg:text-2xl mb-8">
          We're working hard to improve the user experience. Stay tuned!
        </p>

        {/* Action buttons */}
        <div className="flex space-x-4">
          {/* Contact Us button */}
          <a
            href="#"
            className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded"
          >
            Contact Us
          </a>

          {/* Reload button */}
          <a
            href="#"
            className="border-2 border-gray-800 text-black font-bold py-3 px-6 rounded"
          >
            Reload
          </a>
        </div>
      </div>
    </section>
  );
};

export default Grocery;
