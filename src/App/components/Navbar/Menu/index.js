import React, { Component } from 'react'
import Panel from './Panel'
import IconMenu from '../../BasicUI/IconMenu'
import { container } from './styles'

export default class Menu extends Component {
	state = { isOpen: false }
	openMenu = () => this.setState({ isOpen: true })
	closeMenu = () => this.setState({ isOpen: false })
	render = () => (
		<div style={container}>
			<IconMenu onClick={this.openMenu} />
			<Panel menuIsOpen={this.state.isOpen} />
		</div>
	)
}
