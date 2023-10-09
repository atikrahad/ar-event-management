import { useNavigate } from 'react-router-dom';
import './Event.css'
import PropTypes from 'prop-types';
const Event = ({ data }) => {
  const {img, title, price,description} = data;
  const navigate = useNavigate()
  const handleDetailsCliuck = data => {
        navigate("/eventdetails", {state: data})
  }
  return (
    <div>
      
      <div  className="card cardstyle bg-transparent shadow-xl">
        <figure className="p-5 relative">
          <img
            src={img}
            alt=""
            className="w-[100%] h-56"
          />
          <h2 className="card-title absolute bottom-0 left-0 m-6 py-1 px-2 rounded text-[white] opacity-70 bg-black">{price}</h2>
        </figure>
        <div className="px-5 space-y-3 pb-5 ">
          <h2 className="card-title text-[#ffffffe5]">{title}</h2>
          <div className='h-[116px] overflow-hidden'>
          <p className='text-[#ffffff88] overflow-hidden text-justify text-ellipsis'>{description}</p>
          </div>
          <div className="card-actions">
            <button onClick={()=>handleDetailsCliuck(data)} className="py-1 px-3 rounded border-none bg-gradient-to-r from-red-500 font-bold to-cyan-400">Read More</button>
          </div>
        </div>
      </div>

    </div>
  );
};
Event.propTypes = {
  data: PropTypes.array.isRequired
}
export default Event;
