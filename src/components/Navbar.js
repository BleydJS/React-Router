import "./Navbar.css"
import { Link } from "react-router-dom"   /*para criar a navbar é preciso desse link que esta dentro do pacote dom..
essa parte do codigo <Link to="/">Home</Link> é a mesma coisa que  <a href="/">Home</a> a diferença que o primeiro ele faz o redirecionamentotrocando o componente, e o "a" não, ele recarrega a pagina...por isso não se usa "a" no react, a gente não quer comportartamento de reload, queremos comportamente de uma SPA ...
Agora deve ser importado no app.js*/

const Navbar = () => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link>
    </nav>
  )
}

export default Navbar