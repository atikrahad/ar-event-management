import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Authinfo } from "../Sharedcomponent/Authprovider";
import { EffectCoverflow, Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow"
import { useNavigate } from "react-router-dom";

const Slideservice = () => {
  const { data } = useContext(Authinfo);
  console.log(data);
  const navigate = useNavigate()
  const handleDetails = (data) => {
      navigate("/eventdetails", {state: data})
  };

  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      
      
      slidesPerView={'auto'}
      centeredSlides={true}
      loop={true}
      coverflowEffect={
        {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5
        }
      }
      
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[ EffectCoverflow,Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {data.map((data) => (
        <SwiperSlide className="relative lg:max-w-4xl" key={data.id}>
          <div className="absolute left-[10%] opacity-50 rounded-md bg-slate-600 flex flex-col justify-center items-center top-[10%] bottom-[10%] right-[10%]"></div>
          <div className="absolute space-y-3 top-[10%] left-[10%] right-[10%] bottom-[10%] flex flex-col items-center justify-center text-center">
            <h1 className="text-lg lg:text-3xl z- text-center  text-black font-bold">
              {data.title}
            </h1>
            <button
              onClick={() => handleDetails(data)}
              className="btn rounded-md bg-gradient-to-r from-red-500  to-cyan-400 border-none shadow-md font-bold"
            >
              View Details
            </button>
          </div>
          <img
            className="h-[70vh] w-full rounded-md "
            src={data.img}
            alt=""
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slideservice;
