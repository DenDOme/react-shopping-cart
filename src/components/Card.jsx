import PropTypes from 'prop-types';
import '../assets/Card.css'
import { Link } from 'react-router-dom';

function Card({product}){

    return(
        <>
            <div className="card-item">
                <div className="card-img">
                    <img src={product.image} alt="" />
                </div>
                <div className="card-text">
                    <p>{product.title}</p>
                    <p>{product.price} $</p>
                    <p>{product.category}</p>
                    <Link to={`/product/${product.id}`}>Details</Link>
                </div>
            </div>
        </>
    )

}

Card.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        rating: PropTypes.shape({
            count: PropTypes.number.isRequired,
            rate: PropTypes.number.isRequired,
        }).isRequired, 
    }).isRequired,
};


export default Card