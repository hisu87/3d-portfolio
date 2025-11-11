/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constans";

// Lazy Ball component that only renders when visible
const LazyBall = ({ technology }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div ref={ref} className="w-28 h-28">
      {isVisible ? (
        <BallCanvas icon={technology.icon} />
      ) : (
        <div className="w-full h-full bg-gray-800 rounded-lg" />
      )}
    </div>
  );
};

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <LazyBall key={technology.name} technology={technology} />
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
