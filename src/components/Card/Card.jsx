/* eslint-disable react/prop-types */
import * as bootstrap from 'bootstrap'
import style from './CardStyles.module.css'

export const Card = ({ name, desc, value, image, category, status }) => {
  var statusElement = ""
  if (status == "true") {
    statusElement = "🟢"
  }
  else {
    statusElement = "🔴"
  }

  return (
    <div className={style.card}>
      <div className={style.titleCard}>
        <h1>{name}</h1>
        <p>{statusElement}</p>
      </div>
      <p>{category}</p>
      <h2>{desc}</h2>
      <p>{value}</p>
      <div className={style.image}>
        <img src={image} alt={name} width={300} height={200} className={style.img} />
      </div>
    </div>
  )
}