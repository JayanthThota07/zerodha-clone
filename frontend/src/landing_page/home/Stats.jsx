import React from "react";

function Stats() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div className="space-y-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Trust with confidence
          </h1>

          {/* Item 1 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Customer-first always
            </h2>
            <p className="text-gray-600 leading-relaxed">
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
              of equity investments, making us India’s largest broker;
              contributing to 15% of daily retail exchange volumes in India.
            </p>
          </div>

          {/* Item 2 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              No spam or gimmicks
            </h2>
            <p className="text-gray-600 leading-relaxed">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High-quality apps that you use at your pace, the way you like.
              Our philosophies.
            </p>
          </div>

          {/* Item 3 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              The Zerodha universe
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          </div>

          {/* Item 4 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Do better with money
            </h2>
            <p className="text-gray-600 leading-relaxed">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center space-y-6">
          <img
            src="/media/ecosystem.png"
            alt="Zerodha Ecosystem"
            className="w-full rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
          />

          {/* CTA Links */}
          <div className="flex flex-wrap justify-center gap-6 text-indigo-600 font-medium">
            <a
              href="#"
              className="flex items-center gap-2 hover:text-indigo-700 transition-colors"
            >
              Explore our products
              <i className="fa fa-long-arrow-right"></i>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 hover:text-indigo-700 transition-colors"
            >
              Try Kite demo
              <i className="fa fa-long-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
