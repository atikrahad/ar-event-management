import { Link } from "react-router-dom";
import footerImg from "../assets/body.png";
import { useContext } from "react";
import { Authinfo } from "../Sharedcomponent/Authprovider";
import Catagory from "./Catagory";
const Footer = () => {

  const {data} = useContext(Authinfo)
  return (
    <div
      style={{
        background: `linear-gradient(0deg, rgba(255, 0, 150, 0.3), rgb(13,27,40)), url(${footerImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="py-5"
    >
      <footer className="flex gap-4 flex-wrap py-10 max-w-6xl justify-center md:justify-between mx-auto text-[#ffffffb2]">
        <nav className="flex md:text-left  flex-col">
          <header className=" font-bold text-xl text-[#ffffffd3]">Services</header>
          {
            data.map(item => <Catagory key={item.id} item={item}></Catagory>)
          }
          
        </nav>
        <nav className="flex md:text-left  flex-col">
          <header className=" font-bold text-xl text-[#ffffffd3]">Company</header>
          <Link to='/about' className="link link-hover">About us</Link>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="">
          <header className=" font-bold text-xl text-[#ffffffd3]">Social</header>
          <div className="flex space-y-3 py-3 flex-col">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
      <hr className="max-w-6xl mx-auto" />
      <p className="text-center mt-3 -mb-2 text-[#ffffff88] ">copyright @ by 2023</p>
    </div>
  );
};

export default Footer;
