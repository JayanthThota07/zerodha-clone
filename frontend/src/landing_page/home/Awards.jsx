import React from "react";
import { motion } from "framer-motion";

function Awards() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left Image Animation */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-start"
        >
          <img
            src="/media/largestbroker.svg"
            alt="Largest Broker Award"
            className="w-full max-w-sm md:max-w-md hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* Right Text Animation */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Largest stock broker in India
          </h1>
          <p className="text-gray-600 mb-6 leading-relaxed">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          {/* Lists */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li>Futures and Options</li>
              <li>Commodity derivatives</li>
              <li>Currency derivatives</li>
            </ul>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li>Stocks & IPOs</li>
              <li>Direct mutual funds</li>
              <li>Bonds and Govt. Securities</li>
            </ul>
          </div>

          {/* Press Logos */}
          <motion.img
            src="/media/pressLogos.png"
            alt="Press Logos"
            className="w-[90%] md:w-[80%] opacity-90 hover:opacity-100 transition duration-300"
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Awards;
