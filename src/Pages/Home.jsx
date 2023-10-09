import { useContext } from "react";
import Client from "../Components/Client";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Slideservice from "../Components/Slideservice";
import whyImg from "../assets/why.png"
import { Authinfo } from "../Sharedcomponent/Authprovider";

import '../Components/./Event.css'

const Home = () => {
  const {loading} = useContext(Authinfo)

  if(loading){
    return (
      <div className="flex items-center justify-center h-[100vh] bg-[#0d1b28]">
        <span className="loading bg-gradient-to-r from-red-500 to-cyan-400 loading-bars w-10 "></span>
        <span className="loading bg-gradient-to-r from-red-500 to-cyan-400 loading-bars w-11"></span>
        <span className="loading bg-gradient-to-r from-red-500 to-cyan-400 loading-bars w-12"></span>
        <span className="loading bg-gradient-to-r from-red-500 to-cyan-400 loading-bars w-[60px]"></span>
      </div>
    );
  }
 
  return (
    <div className="from-[#0d1b28] via-[#0d1b28] to-[rgb(13,27,40)]">
      <Header></Header>

      {/* home main sectin */}
      <div className=" bg-gradient-to-r py-16 from-[#0d1b28] via-[#0d1b28] to-[rgb(13,27,40)]">

        {/* slide services */}

        <div>
          <h1 className="text-center font-bold text-4xl text-white">
            Our Services
          </h1>
          <div className="py-10">
          <Slideservice></Slideservice>
          </div>
        </div>

        {/* why you chooss us */}

       <div className="bg-gradient-to-r py-16 from-[#0d1b28] via-[#0d1b28] to-[rgb(13,27,40)]">

      <div>
        <h1 className="text-[#ffffffc7] text-3xl font-bold text-center py-5">Why you choose us?</h1>
      <div className="max-w-6xl gap-5 pb-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto">
                <div className="p-2 space-y-2 cardstyle ">
                  <h2 className="text-2xl text-center font-semibold text-[#ffffffce]">Expertise</h2>
                  <p className="text-[#ffffff86] text-justify">Our team comprises experts in event planning, technology, and gaming. We understand the intricacies of both industries, allowing us to create tailored events that resonate with your passions.</p>
                </div>
                <div className="p-2 space-y-2 cardstyle ">
                  <h2 className="text-2xl text-center font-semibold text-[#ffffffce]">Creativity</h2>
                  <p className="text-[#ffffff86] text-justify">We believe in pushing the boundaries of creativity. Our events are designed to surprise and delight, featuring innovative concepts and immersive experiences.</p>
                </div>
                <div className="p-2 space-y-2 cardstyle ">
                  <h2 className="text-2xl text-center font-semibold text-[#ffffffce]">Community Focus</h2>
                  <p className="text-[#ffffff86] text-justify">We are not just event planners; we are also part of the tech and gaming community. We genuinely care about the people we serve and strive to build lasting relationships.</p>
                </div>
                <div className="p-2 space-y-2 cardstyle ">
                  <h2 className="text-2xl text-center font-semibold text-[#ffffffce]">Quality Assurance</h2>
                  <p className="text-[#ffffff86] text-justify">Every detail matters. We maintain a commitment to excellence, ensuring that every event we organize meets the highest standards of quality.O</p>
                </div>
            </div>
      </div>

       <div className="grid max-w-6xl mx-auto gap-5 grid-cols-1  lg:grid-cols-5">
            <div className="col-span-2 h-full  bg-gradient-to-r from-[#0d1b28] via-[#0d1b28] to-[rgb(13,27,40)]">
                <img className="h-full" src={whyImg} alt="" />
            </div>
            
            <div className="lg:col-span-3 pl-28 space-y-4 from-[#0d1b28] via-[#0d1b28] to-[rgb(13,27,40)]">
                <h1 className="text-3xl font-bold text-[#ffffffb9]">Your next event will be with us. </h1>
                <p className="text-[#ffffffb0] text-xl text-justify">Choose us for a seamless event booking experience. We offer diverse events, from gaming conventions to tech expos, ensuring something for everyone. Our user-friendly platform simplifies ticket booking, and we prioritize your security with advanced encryption.You all receive instant email confirmations, and our responsive customer support team is always ready to assist. We maintain competitive ticket prices and provide regular event updates.Our satisfied customers rave about their experiences, highlighting our reliability. See our client reviews scroll down here. Join them in trusting us for your event bookings. Discover, book, and enjoy your next event effortlessly with us.</p>
            </div>
        </div>
       </div>

        {/* Client review area  */}

        <div className="max-w-6xl py-10 mx-auto">
          <h1 className="text-center text-3xl font-bold py-5 text-[#ffffffd2]">Client reviews</h1>
            <Client>

            </Client>
        </div>

      </div>
      <Footer></Footer>
      
    </div>
  );
};

export default Home;
