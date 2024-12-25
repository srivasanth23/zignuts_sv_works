const Home = () => {
  return (
    <section className="padding h-screen w-screen relative flex flex-col-reverse justify-center md:flex-row">
      {/* left part */}
      <div className="flex md:items-end">
        <img
          src="https://res.cloudinary.com/dlxjzmiig/image/upload/v1735024121/9c6052e1009cbcf40d2a58536a66768c_s6l7iu.png"
          alt="home_image"
          className="home_image md:h-2 w-6"
        />
      </div>

      {/* right part */}
      <div className="flex md:mx-10 flex-col justify-center">
        <h1 className="text-2xl md:text-5xl font-medium mb-3">
          Mendleson
          <br />
          Communication
          <br />
          and Engagement
        </h1>
        <p className="text-xs font-normal md:text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sed
          ipsum, ut quam volutpat, tortor.
        </p>
      </div>
    </section>
  );
};

export default Home;
