import Link from 'next/link'
import { FC } from 'react'

import styles from './AuthPlaceholder.module.scss'
import { getMovieUrl } from '@/config/url.config'

const AuthButton: FC<{ slug: string }> = ({ slug }) => {
	return (
		<Link href={`/auth?redirect=${getMovieUrl(slug)}`} className={styles.btn}>
			Sign In
		</Link>
	)
}

export default AuthButton
