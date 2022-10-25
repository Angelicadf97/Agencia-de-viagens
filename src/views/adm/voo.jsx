import React from 'react'
import NavbarADM from '../../components/navigate/navbarADM'

const voo = () => {
    return (
        <div>
            <NavbarADM />
            <main class="container conteudo my-4 p-4">
                <h1 class="mb-4">Voos</h1>
                <form class="my-4" action="./voo-save">
                    <h3>Cadastro de voo</h3>
                    <div class="row mb-3">
                        <div class="form-group col">
                            <label for="idAP" class="form-label">Aeroporto de Partida</label>
                            <select id="idAP" name="idAP" class="form-select">
                                <option value="DEFAULT">Escolha um aeroporto</option>
                            </select>
                        </div>
                        <div class="form-group col">
                            <label for="idAD" class="form-label">Aeroporto de Destino</label>
                            <select id="idAD" name="idAD" class="form-select">
                                <option value="DEFAULT">Escolha um aeroporto</option>
                            </select>
                        </div>
                        <div class="form-group col">
                            <label for="idCom" class="form-label">Companhia Aérea</label> <select
                                id="idCom" name="idCom" class="form-select">
                                <option value="DEFAULT">Escolha uma companhia</option>
                            </select>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col">
                            <label for="date" class="form-label">Data de voo</label> <input
                                type="text" class="form-control" id="date" name="date"
                                placeholder="dd/mm/aaaa" required />
                        </div>
                        <div class="col">
                            <label for="hora" class="form-label">Horário de partida</label> <input
                                type="text" class="form-control" id="hora" name="hora" required
                                placeholder="00:00" />
                        </div>
                        <div class="col">
                            <label for="price" class="form-label">Preço base de
                                passagem</label> <input type="number" class="form-control" id="price"
                                    name="price" required />
                        </div>
                        <div class="col">
                            <label for="assent" class="form-label">Quantidade de
                                assentos</label> <input type="number" class="form-control" id="assent"
                                    name="assent" required />
                        </div>
                        <div class="mt-4">
                            <input type="submit" value="Cadastrar" class="btn btn-primary" />
                        </div>
                    </div>
                </form>
                <table class="table">
                    <h3>Voos cadastrados</h3>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Partida</th>
                            <th>Destino</th>
                            <th>Data</th>
                            <th>Horário</th>
                            <th>Preço Base</th>
                            <th>Quant Assentos</th>
                            <th>Aeroporto de Partida</th>
                            <th>Aeroporto de Destino</th>
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
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td class="d-flex justify-content-start align-items-center">
                                <div>

                                    <button class="btn" type="button" data-bs-toggle="modal"
                                        data-bs-target="#staticBackdrop">
                                        <i class="gg-pen"></i>
                                    </button>


                                    <div class="modal fade" id="staticBackdrop"
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
                                                <form action="./hospedagem-update">
                                                    <div class="modal-body">
                                                        <label for="idUpdate" class="form-label">ID</label>
                                                        <input type="text" class="form-control mb-3" id="idUpdate"
                                                            name="idUpdate" value="<%=h.getId()%>" readonly />
                                                        <label for="nameUpdate" class="form-label">Nome da Hospedagem</label>
                                                        <input type="text" class="form-control mb-3"
                                                            id="nameUpdate" name="nameUpdate" value="<%=h.getNome()%>"
                                                            required />
                                                        <label for="cnpjUpdate" class="form-label">CNPJ</label>
                                                        <input type="text" class="form-control" id="cnpjUpdate"
                                                            name="cnpjUpdate" readonly
                                                            value="<%=h.getCnpj()%>" />
                                                        <label for="typeUpdate" class="form-label">Tipo de Hospedagem</label> <select
                                                            class="form-select" id="typeUpdate" name="typeUpdate" required>
                                                            <option selected>Escolha um tipo de hospedagem</option>
                                                            <option value="Hostel">Hostel</option>
                                                            <option value="Hotel">Hotel</option>
                                                            <option value="Pousada">Pousada</option>
                                                            <option value="Resort">Resort</option>
                                                        </select>
                                                        <label for="priceUpdate" class="form-label">Valor da
                                                            diária</label>
                                                        <input type="number" class="form-control"
                                                            id="priceUpdate" name="priceUpdate" required value="<%=h.getPrecoDia()%>" />
                                                        <div class="form-group">
                                                            <label for="idLocalUpdate" class="form-label"> Cidade </label> <select
                                                                id="idLocalUpdate" name="idLocalUpdate" class="form-select" >
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
                                </div> <a href="./voo-delet?id="
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

export default voo