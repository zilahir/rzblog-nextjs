import React from 'react';

import { Header } from '@/components/Header';
import { Grid } from 'react-flexbox-grid';

export const Layout = ({children}) => (
	<Grid fluid>
		<Header />
		<main>
			{children}
		</main>
	</Grid>
)