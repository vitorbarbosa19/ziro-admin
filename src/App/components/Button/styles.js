export const button = {
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	outline: 'none',
	cursor: 'pointer',
	width: '100%',
	border: '1px solid rgba(48,62,77,0.40)',
	borderRadius: '30px',
	padding: '10px 0px',
	fontSize: window.innerWidth > 500 ? '1.5rem' : '1.4rem',
	fontWeight: '700',
	fontFamily: 'Work Sans',
	textTransform: 'uppercase',
	letterSpacing: '1px',
	color: '#FFF',
	backgroundColor: 'rgba(48,62,77,0.80)',
	boxShadow: `0px 2px 10px 0px rgba(48,62,77,0.25), 0px 4px 15px 0px rgba(48,62,77,0.20), 0px 6px 20px 0px rgba(48,62,77,0.15)`,
	transition: '0.2s ease-in-out'	
}

export const buttonOnHover = {
	...button,
	color: window.innerWidth > 500 ? 'rgba(48,62,77,0.80)' : '#FFF',
	backgroundColor: window.innerWidth > 500 ? '#FFF' : 'rgba(48,62,77,0.80)'
}
