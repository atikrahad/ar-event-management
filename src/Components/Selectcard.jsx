import PropTypes from 'prop-types'

const Selectcard = ({data}) => {
  const { img, title, description } = data;
  return (
    <div>
      <div className="flex gap-3 rounded md:h-48 text-ellipsis overflow-hidden flex-col md:flex-row bg-base-100 ">
        <figure className="md:w-[30%]">
          <img 
            className="h-full rounded w-full md:w-40"
            src={img}
            alt="Movie"
          />
        </figure>
        <div className="md:w-[65%] space-y-3">
          <h2 className="card-title">{title}</h2>
          <div className="">
          <p className='pb-4 text-justify'>{description}</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

Selectcard.propTypes = {
    data: PropTypes.object.isRequired
}

export default Selectcard;
