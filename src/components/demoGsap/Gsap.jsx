import React from "react";
import { useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import './gsap.css'


const Gsap = () => {
  const [valueX, setValueX] = useState(0);
  const [valueY, setValueY] = useState(0);

  useLayoutEffect(() => {
    gsap.to(".box", {
      rotation: 360,
      x: valueX,
      y: valueY,
    });
  }, [valueX, valueY]);
    
  return (
    <>
          <div className="box">You are at value {valueX} {valueY}</div>
      <button onClick={(e) => {
          setValueX(e.clientX);
          setValueY(e.clientY);
        }}
      >
        Click
      </button>
    </>
  );
};

export default Gsap;
