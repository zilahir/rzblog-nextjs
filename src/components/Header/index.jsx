import React from 'react';
import Link from 'next/link';
import GitHubIcon from '@material-ui/icons/GitHub';

import styles from './Header.module.scss'

export const Header = () => (
	<header className={styles.header}>
		<ul>
			<li>
				<Link href="/">
						blog – richardzilahi.hu
				</Link>
			</li>
		</ul>
		<ul>
			<li>
				<Link href="https://github.com/zilahir">
					<GitHubIcon htmlColor="#f4abc4" />
				</Link>
			</li>
		</ul>
	</header>
)