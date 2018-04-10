import React from 'react'
import { Redirect } from 'react-router-dom'
import Navbar from './components/Navbar/index'
import Login from './components/Login/index'
import Dashboard from './components/Dashboard/index'
import BrandProducts from './components/BrandProducts/index'
import NotFound from './components/NotFound/index'
import Footer from './components/Footer/index'

export const NavbarRoute = (props) => (
	<Navbar {...props} />
)

export const HomeRoute = ({ user }) => (
	user
	? <Redirect to='/dashboard' />
	: <Redirect to='/login' />
)

export const DashboardRoute = ({ user }) => (
	user
	? <Dashboard />
	: <Redirect to='/login' />
)

export const BrandRoute = ({ user, ...props }) => (
	user
	? <BrandProducts {...props} />
	: <Redirect to='/login' />
)

export const LoginRoute = ({ user }) => (
	user
	? <Redirect to='/dashboard' />
	: <Login user={user} />
)

export const NotFoundRoute = () => (
	<NotFound />
)

export const FooterRoute = () => (
	<Footer />
)