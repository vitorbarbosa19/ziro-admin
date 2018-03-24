import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { navbar, content, notFound, footer } from './routes'
import ErrorBoundary from './components/ErrorBoundary/index'
import { mainContainer, contentContainer } from './styles'

export default class App extends Component {
	render = () => (
		<div style={mainContainer}>
			<ErrorBoundary>
				<Route render={navbar} />
				<div style={contentContainer}>
					<Switch>
						<Route exact path='/' render={content} />
						<Route render={notFound} />
					</Switch>
				</div>
				<Route render={footer} />
			</ErrorBoundary>
		</div>
	)
}