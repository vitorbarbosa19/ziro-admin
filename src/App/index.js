import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import handleAuthentication from './functions/handleAuthentication'
import { NavbarRoute, HomeRoute, DashboardRoute, BrandRoute,
				 LoginRoute, NotFoundRoute, FooterRoute } from './routes'
import ErrorBoundary from './components/ErrorBoundary/index'
import { main, content } from './styles'

export default class App extends Component {
	state = { user: null }
	componentDidMount = () => handleAuthentication(this)
	render = () => {
		const user = this.state.user
		return (
			<div style={main}>
				<ErrorBoundary>
					<Route render={(props) => <NavbarRoute {...props} user={user} />} />
					<div style={content}>
						<Switch>
							<Route exact path='/' render={() => <HomeRoute user={user} />} />
							<Route exact path='/dashboard' render={() => <DashboardRoute user={user} />} />
							<Route path='/dashboard/:brand' render={(props) => <BrandRoute {...props} user={user} />} />
							<Route path='/login' render={() => <LoginRoute user={user} />} />
							<Route render={NotFoundRoute} />
						</Switch>
					</div>
					<Route render={FooterRoute} />
				</ErrorBoundary>
			</div>
		)
	}
}
