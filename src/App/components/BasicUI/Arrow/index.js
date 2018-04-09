import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { svg, circleOnHover, circle } from './styles'

export default class Arrow extends Component {
	state = { isHovered: false }
	hoverIn = () => this.setState({ isHovered: true })
	hoverOut = () => this.setState({ isHovered: false })
	render = () => {
		const { onClick, size, color } = this.props
		return (
			<svg
				style={svg}
				onClick={onClick}
				onMouseEnter={this.hoverIn}
				onMouseLeave={this.hoverOut}
				width={size}
				height={size}
				viewBox="0 0 24 24"
				fill="none"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
			>
				<circle
					style={this.state.isHovered ? circleOnHover : circle}
					cx="12" cy="12" r="10"
			  	strokeDasharray="100"
					strokeDashoffset="100"
				>
				</circle>
				<polyline points="12 16 16 12 12 8"></polyline>
				<line x1="8" y1="12" x2="16" y2="12"></line>
			</svg>
		)
	}
}

Arrow.defaultProps = {
	onClick: null,
  color: '#7F868F',
  size: '4.0rem'
}

Arrow.propTypes = {
	onClick: PropTypes.func,
	color: PropTypes.string,
	size: PropTypes.string
}
