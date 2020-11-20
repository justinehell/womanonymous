import React, { useEffect, useState } from "react";

const InnerCycle = (props) => {
  const [day, setDay] = useState(props.dayOfCycle);

  useEffect(() => {
    setDay(props.dayOfCycle);
  }, [props]);

  return (
    <div className="clock">
      <div
        className="hand"
        style={{ transform: `rotate(${day * (360 / 30)}deg)` }}
      ></div>
    </div>
  );
};
export default InnerCycle;
