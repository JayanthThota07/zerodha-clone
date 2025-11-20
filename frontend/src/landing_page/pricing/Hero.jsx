import React from 'react'

function Hero() {
     return (
        <>
    <section className="max-w-6xl mx-auto px-6 py-20  leading-relaxed">
      {/* Top Heading */}
      <div className="text-center mb-20 pt-[50px] pb-[100px]">
       
        <h1 className="text-3xl md:text-4xl leading-[1.6]  text-[#424242]">
          Charges
        </h1>
        <h3 className='mt-2 text-lg text-[#9b9b9b]'>List of all charges and taxes</h3>
      </div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-16 pt-[25px]">

  {/* First Column */}
  <div className="text-center space-y-6">
    <img className="w-[200px] mx-auto" src="/media/pricing0.svg" />
    <h2 className="text-2xl leading-[1.6] text-[#424242]">
      Free equity delivery
    </h2>
    <p className="text-base text-[#666] leading-[1.8]">
      All equity delivery investments (NSE, BSE), are absolutely free — ₹0 brokerage.
    </p>
  </div>

  {/* Second Column */}
  <div className="text-center space-y-6">
    <img className="w-[200px] mx-auto" src="/media/other-trades.svg" />
    <h2 className="text-2xl leading-[1.6] text-[#424242]">
      Intraday and F&O trades
    </h2>
    <p className="text-base text-[#666] leading-[1.8]">
      Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
    </p>
  </div>

  {/* Third Column */}
  <div className="text-center space-y-6">
    <img className="w-[200px] mx-auto" src="/media/pricingEquity.svg" />
    <h2 className="text-2xl leading-[1.6] text-[#424242]">
      Free direct MF
    </h2>
    <p className="text-base text-[#666] leading-[1.8]">
      All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges.
    </p>
  </div>

</div>

      
    </section>
    
   </>
  );
}

export default Hero;