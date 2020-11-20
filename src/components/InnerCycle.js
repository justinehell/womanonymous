import React, { useEffect, useState } from "react";
import arrow from '../img/fleche.png'

const InnerCycle = (props) => {
  const [day, setDay] = useState(props.dayOfCycle);

  useEffect(() => {
    setDay(props.dayOfCycle);
  }, [props]);

  return (
    <div className="clock">
      <img
        src={arrow}
        className="hand"
        style={{ transform: `rotate(${day * (360 / 30)}deg)` }}
      ></img>
    </div>
  );
};
export default InnerCycle;
