import React from "react";
import "./boutonregle.css";
import { GiBigWave } from "react-icons/gi";

const BoutonRegle = (props) => {
  function changeDay(event) {
    event.preventDefault();
    props.onChange();
  }
  return (
    <div className="buttons">
      <button className="blob-btn" onClick={changeDay}>
        <GiBigWave alt="vague" />
        {"  "}La Marée Rouge {"  "}
        <GiBigWave alt="vague" />
        <span className="blob-btn__inner">
          <span className="blob-btn__blobs">
            <span className="blob-btn__blob"></span>
            <span className="blob-btn__blob"></span>
            <span className="blob-btn__blob"></span>
            <span className="blob-btn__blob"></span>
          </span>
        </span>
      </button>
      <br />

      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              result="blur"
              stdDeviation="10"
            ></feGaussianBlur>
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7"
              result="goo"
            ></feColorMatrix>
            <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
          </filter>
        </defs>
      </svg>
    </div>
  );
};
export default BoutonRegle;
