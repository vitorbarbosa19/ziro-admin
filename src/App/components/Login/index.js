import React, { Component } from 'react'
import { Image } from 'cloudinary-react'
import Button from '../BasicUI/Button/index'
import { container } from './styles'

export default class Login extends Component {
	handleLogin = () => netlifyIdentity.open()
	render = () => (
		<div style={container}>
			<Image
	        cloudName='ziro'
	        width={window.innerWidth > 500 ? '140' : '120'}
	        publicId='admin-login_uodpi2'
	        version='1522599047'
	        format='png'
	        secure='true'
	   	/>
			<p>Faça login para ter acesso ao dashboard de marcas</p>
			<Button onClick={this.handleLogin} text='Login' />
		</div>
	)
}