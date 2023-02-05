import { FC } from 'react'

import Catalog from '@/components/ui/catalog-movies/Catalog'

import { IGenrePage } from './genre.interface'

const Genre: FC<IGenrePage> = ({ genre, movies }) => {
	return (
		<Catalog
			movies={movies || []}
			title={genre.name}
			description={genre.description}
		/>
	)
}

export default Genre
