import { FC } from 'react'
import Meta from 'utils/meta/Meta'

import Gallery from '@/components/ui/gallery/Gallery'
import Heading from '@/components/ui/heading/Heading'
import SubHeading from '@/components/ui/heading/SubHeading'
import Slider from '@/components/ui/slider/Slider'

import { IHome } from './home.interface'

const Home: FC<IHome> = ({ actors, slides, trendingMovies }) => {
	return (
		<Meta
			title="Watch movies online"
			description="Watch MovieApp movies and TV shows online or stream right to your browser."
		>
			<Heading
				title="Watch movies online"
				className="text-gray-300 mb-8 text-xl"
			/>

			{slides && slides.length && <Slider slides={slides} />}

			<div className="my-10">
				<SubHeading title="Trending now" />
				{trendingMovies && trendingMovies.length && (
					<Gallery items={trendingMovies} />
				)}
			</div>

			<div>
				<SubHeading title="Best actors" />
				{actors && actors.length && <Gallery items={actors} />}
			</div>
		</Meta>
	)
}

export default Home
