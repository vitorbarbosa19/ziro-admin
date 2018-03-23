import React, { Component } from 'react'
import ErrorMessage from './ErrorMessage'

export default class ErrorBoundary extends Component {
	state = { hasError: false }
	componentDidCatch = (error, info) => {
		this.setState({ hasError: true })
		console.log(error)
		console.log(info.componentStack)
	}
	render = () => {
		if (this.state.hasError)
			return <ErrorMessage />
		return this.props.children
	}
}
