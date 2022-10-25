import React from 'react'

const aeroporto = () => {
    return (
        <div><main class="container conteudo my-4 p-4">
            <h1 class="mb-4">Aeroportos</h1>
            <form class="my-4" action="./aeroporto-save">
                <h3>Cadastro de aeroporto</h3>
                <div class="row mb-3">
                    <div class="col">
                        <label for="name" class="form-label">Nome do Aeroporto</label> <input
                            type="text" class="form-control" id="name" name="name" required />
                    </div>
                    <div class="col">
                        <label for="cnpj" class="form-label">CNPJ</label> <input
                            type="text" class="form-control" id="cnpj" name="cnpj" required
                            placeholder="00.000.000/0000-00" />
                    </div>
                    <div class="form-group col">
                        <label for="idLocal" class="form-label"> Cidade </label> <select
                            id="idLocal" name="idLocal" class="form-select">
                            <option value="DEFAULT">Escolha uma cidade</option>
                        </select>
                    </div>
                </div>
                <div class="mt-4">
                    <input type="submit" value="Cadastrar"
                        class="btn btn-primary" />
                </div>
            </form>
            <table class="table">
                <h3>Aeroportos cadastrados</h3>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>CNPJ</th>
                        <th>Nome</th>
                        <th>Cidade</th>
                        <th>Uf</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td class="d-flex justify-content-start align-items-center">
                            <div>
                                <button class="btn" type="button" data-bs-toggle="modal"
                                    data-bs-target="#staticBackdrop<%=a.getId()%>">
                                    <i class="gg-pen"></i>
                                </button>


                                <div class="modal fade" id="staticBackdrop<%=a.getId()%>"
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
                                            <form action="./aeroporto-update">
                                                <div class="modal-body">
                                                    <label for="idUpdate" class="form-label">ID</label> <input
                                                        type="text" class="form-control mb-3" id="idUpdate"
                                                        name="idUpdate" value="<%=a.getId()%>" readonly /> <label
                                                            for="nameUpdate" class="form-label">Nome do Aeroporto</label> <input type="text" class="form-control mb-3"
                                                                id="nameUpdate" name="nameUpdate" value="<%=a.getNome()%>"
                                                                required /> <label for="cnpjUpdate"
                                                                    class="form-label">CNPJ</label> <input type="text"
                                                                        class="form-control" id="cnpjUpdate" name="cnpjUpdate"
                                                                        readonly value="<%=a.getCnpj()%>" />
                                                    <div class="form-group">
                                                        <label for="idLocalUpdate" class="form-label">
                                                            Cidade </label> <select id="idLocalUpdate" name="idLocalUpdate"
                                                                class="form-select">
                                                            <option value="DEFAULT">Escolha uma cidade</option>
                                                        </select>
                                                    </div>
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
                            </div> <a href="./aeroporto-delet?id=<%=a.getId()%>"
                                onclick="return confirm('Deseja Excluir?')" class="btn"><i
                                    class="gg-close"></i></a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </main></div>
    )
}

export default aeroporto