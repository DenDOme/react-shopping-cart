import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import '../assets/Product.css'
import Header from "../components/Header";
import { useCart } from "../context/CartContext";

function Product(){
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { addToCart } = useCart(); 

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(res=> setProduct(res))
            .catch(err=>console.error(err))
    }, [id])

    const handleAddToCart = () => {
        addToCart(product); 
    };

    if(!product){
        return (<div>Loading...</div>)
    }

    return (
        <>
        <Header /> 
        <div className="product">
            <div className="product__img">
                <img src={product.image} alt={product.title} />
            </div>
            <div className="product__text">
                <h1 className="product__name">{product.title}</h1>
                <div className="product__category">{product.category}</div>
                <div className="product__row">
                    <div className="product__price">${product.price.toFixed(2)}</div>
                    <div className="product__rating">Rating: {product.rating.rate} ({product.rating.count} reviews)</div>
                </div>
                <div className="product__details">{product.description}</div>
                <button onClick={handleAddToCart}>Add to Cart</button> 
            </div>
        </div>
        </>
    )
}

export default Product