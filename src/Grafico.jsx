import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { AreaChart, Area, Tooltip } from 'recharts';
import { Link } from 'react-router-dom'
import style from './App.module.css'


function Grafico(){
    const data = [
        {name: 'Primeiro', uv: 400, pv: 2400, amt: 2400},
        {name: 'Segundo', uv: 300, pv: 2400, amt: 2400},
        {name: 'Terceiro', uv: 800, pv: 2400, amt: 2400},
        {name: 'Quarto', uv: 550, pv: 2400, amt: 2400}];
    return(
    <>
        <div  className={style.wrapPage}>
      <h1>Graficos</h1>

    </div>
    <div className={style.wrapBtns}>
    <Link className={style.botao} to={`/Produto`}>Produtos</Link>
    <Link className={style.botao} to={`/Api`}>Api</Link>
    <Link className={style.botao} to={`/Mapa`}>Mapa</Link>
    <Link className={style.botao} to={`/Grafico`}>Graficos</Link>
    </div>
        <div className={style.grafico}>
            <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            </LineChart>

        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
        </div>
    </>
    )
}

export default Grafico