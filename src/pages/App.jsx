// import { useState } from 'react'
import { Link } from 'react-router-dom'
import "../assets/App.css"
import Header from '../components/Header'

function App() {

  return (
    <>
      <Header /> 
      <main className='main'>
        <div className="main-left">  
          <h1 className="main-text">
            <p>Elevate Your Wardrobe with Our Unique Styles</p>
            <p>— Fashion That Speaks to You!</p>
          </h1>
          <Link className='link' to="/shop">Shop</Link>
        </div>
        <img src="/main.jpg" alt="" className="main-img" />
      </main>
    </>
  )
}

export default App
