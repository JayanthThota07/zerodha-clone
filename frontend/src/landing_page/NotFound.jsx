
import React from "react";
import { motion } from "framer-motion";

function NotFound() {

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden relative">
      {/* Glowing Orb Background */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-indigo-600 blur-3xl opacity-20"
        initial={{ scale: 0 }}
        animate={{ scale: [0.8, 1.1, 1], opacity: [0.1, 0.3, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Main 404 Text */}
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-[10rem] font-extrabold tracking-widest text-indigo-500 drop-shadow-[0_0_25px_#6366f1]"
      >
        404
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-2xl font-light text-gray-300 mb-10"
      >
        Oops! The page you're looking for doesn't exist.
      </motion.p>

      {/* Return Button */}
      <motion.a
        href="/"
        whileHover={{
          scale: 1.1,
          textShadow: "0px 0px 10px rgba(99,102,241,0.8)",
          boxShadow: "0px 0px 20px rgba(99,102,241,0.5)",
        }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-3 bg-indigo-600 rounded-full text-lg font-semibold shadow-lg hover:bg-indigo-700 transition"
      >
        Take Me Home
      </motion.a>

      {/* Floating Text Animation */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute bottom-20 text-indigo-400 opacity-40 text-sm tracking-widest"
      >
        LOST IN SPACE
      </motion.div>
    </div>
  );
}

export default NotFound;
