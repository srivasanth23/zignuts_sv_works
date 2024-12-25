import "./App.css";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import Navbar from "./components/Navbar/index";
import OurClients from "./components/OurClients";
import OurProjects from "./components/OurProjects";
import OurTeam from "./components/OurTeam";
import Services from "./components/Services/index";

function App() {
  return (
    <div className="relative bg-slate-100 h-screen w-screen overflow-x-hidden">
      {/* Background SVGs */}
      <img
        src="https://res.cloudinary.com/dlxjzmiig/image/upload/v1735024083/d4dc6fc2a4d1be0d6a684cd35221c6ab_mw7wcc.png"
        className="svg1 absolute"
        alt="svg1"
      />
      <img
        src="https://res.cloudinary.com/dlxjzmiig/image/upload/v1735023199/3612727c690c3e92d25e650c52e61503_bqzwfk.png"
        className="svg2 absolute"
        alt="svg2"
      />
      <img
        src="https://res.cloudinary.com/dlxjzmiig/image/upload/v1735024159/75e64a221b48e8ffef72a284283c2f3d_fwebyr.png"
        className="svg3 absolute"
        alt="svg3"
      />
      <img
        src="https://res.cloudinary.com/dlxjzmiig/image/upload/v1735024134/edc2038e598e7ce7c66c5c36eca1f262_kxkj3j.png"
        className="svg4 absolute"
        alt="svg4"
      />
      <img
        src="https://res.cloudinary.com/dlxjzmiig/image/upload/v1735041907/b48ac982423e06965cd1b46980aaed41_kianl8.png"
        className="svg5 absolute"
        alt="svg5"
      />

      {/* Navbar */}
      <Navbar />

      {/* Home */}
      <Home />

      {/* About Us */}
      <AboutUs />

      <img
        src="https://res.cloudinary.com/dlxjzmiig/image/upload/v1735059930/bd059a034b771c9b224f19cc1c2c547a_tit789.png"
        alt="svg6"
        className="svg6 absolute"
      />

      {/* Services */}
      <Services />

      <img
        src="https://res.cloudinary.com/dlxjzmiig/image/upload/v1735099080/39d0cbbc8a2f60c9ba9bfd9b4a42ca59_ua3mb9.png"
        alt="svg7"
        className="svg7 absolute"
      />

      <img
        src="https://res.cloudinary.com/dlxjzmiig/image/upload/v1735103688/2c20ed302ebbdc8d3582c13cf4510f1f_fqb35b.png"
        alt="svg8"
        className="svg8 absolute"
      />

      <img
        src="https://res.cloudinary.com/dlxjzmiig/image/upload/v1735099120/2c2eb2e1894d76c70fccd51e686b80fc_dbpyf7.png"
        alt="svg9"
        className="svg9 absolute"
      />

      <img
        src="https://res.cloudinary.com/dlxjzmiig/image/upload/v1735099124/bd059a034b771c9b224f19cc1c2c547a_iemtpc.png"
        alt="svg10"
        className="svg10 absolute"
      />

      {/* Our Team */}
      <OurTeam />

      <img
        src="https://res.cloudinary.com/dlxjzmiig/image/upload/v1735099120/2c2eb2e1894d76c70fccd51e686b80fc_dbpyf7.png"
        alt="svg11"
        className="svg11 absolute"
      />

      {/* Our Projects */}
      <OurProjects />

      <img
        src="https://res.cloudinary.com/dlxjzmiig/image/upload/v1735107082/5d7591773d14d361fc6fdf74f482ec81_zmolfo.png"
        alt="svg12"
        className="svg12 absolute"
      />

      {/* Our Clients */}
      <OurClients />

      {/* Contact Us */}
      <ContactUs />
      
    </div>
  );
}

export default App;
