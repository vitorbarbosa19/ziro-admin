import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { button, buttonOnHover } from './styles'

export default class Button extends Component {
	state = { isHovered: false }
	hoverIn = () => this.setState({ isHovered: true })
	hoverOut = () => this.setState({ isHovered: false })
	render = () => {
		const { onClick, text } = this.props
		return (
			<button
				style={this.state.isHovered ? buttonOnHover : button}
				onClick={onClick}
				onMouseEnter={this.hoverIn}
				onMouseLeave={this.hoverOut}
			>
				{text}
			</button>
		)
	}
}

Button.defaultProps = {
	onClick: null
}

Button.propTypes = {
	onClick: PropTypes.func,
	text: PropTypes.string.isRequired
}
