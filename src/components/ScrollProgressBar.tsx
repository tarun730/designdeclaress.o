import { useEffect, useState } from "react";

const ScrollProgressBar = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / docHeight;
      setScroll(scrollFraction);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="progress-container ">
      <div
        className="progress-bar"
        style={{
          transform: `scaleX(${scroll}) translateZ(0px)`,
          width: "100%", // required for scaleX to work
        }}
      />
    </div>
  );
};

export default ScrollProgressBar;
