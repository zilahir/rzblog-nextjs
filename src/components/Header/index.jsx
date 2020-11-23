import React from 'react'
import classnames from 'classnames'
import Link from 'next/link'
import GitHubIcon from '@material-ui/icons/GitHub'
import InstagramIcon from '@material-ui/icons/Instagram'

import styles from './Header.module.scss'

export const Header = () => (
	<header className={
		classnames(
			styles.header,
			"hidden md:flex md:pl-10 md:pr-10 md:space-x-8 justify-center items-center",
		)
		}>
		<div className="md:flex w-3/5 justify-between">
			<ul>
				<li>
					<Link href="/">
							blog – richardzilahi.hu
					</Link>
				</li>
			</ul>
			<ul className="flex space-x-4">
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
			</ul>
		</div>
	</header>
)