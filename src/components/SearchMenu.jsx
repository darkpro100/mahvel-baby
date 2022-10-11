import { useContext } from 'react';
import keyboardEffect from '../assets/keyboard.wav';
import { Howl } from 'howler';
import HeroList from './HeroList';
import { MarvelContext } from '../context/MarvelContext';

const SearchMenu = () => {
	const { setFilter } = useContext(MarvelContext);
	const callmySound = src => {
		const sound = new Howl({
			src,
			html5: true,
		});
		sound.play();
	};
	const filterCharacter = e => {
		setFilter(e.target.value);
	};

	return (
		<div className='contentDisplayMenu '>
			<br></br>
			<br></br>
			<br></br>
			<div className='bg-gray-800  '>
				<textarea
					className='text-slate-900 '
					name=''
					id=''
					cols='100'
					rows='2'
					onChange={e => {
						callmySound(keyboardEffect);
						filterCharacter(e);
					}}
				></textarea>
			</div>
			<HeroList></HeroList>
		</div>
	);
};

export default SearchMenu;
