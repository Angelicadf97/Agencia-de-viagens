import React, { useState, useEffect } from 'react';
import NavbarADM from '../../components/navigate/navbarADM'

const Cliente = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      const obj = localStorage.getItem("user")
      const response = await fetch('http://localhost:8080/', {
        headers: {
          'Authorization': 'Bearer ' + JSON.parse(obj).token
        }
      });
      setClientes(await response.json());
    }
    fetchMyAPI();
  }, []);

  // const fortmatResponse = (res) => {
  //   return JSON.stringify(res, null, 2);
  // };
  const [city, setCity] = useState([]);
  useEffect((id) => {
    async function getCidadeById() {
      console.log(id)
      const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${id}`);
      // const result = {
      //   cidade: response.cidade,
      //   uf: response.uf
      // };
      setCity(await response.json());
    }
    getCidadeById();
  }, []);

  return (
    <div>
      <NavbarADM />
      <main className="container conteudo my-4 p-4">
        <h1>Clientes cadastrados</h1>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>CPF</th>
              <th>Cidade</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map(cliente => (
              <tr key={cliente.id}>
                <td>{cliente.id}</td>
                <td>{cliente.nome}</td>
                <td>{cliente.cpf}</td>
                <td >{city.nome}</td>
                <td>{cliente.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main></div>
  )
}

export default Cliente;