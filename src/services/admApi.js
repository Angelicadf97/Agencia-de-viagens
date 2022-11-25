import axios from "axios"

export const admApi = axios.create({

  baseURL: "https://agencia-viagens.herokuapp.com/",
})
export const createAuth = async (email, senha) => {

  return admApi.post("/auth/adm", { email, senha })
}

export const getToken = () => {

  return 
}

