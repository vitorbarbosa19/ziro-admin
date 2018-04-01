export const main = {
	height: '100vh',
	display: 'grid',
	gridTemplate: `
		'navbar' ${window.innerWidth > 500 ? '80px' : '60px'}
		'content' 1fr
		'footer' ${window.innerWidth > 500 ? '80px' : '60px'}
	`,
	fontFamily: 'Work Sans',
	fontSize: '1.6rem',
	color: 'rgba(48,62,77,0.60)',
	textAlign: 'center'
}

export const content = {
	gridArea: 'content',
	placeSelf: 'center'
}
