import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { navbar, content, notFound, footer } from './routes'
import ErrorBoundary from './components/ErrorBoundary/index'

export default class App extends Component {
	render = () => (
		<ErrorBoundary>
			<Route render={navbar} />
			<Switch>
				<Route exact path='/' render={content} />
				<Route render={notFound} />
			</Switch>
			<Route render={footer} />
		</ErrorBoundary>
	)
}