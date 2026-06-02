import { motion } from "framer-motion";
import React from "react";
import { IoIosArrowRoundUp } from "react-icons/io";

const Hero = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.3"
      className="w-full bg-zinc-800 pt-1 flex flex-col md:h-screen md:justify-between"
    >
      <div className="textStructure mt-24 md:mt-34 px-5 sm:px-10 md:px-16">
        {["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map((elem, idx) => {
          return (
            <div key={idx} className="masker overflow-hidden">
              <div className="w-fit flex items-end">
                {idx === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "clamp(50px, 8vw, 120px)" }}
                    transition={{
                      ease: [0.76, 0, 0.24, 1],
                      duration: 1,
                      delay: 1,
                    }}
                    className="pointer-events-none rounded bg-green-500 overflow-hidden"
                    style={{ height: "clamp(30px, 5vw, 76px)" }}
                  >
                    <img
                      className="w-full h-full object-fill"
                      src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                      alt=""
                    />
                  </motion.div>
                )}
                <h1 className="hero-text text-[11vw] sm:text-[8.5vw] md:text-[6.5vw] leading-none font-semibold">
                  {elem}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t-2 mt-6 md:mt-0 border-zinc-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-5 sm:px-10 md:px-18 py-4">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
          {[
            "Presentation and storytelling agency",
            "For innovation teams and global brands",
          ].map(function (elem, idx) {
            return (
              <h3 key={idx} className="text-sm sm:text-base">
                {elem}
              </h3>
            );
          })}
        </div>
        <div className="parent flex items-center self-start sm:self-auto">
          <h1 className="start uppercase px-3 py-1 text-sm rounded-full border">
            Start the project
          </h1>
          <div className="start px-2 py-2 ml-2 rotate-45 rounded-full border">
            <IoIosArrowRoundUp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
