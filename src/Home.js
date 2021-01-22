import React from 'react'
import "./Home.css";
import Product from './Product';
function Home() {
    return (
        <div className="home">
            <div className="home__container">
            <img className="home__image"  src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
            alt=""/>
            <div className="home__row">
            
            <Product
            id="1213534354"
            title="The lean Startup"
            price={29.99}
            image="https://m.media-amazon.com/images/I/71i08qnZeDL._AC_UL320_.jpg"
            rating={1}
           />

            <Product
            id="8214514"
            title="AmazonBasics Classic Puresoft PU-Padded Mid-Back Office Computer Desk Chair with Armrest - Black"
            price={239.0}
            image="https://m.media-amazon.com/images/I/71i08qnZeDL._AC_UL320_.jpg"
            rating={1}
            />
            </div>  
            <div className="home__row">
            <Product
            id="1213"
            title="AmazonBasics Underseat Carry-On Rolling Travel Luggage Bag, 14 Inches, Grey"
            price={297.99}
            image="https://m.media-amazon.com/images/I/91qC+UYYwIL._AC_UL320_.jpg"
            rating={1}
            />
            <Product
            id="12"
            title="AmazonBasics 3 Liter Electric Deep Fryer, Stainless Steel"
            price={47.99}
            image="https://m.media-amazon.com/images/I/81LszvSQsfL._AC_UL320_.jpg"
            rating={1}
            />
            <Product
            id="145"
            title="AmazonBasics Stainless Steel Insulated Water Bottle with Spout Lid – 30-Ounce, White"
            price={15.99}
            image="https://m.media-amazon.com/images/I/61LqsPqOWDL._AC_UL320_.jpg"
            rating={3}
            />
            </div> 
            <div className="home__row">
            <Product
            id="12545"
            title="Chic Home Zarah 10 Piece Comforter Bedding..."
            price={86.14}
            image="https://m.media-amazon.com/images/I/51ixCK0RLWL._AC_UL320_.jpg"
            rating={1}
            />   

            <Product
            id="1245"
            title="Dreaming Wapiti Duvet Cover King,100% Washed..."
            price={120.09}
            image="https://m.media-amazon.com/images/I/61JRrtXVAvL._AC_UL320_.jpg"
            rating={4}
            /> 

<Product
            id="45"
            title="Dreaming Wapiti Linenspa All-Season White Down..."
            price={120.09}
            image="https://m.media-amazon.com/images/I/71uR6m9TrIL._AC_UL320_.jpg"
            rating={3}
            /> 

<Product
            id="5"
            title="Dreaming Wapiti Duvet Cover King,100% ..."
            price={120.09}
            image="https://m.media-amazon.com/images/I/61JRrtXVAvL._AC_UL320_.jpg"
            rating={4}
            /> 
            </div> 
            </div> 
        </div>
    )
}

export default Home
