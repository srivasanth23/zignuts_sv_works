import ServiceItem from "../ServiceItem/index";
import { useMediaQuery } from "react-responsive";

function Services() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });

  // array of services
  const services = [
    {
      title: "ENGAGEMENT",
      text: `We love what we do and are driven by achieving great results for our clients. 
      Our awards and impressive client list are testament to our high-quality approach. 
      We deliver value, creativity, results, and exceptional levels of customer service 
      and professionalism. We specialize in infrastructure development, energy, and natural resources.`,
      image:
        "https://res.cloudinary.com/dlxjzmiig/image/upload/v1735063875/7bc290c70a4e68b387ece1f0d7748189_e6tp0f.png",
      reverse: false,
    },
    {
      title: "COMMUNICATIONS",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus quam quis 
      egestas orci. Scelerisque eu, vitae sapien, pellentesque et. Sit ac fames facilisis nibh faucibus.`,
      image:
        "https://res.cloudinary.com/dlxjzmiig/image/upload/v1735095959/a3a22a7f2d34fb67a30ebb92e8c44698_xnkzlm.png",
      reverse: true,
    },
    {
      title: "FACILITATION",
      text: `We love what we do and are driven by achieving great results for our clients. 
      Our awards and impressive client list are testament to our high-quality approach. 
      We deliver value, creativity, results, and exceptional levels of customer service 
      and professionalism. We specialize in infrastructure development, energy, and natural resources.`,
      image:
        "https://res.cloudinary.com/dlxjzmiig/image/upload/v1735097065/1e60ba37cff093e0e04a285843ba6b2b_oujty0.png",
      reverse: false,
    },
    {
      title: "CONSLUTATION AND RESEARCH",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus quam quis 
        egestas orci. Scelerisque eu, vitae sapien, pellentesque et. Sit ac fames facilisis nibh faucibus.`,
      image:
        "https://res.cloudinary.com/dlxjzmiig/image/upload/v1735098668/fa0d282987510ee0ce3178b6ff534263_wwjrqr.png",
      reverse: true,
    },
    {
      title: "TRAINING & MENTORING",
      text: `We love what we do and are driven by achieving great results for our clients. 
        Our awards and impressive client list are testament to our high-quality approach. 
        We deliver value, creativity, results, and exceptional levels of customer service 
        and professionalism. We specialize in infrastructure development, energy, and natural resources.`,
      image:
        "https://res.cloudinary.com/dlxjzmiig/image/upload/v1735098679/5c8144ca07fd783d616c592372d77659_yj8euf.png",
      reverse: false,
    },
  ];

  return (
    <section className="flex flex-col justify-center items-center padding my-16">
      {/* services heading container */}
      <div>
        <h1 className="heading text-2xl md:text-5xl font-medium"> SERVICES </h1>
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

      {/* services container - bottom container */}
      <div className="w-full md:w-4/5">
        {/* services array is mapped to ServiceItem */}
        {services.map((service, index) => (
          <ServiceItem key={index} {...service} />
        ))}
      </div>
    </section>
  );
}

export default Services;
