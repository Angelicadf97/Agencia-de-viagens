import React from 'react'

export default function NavbarADM() {
    return (

        <header>
            <div className="container">
                <nav class="navbar">
                    <div class="container">
                        <a class="navbar-brand txcolor" href="adm.jsp">ADMINISTRADOR</a>
                        <button class="navbar-toggler" type="button"
                            data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                            aria-controls="offcanvasNavbar">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="offcanvas offcanvas-end" tabindex="-1"
                            id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="offcanvasNavbarLabel">MENU</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li class="nav-item"><a class="nav-link" href="./adm/cliente">Clientes</a></li>
                                    <li class="nav-item"><a class="nav-link" href="./adm/aeroporto">Aeroportos</a></li>
                                    <li class="nav-item"><a class="nav-link" href="./adm/hospedagem">Hospedagens</a></li>
                                    <li class="nav-item"><a class="nav-link" href="./adm/companhia">Companhias</a></li>
                                    <li class="nav-item"><a class="nav-link" href="./adm/pacote">Pacotes</a></li>
                                    <li class="nav-item"><a class="nav-link" href="./adm/voo">Voos</a></li>
                                    <li class="nav-item"><a class="nav-link" href="./adm/reserva">Reserva</a></li>
                                    <li class="nav-item"><a class="nav-link" href="./adm">Sair</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}
