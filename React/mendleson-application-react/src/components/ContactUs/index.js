function ContactUs() {
  return (
    <section className="flex flex-col justify-center text-center padding mt-24 mb-10 w-full md:mx-10">
      {/* Contact us container */}
      <div className="bg-customBg py-5 md:py-10 px-6 md:px-16 flex flex-col md:flex-row justify-between w-full items-center md:items-start mb-8">
        {/* Columns inside container */}

        {/* container one (social) */}
        <div className="text-center items-center">
          <h1 className="font-bold text-sm md:text-base mb-2 mt-3 md:mt-0">
            Social
          </h1>
          <ul>
            <li className="flex flex-row justify-between items-center cursor-pointer mb-2 hover:scale-110 transform transition duration-300 ">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center"
              >
                <img
                  src="https://res.cloudinary.com/dlxjzmiig/image/upload/v1735117288/e34f9f455b8d5fba425ae21a38375873_ecb7hc.png"
                  alt="facebook"
                  className="h-4 w-4 mr-3"
                />
                <p className="text-xs md:text-sm font-normal">Facebook</p>
              </a>
            </li>
            <li className="flex flex-row justify-between items-center cursor-pointer mb-2 hover:scale-110 transform transition duration-300 ">
              <a
                href="https://www.linkdin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center"
              >
                <img
                  src="https://res.cloudinary.com/dlxjzmiig/image/upload/v1735117291/52897b61bdcd7be14df6a0e5fc8727f3_x4r43t.png"
                  alt="linkdin"
                  className="h-4 w-4 mr-3"
                />
                <p className="text-xs md:text-sm font-normal">LinkdIn</p>
              </a>
            </li>
            <li className="flex flex-row justify-between items-center cursor-pointer mb-2 hover:scale-110 transform transition duration-300 ">
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center"
              >
                <img
                  src="https://res.cloudinary.com/dlxjzmiig/image/upload/v1735117313/fe765206d076c18af39c815b3d7dc61f_oo4its.png"
                  alt="google"
                  className="h-4 w-4 mr-3"
                />
                <p className="text-xs md:text-sm font-normal">Google +</p>
              </a>
            </li>
          </ul>
        </div>

        {/* container two (explore) */}
        <div>
          <h1 className="font-bold text-sm md:text-base mb-2 mt-3 md:mt-0">
            Explore
          </h1>
          <ul>
            <li className="text-xs md:text-smfont-normal cursor-pointer mb-2 hover:scale-110 transform transition duration-300 ">
              Services
            </li>
            <li className="text-xs md:text-sm font-normal cursor-pointer mb-2 hover:scale-110 transform transition duration-300 ">
              Team
            </li>
            <li className="text-xs md:text-smfont-normal cursor-pointer mb-2 hover:scale-110 transform transition duration-300 ">
              Clients
            </li>
          </ul>
        </div>

        {/* container three (Contact) */}
        <div>
          <h1 className="font-bold text-sm md:text-base mb-2 mt-3 md:mt-0">
            Contact
          </h1>
          <ul>
            <li className="text-xs md:text-sm font-normal mb-2 ">
              Lorem Ipsum dummy address
            </li>
            <li className="text-xs md:text-sm font-normal mb-2">
              used for display
            </li>
            <li className="text-xs md:text-sm font-normal  mb-2 ">
              1234567890
            </li>
          </ul>
        </div>

        {/* container four (email) */}
        <div>
          <h1 className="font-bold text-sm md:text-base mb-2 mt-3 md:mt-0">
            Email
          </h1>
          <a
            href="mailto:mendlesoncommunication@email.com"
            className="text-xs md:text-sm font-normal hover:scale-110 transform transition duration-300"
          >
            mendlesoncommunication@email.com
          </a>
        </div>
      </div>

      {/* copyright content */}
      <p className="text-xs md:text-sm font-normal">
        © Copyright 2018 Mendleson Communication Pty Ltd
      </p>
    </section>
  );
}

export default ContactUs;
