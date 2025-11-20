import React from "react";

function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 text-center">
      {/* Hero Image */}
      <div className="flex justify-center mb-10">
        <img
          src="/media/homeHero.png"
          alt="Zerodha Hero"
          className="w-full max-w-2xl"
        />
      </div>

      {/* Hero Content */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Invest in Everything
      </h1>

      <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-10">
        Online platform to invest in stocks, derivatives, mutual funds, ETFs,
        bonds, and more.
      </p>

      {/* CTA Button */}
      <div className="flex justify-center">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold py-3 px-10 rounded-lg shadow-md transition-all duration-200">
          Signup Now
        </button>
      </div>
    </section>
  );
}

export default Hero;
