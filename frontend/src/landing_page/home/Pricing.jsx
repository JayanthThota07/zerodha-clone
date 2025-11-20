import React from "react";

function Pricing() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-10">
        {/* Left Section */}
        <div className="md:col-span-5 space-y-5">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Unbeatable pricing
          </h1>
          <p className="text-gray-600 leading-relaxed">
            We pioneered the concept of discount broking and price transparency in
            India. Flat fees and no hidden charges.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
          >
            See Pricing <i className="fa fa-long-arrow-right"></i>
          </a>
        </div>

        {/* Spacer for layout symmetry */}
        <div className="hidden md:block md:col-span-1"></div>

        {/* Right Section */}
        <div className="md:col-span-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
            {/* Box 1 */}
            <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">₹ 0</h1>
              <p className="text-gray-600 text-sm leading-relaxed">
                Free equity delivery and <br />
                direct mutual funds
              </p>
            </div>

            {/* Box 2 */}
            <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">₹ 20</h1>
              <p className="text-gray-600 text-sm leading-relaxed">
                Intraday and F&O
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
