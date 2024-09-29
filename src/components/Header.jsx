import { Link } from "react-router-dom"
import ShoppingCart from "./ShoppingCart"
import '../assets/Header.css'

function Header(){
    return (
        <>
        <header className='header'>
            <Link className='logo' to="/" >Florent</Link>
            <nav className="links">
                <Link className="header-link" to="/">home</Link>
                <Link className="header-link" to="/shop">Shop</Link>
                <ShoppingCart />
            </nav>
        </header>     
        </>
    )
}

export default Header