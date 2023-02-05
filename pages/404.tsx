import { FC } from 'react'
import Meta from 'utils/meta/Meta'

import Heading from '@/components/ui/heading/Heading'

const Error404: FC = () => {
	return (
		<Meta title="Page not found">
			<Heading title="404 - Page not found" />
		</Meta>
	)
}

export default Error404
