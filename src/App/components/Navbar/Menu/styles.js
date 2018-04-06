export const container = {
	display: 'flex',
	paddingLeft: '20px'
}

export const panel = {
	position: 'fixed',
	zIndex: '1',
	top: '0',
	left: '-100px',
	width: window.innerWidth > 500 ? '350px' : '100%',
	height: '100%',
	backgroundColor: '#FFF',
	boxShadow: `3px 0px 10px 0px rgba(48,62,77,0.10), 6px 0px 10px 0px rgba(48,62,77,0.05)`,
	pointerEvents: 'none',
	opacity: '0',
	transition: '0.3s ease'
}

export const panelIsOpen = { ...panel,
	pointerEvents: 'auto',
	opacity: '1',
	transform: 'translateX(100px)',
	transition: '0.5s ease'
}