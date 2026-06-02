import React, { useEffect, useState } from "react";

const Eyes = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMove = (clientX, clientY) => {
      let deltaX = clientX - window.innerWidth / 2;
      let deltaY = clientY - window.innerHeight / 2;
      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    const onMouseMove = (e) => handleMove(e.clientX, e.clientY);
    const onTouchMove = (e) => {
      if (e.touches[0]) {
        handleMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  const Eye = () => (
    <div
      className="flex items-center justify-center bg-zinc-100 rounded-full"
      style={{ width: "clamp(100px, 13vw, 200px)", height: "clamp(100px, 13vw, 200px)" }}
    >
      <div className="w-2/3 h-2/3 relative flex items-center justify-center bg-[#212121] rounded-full">
        <h1 className="text-[clamp(10px,1.2vw,20px)]">Play</h1>
        <div
          style={{ transform: `rotate(${rotate}deg)` }}
          className="line absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] w-[96%] h-[clamp(24px,3vw,40px)]"
        >
          <div
            className="rounded-full bg-white"
            style={{
              width: "clamp(16px, 2vw, 24px)",
              height: "clamp(16px, 2vw, 24px)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-.6"
        className="relative w-full h-full bg-cover bg-center bg-[url(https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg)]"
      >
        <div className="absolute flex items-center justify-center gap-4 sm:gap-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Eye />
          <Eye />
        </div>
      </div>
    </div>
  );
};

export default Eyes;
