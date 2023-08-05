import axios from "axios";

export const api = axios.create({
  baseURL: "https://swapi.dev/api/"
})


export const buscaURL = async(url:any, setDado:any) => {
  const api = axios.create({
    baseURL: url
  })
  const resposta = await api.get("")
  setDado(resposta.data)
}