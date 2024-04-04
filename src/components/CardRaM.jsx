/* eslint-disable react/prop-types */
import * as bootstrap from 'bootstrap'
import style from './CardStyles.module.css'
export const CardRaM = ({ name, status, species, type, gender, image }) => {
  return (
    <div className={style.card}>
      <h1>{name}</h1>
      <h2>{species}</h2>
      <p>{status}</p>
      <p>{type}</p>
      <p>{gender}</p>
      <div className={style.image}>
        <img src={image} alt={name} width={300} height={200} className={style.img}/>
      </div>
    </div>
  )
}