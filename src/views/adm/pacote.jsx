import React from 'react'
import NavbarADM from '../../components/navigate/navbarADM'

const pacote = () => {
    return (
        <div>
            <NavbarADM />
            <main class="container conteudo my-4 p-4">
                <h1 class="mb-4">Pacotes</h1>
                <h3>Cadastro de pacote</h3>
                <form class="mb-4">

                    <div class="mb-4 row">
                        <div class="col">
                            <label for="inputName" class="form-label">Nome do Pacote</label> <input
                                type="text" class="form-control mb-4" id="inputName" />
                        </div>
                        <div class="col">
                            <label for="inputName" class="form-label">Descrição</label>
                            <textarea class="form-control"
                                placeholder="máximo 500 caracter..." id="floatingTextarea"
                                style={{ height: '40%' }}>
                            </textarea>
                        </div>
                    </div>


                    <div>
                        <h5>Voos</h5>
                        <table class="table">
                            <div class="d-flex justify-content-between">


                                <div>
                                    <button type="button" class="btn btn-primary"
                                        data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                        Adicionar voo</button>


                                    <div class="modal fade modal-lg" id="staticBackdrop"
                                        data-bs-backdrop="static" data-bs-keyboard="false"
                                        tabindex="-1" aria-labelledby="staticBackdropLabel"
                                        aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="staticBackdropLabel">Adicionar
                                                        voos</h5>
                                                    <button type="button" class="btn-close"
                                                        data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                    <div class="d-flex justify-content-between">
                                                        <div class="form-floating mb-3">
                                                            <input type="text" class="form-control" id="floatingInput"
                                                                placeholder="Digite a cidade de partida..." /> <label
                                                                    for="floatingInput">Partida</label>
                                                        </div>
                                                        <div class="form-floating mb-3">
                                                            <input type="text" class="form-control" id="floatingInput"
                                                                placeholder="Digite a cidade de destino..." /> <label
                                                                    for="floatingInput">Destino</label>
                                                        </div>
                                                        <div class="form-floating mb-3">
                                                            <input type="date" class="form-control" id="floatingInput" />
                                                            <label for="floatingInput">Data</label>
                                                        </div>
                                                        <a href="{}" class="btn btn-primary">Buscar</a>
                                                    </div>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-primary"
                                                        data-bs-dismiss="modal">Concluir</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Data</th>
                                    <th>Horário</th>
                                    <th>Partida</th>
                                    <th>Destino</th>
                                    <th>Concecionária</th>
                                    <th>Classe</th>
                                    <th>Valor</th>
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
                                    <td><a href="{}" class="btn"><i
                                        class="gg-pen"></i></a> <a href="{}"
                                            onclick="return confirm('Deseja Excluir?')" class="btn"><i
                                                class="gg-close"></i></a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                    <div>
                        <table class="table">
                            <div class="d-flex justify-content-between">
                                <h5>Reservas</h5>


                                <div>
                                    <button type="button" class="btn btn-primary"
                                        data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                        Cadastrar reserva</button>


                                    <div class="modal fade modal-lg" id="staticBackdrop"
                                        data-bs-backdrop="static" data-bs-keyboard="false"
                                        tabindex="-1" aria-labelledby="staticBackdropLabel"
                                        aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="staticBackdropLabel">Cadastrar
                                                        Reserva</h5>
                                                    <button type="button" class="btn-close"
                                                        data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                    <div class="form-floating mb-3">
                                                        <input type="text" class="form-control" id="floatingInput"
                                                            placeholder="Digite o local da hospedagem..." /> <label
                                                                for="floatingInput">Local</label>
                                                    </div>
                                                    <div class="form-floating mb-3">
                                                        <input type="text" class="form-control" id="floatingInput"
                                                            placeholder="Digite o tipo de hospedagem..." /> <label
                                                                for="floatingInput">Tipo</label>
                                                    </div>
                                                    <div class="form-floating mb-3">
                                                        <input type="text" class="form-control" id="floatingInput"
                                                            placeholder="Escolha uma hospedagem..." /> <label
                                                                for="floatingInput">Hospedagem</label>
                                                    </div>
                                                    <div class="form-floating mb-3">
                                                        <input type="date" class="form-control" id="floatingInput" />
                                                        <label for="floatingInput">Data</label>
                                                    </div>
                                                    <a href="{}" class="btn btn-primary">Buscar</a>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-primary"
                                                        data-bs-dismiss="modal">Concluir</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Local</th>
                                    <th>Tipo</th>
                                    <th>Hospedagem</th>
                                    <th>Hospedes</th>
                                    <th>Quartos</th>
                                    <th>Data entrada</th>
                                    <th>Data Saída</th>
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
                                    <td><a href="{}" class="btn"><i
                                        class="gg-pen"></i></a> <a href="{}"
                                            onclick="return confirm('Deseja Excluir?')" class="btn"><i
                                                class="gg-close"></i></a></td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <a href="{}" class="btn btn-primary">Cadastrar</a>
                </form>



                <h3>Pacotes cadastrados</h3>
                <table class="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Descrição</th>
                            <th>CPF do Cliente</th>
                            <th>Valor Total</th>
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
                            <td><a href="{}" class="btn"><i
                                class="gg-eye"></i></a> <a href="{}"
                                    class="btn"><i class="gg-pen"></i></a> <a
                                        href="{}"
                                        onclick="return confirm('Deseja Excluir?')" class="btn"><i
                                            class="gg-close"></i></a></td>
                        </tr>
                    </tbody>
                </table>
            </main>
        </div>
    )
}

export default pacote