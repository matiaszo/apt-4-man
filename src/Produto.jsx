import { PlayerCard } from './components/Card'
import produtos from './constants/produtos.json'
import style from './App.module.css'
import { Link } from 'react-router-dom'

function Produto(){
    return(
        <>
            <div  className={style.wrapPage}>
      <h1>Produtos</h1>

    </div>
    <div className={style.wrapBtns}>
    <Link className={style.botao} to={`/Produto`}>Produtos</Link>
    <Link className={style.botao} to={`/Api`}>Api</Link>
    <Link className={style.botao} to={`/Mapa`}>Mapa</Link>
    <Link className={style.botao} to={`/Grafico`}>Graficos</Link>
    </div>
        <h2>Showroom de produtos</h2>
          <div className={style.cards}>
          {produtos.map((item) => {
            
            return(
              
              <PlayerCard name={item.name} desc={item.desc} value={item.value} image={item.image} key={item.id} category={item.category} status={item.status}/>
            )
           })}
          </div>
      </>
    )
}

export default Produto