import { useState, useEffect } from 'react'
import { Card } from './components/Card/Card'
import produtos from './constants/produtos.json'
import { api } from "./api/rmApi"
import style from './App.module.css'
import { CardRaM } from './components/CardRaM/CardRaM'
import { AlertComponent } from './components/Alert/Alert'
import { Mapa } from './components/Mapa/mapa'

function App() {
  const [show, setShow] = useState("")
  const [data, setData] = useState([])
  const [page, setPage] = useState("")
  const [name, setName] = useState("")


  useEffect(() => {
    api.get(`/character/?page=${page}&name=${name}`).then((response) => {
      if (!response.data.results) {
        console.log("Vazio")
      }
      setData(response.data.results)
      console.log(response.data.results)
    }).catch((error) => {
      if (error.response.status === 404) {
        alert("Essa página não contém este personagem")
        return;
      }
      console.error(error)
    })
  }, [page])

  return (
    <>
      <div className={style.wrapBtns}>
        <button onClick={() => setShow("prod")}>Produtos</button>
        <button onClick={() => setShow("api")}>API</button>
        <button onClick={() => setShow("map")}>Mapa</button>
      </div>
      <div className={style.wrapPage}>
        <h1 className={style.title}>Exercícios de manutenção</h1>
        {show === "prod" &&
          <>
            <div className={style.title}>
              <h2>Showroom de produtos</h2>
            </div>
            <div className={style.cardContainer}>
              {produtos.map((item) => {
                return (
                  <Card name={item.name} desc={item.desc} value={item.value} image={item.image} category={item.category} status={item.status} key={item.id} />
                )
              })}
            </div>
          </>
        }
        {show === "api" &&
          <>
            <div className={style.title}>
              <h2>Rick and Morty API</h2>
              <div>
                <input type="text" placeholder={`1/42`} value={page} onChange={(event) => setPage(event.target.value)} style={{ marginRight: '1em' }} />
                <input type="text" placeholder={"Nome..."} value={name} onChange={(event) => setName(event.target.value)} />
              </div>
            </div>
            <div className={style.cardContainer}>
              {data.map((item) => {
                return (
                  <div key={item.id}>
                    <CardRaM name={item.name} species={item.species} status={item.status} type={item.type} gender={item.gender} image={item.image} />
                    {/* <button onClick={() => {}}>Info</button> */}
                  </div>
                )
              })}
            </div>
          </>
        }
        {show === "map" &&
          <>
            <div className={style.title}>
              <h2>Mapa</h2>
            </div>
            <div className={style.mapContainer}>
              <Mapa />
            </div>
          </>
        }
      </div>
    </>
  )
}

export default App
