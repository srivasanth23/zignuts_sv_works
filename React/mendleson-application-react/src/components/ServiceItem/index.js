const ServiceItem = ({ title, text, image, reverse }) => {
  return (
    <div
      className={`flex items-center justify-between w-full mt-14 ${
        reverse ? "flex-col md:flex-row-reverse" : "flex-col md:flex-row"
      }`}
    >
      {/* content section */}
      <div className={`w-full md:w-2/4 ${reverse ? "text-left md:ml-36" : "text-left md:text-right"} `}>
        <h1 className="text-2xl md:text-4xl font-medium my-4">{title}</h1>
        <p className="text-sm md:text-base">{text}</p>
      </div>

      {/* image section */}
      <div className="w-full items-center md:w-2/4 flex flex-row">
        <img
          src={image}
          alt={`${title}_vector`}
          className={` ${reverse ? "" : "mt-10 md:mt-0 md:ml-36"}`}
        />
      </div>
    </div>
  );
};

export default ServiceItem;
