/* eslint-disable react/prop-types */
import style from '../App.module.css'

export const Card = ({status, name, desc, value, category, image}) => {

  return(

      <div className={style.card}>
          <div className={status ? style.available : style.unavailable}>{status}</div>
          <h1>{name}</h1>
          <h2>{desc}</h2>
          <p>{value}</p>
          <p>{category}</p>
          <img src={image} alt={name} width={150} height={"auto"}/>
      </div>
  )
}