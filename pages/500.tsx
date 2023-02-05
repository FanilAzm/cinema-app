import { FC } from 'react'
import Meta from 'utils/meta/Meta'

import Heading from '@/components/ui/heading/Heading'

const Error500: FC = () => {
	return (
		<Meta title="Page not found">
			<Heading title="500 - Server-side error occurred" />
		</Meta>
	)
}

export default Error500
