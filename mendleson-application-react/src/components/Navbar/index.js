function Navbar() {
  return (
    <>
      <nav className="w-screen py-4 flex flex-row items-center justify-between text-center fixed z-50 padding bg-slate-700 md:bg-transparent">
        {/* Logo */}
        <img
          src="https://res.cloudinary.com/dlxjzmiig/image/upload/v1735025451/208adadfb58ad77bdfa6187cfb0644b5_sxsoap.png"
          alt="mendelleson_logo"
          className="w-40 md:w-auto"
        />

        {/* Hamburger menu for mobile */}
        <button
          className="block md:hidden focus:outline-none"
          onClick={() => {
            const menu = document.getElementById("mobile-menu");
            menu.classList.toggle("hidden");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="#fff"
            viewBox="0 0 24 24"
            stroke="#fff"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-row items-center justify-between text-center bg-slate-300 rounded-lg">
          <li className="mx-3 text-lg hover:scale-110 transform transition duration-300 p-2 cursor-pointer">
            About Us
          </li>
          <li className="mx-3 text-lg hover:scale-110 transform transition duration-300 p-2 cursor-pointer">
            Services
          </li>
          <li className="mx-3 text-lg hover:scale-110 transform transition duration-300 p-2 cursor-pointer">
            Team
          </li>
          <li className="mx-3 text-lg hover:scale-110 transform transition duration-300 p-2 cursor-pointer">
            Clients
          </li>
          <li className="mx-3 text-lg hover:scale-110 transform transition duration-300 p-2 cursor-pointer ">
            Contact Us
          </li>
        </ul>

        {/* Mobile Menu */}
        <ul
          id="mobile-menu"
          className="hidden absolute top-11 left-0 w-full bg-slate-500 text-white shadow-md md:hidden flex-col items-start p-4 space-y-4"
        >
          <li className="mx-3 text-lg hover:scale-110 transform transition duration-300 p-2 cursor-pointer">
            About Us
          </li>
          <li className="mx-3 text-lg hover:scale-110 transform transition duration-300 p-2 cursor-pointer">
            Services
          </li>
          <li className="mx-3 text-lg hover:scale-110 transform transition duration-300 p-2 cursor-pointer">
            Team
          </li>
          <li className="mx-3 text-lg hover:scale-110 transform transition duration-300 p-2 cursor-pointer">
            Clients
          </li>
          <li className="mx-3 text-lg hover:scale-110 transform transition duration-300 p-2 cursor-pointer ">
            Contact Us
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
