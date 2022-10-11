import { useEffect, useContext } from 'react';
import axios from 'axios';
import { MarvelContext } from '../context/MarvelContext';

const HeroList = () => {
	const { url, setUrl, setCharacters, characters, filter } =
		useContext(MarvelContext);
	setUrl(
		'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=b7c0db44be2c0bca611556d2b705f3f1&hash=7fd532633bf2d9d37c3592c7649a1ca8'
	);

	useEffect(() => {
		const fetch = async () => {
			const res = await axios.get(url);
			setCharacters(res.data.data.results);
		};
		fetch();
	}, [url]);

	return (
		<div className='grid grid-cols-6 gap-2 contentMarvel'>
			{characters
				? characters
						.filter(character =>
							character.name.toLowerCase().includes(filter.toLowerCase())
						)
						.map(character => (
							<div key={character.id}>
								<div className='title'>
									<h3>{character.name}</h3>
								</div>
								<div className='card'>
									<img
										onClick={e => alert(e)}
										src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
										alt=''
									/>
								</div>
							</div>
						))
				: ''}
		</div>
	);
};

export default HeroList;
