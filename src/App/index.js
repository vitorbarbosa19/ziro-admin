import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { navbar, login, notFound, footer } from './routes'
import ErrorBoundary from './components/ErrorBoundary/index'
import { main, content } from './styles'

export default class App extends Component {
	render = () => (
		<div style={main}>
			<ErrorBoundary>
				<Route render={navbar} />
				<div style={content}>
					<Switch>
						<Route exact path='/' render={login} />
						<Route render={notFound} />
					</Switch>
				</div>
				<Route render={footer} />
			</ErrorBoundary>
		</div>
	)
}