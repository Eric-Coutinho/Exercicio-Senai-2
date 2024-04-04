/* eslint-disable react/prop-types */
import style from './CardRaMStyles.module.css'

export const CardRaM = ({ name, status, species, type, gender, image }) => {
    return (
        <div className={style.card}>
            <h1>{name}</h1>
            <h2>{species}</h2>
            <div className={style.typeStatus}>
                <p>{gender}</p>
                <p>{type}</p>
                <p>{status}</p>
            </div>
            <div className={style.image}>
                <img src={image} alt={name} width={300} height={200} className={style.img} />
            </div>
        </div>
    )
}