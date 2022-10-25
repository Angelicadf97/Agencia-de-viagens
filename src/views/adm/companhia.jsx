import React from 'react';
import NavbarADM from '../../components/navigate/navbarADM'

const Companhia = () => {
    // const [nome, setNome] = useState("");
    // const [cnpj, setCnpj] = useState("");
    // const [comp, setComp] = useState([]);
    
    // useEffect(() => {
    //     async function fetchMyAPI() {
    //         const response = await fetch('https://agencia-viagens.herokuapp.com/adm/companhia');
    //         setComp(await response.json());
    //     }
    //     fetchMyAPI();
    // }, []);

    // const submit = async (e) => {
    //     e.preventDefault()
    //     console.log(JSON.stringify(comp))
    //     try {
    //         const config = {
    //             method: 'POST',
    //             headers: {
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/json',
    //             },
                
    //             body: JSON.stringify(comp)
    //         }
    //         const response = await fetch("https://agencia-viagens.herokuapp.com/adm/companhia/cadastrar", config)
    //         //const json = await response.json()
    //         if (response.ok) {
    //             console.log("deu certo")
    //             return response
    //         } else {
    //             console.log("deu errado")
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    return (
        <div>
            <NavbarADM />
            <main class="container conteudo my-4 p-4">
                <h1 class="mb-4">Companhias</h1>
                <form class="my-4" action="./companhia-save">
                    <h3>Cadastro de companhia</h3>
                    <div class="row mb-3">
                        <div class="col">
                            <label for="name" class="form-label">Nome da
                                Companhia</label> <input type="text" class="form-control" id="name"
                                    name="name" required />
                        </div>
                        <div class="col">
                            <label for="cnpj" class="form-label">CNPJ</label> <input
                                type="text" class="form-control" id="cnpj" name="cnpj" required
                                placeholder="00.000.000/0000-00" />
                        </div>
                    </div>
                    <div class="mt-4">
                        <input type="submit" value="Cadastrar" class="btn btn-primary" />
                    </div>
                </form>
                <h3>Companhias cadastradas</h3>
                <table class="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>CNPJ</th>
                            <th>Nome</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td class="d-flex justify-content-start align-items-center">
                                <div>

                                    <button class="btn" type="button" data-bs-toggle="modal"
                                        data-bs-target="#staticBackdrop<%=c.getId()%>">
                                        <i class="gg-pen"></i>
                                    </button>


                                    <div class="modal fade" id="staticBackdrop<%=c.getId()%>"
                                        data-bs-backdrop="static" data-bs-keyboard="false"
                                        tabindex="-1" aria-labelledby="staticBackdropLabel"
                                        aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="staticBackdropLabel">Atualização</h5>
                                                    <button type="button" class="btn-close"
                                                        data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <form action="./companhia-update">
                                                    <div class="modal-body">
                                                        <label for="idUpdate" class="form-label">ID</label> <input
                                                            type="text" class="form-control mb-3" id="idUpdate"
                                                            name="idUpdate" value="<%=c.getId()%>" readonly /> <label
                                                                for="nameUpdate" class="form-label">Nome da
                                                            Companhia</label> <input type="text"
                                                                class="form-control mb-3" id="nameUpdate"
                                                                name="nameUpdate" value="<%=c.getNome()%>" required />
                                                        <label for="cnpjUpdate" class="form-label">CNPJ</label> <input
                                                            type="text" class="form-control" id="cnpjUpdate"
                                                            name="cnpjUpdate" readonly value="<%=c.getCnpj()%>" />
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary"
                                                            data-bs-dismiss="modal">Cancelar</button>
                                                        <button class="btn btn-primary" type="submit">Atualizar</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div> <a href="./companhia-delet?id=<%=c.getId()%>"
                                    onclick="return confirm('Deseja Excluir?')" class="btn"><i
                                        class="gg-close"></i></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </main>
        </div>
    )
}

export default Companhia;