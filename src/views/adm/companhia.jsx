import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import NavbarADM from '../../components/navigate/navbarADM';
import CompanhiaService from "../../services/CompanhiaService";

const Companhia = () => {
    const [nome, setNome] = useState("");
    const [cnpj, setCnpj] = useState("");
    const { id } = useParams();
    const [companhias, setCompanhias] = useState([]);

    useEffect(() => {
        getAllComp();
    }, []);

    const getAllComp = () => {
        CompanhiaService.getAllComp()
        .then((response) => {
            setCompanhias(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const deletar = (id) => {
        CompanhiaService.deleteComp(id)
        .then(() => {
            getAllComp();
          })
          .catch((error) => {
            console.log(error);
          });
    };

    // const createOrUpdateComp = (e) => {
    //     e.preventDefault();
    //     const companhia = {
    //         id: 0,
    //         nome: nome,
    //         cnpj: cnpj
    //     };

    //     if(id) {
    //         //update
    //         CompanhiaService.updateComp(id, companhia)
    //     } else {
    //         CompanhiaService.createComp(companhia)
    //     };
    // }

    useEffect (() => {
        function getCompById() {
            if(id){
                CompanhiaService.getCompById(id)
                .then((response) => {
                    setNome(response.data.nome);
                    setCnpj(response.data.cnpj)
                })
                .catch((error) => {
                    console.log(error);
                })
            }
        }
        getCompById()
    }, [id]);

    const companhia = {
        cnpj: cnpj,
        nome: nome
    }

    const submit = async (e) => {
        e.preventDefault()
        try {
            const obj = localStorage.getItem("user")
            const url = "https://agencia-viagens.herokuapp.com/adm/companhias/";
            const config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + JSON.parse(obj).token
                },
                body: JSON.stringify(companhia)
            }
            const response = await fetch(url, config)
            if (response.ok) {
                return response
            }
        } catch (error) {
            console.log(error)
        }
    }
    
    const update = async (id, e) => {
        e.preventDefault()
        try {
            const obj = localStorage.getItem("user")
            const config = {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + JSON.parse(obj).token
                },
                body: JSON.stringify(companhia)
            }
            const response = await fetch(`https://agencia-viagens.herokuapp.com/adm/companhias/${id}`, config)
            if (response.ok) {
                return response
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <NavbarADM />
            <main className="container conteudo my-4 p-4">
                <h1 className="mb-4">Companhias</h1>
                <form className="my-4">
                    <h3>Cadastro de companhia</h3>
                    <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="name" className="form-label">Nome da
                                Companhia</label>
                            <input type="text" className="form-control"
                                id="name"
                                name="name"
                                onChange={(e) => setNome(e.target.value)}
                                required />
                        </div>
                        <div className="col">
                            <label htmlFor="cnpj" className="form-label">CNPJ</label>
                            <input type="text" className="form-control"
                                id="cnpj"
                                name="cnpj"
                                required
                                placeholder="00.000.000/0000-00"
                                onChange={(e) => setCnpj(e.target.value)} />
                        </div>
                    </div>
                    <div className="mt-4">
                        <button onClick={(e) => submit(e)} type="submit" className="btn btn-primary">Cadastrar</button>
                    </div>
                </form>
                <h3>Companhias cadastradas</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>CNPJ</th>
                            <th>Nome</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {companhias.map(com => (
                            <tr key={com.id}>
                                <td>{com.id}</td>
                                <td>{com.cnpj}</td>
                                <td>{com.nome}</td>
                                <td className="d-flex justify-content-start align-items-center">
                                    <div>
                                        <button type="button" className="btn" data-bs-toggle="modal" data-bs-target={"#exampleModal" + com.id}>
                                            <i className="gg-pen" />
                                        </button>


                                        <div className="modal fade" id={"exampleModal" + com.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="staticBackdropLabel">Atualização</h5>
                                                        <button type="button" className="btn-close"
                                                            data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <form>
                                                        <div className="modal-body">
                                                            <label htmlFor="idUpdate" className="form-label">ID</label>
                                                            <input
                                                                type="text" className="form-control mb-3"
                                                                value={com.id}
                                                                readOnly/>
                                                            <label htmlFor="nameUpdate" className="form-label">Nome da Companhia</label>
                                                            <input type="text" className="form-control mb-3"
                                                                id="nameUpdate"
                                                                name="nameUpdate"
                                                                defaultValue={com.nome}
                                                                onChange={(e) => setNome(e.target.value)}
                                                                required />
                                                            <label htmlFor="cnpjUpdate" className="form-label">CNPJ</label>
                                                            <input type="text" className="form-control"
                                                                id="cnpjUpdate"
                                                                name="cnpjUpdate"
                                                                defaultValue={com.cnpj}
                                                                onChange={(e) => setCnpj(e.target.value)}
                                                                required />
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-secondary"
                                                                data-bs-dismiss="modal">Cancelar</button>
                                                            <button onClick={(e) => update(com.id, e)}  type="submit" className="btn btn-primary" data-bs-dismiss="modal">Atualizar</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button onClick={() => deletar(com.id)} className="btn"><i
                                        className="gg-close"></i></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        </div>
    )
}

export default Companhia;