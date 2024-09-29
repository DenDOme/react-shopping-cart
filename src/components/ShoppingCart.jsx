import { useState } from 'react'
import cartImg from '../assets/cart.svg'
import { useCart } from '../context/CartContext';

function ShoppingCart(){
    const { cart } = useCart();
    const [mode,setMode] = useState(false);

    const handleModeChange = () => {
        setMode(!mode);
    }

    return (
        <>  
            <button onClick={handleModeChange}>
                <img src={cartImg} alt="Cart" />
            </button>
            {mode && (
                <div>
                    <button onClick={handleModeChange}>Close</button>
                    <h2>Your Cart</h2>
                    {cart.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        <ul>
                            {cart.map((item, index) => (
                                <li key={index}>{item.title} - ${item.price.toFixed(2)}</li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </>
    )
}

export default ShoppingCart