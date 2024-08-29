import { Box, Typography } from '@mui/material';
import { Container } from '@mui/material';
import MainMenu from './component/main-menu';

export default function Home() {
	return (
		<Container
			sx={{
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			<Box>
				<MainMenu />
			</Box>
		</Container>
	);
}
