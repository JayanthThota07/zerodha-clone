import React from "react";

function Team() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 text-[#424242] leading-relaxed">
      {/* Heading */}
      <h2 className="text-center text-2xl md:text-3xl font-medium mb-12">
        People
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column - Image and Name */}
        <div className="flex flex-col items-center">
          <img
            src="/media/nithinKamath.jpg"
            alt="Nithin Kamath"
            className="w-64 h-64 object-cover rounded-full mb-6 shadow-sm"
          />
          <h5 className="text-lg font-medium">Nithin Kamath</h5>
          <p className="text-sm text-gray-500 mt-1">Founder, CEO</p>
        </div>

        {/* Right Column - Description */}
        <div className="text-[17px] space-y-6">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade-long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC)
            and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>

          <p className="text-[16px]">
            Connect on{" "}
            <a
              href="https://nithinkamath.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#387ed1] hover:underline font-medium"
            >
              Homepage
            </a>{" "}
            /{" "}
            <a
              href="https://tradingqna.com/u/nithin/summary"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#387ed1] hover:underline font-medium"
            >
              TradingQnA
            </a>{" "}
            /{" "}
            <a
              href="https://twitter.com/Nithin0dha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#387ed1] hover:underline font-medium"
            >
              Twitter
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Team;
