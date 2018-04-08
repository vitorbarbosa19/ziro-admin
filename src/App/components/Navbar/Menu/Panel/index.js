import React from 'react'
import Button from '../../../BasicUI/Button/index'
import IconClose from '../../../BasicUI/IconClose'
import IconUser from '../../../BasicUI/IconUser'
import { panelIsOpen, panel, close, profile } from './styles'

const Panel = ({ menuIsOpen, closeMenu, username, handleLogin }) => (
	<div style={menuIsOpen ? panelIsOpen : panel}>
		<div style={close}>
			<IconClose onClick={closeMenu} />
		</div>
		<div style={profile}>
			<IconUser size='30' />
			<div>{username}</div>
			<Button onClick={handleLogin} text='Logout' />
		</div>
	</div>
)

export default Panel
