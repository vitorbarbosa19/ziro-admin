import React from 'react'
import IconAlert from '../BasicUI/IconAlert'
import { container, iconSize } from './styles'

const ErrorMessage = () => (
	<div style={container}>
		<IconAlert size={iconSize} />
		<div>Um erro interno ocorreu. Tente novamente mais tarde.</div>
	</div>
)

export default ErrorMessage
