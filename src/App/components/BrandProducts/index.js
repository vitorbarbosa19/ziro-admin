import React, { Component } from 'react'

export default class BrandProducts extends Component {
	render = () => (
		<div>{this.props.location.pathname}</div>
	)
}