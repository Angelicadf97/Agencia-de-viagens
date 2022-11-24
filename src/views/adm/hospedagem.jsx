import React, { useState, useEffect } from 'react';
// import { useParams } from "react-router-dom";
import NavbarADM from '../../components/navigate/navbarADM';

const Hospedagem = () => {
    const [nome, setNome] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [tipo, setTipo] = useState("");
    const [cidade, setCidade] = useState("");
    const [preco, setPreco] = useState("");
    const [desconto, setDesconto] = useState("");
    
    // const { id } = useParams();
    // const [imagem, setImagem] = useState("");
    const [hospedagens, setHospedagens] = useState([]);

    // const fortmatResponse = (res) => {
    //     return JSON.stringify(res, null, 2);
    // };

    useEffect(() => {
        async function fetchMyAPI() {
            const obj = localStorage.getItem("user")
            const response = await fetch('http://localhost:8080/adm/hospedagens/', {
                headers: {
                    'Authorization': 'Bearer ' + JSON.parse(obj).token
                }
            });
            setHospedagens(await response.json());
        }
        fetchMyAPI();
    }, []);


    const hospedagem = {
        id: 0,
        cnpj: cnpj,
        nome: nome,
        tipo: tipo,
        cidade: cidade,
        preco: preco,
        desconto: desconto
        // imagem: imagem
    }
    const submit = async (e) => {
        e.preventDefault()
        try {
            const obj = localStorage.getItem("user")
            const config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + JSON.parse(obj).token
                },

                body: JSON.stringify(hospedagem)
            }
            const response = await fetch("http://localhost:8080/adm/hospedagens/", config)
            //const json = await response.json()
            if (response.ok) {
                console.log("deu certo")
                return response
            } else {
                console.log("deu errado")
            }
        } catch (error) {
            console.log(error)
        }
    }

    const [municipios, setMunicipios] = useState([]);
    // API
    useEffect(() => {
        async function fetchMyAPI() {
            const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/municipios/`);
            setMunicipios(await response.json());
        }
        fetchMyAPI();
    }, []);

    // const [city, setCity] = useState([]);
    // async function getCidadeById() {
    //     const id = hospedagem.id.current.value;
    //     console.log(id)
    //     if (id) {
    //         const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${id}`);
    //         const result = {
    //             cidade: response.cidade,
    //             uf: response.uf
    //         };
    //         setCity(fortmatResponse(result));
    //     }

    // }getCidadeById();

    // useEffect(() => {
    //     function getCityById() {
    //         if (id) {
    //             const cityDate = fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${345326}`)
    //                 .then((response) => {
    //                     setCNome(response.data.nome);
    //                     setCUf(response.data.uf)
    //                 })
    //                 .catch((error) => {
    //                     console.log(error);
    //                 })
    //         }

    //     }
    //     getCityById()
    // }, [id]);


    // const [cNome, setCNome] = useState("");
    // const [cUf, setCUf] = useState("");


    return (
        <div>
            <NavbarADM />
            <main className="container conteudo my-4 p-4">
                <h1 className="mb-4">Hospedagens</h1>
                <form className="my-4" onSubmit={submit}>
                    <h3>Cadastro de hospedagem</h3>
                    <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="name" className="form-label">Nome da Hospedagem</label>
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
                    <div className="row mb-4">
                        <div className="col">
                            <label htmlFor="type" className="form-label">Tipo de Hospedagem</label>
                            <select className="form-select"
                                id="type"
                                name="type"
                                required
                                onChange={(e) => setTipo(e.target.value)}>
                                <option selected>Escolha um tipo de hospedagem</option>
                                <option defaultValue="hostel">Hostel</option>
                                <option defaultValue="hotel">Hotel</option>
                                <option defaultValue="pousada">Pousada</option>
                                <option defaultValue="resort">Resort</option>
                            </select>
                        </div>
                        <div className="col">
                            <label htmlFor="price" className="form-label">Valor da diária</label>
                            <input type="number" className="form-control"
                                id="price"
                                name="price"
                                required
                                onChange={(e) => setPreco(e.target.value)} />
                        </div>
                        <div className="col">
                            <label htmlFor="desconto" className="form-label">Desconto</label>
                            <input type="number" className="form-control"
                                id="desconto"
                                name="desconto"
                                required
                                onChange={(e) => setDesconto(e.target.value)} />
                        </div>
                        <div className="form-group col">
                            <label htmlFor="cidade" className="form-label"> Cidade </label>
                            <select className="form-control"
                                id="cidade"
                                name="cidade"
                                onChange={(e) => setCidade(e.target.value)}>
                                {municipios.map(municipio => (
                                    <option key={municipio.id} value={municipio.id}>{municipio.nome} - {municipio.microrregiao.mesorregiao.UF.sigla}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mt-4">
                            <input type="submit" defaultValue="Cadastrar"
                                className="btn btn-primary" />
                        </div>
                    </div>
                </form>
                <h3>Hospedagens cadastradas</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>CNPJ</th>
                            <th>Nome</th>
                            <th>Tipo</th>
                            <th>Valor da diária</th>
                            <th>Desconto</th>
                            <th>Cidade</th>
                            <th>Uf</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {hospedagens.map(hos => (
                            <tr key={hos.id}>
                                <td>{hos.id}</td>
                                <td>{hos.cnpj}</td>
                                <td>{hos.nome}</td>
                                <td>{hos.tipo}</td>
                                <td>R$ {hos.preco_dia}</td>
                                <td>{hos.desconto}%</td>
                                <td>{hos.cidade}</td>
                                <td>{hos.cidade}</td>
                                <td className="d-flex justify-content-start align-items-center">
                                    <div>
                                        <button className="btn" type="button" data-bs-toggle="modal"
                                            data-bs-target="#staticBackdrop<%=h.getId()%>">
                                            <i className="gg-pen"></i>
                                        </button>

                                        <div className="modal fade" id="staticBackdrop<%=h.getId()%>"
                                            data-bs-backdrop="static" data-bs-keyboard="false"
                                            tabindex="-1" aria-labelledby="staticBackdropLabel"
                                            aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="staticBackdropLabel">Atualização</h5>
                                                        <button type="button" className="btn-close"
                                                            data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <form action="./hospedagem-update">
                                                        <div className="modal-body">
                                                            <label htmlFor="idUpdate" className="form-label">ID</label>
                                                            <input type="text" className="form-control mb-3" id="idUpdate"
                                                                name="idUpdate" defaultValue="<%=h.getId()%>" readOnly />
                                                            <label htmlFor="nameUpdate" className="form-label">Nome da Hospedagem</label>
                                                            <input type="text" className="form-control mb-3"
                                                                id="nameUpdate" name="nameUpdate" defaultValue="<%=h.getNome()%>"
                                                                required />
                                                            <label htmlFor="cnpjUpdate" className="form-label">CNPJ</label>
                                                            <input type="text" className="form-control" id="cnpjUpdate"
                                                                name="cnpjUpdate" readOnly
                                                                defaultValue="<%=h.getCnpj()%>" />
                                                            <label htmlFor="typeUpdate" className="form-label">Tipo de Hospedagem</label> <select
                                                                className="form-select" id="typeUpdate" name="typeUpdate" required>
                                                                <option selected>Escolha um tipo de hospedagem</option>
                                                                <option defaultValue="Hostel">Hostel</option>
                                                                <option defaultValue="Hotel">Hotel</option>
                                                                <option defaultValue="Pousada">Pousada</option>
                                                                <option defaultValue="Resort">Resort</option>
                                                            </select>
                                                            <label htmlFor="priceUpdate" className="form-label">Valor da
                                                                diária</label>
                                                            <input type="number" className="form-control"
                                                                id="priceUpdate" name="priceUpdate" required defaultValue="<%=h.getPrecoDia()%>" />
                                                            <div className="form-group">
                                                                <label htmlFor="idLocalUpdate" className="form-label"> Cidade </label> <select
                                                                    id="idLocalUpdate" name="idLocalUpdate" className="form-select" >
                                                                    <option defaultValue="DEFAULT">Escolha uma cidade</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-secondary"
                                                                data-bs-dismiss="modal">Cancelar</button>
                                                            <button className="btn btn-primary" type="submit">Atualizar</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div> <a href="./hospedagem-delet?id=<%=h.getId()%>"
                                        onclick="return confirm('Deseja Excluir?')" className="btn"><i
                                            className="gg-close"></i></a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        </div>
    )
}

export default Hospedagem