import Card from '../../components/cards/Card';
import { Personagem } from '../../models/Personagem';
import { api } from '../../service/Service'
import React, { useEffect, useState } from 'react'
import './Home.css'


function Home() {

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
    <section className='container'>
      <Card/>
    </section>
    </> 
    
  )
}

export default Home