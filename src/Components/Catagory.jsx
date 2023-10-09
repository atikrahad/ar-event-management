import { Link } from "react-router-dom";
import PropTypes from "prop-types"


const Catagory = ({item}) => {
    const {title} = item;
    return (
        <Link>
            {title}
        </Link>
    );
};
Catagory.propTypes = {
    item: PropTypes.object.isRequired
}
export default Catagory;