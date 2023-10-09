import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Authinfo } from "../Sharedcomponent/Authprovider";
import {EffectCoverflow, Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow"


const Client = () => {
  const { client } = useContext(Authinfo);
  console.log(client);
  return (
    <Swiper
    effect={'coverflow'}
    grabCursor={true}
    
    
    slidesPerView={'auto'}
      
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      coverflowEffect={
        {
          rotate: 0,
          stretch: 0,
          depth: 800,
          modifier: 2.5
        }
      }
      navigation={true}
      modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {client.map((data) => (
        <SwiperSlide className="relative" key={data.id}>
          <div className="max-w-sm md:max-w-2xl mx-auto rounded-md h-96 space-y-3 bg-slate-500 p-10">
            <div className=" flex items-center gap-5">
            <img src={data.img} className="w-16 rounded-full h-16" alt="" />
            <div>
            <h1 className="text-2xl">{data.name}</h1>
            <p>{data.date}</p>
            </div>
            </div>
            <p className="text-justify">{data.review}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Client;
