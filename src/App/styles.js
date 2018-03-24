export const mainContainer = {
	height: '100vh',
	display: 'grid',
	gridTemplate: `
		'navbar' 80px
		'content' 1fr
		'footer' 80px
	`
}

export const contentContainer = {
	gridArea: 'content'
}