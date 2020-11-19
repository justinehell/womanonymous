import React from "react";
import { Doughnut } from "react-chartjs-2";
import BoutonRegle from "./BoutonRegle";
import InnerCycle from "./InnerCycle";


const Cycle = () => {
  const data = {
    labels: [
      "Don't fuck me now",
      "Having a good time",
      "Having a good time",
      "Having a good time",
      "Having a good time",
      "Having a good time",
      "Having a good time",
      "Having a good time",
      "Having a good time",
      "Having a good time",
      "Having a good time",
      "Having a good time",
      "Having a good time",
      "Don't fuck me now",
      "Don't fuck me now",
      "Don't fuck me now",
      "Don't fuck me now",
      "Having a good time",
      "Having a good time",
      "Having a good time",
      "Having a good time",
      "Having a good time",
      "Having a good time",
      "Having a good time",
      "Having a good time",
      "Having a good time",
      "Having a good time",
      "Having a good time",
      "Having a good time",
    ],
    datasets: [
      {
        data: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
        ],
        backgroundColor: [
          "#DC143C",
          "#eadede",
          "#eadede",
          "#eadede",
          "#eadede",
          "#eadede",
          "#eadede",
          "#eadede",
          "#eadede",
          "#eadede",
          "#eadede",
          "#eadede",
          "#eadede",
          "#f54b4b",
          "#f54b4b",
          "#f54b4b",
          "#f54b4b",
          "#eadede",
          "#eadede",
          "#eadede",
          "#eadede",
          "#eadede",
          "#eadede",
          "#eadede",
          "#eadede",
          "#eadede",
          "#eadede",
          "#eadede",
          "#eadede",
          "#FFFFFF",
        ],
        hoverBackgroundColor: [],
        borderColor: [],
      },
    ],
    text: "23↘",
  };

  return (
    <div className="main-cycle">
      <InnerCycle dayOfCycle="8"/>
      <div className="wrapper-cycle">
        <Doughnut
          width={100}
          data={data}
          options={{
            responsive: true,
            maintainAspectRatio: true,
            animateRotate: true,
            legend: {
              display: false,
            },
            layout: {
              padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
              },
              margin: {
                left: 0,
              },
            },
          }}
        />
      </div>
      <BoutonRegle />
    </div>
  );
};

export default Cycle;
