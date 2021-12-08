
const _PRODUTOS = '_PRODUTOS'

export default class ProdutoService {

    salva = (produto) => {
        let produtos = localStorage.getItem(_PRODUTOS)

        if( !produtos ) {
            produtos = []
        } else {
            produtos = JSON.parse(produtos)
        }

        produtos.push(produto)

        localStorage.setItem(_PRODUTOS, JSON.stringify(produtos) )
    }
}