function Navbar() {
  return (
    <>
      <nav className="w-screen py-4 flex flex-row items-center justify-between text-center fixed z-50 padding">
        <img
          src="https://res.cloudinary.com/dlxjzmiig/image/upload/v1735025451/208adadfb58ad77bdfa6187cfb0644b5_sxsoap.png"
          alt="mendelleson_logo"
        />
        <ul className="flex flex-row items-center justify-between text-center bg-slate-300 rounded-lg">
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
