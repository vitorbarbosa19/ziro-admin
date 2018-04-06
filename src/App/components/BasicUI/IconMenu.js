import React from 'react'
import PropTypes from 'prop-types'

const IconMenu = (props) => (
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
		<line x1="3" y1="12" x2="21" y2="12"></line>
		<line x1="3" y1="6" x2="21" y2="6"></line>
		<line x1="3" y1="18" x2="21" y2="18"></line>
	</svg>
)

IconMenu.defaultProps = {
  onClick: null,
  size: '24',
  color: '#FFF'
}

IconMenu.propTypes = {
	onClick: PropTypes.func,
	size: PropTypes.string,
	color: PropTypes.string
}

export default IconMenu
