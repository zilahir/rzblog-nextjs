import React from 'react';
import classnames from 'classnames'

import styles from './Welcome.module.scss'

export const Welcome = () => (
	<div className={classnames(
		styles.welcomeContainer
	)}>
		<div className={classnames(
				styles.welcomeContainerInner
			)}>
				<div className={
					classnames(
						
					)
				}>
					<h1 className={styles.welcome}>
						Richard Zilahi
					</h1>
				</div>
				<div className={classnames(
					styles.desc
				)}>
					<p>
						I am a senior fullstack engineer, living in Helsinki, Finland.
					</p>
					<p>
						I am writing about tech, life, travelling, and everything, that interests me. Post are written in 🇬🇧, and in 🇭🇺
					</p>
				</div>
			</div>
	</div>
)
