export const container = {
	display: 'flex',
	paddingLeft: '20px'
}

export const panel = {
	position: 'fixed',
	zIndex: '1',
	top: '0',
	left: '-100px',
	width: '350px',
	height: '100%',
	backgroundColor: '#FFF',
	boxShadow: `0px 3px 10px 0px rgba(48,62,77,0.10), 0px 6px 10px 0px rgba(48,62,77,0.05)`,
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