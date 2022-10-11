import { useContext } from 'react';
import marvelIntro from '../assets/marvelIntro.mp4';
import mainBg from '../assets/mainBg.mp4';
import { MarvelContext } from '../context/MarvelContext';

export const Intro = () => {
	const { intro, setIntro, setBgVideo, setMenu } = useContext(MarvelContext);
	return (
		<div className={`${intro ? 'main' : 'mainOff'}  `}>
			<div className='overlay'></div>
			<video src={marvelIntro} autoPlay loop muted></video>
			<div className='content'>
				<h1>Mahvel Time</h1>
				<p>Its Mahvel baby</p>
				<button
					onClick={() => {
						setBgVideo(mainBg);
						setIntro(false);
						setMenu(true);
					}}
				>
					Lets go in!
				</button>
			</div>
		</div>
	);
};
