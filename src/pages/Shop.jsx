import { useEffect, useState } from "react"
import Header from "../components/Header"
import Card from "../components/Card";
import '../assets/Shop.css'

function Shop(){
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(res=>setProducts(res))
            .catch(err=>console.err(err))

    }, [])

    useEffect(() => {
        console.log(products);
    }, [products])

    return (
        <>
            <Header />
            <h1 className="shop-title">Shop</h1>
            <div className="shop">
                {products.map((item) => (
                    <Card key={item.id} product={item} />
                ))}
            </div>
        </>
    )
}

export default Shop