import { useMediaQuery } from "react-responsive";

function OurClients() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });

  const clients = [
    "https://res.cloudinary.com/dlxjzmiig/image/upload/v1735108281/1f0908afb05ef7537d353d3ee0fcaf07_fjorzh.png",
    "https://res.cloudinary.com/dlxjzmiig/image/upload/v1735108285/e512be5f958cd497e19a986ffdda7ec2_vijjdc.png",
    "https://res.cloudinary.com/dlxjzmiig/image/upload/v1735108298/67382ad8fa02f33057c97e6ad87ed409_trfsps.png",
    "https://res.cloudinary.com/dlxjzmiig/image/upload/v1735108314/eaa5dcf8a9bd7ab69cd2ab2981016a6e_w5kak8.png",
    "https://res.cloudinary.com/dlxjzmiig/image/upload/v1735108323/a12c4951d8ef62c87d246a2b37f20a23_jqfkai.png",
    "https://res.cloudinary.com/dlxjzmiig/image/upload/v1735108327/fb4dc29dc6ae118102b797d67f96da57_gzmzbm.png",
    "https://res.cloudinary.com/dlxjzmiig/image/upload/v1735108339/f2e52870030ba44145f78f064d443135_vnk5ra.png",
    "https://res.cloudinary.com/dlxjzmiig/image/upload/v1735108354/91eaccbe8faa210180afb59197d5a61f_b4xss7.png",
    "https://res.cloudinary.com/dlxjzmiig/image/upload/v1735108368/80510ce2a8778adcd65907c86ba4bebe_ldposy.png",
  ];

  return (
    <section className="flex flex-col justify-center items-center padding mt-28">
      {/* Our Clients - heading container */}
      <div className="mb-20">
        <h1 className="heading text-2xl md:text-5xl font-medium">
          OUR CLIENTS
        </h1>
        {/* according to screen size - the underline of heading changes */}
        {isSmallScreen ? (
          <svg
            width="150"
            height="7"
            viewBox="0 0 150 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="3.5" x2="150" y2="3.5" stroke="#A9A9A9" />
            <rect width="65" height="7" rx="3.5" fill="#A9A9A9" />
          </svg>
        ) : (
          <svg
            width="310"
            height="7"
            viewBox="0 0 310 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="3.5" x2="310" y2="3.5" stroke="#A9A9A9" />
            <rect width="104" height="7" rx="3.5" fill="#A9A9A9" />
          </svg>
        )}
      </div>

      {/* Our Clients - content container */}
      <div className="flex flex-wrap justify-center flex-row gap-5 md:gap-11 md:w-4/5">
        {clients.map((each, i) => (
          <img
            src={each}
            alt={`Client ${i + 1}`}
            key={i}
            className="h-10 md:h-20 w-auto mb-10"
          />
        ))}
      </div>
    </section>
  );
}

export default OurClients;
