import React from 'react'
import PropTypes from 'prop-types'

const IconAlert = (props) => (
	<svg
		width={props.width}
		height={props.height}
		viewBox="0 0 24 24"
		fill="none"
		stroke={props.color}
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<circle cx="12" cy="12" r="10"></circle>
		<line x1="12" y1="8" x2="12" y2="12"></line>
		<line x1="12" y1="16" x2="12" y2="16"></line>
	</svg>
)

IconAlert.defaultProps = {
  width: '24',
  height: '24',
  color: '#F16B6F'
}

IconAlert.propTypes = {
	width: PropTypes.string,
	height: PropTypes.string,
	color: PropTypes.string
}

export default IconAlert