import axios from "axios"

export const api = axios.create({

  baseURL: "https://agencia-viagens.herokuapp.com",
})
export const createAuth = async (email, senha) => {

  return api.post("/auth", { email, senha })
}

