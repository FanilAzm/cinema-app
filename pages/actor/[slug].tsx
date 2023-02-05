import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import Actor from '@/components/screens/actor/Actor'
import { IActorPage } from '@/components/screens/actor/actor.interface'

import { ActorService } from '@/services/actor.service'
import { MovieService } from '@/services/movie.service'

import Error404 from '../404'

const ActorPage: NextPage<IActorPage> = ({ actor, movies }) => {
	return actor ? <Actor movies={movies} actor={actor} /> : <Error404 />
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: actors } = await ActorService.getAll()
		const paths = actors.map((a) => ({
			params: { slug: a.slug },
		}))

		return { paths, fallback: 'blocking' }
	} catch (e) {
		return {
			paths: [],
			fallback: false,
		}
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const { data: actor } = await ActorService.getBySlug(String(params?.slug))

		const { data: movies } = await MovieService.getByActor(actor._id)

		return {
			props: {
				movies,
				actor,
			},
			revalidate: 60,
		}
	} catch (error) {
		return {
			notFound: true,
		}
	}
}

export default ActorPage
