import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Navber from "../Components/Navber";
import { getStored, setStoredData } from "../Utilitis/lcstored";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const EventDetails = () => {
  
  const { state } = useLocation();
  const {img,id, description, title, price} = state;
  console.log(id);

  const getdata = getStored()
  const navigate = useNavigate()
  const finded = getdata.find(data => data === id);
  const handlSekectevent =() => {
    
    if(!finded){
        setStoredData(id);
        navigate('/selectedevent')
      }
      else{
        toast.warn('Already selected', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      }
      
  }
  return (
    <div className="bg-[#0d1b28]">
      <Navber></Navber>
      <div className="grid max-w-6xl mx-auto grid-cols-1">
        <div className="">

          <div className="card w-full  bg-base-100 rounded shadow-xl">
            <figure>
              <img className="w-full h-60 md:h-auto rounded"
                src={img}
                alt=""
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{title}
                
              </h2>
              <div className="">
              <p className="text-justify">{description}</p>
              </div>
              <div className="card-actions justify-stard">
                <div className="bg-gradient-to-r from-red-500 to-cyan-400 text-white rounded py-2 px-3">Booking Price: {price}</div>
                <button onClick={handlSekectevent} className="bg-gradient-to-r from-red-500 to-cyan-400 text-white rounded py-2 px-3 font-bold">Book The Event</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1"></div>
      </div>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </div>
  );
};

export default EventDetails;
