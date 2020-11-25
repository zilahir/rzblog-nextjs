import React from 'react'
import classnames from 'classnames'
import Link from 'next/link'
import GitHubIcon from '@material-ui/icons/GitHub'
import InstagramIcon from '@material-ui/icons/Instagram'
import Brightness7Icon from '@material-ui/icons/Brightness7'

import styles from './Header.module.scss'
import globalStyles from '../../styles/Global.module.scss';

export const Header = () => (
	<header className={
		classnames(
			styles.header,
		)
		}>
		<div className={styles.headerInner}>
			<ul className={classnames(
				styles.oswald,
			)}>
				<li>
					<Link href="/">
							blog – richardzilahi.hu
					</Link>
				</li>
			</ul>
			<ul className="">
				<li>
					<Link href="https://github.com/zilahir">
						<GitHubIcon htmlColor="#f4abc4" />
					</Link>
				</li>
				<li>
					<Link href="https://www.instagram.com/richardzilahi/">
						<InstagramIcon htmlColor="#f4abc4" />
					</Link>
				</li>
				<li>
					<Brightness7Icon htmlColor="#f4abc4" />
				</li>
			</ul>
		</div>
	</header>
)