import { useMediaQuery } from "react-responsive";

function OurTeam() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });

  const teamMembers = [
    {
      image:
        "https://res.cloudinary.com/dlxjzmiig/image/upload/v1735105243/a85de73ebcfb8b8ce44f37d4b4757018_cy2pzx.png",
      name: "Jessica D’suza",
    },
    {
      image:
        "https://res.cloudinary.com/dlxjzmiig/image/upload/v1735105256/1be2f586c18caacdf7395feaaac2b2a4_b4a3ok.png",
      name: "Johny Williams",
    },
    {
      image:
        "https://res.cloudinary.com/dlxjzmiig/image/upload/v1735105260/a2c433d81ff915e43daa142f88e01a18_pu4xyt.png",
      name: "Sanya R,",
    },
  ];

  return (
    <section className="flex flex-col justify-center items-center padding mt-28">
      {/* our team - heading container */}
      <div className="mb-20">
        <h1 className="heading text-2xl md:text-5xl font-medium"> OUR TEAM </h1>
        {/* according to screen size - the underline of heading changes */}
        {isSmallScreen ? (
          <svg
            width="120"
            height="7"
            viewBox="0 0 120 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="3.5" x2="120" y2="3.5" stroke="#A9A9A9" />
            <rect width="55" height="7" rx="3.5" fill="#A9A9A9" />
          </svg>
        ) : (
          <svg
            width="238"
            height="7"
            viewBox="0 0 238 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="3.5" x2="238" y2="3.5" stroke="#A9A9A9" />
            <rect width="62" height="7" rx="3.5" fill="#A9A9A9" />
          </svg>
        )}
      </div>

      {/* Our team - content Container */}
      <div className="flex flex-col md:flex-row items-center ">
        {teamMembers.map((each, i) => (
          <div key={i} className="flex flex-col items-center p-4 mx-5 md:mx-10">
            <img src={each.image} alt="team_member" className="md:h-auto h-40"/>
            <h1 className="mt-3 md:mt-6 text-base md:text-xl">{each.name}</h1>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurTeam;
