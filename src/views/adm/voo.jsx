import React from 'react'
import NavbarADM from '../../components/navigate/navbarADM'

const voo = () => {
    return (
        <div>
            <NavbarADM />
            <main class="container conteudo my-4 p-4">
                <h1 class="mb-4">Reservas</h1>
                <form class="my-4" action="./reserva-save">
                    <h3>Cadastro de reserva</h3>
                    <div class="row mb-3">
                        <div class="col">
                            <label for="idHos" class="form-label">Nome da Hospedagem</label> <select
                                id="idHos" name="idHos" class="form-select">
                                <option value="DEFAULT">Escolha uma hospedagem</option>
                            </select>
                        </div>
                        <div class="col">
                            <label for="idPac" class="form-label">Vincular ao pacote ID</label> <input
                                type="number" class="form-control" id="idPac" name="idPac" />
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col">
                            <label for="quartos" class="form-label">Quantidade de quartos:</label> <input
                                type="number" class="form-control" id="quartos" name="quartos" required />
                        </div>
                        <div class="col">
                            <label for="hospedes" class="form-label">Quantidade de hospedes:</label> <input
                                type="number" class="form-control" id="hospedes" name="hospedes" required />
                        </div>
                        <div class="col">
                            <label for="dataEnt" class="form-label">Data de entrada</label> <input
                                type="text" class="form-control" id="dataEnt" name="dataEnt" required />
                        </div>
                        <div class="col">
                            <label for="dataSaida" class="form-label">Data de saída</label> <input
                                type="text" class="form-control" id="dataSaida" name="dataSaida" required />
                        </div>
                        <div class="mt-4">
                            <input type="submit" value="Cadastrar"
                                class="btn btn-primary" />
                        </div>
                    </div>
                </form>
                <h3>Pacotes cadastrados</h3>
                <table class="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>CNPJ</th>
                            <th>Nome</th>
                            <th>Tipo</th>
                            <th>Valor da diária</th>
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
                                                        <input
                                                            type="text" class="form-control mb-3" id="idUpdate"
                                                            name="idUpdate" value="" readonly />
                                                        <label
                                                            for="nameUpdate" class="form-label">Nome da
                                                            Hospedagem</label>
                                                        <input type="text" class="form-control mb-3"
                                                            id="nameUpdate" name="nameUpdate" value=""
                                                            required />
                                                        <label for="cnpjUpdate"
                                                            class="form-label">CNPJ</label>
                                                        <input type="text"
                                                            class="form-control" id="cnpjUpdate" name="cnpjUpdate"
                                                            readonly value="" />
                                                        <label
                                                            for="typeUpdate" class="form-label">Tipo de
                                                            Hospedagem</label>
                                                        <select class="form-select" id="typeUpdate"
                                                            name="typeUpdate" required>
                                                            <option selected>Escolha um tipo de hospedagem</option>
                                                            <option value="Hostel">Hostel</option>
                                                            <option value="Hotel">Hotel</option>
                                                            <option value="Pousada">Pousada</option>
                                                            <option value="Resort">Resort</option>
                                                        </select> <label for="priceUpdate" class="form-label">Valor
                                                            da diária</label> <input type="number" class="form-control"
                                                                id="priceUpdate" name="priceUpdate" required
                                                                value="<%=h.getPrecoDia()%>" />
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
                                </div> <a href="./hospedagem-delet?id="
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