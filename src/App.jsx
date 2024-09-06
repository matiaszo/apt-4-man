import { useState, useEffect } from 'react'
import { ApiCard, PlayerCard } from './components/Card'
import produtos from './constants/produtos.json'
import { api } from "./api/rmApi"
import style from './App.module.css'
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import "leaflet-defaulticon-compatibility";

import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Marker } from 'react-leaflet'
import { Popup } from 'react-leaflet'


function App() {
  const [show, setShow] = useState("")  
  const [data, setData] = useState([])
  const [page, setPage] = useState("")
  const [name, setName] = useState("")
  const [alert, setAlert] = useState(false)


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

  return (
    <>
    <div className={style.wrapBtns}>
      <button onClick={() => setShow("prod")}>Produtos</button>
      <button onClick={() => setShow("api")}>API</button>
      <button onClick={() => setShow("map")}>Mapa</button>
    </div>
    <div  className={style.wrapPage}>
      <h1>Exercícios de manutenção</h1>
     {show === "prod" &&
        <>
          <h2>Showroom de produtos</h2>
            <div className={style.cards}>
            {produtos.map((item) => {
              
              return(
                
                <PlayerCard name={item.name} desc={item.desc} value={item.value} image={item.image} key={item.id} category={item.category} status={item.status}/>
              )
             })}
            </div>
        </>
      }
     {show === "api" &&
        <>
          <h2>Rick and Morty API</h2>
            <div>
               <input type="text" placeholder="1/43" value={page} onChange={(event) => setPage(event.target.value)}/>
               <input type="text" placeholder="name" value={name} onChange={(event) => setName(event.target.value)}/>
               
            </div>
            {alert? 
            <div>
            {data.map((item) => { 
             return(
              <div key={item.id}>
                <ApiCard name={item.name} desc={item.species} value={item.gender} image={item.image} />
                {/* <button onClick={() => {}}>Info</button> */}
              </div>
              )
           })}
            </div>
            : <p>Este personagem não existe</p>}
       </>
      }
     {show === "map" &&
        <>
      <h2>Mapa</h2>  
          <div style={{display:'flex', justifyContent: 'center'}}>
          <MapContainer style={{width:'90%', height: '700px'}} center={[-25.4249548,-49.2725292]} zoom={16} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[-25.4249548,-49.2725292]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
          </div>
         </>
      }
    </div>
    </>
  )
}

export default App
