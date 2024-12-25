import { useMediaQuery } from "react-responsive";

function OurProjects() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <section className="flex flex-col justify-center items-center padding mt-28">
      {/* our projects - heading container */}
      <div className="mb-20">
        <h1 className="heading text-2xl md:text-5xl font-medium">
          {" "}
          OUR PROJECTS{" "}
        </h1>
        {/* according to screen size - the underline of heading changes */}
        {isSmallScreen ? (
          <svg
            width="180"
            height="7"
            viewBox="0 0 180 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="3.5" x2="180" y2="3.5" stroke="#A9A9A9" />
            <rect width="75" height="7" rx="3.5" fill="#A9A9A9" />
          </svg>
        ) : (
          <svg
            width="362"
            height="7"
            viewBox="0 0 362 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="3.5" x2="362" y2="3.5" stroke="#A9A9A9" />
            <rect width="103" height="7" rx="3.5" fill="#A9A9A9" />
          </svg>
        )}
      </div>

      {/* Our projects - content Container */}
      <div className="flex flex-row items-center w-full md:w-auto">
        <div className="w-2/4">
          <img
            src="https://res.cloudinary.com/dlxjzmiig/image/upload/v1735106614/f71bf119501aa36ecaa5c8e51b3699df_zq3stu.png"
            alt="projects_name"
            style={{
              width: isSmallScreen ? "300px" : "554px",
              height: isSmallScreen ? "360px" : "667px",
            }}
            // accoring the screen size size of image changes
          />
        </div>
        <div className="w-2/4 flex flex-col justify-around ml-3">
          <img
            src="https://res.cloudinary.com/dlxjzmiig/image/upload/v1735106624/591ab0d45b5be1abc01980c6696348ee_qhg7ma.png"
            alt="project_1"
            className="mb-3"
            style={{
              width: isSmallScreen ? "300px" : "554px",
              height: isSmallScreen ? "174px" : "325px",
            }}
          />
          <img
            src="https://res.cloudinary.com/dlxjzmiig/image/upload/v1735106638/3d06091d3d91cb81d2b786daf372e266_qbsca4.png"
            alt="project_2"
            style={{
              width: isSmallScreen ? "300px" : "554px",
              height: isSmallScreen ? "174px" : "325px",
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default OurProjects;
