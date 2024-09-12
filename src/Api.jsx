import { ApiCard} from './components/Card'
import { useState, useEffect } from 'react'
import { api } from "./api/rmApi"
import { Link } from 'react-router-dom'
import style from './App.module.css'
import Modal from './Modal.jsx'

function Api(){
    const [data, setData] = useState([])
    const [page, setPage] = useState("")
    const [name, setName] = useState("")
    const [alert, setAlert] = useState(false)
    const [modal, setModal] = useState()


    useEffect(() => {
        api.get(`/character/?page=${page}&name=${name}`).then((response) => {
          if(!response.data.results){
            setAlert(false)
          }else{
            setAlert(true)  
          }
          setData(response.data.results)
        }).catch((error) => {
          if(error.response.status === 404){
            setAlert(false)
          }
          console.error(error)
        })
      }, [page, name])

    return(
        <>
        <div  className={style.wrapPage}>
      <h1>Api</h1>

    </div>
    <div className={style.wrapBtns}>
    <Link className={style.botao} to={`/Produto`}>Produtos</Link>
    <Link className={style.botao} to={`/Api`}>Api</Link>
    <Link className={style.botao} to={`/Mapa`}>Mapa</Link>
    <Link className={style.botao} to={`/Grafico`}>Graficos</Link>
    </div>
        <h2>Rick and Morty API</h2>
            <div>
               <input type="text" placeholder="1/43" value={page} onChange={(event) => setPage(event.target.value)}/>
               <input type="text" placeholder="name" value={name} onChange={(event) => setName(event.target.value)}/>
               
            </div>
            {alert? 
            <div className={style.rick}>
            {modal !== undefined && <Modal data={data[modal]} close={() => setModal()}/>}
            {data.map((item, index) => { 
             return(
                 <>
                 <div onClick={() => setModal(index)} key={item.id}>
                <ApiCard name={item.name} desc={item.species} value={item.gender} image={item.image}/>
              </div>
              </>
              )
           })}
            </div>
            : <p>Este personagem não existe</p>}
            </>
    )
}
export default Api