import { useContext, useState } from 'react';
import { MarvelContext } from '../context/MarvelContext';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuSharp from '@mui/icons-material/MenuSharp';
import { indigo } from '@mui/material/colors';
import onOverEffect from '../assets/onOverEffect.mp3';
import { Howl } from 'howler';
import mainBg from '../assets/mainBg.mp4';
import SearchMenu from './SearchMenu';

const options = ['Characters', 'Comics', 'Contact'];
const ITEM_HEIGHT = 48;

export const MenuBar = () => {
	const { menu } = useContext(MarvelContext);
	const [anchorEl, setAnchorEl] = useState(null);
	const callmySound = src => {
		const sound = new Howl({
			src,
			html5: true,
		});
		sound.play();
	};

	const open = Boolean(anchorEl);
	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className={`${menu ? 'main' : 'mainOff'}`}>
			<div className='overlay'></div>
			<video src={mainBg} autoPlay loop muted></video>

			<div className='grid grid-cols-4 gap-4 contentDisplayMenu '>
				<SearchMenu></SearchMenu>
				<IconButton
					onMouseOver={() => callmySound(onOverEffect)}
					aria-label='more'
					id='long-button'
					aria-controls={open ? 'long-menu' : undefined}
					aria-expanded={open ? 'true' : undefined}
					aria-haspopup='true'
					onClick={handleClick}
				>
					<MenuSharp sx={{ color: indigo[500], fontSize: 60 }} />
				</IconButton>
				<Menu
					id='long-menu'
					MenuListProps={{
						'aria-labelledby': 'long-button',
					}}
					anchorEl={anchorEl}
					open={open}
					onClose={handleClose}
					PaperProps={{
						style: {
							maxHeight: ITEM_HEIGHT * 4.5,
							width: '20ch',
						},
					}}
				>
					{options.map(option => (
						<MenuItem
							key={option}
							selected={option === 'Pyxis'}
							onClick={() => {
								handleClose();
								callmySound(onOverEffect);
							}}
						>
							{option}
						</MenuItem>
					))}
				</Menu>
			</div>
		</div>
	);
};
