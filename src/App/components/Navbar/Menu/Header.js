import React from 'react'
import IconMenu from '../../BasicUI/IconMenu'
import IconChevron from '../../BasicUI/IconChevron'
import { container, header } from './styles'

const Header = (props) => (
	<div style={container}>
		<IconMenu onClick={props.onClick} />
		<div style={header}>
			<IconChevron color='#FFF' />
			<div>{props.pathname}</div>
		</div>
	</div>
)

export default Header
	