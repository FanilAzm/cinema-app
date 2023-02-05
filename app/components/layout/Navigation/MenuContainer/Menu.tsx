import dynamic from 'next/dynamic'
import { FC } from 'react'

import styles from './Menu.module.scss'
import MenuItem from './MenuItem'
import AuthItems from './auth/AuthItems'
import { IMenu } from './menu.interface'

const DynamicAuthItems = dynamic(() => import('./auth/AuthItems'), {
	ssr: false,
})

const Menu: FC<{ menu: IMenu }> = ({ menu: { title, items } }) => {
	return (
		<div className={styles.menu}>
			<div className={styles.heading}>{title}</div>
			<ul className={styles.ul}>
				{items.map((item) => {
					return <MenuItem key={item.link} item={item}></MenuItem>
				})}
				{title === 'General' ? <DynamicAuthItems /> : null}
			</ul>
		</div>
	)
}

export default Menu
