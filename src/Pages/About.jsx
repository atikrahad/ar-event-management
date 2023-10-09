import Footer from "../Components/Footer";
import Navber from "../Components/Navber";
import aboutImg from "../assets/uboutus.png"
import secondImg from "../assets/1.png"
import '../Components/./Event.css'


const About = () => {
  return (
    <div className="bg-gradient-to-r from-[#0d1b28] via-[#0d1b28] to-[rgb(13,27,40)]">
      <div style={{background: `linear-gradient(0deg, rgb(13,27,40), rgba(255, 0, 150, 0.3)), url(${aboutImg})`}} className="h-[100vh]">
      <Navber></Navber>
      <div className="max-w-6xl flex flex-col justify-center h-full mx-auto">
            <div className="lg:w-1/2 space-y-3">
                <h1 className="text-4xl font-bold text-[#ffffffc7]">About Us</h1>
                <p className="text-[#ffffff85]">Welcome to EventTechGamer, your premier destination for tech and gaming event management services. We are passionate about technology, gaming, and creating unforgettable experiences that bring people together. With a team of dedicated professionals and a wealth of industry expertise, we are your trusted partner in planning and executing exceptional events.</p>
            </div>
      </div>
      </div>
      <div className="grid grid-cols-1 items-center md:gap-10 max-w-md md:max-w-4xl lg:max-w-6xl mx-auto py-10   md:grid-cols-2">
        <div><img src={secondImg} alt="" /></div>
        <div className="text-[#ffffff93] px-2 space-y-3">
        <h1 className="text-4xl text-[#ffffffc4]">Our Mission</h1>
        <p>At EventTechGamer, our mission is to bridge the gap between technology enthusiasts and gaming aficionados through meticulously organized events. We aim to:</p>
        <ul className="pl-5 list-disc">
            <li >Inspire and educate individuals about the latest tech innovations and gaming trends.</li>
            <li>Inspire and educate individuals about the latest tech innovations and gaming trends.</li>
            <li>Deliver top-notch event experiences that leave a lasting impression.</li>
        </ul>
        </div>
      </div>
      <div className="max-w-md md:max-w-4xl px-1 lg:max-w-6xl space-y-10 py-16 mx-auto">
        <h1 className="text-[#ffffffcc] font-bold text-4xl text-center">Our facilities like this</h1>
        <div className="grid py-5 gap-5 md:grid-cols-2 grid-cols-1">
            <div className="flex cardstyle flex-col items-center justify-center p-5">
                <h2 className="text-2xl font-bold text-[#ffffffde]">Tech Expos</h2>
                <p className="text-[#ffffff8f] text-justify">Explore the latest gadgets, software, and innovations at our tech expos. Whether you are a tech enthusiast or a business looking to showcase your products, we have got you covered.</p>
            </div>
            <div className="flex flex-col cardstyle items-center justify-center p-5">
                <h2 className="text-2xl font-bold text-[#ffffffde]">Gaming Tournaments</h2>
                <p className="text-[#ffffff8f] text-justify">Compete against fellow gamers in thrilling tournaments or simply enjoy the camaraderie of our gaming events. We cater to players of all skill levels.</p>
            </div>
            <div className="flex flex-col cardstyle items-center justify-center p-5">
                <h2 className="text-2xl font-bold text-[#ffffffde]">Workshops and Panels</h2>
                <p className="text-[#ffffff8f] text-justify">Gain insights from industry experts through our informative workshops and panel discussions. Learn from the best and stay up-to-date with the latest trends.</p>
            </div>
            <div className="flex flex-col cardstyle items-center justify-center p-5">
                <h2 className="text-2xl font-bold text-[#ffffffde]">Custom Event Planning</h2>
                <p className="text-[#ffffff8f] text-justify">Have a unique idea in mind? We specialize in custom event planning, tailoring experiences to your specific vision and requirements.</p>
            </div>
            
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
