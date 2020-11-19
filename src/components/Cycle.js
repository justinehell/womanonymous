import React from "react";
import { Doughnut } from "react-chartjs-2";
import { FaFlagCheckered } from "react-icons/fa";

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
      <FaFlagCheckered fontSize={"3em".toString()} />
      <Doughnut
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: true,
          animateRotate: true,
          legend: {
            display: false,
          },
        }}
      />
    </div>
  );
};

export default Cycle;
