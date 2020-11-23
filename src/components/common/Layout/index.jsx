import { Header } from '@/components/Header';
import React from 'react';

export const Layout = ({children}) => (
	<>
		<Header />
		<main>
			{children}
		</main>
	</>
)