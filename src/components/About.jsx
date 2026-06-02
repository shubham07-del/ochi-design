import React from "react";

const About = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.2"
      className="w-full rounded-tr-2xl rounded-tl-2xl min-h-screen border-b bg-[#CDEA68] text-black"
    >
      {/* Heading */}
      <div className="px-5 sm:px-8 md:px-12 py-10 md:py-14 border-b border-zinc-800">
        <h1 className="text-[7vw] sm:text-[5.5vw] md:text-[4vw] text-black w-full md:w-[90%] leading-none md:leading-[0.95] tracking-tight">
          We craft category-defining presentations, brand identities, and
          digital experiences that drive funding, sales, and market leadership.
        </h1>
      </div>

      {/* Two-column section */}
      <div className="w-full border-b pb-16 md:pb-30 border-gray-500 px-5 sm:px-8 md:px-10 py-6 flex flex-col md:flex-row gap-8 mb-8">
        <div className="left w-full md:w-[50%]">
          <h1 className="text-black text-lg font-semibold">What you can expect:</h1>
        </div>
        <div className="right w-full md:w-[50%] flex flex-col sm:flex-row justify-between gap-6">
          <div className="right-left w-full sm:w-[60%]">
            <h1 className="mb-5 text-md w-full sm:w-[85%]">
              We don't just make slides. We shape strategy, storytelling, design
              scalable brand systems, and build presentations that make people
              say: "I want in!"
            </h1>
            <h1 className="mb-5 text-md w-full sm:w-[85%]">
              Our clients make the world go round - from deep tech, aerospace
              and robotics to music festivals and Michelin-starred restaurants.
            </h1>
            <h1 className="text-md w-full sm:w-[90%]">
              Since 2019, we've been the go-to partner for Yahoo, Medallia,
              Uber, Lexus, Salience Labs, Trawa and AllThingsGo.
            </h1>
          </div>
          <div className="right-right w-full sm:w-[30%] flex flex-col gap-2 pt-4 sm:pt-0 sm:relative sm:min-h-[160px]">
            <h1 className="sm:absolute sm:bottom-25 sm:left-6">S.</h1>
            <div className="flex flex-row sm:flex-col gap-3 sm:gap-0 sm:absolute sm:bottom-0 sm:left-6">
              {["Instagram", "Behance", "Facebook", "LinkedIn"].map(
                (elem, idx) => (
                  <a key={idx} className="hover:underline text-md" href="#">
                    {elem}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Image section */}
      <div className="about-image pb-10 flex flex-col md:flex-row w-full px-5 sm:px-8 md:px-12 gap-8">
        <div className="about-left w-full md:w-[50%] flex flex-col gap-6 justify-start">
          <h1 className="text-3xl sm:text-4xl md:text-5xl mb-3 tracking-tight">
            How we can help:
          </h1>
          <button className="px-6 py-3 md:px-8 md:py-4 flex justify-between gap-6 items-center bg-[#212121] rounded-full text-white uppercase w-fit">
            Read More
            <div className="w-2 h-2 rounded-full bg-zinc-50"></div>
          </button>
        </div>
        <div className="about-right w-full md:w-[50%] h-[50vh] md:h-[70vh] rounded-2xl overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
