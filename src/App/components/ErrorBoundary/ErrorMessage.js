import React from 'react'
import SvgAlert from '../../icons/SvgAlert'
import { container, iconSize } from './styles'

const ErrorMessage = () => (
	<div style={container}>
		<SvgAlert width={iconSize} height={iconSize} />
		<div>Um erro interno ocorreu. Tente novamente mais tarde.</div>
	</div>
)

export default ErrorMessage
