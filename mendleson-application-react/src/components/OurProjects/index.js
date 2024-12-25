function OurProjects() {
  return (
    <section className="flex flex-col justify-center items-center padding mt-28">
      {/* our projects - heading container */}
      <div className="mb-20">
        <h1 className="heading text-5xl font-medium"> OUR PROJECTS </h1>
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
      </div>

      {/* Our projects - content Container */}
      <div className="flex flex-row items-center">
        <div className="w-2/4">
          <img
            src="https://res.cloudinary.com/dlxjzmiig/image/upload/v1735106614/f71bf119501aa36ecaa5c8e51b3699df_zq3stu.png"
            alt="projects_name"
            style={{ width: "554px", height: "667px" }}
          />
        </div>
        <div className="w-2/4 flex flex-col justify-around ml-3">
          <img
            src="https://res.cloudinary.com/dlxjzmiig/image/upload/v1735106624/591ab0d45b5be1abc01980c6696348ee_qhg7ma.png"
            alt="project_1"
            className="mb-3"
            style={{ width: "554px", height: "331px" }}
          />
          <img
            src="https://res.cloudinary.com/dlxjzmiig/image/upload/v1735106638/3d06091d3d91cb81d2b786daf372e266_qbsca4.png"
            alt="project_2"
            // style={{ width: "554px", height: "330px" }}
          />
        </div>
      </div>
    </section>
  );
}

export default OurProjects;
