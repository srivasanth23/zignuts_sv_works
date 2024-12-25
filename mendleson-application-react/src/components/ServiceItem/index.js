const ServiceItem = ({ title, text, image, reverse }) => {
  return (
    <div
      className={`flex items-center justify-between w-full mt-14 ${
        reverse ? "flex-row-reverse" : "flex-row"
      }`}
    >
      {/* content section */}
      <div className={`w-2/4 ${reverse ? "text-left ml-36" : "text-right"} `}>
        <h1 className="text-4xl font-medium my-4">{title}</h1>
        <p className="text-base">{text}</p>
      </div>

      {/* image section */}
      <div className="w-2/4 flex flex-row">
        <img
          src={image}
          alt={`${title}_vector`}
          className={`items-center ${reverse ? "" : "ml-36"}`}
        />
      </div>
    </div>
  );
};

export default ServiceItem;
