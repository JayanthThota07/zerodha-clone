import React from "react";

function Education() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src="/media/education.svg"
            alt="Education"
            className="w-full max-w-md"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Free and open market education
          </h1>

          <p className="text-gray-600 leading-relaxed">
            <span className="font-medium text-gray-800">Varsity</span>, the
            largest online stock market education book in the world covering
            everything from the basics to advanced trading.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
          >
            Varsity <i className="fa fa-long-arrow-right"></i>
          </a>

          <p className="text-gray-600 leading-relaxed mt-8">
            <span className="font-medium text-gray-800">TradingQ&A</span>, the
            most active trading and investment community in India for all your
            market-related queries.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
          >
            TradingQ&A <i className="fa fa-long-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Education;
