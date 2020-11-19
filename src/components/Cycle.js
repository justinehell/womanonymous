<<<<<<< HEAD
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { GiCheckeredFlag } from "react-icons/gi";
||||||| merged common ancestors
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { FaFlagCheckered } from "react-icons/fa";
=======
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { FaFlagCheckered } from 'react-icons/fa';
>>>>>>>  rotating line with the day

const Cycle = () => {
	const data = {
		labels: [
			"Don't fuck me now",
			'Having a good time',
			'Having a good time',
			'Having a good time',
			'Having a good time',
			'Having a good time',
			'Having a good time',
			'Having a good time',
			'Having a good time',
			'Having a good time',
			'Having a good time',
			'Having a good time',
			'Having a good time',
			"Don't fuck me now",
			"Don't fuck me now",
			"Don't fuck me now",
			"Don't fuck me now",
			'Having a good time',
			'Having a good time',
			'Having a good time',
			'Having a good time',
			'Having a good time',
			'Having a good time',
			'Having a good time',
			'Having a good time',
			'Having a good time',
			'Having a good time',
			'Having a good time',
			'Having a good time',
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
					'#DC143C',
					'#eadede',
					'#eadede',
					'#eadede',
					'#eadede',
					'#eadede',
					'#eadede',
					'#eadede',
					'#eadede',
					'#eadede',
					'#eadede',
					'#eadede',
					'#eadede',
					'#f54b4b',
					'#f54b4b',
					'#f54b4b',
					'#f54b4b',
					'#eadede',
					'#eadede',
					'#eadede',
					'#eadede',
					'#eadede',
					'#eadede',
					'#eadede',
					'#eadede',
					'#eadede',
					'#eadede',
					'#eadede',
					'#eadede',
					'#FFFFFF',
				],
				hoverBackgroundColor: [],
				borderColor: [],
			},
		],
		text: '23↘',
	};

<<<<<<< HEAD
  return (
    <div className="main-cycle">
      <GiCheckeredFlag fontSize={"3em".toString()} className="flag" />

      <Doughnut
        width={100}
        data={data}
        options={{
||||||| merged common ancestors
  return (
    <div className="main-cycle">
      <FaFlagCheckered fontSize={"3em".toString()} />
      <Doughnut
        data={data}
        options={{
=======
	return (
		<div className='main-cycle'>
			<FaFlagCheckered fontSize={'3em'.toString()} />
			<Doughnut
				data={data}
				options={{
>>>>>>>  rotating line with the day
          responsive: true,
<<<<<<< HEAD
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
  );
||||||| merged common ancestors
          maintainAspectRatio: true,
          animateRotate: true,
          legend: {
            display: false,
          },
        }}
      />
    </div>
  );
=======
          cutoutPercentage: 60,
          borderWidth: 150,
					maintainAspectRatio: true,
					animateRotate: true,
					legend: {
						display: false,
					},
				}}
			/>
		</div>
	);
>>>>>>>  rotating line with the day
};

export default Cycle;
