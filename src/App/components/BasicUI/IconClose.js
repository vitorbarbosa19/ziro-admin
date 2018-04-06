import React from 'react'
import PropTypes from 'prop-types'

const IconClose = (props) => (
	<svg
		style={{ cursor: 'pointer' }}
		onClick={props.onClick}
		width={props.size}
		height={props.size}
		viewBox="0 0 24 24"
		fill="none"
		stroke={props.color}
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<line x1="18" y1="6" x2="6" y2="18"></line>
		<line x1="6" y1="6" x2="18" y2="18"></line>
	</svg>
)

IconClose.defaultProps = {
	onClick: null,
  size: '24',
  color: 'rgba(127, 134, 143, 1)'
}

IconClose.propTypes = {
	onClick: PropTypes.func,
	size: PropTypes.string,
	color: PropTypes.string
}

export default IconClose
