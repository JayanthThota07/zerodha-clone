import React from "react";
import { Search } from "lucide-react"

function Hero() {
  return (
    <>
      <section className="w-full bg-gray-100 text-[#424242] ">
        <div className="px-6 py-6 m-auto max-w-7xl md:py-10">
          <div className="flex flex-wrap pb-5 md:pd-8 gap-3 justify-between item-center">
            <p className="pr-2 md:text-4xl text-xl sm:text-2xl font-semibold ">
              <a href="#">Support Portal</a>
            </p>
            <a
              href="#"
              className="flex py-1.5 px-2 md:py-2  md:text-base hover:bg-[#424242] bg-[#387ed1] text-white text-sm rounded-sm gap-1.5 items-center shrink-0 outline-offset-2"
            >
              <span className="font-medium">My ticket</span>
            </a>
          </div>
          <div
            className="relative flex px-3 md:px-6 md:gap-3 border border-z-border-blue h-[60px] 
            has-focus-visible:shadow-[1px_1px_6px_#E0E7EF] 
            bg-white rounded-sm gap-2 items-center transition-shadow outline-gray-50 outline-offset-2"
          >
          <Search className="hidden md:block w-5 h-5 text-z-gray" />

            <input
              className="pl-1 py-4 w-full border-0 outline-none"
              type="search"
              placeholder="Eg: How do I open my account, How do I activate F&O..."
            />
          </div>
        </div>
      </section>
      
    </>
  );
}
export default Hero;
