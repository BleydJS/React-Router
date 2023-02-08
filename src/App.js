/*Primeiro criar uma pasta data e dentro dela criar um db.json com os objetos...obs: isso é papel do back end, aqui é para fins de testes.
Em "package.json"  vc adciona em dbug, logo abaixo de eject um "server": "json-server --watch data/db.json" não esquece da virgula antes, pois é como se fosse atributos...ai vc da um "npm i json-server react-router-dom"(instala os pacotes que faltam) e como são so 2 pacotes pode instalar em uma linha só...após isso primeiro npm run server pra abrir na 3000 e depois em outro terminal npm start 
Agora vamos configurar o react router, uma vez configurado depois não precisa configurar mais
Para configurar o react router vamos precisar de 3 elementos de REACT-ROUTER-DOM que vc instalou
BrowserRouter: Define a area do nosso app que vai trocar as paginas
Routes: Define as rotas
Route: Um elemento deste para cada rota, configura com path e componente de rota
para facilitar a navegação deve ser criado um componente "NAVBAR" (barra de navegação, é melhor do que ficar digitando an barra de endereço manualmente o endereço de destino*/



import './App.css';

//1 - config react router
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'

//pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Info from './pages/Info';
import NotFound from'./pages/NotFound'
import Serch from './pages/Serch';
//components
import Navbar from './components/Navbar';
import SerchForm from './components/SerchForm';


function App() {
  return (
    <div className="App">       

      <h1>React Router</h1>    {/*elementos que estão fora do ROUTER seram repetidos em todas as paginas, o que esta dentro de router é o que vai sempre mudar*/}
      <BrowserRouter> 
        <Navbar/>
         {/*Serch*/}
         <SerchForm />
        <Routes>
          <Route path='/' element={<Home />}/>      {/*o Home é um componente, quando clica nele vai para outro local, e deve-se ser criada UMA PASTA CHAMADA PAGES que vão ter esses "componentes" que na verdade são as paginas..é criada no mesmo esquema de componentes*/}
          <Route path='/about' element={<About />}/>

          {/*Rota dinâmica*/}
          <Route path="/products/:id" element={<Product/>}/>
          {/*Nested route*/}
          <Route path="/products/:id/info" element={<Info/>}/>
          {/*Serch*/}
          <Route path='/serch' element= {<Serch />} /> 
          {/*Redirect*/}
          <Route path='/company' element= {<Navigate to= '/about' />} />   
          {/*404 not found*/}
          <Route path='*' element = {<NotFound/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
