import React from 'react';

import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero/inex';

export const Layout = ({children}) => (
	<>
		<Header />
		<main>
			{children}
		</main>
	</>
)