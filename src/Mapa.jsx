import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Marker } from 'react-leaflet'
import { Popup } from 'react-leaflet'
import style from './App.module.css'
import { Link } from 'react-router-dom'


function Mapa(){
    return(
        <>
            <div  className={style.wrapPage}>
      <h1>Mapa</h1>

    </div>
    <div className={style.wrapBtns}>
    <Link className={style.botao} to={`/Produto`}>Produtos</Link>
    <Link className={style.botao} to={`/Api`}>Api</Link>
    <Link className={style.botao} to={`/Mapa`}>Mapa</Link>
    <Link className={style.botao} to={`/Grafico`}>Graficos</Link>
    </div>

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
    )
}
export default Mapa