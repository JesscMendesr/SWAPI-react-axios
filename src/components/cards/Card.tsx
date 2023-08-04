import React, { useEffect, useState } from 'react'
import { Personagem } from '../../models/Personagem';
import { api } from '../../service/Service';
import "./Card.css"

function Card() {

  
  const [allData, setAllData] = useState<Personagem[]>([])


  const getAll = async () => {
    try{
      const response = await api.get("/people/");
      const dados = response.data.results
      setAllData(dados)
      console.log(dados);
    }catch(error) {
      console.log(error)
    }
    
  }

  useEffect(() => {
    getAll()
  }, [])


  return (
    <>
    {
      allData.length === 0 ? <p>Carregando...</p> : (
        allData.map((item) =>(
          <>
          <div className='container-card'>
            <h3>{item.name}</h3>
            <ul>
              <li>Gender: <span>{item.gender}</span></li>
              <li>Birth Year: <span>{item.birth_year}</span></li>
              <li>Height: <span>{item.height}</span></li>
              <li>Mass: <span>{item.mass}</span></li>
            </ul>
          </div>
          
          <div></div>
          </>
        ))
      )
    }
    </> 
  )
}

export default Card