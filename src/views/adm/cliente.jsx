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
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map(cliente => (
              <tr key={cliente.id}>
                <td>{cliente.id}</td>
                <td>{cliente.nome}</td>
                <td>{cliente.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main></div>
  )
}

export default Cliente;