import React from 'react'
import PropTypes from 'prop-types'

const IconChevron = (props) => (
	<svg
		width={props.size}
		height={props.size}
		viewBox="0 0 24 24"
		fill="none"
		stroke={props.color}
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<polyline points="15 18 9 12 15 6"></polyline>
	</svg>
)

IconChevron.defaultProps = {
  size: '24',
  color: 'rgba(127, 134, 143, 1)'
}

IconChevron.propTypes = {
	size: PropTypes.string,
	color: PropTypes.string
}

export default IconChevron
