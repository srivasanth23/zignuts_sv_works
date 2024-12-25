const Home = () => {
  return (
    <section className="padding h-full w-full flex flex-row justify-between relative">
      {/* left part */}
      <div className="flex items-end mx-14">
        <img
          src="https://res.cloudinary.com/dlxjzmiig/image/upload/v1735024121/9c6052e1009cbcf40d2a58536a66768c_s6l7iu.png"
          alt="home_image"
          className="home_image"
        />
      </div>

      {/* right part */}
      <div className="mx-10 flex flex-col justify-center">
        <h1 className="text-5xl font-medium mb-3">
          Mendleson
          <br />
          Communication
          <br />
          and Engagement
        </h1>
        <p className="text-sm font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sed
          ipsum, ut quam volutpat, tortor.
        </p>
      </div>
    </section>
  );
};

export default Home;
