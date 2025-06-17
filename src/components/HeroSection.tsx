import { useState, useEffect } from 'react';


const HeroSection = () => {
  const [showSvg1, setShowSvg1] = useState(false);
  const [showSvg2, setShowSvg2] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    // Step 1: Show SVG 1 immediately
    const timer3 = setTimeout(() => {
      setShowSvg1(true);
    }, 800);
    // setShowSvg1(true);

    // Step 2: After 3 seconds, show SVG 2
    const timer1 = setTimeout(() => {
      setShowSvg2(true);
    }, 1200);

    // Step 3: After 6 seconds, hide both
    // const timer2 = setTimeout(() => {
    //   setShowSvg1(false);
    //   setShowSvg2(false);
    // }, 2500);

    const collapsedtimer = setTimeout(() => {
      setCollapsed(true);
    }, 1900);

    return () => {
      clearTimeout(timer3);
      clearTimeout(timer1);
      clearTimeout(collapsedtimer);
      // clearTimeout(timer2);
    };
  }, []);
  return (
<div className="hero_container">

    <div className="hero-grid">
      <div className="hero-text ">
        <h1 className="font-display relative">
          <div className="hero-logo-wrapper hero-logo_svg" style={{ 
            // zIndex:"1",
            opacity: collapsed ? 0 : 1,
            transition: 'opacity 0.5s ease 0.3s',
             padding: "49px 0px 0px 43px" }}>
          <span
                className="block-anim"
                style={{
                  transition: 'opacity 0.5s ease 0.3s, transform 0.5s ease 0.4s',
                  transform: collapsed
                    ? 'scaleY(1) translateZ(0)'
                    : 'scaleY(0) translateZ(0)',
                }}
              ></span>
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 44 59"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="hero-logo_svg  pl-0.5 sm:pl-1 h-auto w-14 sm:w-24 xl:w-32"
              role="img"
              aria-label="Design Declares!"
      
            >
              {showSvg1 && (
                <path
                  d="M15.052,59l-15.052,0l-0,-57.705l15.052,0c8.096,0 11.705,3.925 11.705,12.722l0,31.809c0,9.112 -3.609,13.174 -11.705,13.174Zm-3.574,-10.75l1.293,-0c1.61,-0 2.284,-0.453 2.284,-3.26l0,-30.29c0,-2.874 -0.895,-3.107 -1.978,-3.107l-1.599,-0l0,36.657Z"
                  style={{ display: "block",
                
                 
                }}
                />
              )}
              {showSvg2 && (
                <path
                  d="M43.953,6.9l-6.44,36.806l-6.384,-36.813c-0.285,-3.719 2.668,-6.893 6.412,-6.893c3.748,0 6.704,3.181 6.412,6.904l0,-0.004Zm0.047,44.959c0,3.553 -2.911,6.433 -6.501,6.433c-3.59,-0 -6.501,-2.88 -6.501,-6.433c-0,-3.553 2.911,-6.434 6.501,-6.434c3.59,0 6.501,2.881 6.501,6.434Z"
                  style={{ display: "block" }}
                />
              )}
            </svg>

          </div>

          <span className="flex flex-col">
            <div className="text-reveal intro" style={{ 
            }}>
              <span
                className="block-anim"
                style={{
                
                  transform: collapsed
                    ? 'scaleY(0) translateZ(0)'
                    : 'scaleY(1) translateZ(0)',
                    transition: 'transform 0.5s ease .2s',
                }}
              ></span>
              <span className="Design">Design</span>
            </div>

            <span className="text-reveal">
              <span
                className="block-anim"
                style={{
                  transform: collapsed
                    ? 'scaleY(0) translateZ(0)'
                    : 'scaleY(1) translateZ(0)',
                    transition: 'transform 0.5s ease .3s',
                }}
              ></span>
              <span className="Declares">Declares</span>
            </span>

            <span className="text-reveal">
              <span
                className="block-anim"
                style={{
                  transform: collapsed
                    ? 'scaleY(0) translateZ(0)'
                    : 'scaleY(1) translateZ(0)',
                    transition: 'transform 0.5s ease .5s',
                }}
              ></span>
              <span className="UK brand-red">UK</span>
            </span>
          </span>
        </h1>
      </div>

      <div className="hero-description">
        <div style={{ opacity: 1, transform: "none" }}>
          <p className=" ">
            Design Declares is a growing group of designers, design studios, agencies and
            institutions here to declare a climate and ecological emergency. As part of the global
            declaration movement, we commit to harnessing the tools of our industry to reimagine,
            rebuild and heal our world.
          </p>
        </div>
      </div>
    </div>

    </div>
  );
};

export default HeroSection;
