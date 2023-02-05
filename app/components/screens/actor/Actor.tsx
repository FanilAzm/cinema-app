import { useRouter } from 'next/router'
import { FC } from 'react'

import Catalog from '@/components/ui/catalog-movies/Catalog'

import { IActorPage } from './actor.interface'

const Actor: FC<IActorPage> = ({ actor, movies }) => {
	return <Catalog movies={movies || []} title={actor?.name} />
}

export default Actor
