import Client from "../Components/Client";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Slideservice from "../Components/Slideservice";
import whyImg from "../assets/why.png"

const Home = () => {
 
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
       <div className="grid max-w-6xl mx-auto gap-5 grid-cols-1  lg:grid-cols-5">
            <div className="col-span-2 h-full  bg-gradient-to-r from-[#0d1b28] via-[#0d1b28] to-[rgb(13,27,40)]">
                <img className="h-full" src={whyImg} alt="" />
            </div>
            <div className="lg:col-span-3 pl-28 space-y-4 from-[#0d1b28] via-[#0d1b28] to-[rgb(13,27,40)]">
                <h1 className="text-5xl font-bold text-[#ffffffb9]">Why Choose Us?</h1>
                <p className="text-[#ffffffb0] text-xl text-justify">Choose us for a seamless event booking experience. We offer diverse events, from gaming conventions to tech expos, ensuring something for everyone. Our user-friendly platform simplifies ticket booking, and we prioritize your security with advanced encryption.You'll receive instant email confirmations, and our responsive customer support team is always ready to assist. We maintain competitive ticket prices and provide regular event updates.Our satisfied customers rave about their experiences, highlighting our reliability. See our client reviews scroll down here. Join them in trusting us for your event bookings. Discover, book, and enjoy your next event effortlessly with us.</p>
            </div>
        </div>
       </div>

        {/* Client review area  */}

        <div className="max-w-6xl py-10 mx-auto">
            <Client>

            </Client>
        </div>

      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
