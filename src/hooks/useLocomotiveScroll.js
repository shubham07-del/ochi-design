import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const useLocomotiveScroll = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1,        // scroll speed
      lerp: 0.05,           // linear interpolation (smoothness)
    });

    return () => {
      if (scroll) scroll.destroy(); // cleanup on unmount
    };
  }, []);

  return scrollRef;
};

export default useLocomotiveScroll;
