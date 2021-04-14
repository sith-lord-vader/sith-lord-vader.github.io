import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import s from './PageNotFound.module.scss';
import DeviceMotion from 'react-device-motion';

export const PageNotFound = () => {
	// const torch = useRef(null);
	// const [ x, setX ] = useState('1');
	// const [ y, setY ] = useState('2');
	// const handleOrientation = (e) => {
	// 	setX(e.alpha);
	// };
	// window.addEventListener('devicemotion', function(event) {
	// 	if (event.rotationRate.alpha || event.rotationRate.beta || event.rotationRate.gamma)
	// 		console.log(event.rotationRate.alpha);
	// });
	// useEffect(() => {
	// 	if (window.DeviceMotionEvent && typeof window.DeviceMotionEvent.requestPermission === 'function') {
	// 		window.DeviceMotionEvent.requestPermission();
	// 	}
	// 	window.addEventListener('devicemotion', function(event) {
	// 		if (event.rotationRate.alpha || event.rotationRate.beta || event.rotationRate.gamma)
	// 			console.log(event.accelerationIncludingGravity.x);
	// 	});
	// }, []);
	return (
		// <div className={s.main}>
		// 	<div className={s.inner}>
		// 		<h1>404</h1>
		// 		<span>It may be a typo in the url or maybe I'm working on something that blew this up...</span>
		// 		<Link to="/">Homepage</Link>
		// 	</div>
		// 	{/* <div className={s.torch} ref={torch} /> */}
		// </div>
		<DeviceMotion>
			{({ acceleration, accelerationIncludingGravity, interval, rotationRate }) => (
				<div>
					{`Acceleration: ${JSON.stringify(acceleration)}`}
					{`Acceleration including gravity: ${JSON.stringify(accelerationIncludingGravity)}`}
					{`Interval: ${interval}`}
					{`Rotation rate: ${JSON.stringify(rotationRate)}`}
				</div>
			)}
		</DeviceMotion>
	);
};
