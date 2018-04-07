import React from 'react'
import Button from '../../BasicUI/Button/index'
import IconClose from '../../BasicUI/IconClose'
import IconUser from '../../BasicUI/IconUser'
import { panelIsOpen, panel, close, profile } from './styles'

const Panel = (props) => (
	<div style={props.menuIsOpen ? panelIsOpen : panel}>
		<div style={close}>
			<IconClose onClick={props.onClick} />
		</div>
		<div style={profile}>
			<IconUser size='30' />
			<div>{props.username}</div>
			<Button onClick={props.handleLogin} text='Logout' />
		</div>
	</div>
)

export default Panel
