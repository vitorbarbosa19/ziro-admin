import gql from 'graphql-tag'

export default gql`
	query ALL_PRODUCTS {
		allProducts {
			referencia
			descricao
			preco
			grade {
				estoque
			}
		}
	}
`