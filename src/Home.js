import React from "react";
import "./Home.css";
import Product from "./Product";



import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";





function Home() {
    const items = [
        <img
            className="home__image"
            src="https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg"
        />,
        <img
            className="home__image "
            src="https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg"
            alt="banner"
        />,
        <img
            className="home__image "
            src="https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg"
            alt="banner"
        />,
        <img
            className="home__image"
            src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg"
            alt="banner"
        />,
        <img
            className="home__image "
            src="https://m.media-amazon.com/images/I/71+LRyFtrPL._SX3000_.jpg"
            alt="banner"
        />,
        
        <img
            className="home__image"
            src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg"
        />,
    ];

    return (
        <div className="home">
            <div className="home__container">
                {/* <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                /> */}
                <AliceCarousel
                    autoPlay
                    autoPlayStrategy="none"
                    autoPlayInterval={4500}
                    animationDuration={4500}
                    animationType="slideout"
                    infinite
                    touchTracking={false}
                    disableDotsControls
                    disableButtonsControls
                    items={items}
                />
                <div className="home__row1">
                    <Product
                        id="13233456"
                        title="Apple iMac 27-inch Desktop Computer MK482LL/A - 3.2GHz Intel Core i5, 32GB RAM, 1TB HDD - Silver (Renewed)"
                        price={1170.0}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/717q8QReNaL._AC_UY218_.jpg"
                    />
                    <Product
                        id="73243547"
                        title="Gaming Headset for PS4 PS5 Xbox One Switch PC with Noise Canceling Mic, Deep Bass Stereo Sound (Black Red)-1"
                        price={24.99}
                        rating={3}
                        image="https://m.media-amazon.com/images/I/71+sRfbXsSL._AC_UL320_.jpg"
                    />
                    <Product
                        id="3254354345"
                        title="Apple iPhone 14 Pro Max, 512GB, Silver - Unlocked (Renewed)"
                        price={1500}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/51UnpqyKrEL._AC_SX679_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="74648386"
                        title="Furuyal Men's Suits 3 Piece Slim Fit Suit Set,Two Button Wedding Business Tuxedo Solid Blazer Jacket Vest Pants with Tie"
                        price={83.85}
                        rating={3}
                        image="https://m.media-amazon.com/images/I/612foPdM-uL._AC_UX522_.jpg"
                    />
                    <Product
                        id="49538094"
                        title="Tablet 10.1 inch Android 11 Tablet 2023 Latest Update Octa-Core Processor with 64GB Storage, Dual 13MP+5MP Camera, WiFi, Bluetooth, GPS, 128GB Expand Support, IPS Full HD Display (Black)"
                        price={159.99}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/71Mt4JAZQtL._AC_SX425_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="4903850"
                        title="Apple Watch Series 5 (GPS, 44MM) - Space Gray Aluminum Case with Black Sport Band (Renewed)"
                        price={198.0}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/71qp5fCNp7L._AC_SY355_.jpg"
                    />
                    <Product
                        id="2345683246"
                        title="HOMPOW Projector, Native 1080P Full HD Bluetooth Projector with Speaker, 9500 Lumens Outdoor Portable Movie Mini Projector Compatible with Laptop, Smartphone, TV Stick, Xbox, PS5"
                        price={129.99}
                        rating={3}
                        image="https://m.media-amazon.com/images/I/81TMBn5itcL._AC_UL320_.jpg"
                    />
                    <Product
                        id="12321341"
                        title="STUDIO NOD Earbuds, FREENOD True Wireless Earbuds for iphone, Earbud In-Ear Headphones - Studionod Pure Bass Sound, Bluetooth, Wireless Calls, Music, Background Noise Cancellation During Calls, orange"
                        price={69.96}
                        rating={3}
                        image="https://m.media-amazon.com/images/I/61bRZjD6w7L._AC_SY355_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="90829332"
                        title="SAMSUNG Odyssey CRG Series 49-Inch Dual QHD (5120x1440) Gaming Monitor, 120Hz, Curved, QLED, HDR, Height Adjustable Stand, Radeon FreeSync (LC49RG90SSNXZA)"
                        price={499.99}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/81QEJYyspjL._AC_SL1500_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="74367467"
                        title="DESINO Gaming Desk 32 Inch PC Computer Desk, Home Office Desk Table Gamer Workstation, Simple Game Table, Black"
                        price={79.99}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/81Ze3ZDcOgL._AC_SX679_.jpg"
                    />
                    <Product
                        id="23445930"
                        title="Gylint Kobo Sage 2021 Origami Case, The Thinnest and Lightest Leather Smart Cover Case for New Kobo Sage 8'' 2021 Release with Auto Wake Sleep Feature Outer Space"
                        price={18.95}
                        rating={3}
                        image="https://m.media-amazon.com/images/I/81IaP+rC4oL._AC_SX679_.jpg"
                    />
                    <Product
                        id="143234544"
                        title="Country Heaven (Dare River Book 1)"
                        price={0.99}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/41fW1EwqrlL.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="675335567"
                        title="TOPOSH 2 in 1 Laptop, Windows 10 Home Tablet,Ram 8GB ROM 256GB SSD,11.6Inch Touch Screen,Processor Celeron N4120, Metal Body, WiFi and Bluetooth- Silver"
                        price={359.0}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/61QMvVQMfuL._AC_UY218_.jpg"
                    />
                    <Product
                        id="5477238"
                        title="Roku Streaming Stick 4K | Streaming Device 4K/HDR/Dolby Vision with Roku Voice Remote and TV Controls"
                        price={49.99}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/71tK-UqLSCL._AC_UL320_.jpg"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
