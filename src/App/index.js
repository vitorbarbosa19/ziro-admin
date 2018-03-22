import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { navbar, content, notFound, footer } from './routes'

export default class App extends Component {
	render = () => (
		<div>
			<Route render={navbar} />
			<Switch>
				<Route exact path='/' render={content} />
				<Route render={notFound} />
			</Switch>
			<Route render={footer} />
		</div>
	)
}