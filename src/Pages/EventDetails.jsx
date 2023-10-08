import { useLocation } from "react-router-dom";
import Footer from "../Components/Footer";
import Navber from "../Components/Navber";

const EventDetails = () => {
  const { state } = useLocation();
  const {img, description, title, price} = state;
  console.log(state);
  return (
    <div className="bg-[#0d1b28]">
      <Navber></Navber>
      <div className="grid max-w-6xl mx-auto grid-cols-3">
        <div className="col-span-2">

          <div className="card w-full bg-base-100 shadow-xl">
            <figure>
              <img
                src={img}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{title}
                
              </h2>
              <p>{description}</p>
              <div className="card-actions justify-stard">
                <div className="badge badge-outline">{price}</div>
                <div className="badge badge-outline">Book The Event</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1"></div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default EventDetails;
