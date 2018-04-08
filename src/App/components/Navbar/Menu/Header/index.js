import React from 'react'
import formatTitle from './functions/formatTitle'
import IconMenu from '../../../BasicUI/IconMenu'
import IconChevron from '../../../BasicUI/IconChevron'
import { container, header } from './styles'

const Header = ({ openMenu, pathname }) => (
	<div style={container}>
		<IconMenu onClick={openMenu} />
		<div style={header}>
			<IconChevron color='#FFF' />
			<div>{formatTitle(pathname)}</div>
		</div>
	</div>
)

export default Header
	