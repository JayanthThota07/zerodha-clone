import React from 'react'
import RightSection from './RightSection'
import Universe from './Universe'   
import LeftSection from './LeftSection' 
import Hero from './Hero'
function ProductPage(){
    return(
        <div>
            <Hero />
            
        {/* Kite */}
      <LeftSection
        imageURL="media/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="https://kite-demo.zerodha.com"
        learnMore="/products/kite"
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3"
        appStore="https://apps.apple.com/in/app/kite-zerodha/id1449453802"
      />

      {/* Console */}
      <RightSection
        imageURL="media/console.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore="/products/console"
      />

      {/* Coin */}
      <LeftSection
        imageURL="media/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="https://coin.zerodha.com"
        learnMore="/products/coin"
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.coin"
        appStore="https://apps.apple.com/in/app/coin-zerodha/id1449453802"
      />

      {/* Kite Connect */}
      <RightSection
        imageURL="media/kiteconnect.png"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our simple HTTP/JSON APIs. Startups can build their own investment apps and showcase them to our client base."
        learnMore="/products/kiteconnect"
      />

      {/* Varsity */}
      <LeftSection
        imageURL="media/varsity.png"
        productName="Varsity Mobile"
        productDescription="An easy-to-grasp collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        learnMore="/products/varsity"
      />
      <p className="text-center mt-5 fs-5">
        Want to know more about our technology stack? Check out the{" "}
        <a href="#">Zerodha.tech</a> blog.
      </p>


            <Universe />

        </div>
    );
}
export default ProductPage; 