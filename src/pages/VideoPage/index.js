import { useEffect, useRef } from 'react';

export const VideoPage = () => {
	const videoEl = useRef(null);

	const attemptPlay = () => {
		videoEl &&
			videoEl.current &&
			videoEl.current.play().catch((error) => {
				console.error('Error attempting to play', error);
			});
	};

	useEffect(() => {
		attemptPlay();
	}, []);
	return (
		<div>
			<video
				style={{ width: '100%', margin: '0 auto' }}
				playsInline
				loop
				muted
				controls
				alt="All the devices"
				src="./img/beautySalon.mp4"
				ref={videoEl}
			/>
		</div>
	);
};
