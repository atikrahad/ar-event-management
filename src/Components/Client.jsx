import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Authinfo } from "../Sharedcomponent/Authprovider";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const Client = () => {
  const { client } = useContext(Authinfo);
  console.log(client);
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {client.map((data) => (
        <SwiperSlide className="relative" key={data.id}>
          <div className="w-full rounded-md h-96 space-y-3 bg-slate-500 p-10">
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
