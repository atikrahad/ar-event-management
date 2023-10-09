import Navber from "./Navber";
import headerImg from "../../src/assets/header.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      style={{
        background: `linear-gradient(0deg, rgb(13,27,40), rgba(255, 0, 150, 0.3)), url(${headerImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className=""
      
    >
    <div data-aos="fade-right"
    data-aos-easing="linear"
    data-aos-duration="1500"><Navber ></Navber></div>
      
      <div
        className="flex flex-col max-w-md md:max-w-4xl lg:max-w-6xl py-10 justify-center px-2 mx-auto"
        data-aos="zoom-out-right"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <div className="md:w-[40vw] text-center md:text-left space-y-3">
          <h3 className="text-xl  md:text-2xl font-bold text-white">
            Welcome to the Ultimate{" "}
          </h3>
          <h1 className="text-white font-bold text-2xl md:text-3xl">
            Tech and Gaming Event Experience!
          </h1>
          <p className="text-slate-300 pb-3 ">
            Step into a world where technology and gaming collide in the most
            electrifying way possible. Our event management services bring you
            the future of entertainment, featuring cutting-edge tech showcases
            and immersive gaming experiences. Get ready to level up your event
            game with us!
          </p>
          <Link to="/login">
            <button className="btn rounded-md bg-gradient-to-r from-red-500  to-cyan-400 border-none shadow-md font-bold">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
