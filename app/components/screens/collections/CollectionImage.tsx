import Image from 'next/image'
import { FC } from 'react'

import { ICollection } from './collections.interface'

const CollectionImage: FC<{ collection: ICollection }> = ({
	collection: { image, title },
}) => {
	return (
		<Image
			alt={title}
			src={`https://cinema-back-fanilazm.vercel.app/api${image}`}
			fill
			draggable={false}
		/>
	)
}

export default CollectionImage
