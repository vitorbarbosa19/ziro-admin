import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class SvgArrow extends Component {
	state = { isHovered: false }
	hoverIn = () => this.setState({ isHovered: true })
	hoverOut = () => this.setState({ isHovered: false })
	render = () => (
		<svg
			style={{cursor: 'pointer'}}
			onClick={this.props.onClick}
			onMouseEnter={this.hoverIn}
			onMouseLeave={this.hoverOut}
			width={this.props.size}
			height={this.props.size}
			viewBox="0 0 24 24"
			fill="none"
			stroke={this.props.color}
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<circle
				style={this.state.isHovered
					? {transition: '1.2s ease', strokeDashoffset: '0'}
					: {transition: '0.8s ease'}
				}
				cx="12"
				cy="12"
				r="10"
		  	fill="none"
		  	stroke={this.props.color}
		  	strokeWidth="2"
		  	strokeDasharray="100"
				strokeDashoffset="100"
			>
			</circle>
			<polyline points="12 16 16 12 12 8"></polyline>
			<line x1="8" y1="12" x2="16" y2="12"></line>
		</svg>
	)
}

SvgArrow.defaultProps = {
	onClick: null,
  color: '#7F868F',
  size: '4.0rem'
}

SvgArrow.propTypes = {
	onClick: PropTypes.func,
	color: PropTypes.string,
	size: PropTypes.string
}
