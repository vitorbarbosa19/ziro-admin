import React from 'react'
import PropTypes from 'prop-types'

const Spinner = (props) => (
	<div style={{
		borderRadius: '50%',
		border: `${props.thickness} solid rgba(48,62,77,0.2)`,
		borderTop: `${props.thickness} solid rgba(48,62,77,0.7)`,
		width: props.size,
		height: props.size,
		animation: 'spin 1.5s cubic-bezier(0.2,1,0.4,1) infinite'
	}}></div>
)

Spinner.defaultProps = {
  thickness: '1.4rem',
  size: '2.8rem'
}

Spinner.propTypes = {
	thickness: PropTypes.string,
	size: PropTypes.string
}

export default Spinner
