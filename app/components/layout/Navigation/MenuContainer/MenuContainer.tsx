import dynamic from 'next/dynamic'
import { FC } from 'react'

import Menu from './Menu'
import { firstMenu, userMenu } from './menu.data'

const DynamicGenreMenu = dynamic(() => import('./genres/GenreMenu'), {
	ssr: false,
})

const MenuContainer: FC = () => {
	return (
		<div>
			<Menu menu={firstMenu} />
			<DynamicGenreMenu />
			<Menu menu={userMenu} />
		</div>
	)
}

export default MenuContainer
