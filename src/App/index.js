import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import handleAuthentication from './functions/handleAuthentication'
import { NavbarRoute, HomeRoute, LoginRoute, DashboardRoute, NotFoundRoute, FooterRoute } from './routes'
import ErrorBoundary from './components/ErrorBoundary/index'
import { main, content } from './styles'

export default class App extends Component {
	state = { user: null }
	componentDidMount = () => { handleAuthentication(this) }
	render = () => (
		<div style={main}>
			<ErrorBoundary>
				<Route render={NavbarRoute} />
				<div style={content}>
					<Switch>
						<Route exact path='/' render={() => <HomeRoute user={this.state.user} />} />
						<Route path='/login' render={() => <LoginRoute user={this.state.user} />} />
						<Route path='/dashboard' render={() => <DashboardRoute user={this.state.user} />} />
						<Route render={NotFoundRoute} />
					</Switch>
				</div>
				<Route render={FooterRoute} />
			</ErrorBoundary>
		</div>
	)
}

//add state to track login and prevent flash of logged out state