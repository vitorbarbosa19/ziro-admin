export const main = {
	height: '100vh',
	display: 'grid',
	gridTemplate: `
		'navbar' 80px
		'content' 1fr
		'footer' 80px
	`,
	fontFamily: 'Work Sans',
	fontSize: window.innerWidth > 500 ? '1.6rem' : '1.5rem',
	color: 'rgba(48,62,77,0.80)'
}

export const content = {
	gridArea: 'content'
}