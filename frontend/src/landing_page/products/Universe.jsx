import React from "react";

function Universe() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 text-center">
      {/* 🔹 Heading Section */}
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-medium text-gray-800 mb-3">
          The Zerodha Universe
        </h2>
        <p className="text-gray-500 text-sm md:text-base leading-relaxed">
          Extend your trading and investment experience even further with our
          partner platforms.
        </p>
      </div>

      {/* 🔹 Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 place-items-center">
        {/* Zerodha Fund House */}
        <div>
          <a
            href="https://www.zerodhafundhouse.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/media/zerodhaFundhouse.png"
              alt="Zerodha Fund House"
              className="h-12 mx-auto mb-4 hover:scale-105 transition-transform duration-200"
            />
          </a>
          <p className="text-gray-500 text-sm leading-relaxed">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>

        {/* Sensibull */}
        <div>
          <a href="https://sensibull.com/" target="_blank" rel="noreferrer">
            <img
              src="/media/sensibullLogo.svg"
              alt="Sensibull"
              className="h-12 mx-auto mb-4 hover:scale-105 transition-transform duration-200"
            />
          </a>
          <p className="text-gray-500 text-sm leading-relaxed">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>

        {/* Tijori */}
        <div>
          <a href="https://tijorifinance.com/" target="_blank" rel="noreferrer">
            <img
              src="/media/tijori.svg"
              alt="Tijori"
              className="h-12 mx-auto mb-4 hover:scale-105 transition-transform duration-200"
            />
          </a>
          <p className="text-gray-500 text-sm leading-relaxed">
            Investment research platform offering detailed insights on stocks,
            sectors, supply chains, and more.
          </p>
        </div>

        {/* Streak */}
        <div>
          <a href="https://streak.tech" target="_blank" rel="noreferrer">
            <img
              src="/media/streakLogo.png"
              alt="Streak"
              className="h-12 mx-auto mb-4 hover:scale-105 transition-transform duration-200"
            />
          </a>
          <p className="text-gray-500 text-sm leading-relaxed">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>

        {/* Smallcase */}
        <div>
          <a href="https://www.smallcase.com/" target="_blank" rel="noreferrer">
            <img
              src="/media/smallcaseLogo.png"
              alt="Smallcase"
              className="h-12 mx-auto mb-4 hover:scale-105 transition-transform duration-200"
            />
          </a>
          <p className="text-gray-500 text-sm leading-relaxed">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>

        {/* Ditto */}
        <div>
          <a href="https://joinditto.in/" target="_blank" rel="noreferrer">
            <img
              src="/media/dittoLogo.png"
              alt="Ditto"
              className="h-12 mx-auto mb-4 hover:scale-105 transition-transform duration-200"
            />
          </a>
          <p className="text-gray-500 text-sm leading-relaxed">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
      </div>
      <div className=" mt-10 flex justify-center">
        <button className=" py-4 px-4 bg-sky-600 hover:bg-zinc-950 text-white text-xl leading-[0.8] rounded-sm shadow-md transition-all duration-200 font-medium">
          Sign up for free
        </button>
      </div>
    </section>
  );
}

export default Universe;
