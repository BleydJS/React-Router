import { useParams, Link } from "react-router-dom"      //nos traz um objeto com todos os parametros da url
import { useFetch } from "../hooks/useFetch"

const Product = () => {
    // Rota dinamica
    const { id } = useParams()       /*eu sei que é ID pq no app.js eu coloque products/:id .. O id daqui faz referencia ao de la.*/

    //Carregamento de dado individual
    const url = "http://localhost:3000/products/" + id
    const {data: product, loading, error} = useFetch(url)

    console.log(product)
  return (
  <>      
        <p>ID do produto: {id}</p>
        {error && <p>Ocorreu um erro...</p>}
        {loading && <p>Carregando...</p>}
        {product && (
            <div>
                <h1>{product.name}</h1>
                <p>{product.price}</p>
                {/*Nested routes*/}
                <Link to={`/products/${product.id}/info`}>Mais informações</Link>
            </div>
        )}
    </>
  )
}

export default Product