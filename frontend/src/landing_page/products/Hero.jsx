import React from "react";

function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 text-[#424242] leading-relaxed">
      {/* Top Heading */}
      <div className="text-center mb-20">
        <h1 className="text-[22px] md:text-[26px] font-medium text-[#3b3b3b] mb-2">
          Zerodha Products
        </h1>
        <p className="text-gray-600">
          Sleek, modern, and intuitive trading platforms
        </p>
        <p className="text-gray-600">
          Check out our{" "}
          <a
            href="#"
            className="text-[#387ed1] hover:text-blue-700 transition-colors"
          >
            investment offerings{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </p>
      </div>

      {/* Divider Line */}
      <hr className="border-t border-gray-400 mt-16" />

     
    </section>
  );
}

export default Hero;
