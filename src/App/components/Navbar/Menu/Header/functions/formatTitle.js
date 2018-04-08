const formatTitle = (title) => {
	return title.replace('/','').split('-').map( ([ firstLetter, ...restOfLetters ]) => {
		return [firstLetter.toUpperCase(), ...restOfLetters].join('')
	}).join(' ')
}

export default formatTitle
