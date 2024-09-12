
import style from './App.module.css'
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import "leaflet-defaulticon-compatibility";

import { Link } from 'react-router-dom'


function App() {

  return (
    <>
    <div  className={style.wrapPage}>
      <h1>Exercícios de manutenção</h1>

    </div>
    <div className={style.wrapBtns}>
    <Link className={style.botao} to={`/Produto`}>Produtos</Link>
    <Link className={style.botao} to={`/Api`}>Api</Link>
    <Link className={style.botao} to={`/Mapa`}>Mapa</Link>
    <Link className={style.botao} to={`/Grafico`}>Graficos</Link>
    </div>
    </>
  )
}

export default App
