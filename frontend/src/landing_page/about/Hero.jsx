import React from 'react'

function Hero() {
     return (
    <section className="max-w-6xl mx-auto px-6 py-20 text-[#424242] leading-relaxed">
      {/* Top Heading */}
      <div className="text-center mb-16">
        <h2 className="text-[22px] md:text-[26px] font-normal text-[#3b3b3b]">
          We pioneered the discount broking model in India.
          <br/>
          
          Now, we are breaking ground with our technology.
        </h2>
      </div>

      {/* Divider Line */}
      <hr className="border-t border-gray-400 mb-16" />

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-[16px]">
        {/* Left Column */}
        <div className="space-y-6 ">
          <p className='text-sm/7'>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and “Rodha”, the Sanskrit word for
            barrier.
          </p>

          <p className='text-sm/7'>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>

          <p className='text-sm/7'>
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <p className='text-sm/7'>
            In addition, we run a number of popular open online educational and 
            community  initiatives to empower retail traders and investors.
          </p>

          <p className='text-sm/7'>
            <a
              href="#"
              className="text-[#387ed1] hover:underline font-normal"
            >
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>

          <p className='text-sm/7'>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our{" "}
            <a
              href="#"
              className="text-[#387ed1] hover:underline font-normal"
            >
              blog
            </a>{" "}
            or see what the media is{" "}
            <a
              href="#"
              className="text-[#387ed1] hover:underline font-normal"
            >
              saying about us
            </a>{" "}
            or learn more about our business and product{" "}
            <a
              href="#"
              className="text-[#387ed1] hover:underline font-normal"
            >
              philosophies
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;