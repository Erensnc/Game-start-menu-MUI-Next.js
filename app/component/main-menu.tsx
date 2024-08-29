'use client';
import { Box, styled } from '@mui/material';
import React from 'react';
import MenuButton from './game-button';
import { Colors } from '../theme/colors';

const MainMenuFrame = styled(Box, {
	name: 'MainMenuFrameComponent',
	slot: 'Root',
})(({}) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	padding: '6px 8px',
	gap: 4,
	boxShadow: `2px 2px 16px 2px ${Colors.secondary}`,
}));

function MainMenu() {
	const handleButtonClick = (param: string) => {
		console.log(param);
	};
	return (
		<Box>
			<MainMenuFrame>
				<MenuButton title='new game' onButtonClick={handleButtonClick} />
				<MenuButton title='continue' onButtonClick={handleButtonClick} />
				<MenuButton title='options' onButtonClick={handleButtonClick} />
				<MenuButton title='quit' onButtonClick={handleButtonClick} />
			</MainMenuFrame>
		</Box>
	);
}

export default MainMenu;
