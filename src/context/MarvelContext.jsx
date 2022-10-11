import { createContext, useState, useEffect } from 'react';
import marvelIntro from '../assets/marvelIntro.mp4';
import axios from 'axios';

export const MarvelContext = createContext();
export function MarvelContexProvider(props) {
	const [menu, setMenu] = useState(false);
	const [searchMenu, setSearchMenu] = useState(false);
	const [intro, setIntro] = useState(true);
	const [bgVideo, setBgVideo] = useState(marvelIntro);
	const [url, setUrl] = useState('');
	const [characters, setCharacters] = useState('');
	const [filterCharacters, setFilterCharacters] = useState('');
	const [filter, setFilter] = useState('');

	return (
		<MarvelContext.Provider
			value={{
				menu,
				setMenu,
				bgVideo,
				setBgVideo,
				intro,
				setIntro,
				searchMenu,
				setSearchMenu,
				characters,
				setCharacters,
				url,
				setUrl,
				filterCharacters,
				setFilterCharacters,
				filter,
				setFilter,
			}}
		>
			{props.children}
		</MarvelContext.Provider>
	);
}
