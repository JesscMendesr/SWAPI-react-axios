import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Personagem } from '../../models/Personagem';
import { buscaURL } from '../../service/Service';

function PersonagemIndividual() {

  const { url } = useParams<{url: string}>();
  console.log(url)
  const [people, setPeople] = useState<Personagem>()

  async function findByUrl(url:string) {
    buscaURL(`${url}`, setPeople)
  }


  useEffect(() =>{
    if( url != undefined){
      findByUrl(url)
    }
  }, [url])


  return (
    <div>PersonagemIndividual</div>
  )
}

export default PersonagemIndividual