import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { useAuth } from '@/hooks/useAuth'

import { IMovie } from '@/shared/types/movie.types'

import FavoriteButton from '../single-movie/FavoriteButton/FavoriteButton'

import styles from './Favorites.module.scss'
import { getMovieUrl } from '@/config/url.config'

const FavoriteItem: FC<{ movie: IMovie }> = ({ movie }) => {
	const { user } = useAuth()

	return (
		<div className={styles.itemWrapper}>
			{user && <FavoriteButton movieId={movie._id} />}
			<Link href={getMovieUrl(movie.slug)} className={styles.item}>
				<Image
					alt={movie.title}
					src={`https://cinema-app-bice.vercel.app${movie.poster}`}
					fill
					draggable={false}
					priority
				/>
				<div className={styles.title}>{movie.title}</div>
			</Link>
		</div>
	)
}

export default FavoriteItem
