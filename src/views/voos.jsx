import React from 'react'

import Navbar from '../components/navigate/navbar';
import Footer from '../components/footer/footer';

export default function Voos() {
    return (
        <>
            <Navbar />
            <main class="container conteudo my-4 px-4">
                FORMUL�RIO
                <section class="mb-4">
                    <h2 class="pt-4">VOOS</h2>
                    <form>
                        <div class="row">
                            <div class="col-6 col-lg-4 col-xl-3 mb-2">
                                <label for="inputCity" class="form-label">Origem</label>
                                <input type="text" class="form-control" id="inputCity" />
                            </div>
                            <div class="col-6 col-lg-4 col-xl-3 mb-2">
                                <label for="inputCity" class="form-label">Destino</label>
                                <input type="text" class="form-control" id="inputCity" />
                            </div>
                            <div class="col-6 col-md-6 col-lg-2 mb-2">
                                <label for="inputDate" class="form-label">Ida</label>
                                <input type="date" class="form-control" id="inputDate" />
                            </div>
                            <div class="col-6 col-md-6 col-lg-2 mb-2">
                                <label for="inputDate" class="form-label">Volta</label>
                                <input type="date" class="form-control" id="inputDate" />
                            </div>
                            <div class="col-xl-2 col-lg-12 mb-2 d-grid mt-4">
                                <button type="submit" class="btn btn-primary">Buscar</button>
                            </div>
                        </div>
                    </form>
                </section>
                FORMUL�RIO

                CARDS
                <section>
                    DESTINOS NACIONAIS
                    <div>
                        <h4>DESTINOS NACIONAIS</h4>
                        <ul class="promo">
                            Card01
                            <li class="me-5 mb-4">
                                <div class="card">
                                    <img src="./assents/img/curitiba-300x200.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Curitiba</h5>
                                        <p class="card-text">
                                            Curitiba � conhecida pelo cuidado com o planejamento urbano, belas �reas verdes
                                            e um transporte p�blico de qualidade.
                                        </p>
                                        <div class="d-flex justify-content-between">
                                            OFERTAS
                                            <div>
                                                <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas"
                                                    data-bs-target="#offcanvasWithBothOptions"
                                                    aria-controls="offcanvasWithBothOptions">Voos</button>

                                                <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1"
                                                    id="offcanvasWithBothOptions"
                                                    aria-labelledby="offcanvasWithBothOptionsLabel">
                                                    <div class="offcanvas-header">
                                                        <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
                                                            CURITIBA</h5>
                                                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
                                                            aria-label="Close"></button>
                                                    </div>
                                                    <div class="offcanvas-body">
                                                        Voos
                                                        <div>
                                                            Pac01
                                                            <div class="card mb-3">
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Viagem em 27/07/22</h5>
                                                                    <p class="small">Somente ida - Classe econ�mica</p>
                                                                    <p class="small">A partir de</p>
                                                                    <p><small>R$</small><big>602,56</big></p>
                                                                    <p class="small">Taxas inclu�das - Voo direto</p>
                                                                </div>
                                                            </div>
                                                            Pac01
                                                            Pac02
                                                            <div class="card mb-3">
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Viagem em 10/08/22</h5>
                                                                    <p class="small">Somente ida - Classe econ�mica</p>
                                                                    <p class="small">A partir de</p>
                                                                    <p><small>R$</small><big>220,06</big></p>
                                                                    <p class="small">Taxas inclu�das - Voo direto</p>
                                                                </div>
                                                            </div>
                                                            Pac02
                                                            Pac03
                                                            <div class="card mb-3">
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Viagem em 14/09/22</h5>
                                                                    <p class="small">Somente ida - Classe econ�mica</p>
                                                                    <p class="small">A partir de</p>
                                                                    <p><small>R$</small><big>208,36</big></p>
                                                                    <p class="small">Taxas inclu�das - Voo direto</p>
                                                                </div>
                                                            </div>
                                                            Pac03
                                                        </div>
                                                        Voos
                                                    </div>
                                                </div>
                                            </div>
                                            OFERTAS
                                            MODAL
                                            <div>
                                                Button trigger modal
                                                <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal">
                                                    Saiba mais
                                                </button>

                                                Modal
                                                <div class="modal fade" id="exampleModal" tabindex="-1"
                                                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div class="modal-dialog">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h5 class="modal-title" id="exampleModalLabel">CURITIBA
                                                                </h5>
                                                                <button type="button" class="btn-close"
                                                                    data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div class="modal-body">
                                                                CARROSSEL
                                                                <div id="carouselExampleDark"
                                                                    class="carousel carousel-dark slide"
                                                                    data-bs-ride="carousel">
                                                                    <div class="carousel-indicators">
                                                                        <button type="button"
                                                                            data-bs-target="#carouselExampleDark"
                                                                            data-bs-slide-to="0" class="active"
                                                                            aria-current="true"
                                                                            aria-label="Slide 1"></button>
                                                                        <button type="button"
                                                                            data-bs-target="#carouselExampleDark"
                                                                            data-bs-slide-to="1"
                                                                            aria-label="Slide 2"></button>
                                                                        <button type="button"
                                                                            data-bs-target="#carouselExampleDark"
                                                                            data-bs-slide-to="2"
                                                                            aria-label="Slide 3"></button>
                                                                        <button type="button"
                                                                            data-bs-target="#carouselExampleDark"
                                                                            data-bs-slide-to="3"
                                                                            aria-label="Slide 4"></button>
                                                                    </div>
                                                                    <div class="carousel-inner text-center">
                                                                        <div class="carousel-item active"
                                                                            data-bs-interval="10000">
                                                                            <img src="./IMG/curitiba/centro-historico-de-curitiba.jpg"
                                                                                alt="..." />
                                                                            <div
                                                                                class="carousel-caption d-md-block bg-black bg-opacity-50">
                                                                                <h5 class="text-white">Centro Hist�rico
                                                                                </h5>
                                                                            </div>
                                                                        </div>
                                                                        <div class="carousel-item" data-bs-interval="2000">
                                                                            <img src="./IMG/curitiba/jardim-botanico-de-curitiba.jpg"
                                                                                alt="..." />
                                                                            <div
                                                                                class="carousel-caption d-md-block bg-black bg-opacity-50">
                                                                                <h5 class="text-white">Jardim Bot�nico
                                                                                </h5>
                                                                            </div>
                                                                        </div>
                                                                        <div class="carousel-item">
                                                                            <img src="./IMG/curitiba/memorial-ucraniano.jpg"
                                                                                alt="..." />
                                                                            <div
                                                                                class="carousel-caption d-md-block bg-black bg-opacity-50">
                                                                                <h5 class="text-white">Memorial
                                                                                    Ucraniano
                                                                                </h5>
                                                                            </div>
                                                                        </div>
                                                                        <div class="carousel-item">
                                                                            <img src="./IMG/curitiba/museu-oscar-niemeyer.jpg"
                                                                                alt="..." />
                                                                            <div
                                                                                class="carousel-caption d-md-block bg-black bg-opacity-50">
                                                                                <h5 class="text-white">Museu Oscar
                                                                                    Niemeyer
                                                                                </h5>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <button class="carousel-control-prev" type="button"
                                                                        data-bs-target="#carouselExampleDark"
                                                                        data-bs-slide="prev">
                                                                        <span class="carousel-control-prev-icon"
                                                                            aria-hidden="true"></span>
                                                                        <span class="visually-hidden">Previous</span>
                                                                    </button>
                                                                    <button class="carousel-control-next" type="button"
                                                                        data-bs-target="#carouselExampleDark"
                                                                        data-bs-slide="next">
                                                                        <span class="carousel-control-next-icon"
                                                                            aria-hidden="true"></span>
                                                                        <span class="visually-hidden">Next</span>
                                                                    </button>
                                                                </div>
                                                                CARROSSEL
                                                                <div>
                                                                    <p class="mt-4">
                                                                        O dia a dia de Curitiba reflete a mistura de
                                                                        imigrantes
                                                                        com
                                                                        que a cidade foi formada. Esse � s� um dos
                                                                        motivos
                                                                        pelo
                                                                        qual
                                                                        ela recebe bem os forasteiros. A cultura
                                                                        curitibana
                                                                        � um
                                                                        mix
                                                                        de ucranianos, poloneses, alem�es e italianos.
                                                                        Tudo
                                                                        com
                                                                        uma
                                                                        boa pitada dos tropeiros que passavam pela
                                                                        regi�o
                                                                        quando
                                                                        Curitiba ainda era a Vila de Nossa Senhora da
                                                                        Luz
                                                                        dos
                                                                        Pinhais. Fundada em 1693, a capital paranaense
                                                                        se
                                                                        mant�m
                                                                        aberta a novas culturas e est� sempre de bra�os
                                                                        abertos
                                                                        para
                                                                        o mundo. Os curitibanos se enchem de orgulho por
                                                                        viverem
                                                                        em
                                                                        um dos melhores destinos do pa�s e adoram
                                                                        dividir
                                                                        essa
                                                                        experi�ncia com quem deseja curtir alguns dias
                                                                        na
                                                                        cidade.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="modal-footer">
                                                                <button type="button" class="btn btn-primary">Comprar
                                                                    Voos</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            MODAL
                                        </div>
                                    </div>
                                </div>
                            </li>
                            Card01
                            Card02
                            <li class="me-5 mb-4">
                                <div class="card">
                                    <img src="./assents/img/foz_do_iguacu-300x200.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Foz do Igua��</h5>
                                        <p class="card-text">
                                            Foz do Igua�u � uma cidade cheia de atra��es e guarda um dos mais belos
                                            espet�culos da natureza, as
                                            Cataratas do Igua�u.
                                        </p>
                                        <div class="d-flex justify-content-between">
                                            OFERTAS
                                            <div>
                                                <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas"
                                                    data-bs-target="#offcanvasWithBothOptions"
                                                    aria-controls="offcanvasWithBothOptions">Voos</button>

                                                <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1"
                                                    id="offcanvasWithBothOptions"
                                                    aria-labelledby="offcanvasWithBothOptionsLabel">
                                                    <div class="offcanvas-header">
                                                        <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
                                                            CURITIBA</h5>
                                                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
                                                            aria-label="Close"></button>
                                                    </div>
                                                    <div class="offcanvas-body">
                                                        Voos
                                                        <div>
                                                            Pac01
                                                            <div class="card mb-3">
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Viagem em 27/07/22</h5>
                                                                    <p class="small">Somente ida - Classe econ�mica</p>
                                                                    <p class="small">A partir de</p>
                                                                    <p><small>R$</small><big>602,56</big></p>
                                                                    <p class="small">Taxas inclu�das - Voo direto</p>
                                                                </div>
                                                            </div>
                                                            Pac01
                                                            Pac02
                                                            <div class="card mb-3">
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Viagem em 10/08/22</h5>
                                                                    <p class="small">Somente ida - Classe econ�mica</p>
                                                                    <p class="small">A partir de</p>
                                                                    <p><small>R$</small><big>220,06</big></p>
                                                                    <p class="small">Taxas inclu�das - Voo direto</p>
                                                                </div>
                                                            </div>
                                                            Pac02
                                                            Pac03
                                                            <div class="card mb-3">
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Viagem em 14/09/22</h5>
                                                                    <p class="small">Somente ida - Classe econ�mica</p>
                                                                    <p class="small">A partir de</p>
                                                                    <p><small>R$</small><big>208,36</big></p>
                                                                    <p class="small">Taxas inclu�das - Voo direto</p>
                                                                </div>
                                                            </div>
                                                            Pac03
                                                        </div>
                                                        Voos
                                                    </div>
                                                </div>
                                            </div>
                                            OFERTAS
                                            MODAL
                                            <div>
                                                Button trigger modal
                                                <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal">
                                                    Saiba mais
                                                </button>

                                                Modal
                                                <div class="modal fade" id="exampleModal" tabindex="-1"
                                                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div class="modal-dialog">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h5 class="modal-title" id="exampleModalLabel">CURITIBA
                                                                </h5>
                                                                <button type="button" class="btn-close"
                                                                    data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div class="modal-body">
                                                                CARROSSEL
                                                                <div id="carouselExampleDark"
                                                                    class="carousel carousel-dark slide"
                                                                    data-bs-ride="carousel">
                                                                    <div class="carousel-indicators">
                                                                        <button type="button"
                                                                            data-bs-target="#carouselExampleDark"
                                                                            data-bs-slide-to="0" class="active"
                                                                            aria-current="true"
                                                                            aria-label="Slide 1"></button>
                                                                        <button type="button"
                                                                            data-bs-target="#carouselExampleDark"
                                                                            data-bs-slide-to="1"
                                                                            aria-label="Slide 2"></button>
                                                                        <button type="button"
                                                                            data-bs-target="#carouselExampleDark"
                                                                            data-bs-slide-to="2"
                                                                            aria-label="Slide 3"></button>
                                                                        <button type="button"
                                                                            data-bs-target="#carouselExampleDark"
                                                                            data-bs-slide-to="3"
                                                                            aria-label="Slide 4"></button>
                                                                    </div>
                                                                    <div class="carousel-inner text-center">
                                                                        <div class="carousel-item active"
                                                                            data-bs-interval="10000">
                                                                            <img src="../IMG/curitiba/centro-historico-de-curitiba.jpg"
                                                                                alt="..." />
                                                                            <div
                                                                                class="carousel-caption d-md-block bg-black bg-opacity-50">
                                                                                <h5 class="text-white">Centro Hist�rico
                                                                                </h5>
                                                                            </div>
                                                                        </div>
                                                                        <div class="carousel-item" data-bs-interval="2000">
                                                                            <img src="../IMG/curitiba/jardim-botanico-de-curitiba.jpg"
                                                                                alt="..." />
                                                                            <div
                                                                                class="carousel-caption d-md-block bg-black bg-opacity-50">
                                                                                <h5 class="text-white">Jardim Bot�nico
                                                                                </h5>
                                                                            </div>
                                                                        </div>
                                                                        <div class="carousel-item">
                                                                            <img src="../IMG/curitiba/memorial-ucraniano.jpg"
                                                                                alt="..." />
                                                                            <div
                                                                                class="carousel-caption d-md-block bg-black bg-opacity-50">
                                                                                <h5 class="text-white">Memorial
                                                                                    Ucraniano
                                                                                </h5>
                                                                            </div>
                                                                        </div>
                                                                        <div class="carousel-item">
                                                                            <img src="../IMG/curitiba/museu-oscar-niemeyer.jpg"
                                                                                alt="..." />
                                                                            <div
                                                                                class="carousel-caption d-md-block bg-black bg-opacity-50">
                                                                                <h5 class="text-white">Museu Oscar
                                                                                    Niemeyer
                                                                                </h5>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <button class="carousel-control-prev" type="button"
                                                                        data-bs-target="#carouselExampleDark"
                                                                        data-bs-slide="prev">
                                                                        <span class="carousel-control-prev-icon"
                                                                            aria-hidden="true"></span>
                                                                        <span class="visually-hidden">Previous</span>
                                                                    </button>
                                                                    <button class="carousel-control-next" type="button"
                                                                        data-bs-target="#carouselExampleDark"
                                                                        data-bs-slide="next">
                                                                        <span class="carousel-control-next-icon"
                                                                            aria-hidden="true"></span>
                                                                        <span class="visually-hidden">Next</span>
                                                                    </button>
                                                                </div>
                                                                CARROSSEL
                                                                <div>
                                                                    <p class="mt-4">
                                                                        O dia a dia de Curitiba reflete a mistura de
                                                                        imigrantes
                                                                        com
                                                                        que a cidade foi formada. Esse � s� um dos
                                                                        motivos
                                                                        pelo
                                                                        qual
                                                                        ela recebe bem os forasteiros. A cultura
                                                                        curitibana
                                                                        � um
                                                                        mix
                                                                        de ucranianos, poloneses, alem�es e italianos.
                                                                        Tudo
                                                                        com
                                                                        uma
                                                                        boa pitada dos tropeiros que passavam pela
                                                                        regi�o
                                                                        quando
                                                                        Curitiba ainda era a Vila de Nossa Senhora da
                                                                        Luz
                                                                        dos
                                                                        Pinhais. Fundada em 1693, a capital paranaense
                                                                        se
                                                                        mant�m
                                                                        aberta a novas culturas e est� sempre de bra�os
                                                                        abertos
                                                                        para
                                                                        o mundo. Os curitibanos se enchem de orgulho por
                                                                        viverem
                                                                        em
                                                                        um dos melhores destinos do pa�s e adoram
                                                                        dividir
                                                                        essa
                                                                        experi�ncia com quem deseja curtir alguns dias
                                                                        na
                                                                        cidade.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="modal-footer">
                                                                <button type="button" class="btn btn-primary">Comprar
                                                                    Voos</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            MODAL
                                        </div>
                                    </div>
                                </div>
                            </li>
                            Card02
                            Card03
                            <li class="me-5 mb-4">
                                <div class="card">
                                    <img src="./assents/img/jalapao-300x200.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Jalap�o</h5>
                                        <p class="card-text">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa at provident
                                            aperiam, quisquam ullam recusandae?
                                        </p>
                                        <div class="d-flex justify-content-between">
                                            OFERTAS
                                            <div>
                                                <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas"
                                                    data-bs-target="#offcanvasWithBothOptions"
                                                    aria-controls="offcanvasWithBothOptions">Voos</button>

                                                <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1"
                                                    id="offcanvasWithBothOptions"
                                                    aria-labelledby="offcanvasWithBothOptionsLabel">
                                                    <div class="offcanvas-header">
                                                        <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
                                                            CURITIBA</h5>
                                                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
                                                            aria-label="Close"></button>
                                                    </div>
                                                    <div class="offcanvas-body">
                                                        Voos
                                                        <div>
                                                            Pac01
                                                            <div class="card mb-3">
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Viagem em 27/07/22</h5>
                                                                    <p class="small">Somente ida - Classe econ�mica</p>
                                                                    <p class="small">A partir de</p>
                                                                    <p><small>R$</small><big>602,56</big></p>
                                                                    <p class="small">Taxas inclu�das - Voo direto</p>
                                                                </div>
                                                            </div>
                                                            Pac01
                                                            Pac02
                                                            <div class="card mb-3">
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Viagem em 10/08/22</h5>
                                                                    <p class="small">Somente ida - Classe econ�mica</p>
                                                                    <p class="small">A partir de</p>
                                                                    <p><small>R$</small><big>220,06</big></p>
                                                                    <p class="small">Taxas inclu�das - Voo direto</p>
                                                                </div>
                                                            </div>
                                                            Pac02
                                                            Pac03
                                                            <div class="card mb-3">
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Viagem em 14/09/22</h5>
                                                                    <p class="small">Somente ida - Classe econ�mica</p>
                                                                    <p class="small">A partir de</p>
                                                                    <p><small>R$</small><big>208,36</big></p>
                                                                    <p class="small">Taxas inclu�das - Voo direto</p>
                                                                </div>
                                                            </div>
                                                            Pac03
                                                        </div>
                                                        Voos
                                                    </div>
                                                </div>
                                            </div>
                                            OFERTAS
                                            MODAL
                                            <div>
                                                Button trigger modal
                                                <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal">
                                                    Saiba mais
                                                </button>

                                                Modal
                                                <div class="modal fade" id="exampleModal" tabindex="-1"
                                                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div class="modal-dialog">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h5 class="modal-title" id="exampleModalLabel">CURITIBA
                                                                </h5>
                                                                <button type="button" class="btn-close"
                                                                    data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div class="modal-body">
                                                                CARROSSEL
                                                                <div id="carouselExampleDark"
                                                                    class="carousel carousel-dark slide"
                                                                    data-bs-ride="carousel">
                                                                    <div class="carousel-indicators">
                                                                        <button type="button"
                                                                            data-bs-target="#carouselExampleDark"
                                                                            data-bs-slide-to="0" class="active"
                                                                            aria-current="true"
                                                                            aria-label="Slide 1"></button>
                                                                        <button type="button"
                                                                            data-bs-target="#carouselExampleDark"
                                                                            data-bs-slide-to="1"
                                                                            aria-label="Slide 2"></button>
                                                                        <button type="button"
                                                                            data-bs-target="#carouselExampleDark"
                                                                            data-bs-slide-to="2"
                                                                            aria-label="Slide 3"></button>
                                                                        <button type="button"
                                                                            data-bs-target="#carouselExampleDark"
                                                                            data-bs-slide-to="3"
                                                                            aria-label="Slide 4"></button>
                                                                    </div>
                                                                    <div class="carousel-inner text-center">
                                                                        <div class="carousel-item active"
                                                                            data-bs-interval="10000">
                                                                            <img src="../IMG/curitiba/centro-historico-de-curitiba.jpg"
                                                                                alt="..." />
                                                                            <div
                                                                                class="carousel-caption d-md-block bg-black bg-opacity-50">
                                                                                <h5 class="text-white">Centro Hist�rico
                                                                                </h5>
                                                                            </div>
                                                                        </div>
                                                                        <div class="carousel-item" data-bs-interval="2000">
                                                                            <img src="../IMG/curitiba/jardim-botanico-de-curitiba.jpg"
                                                                                alt="..." />
                                                                            <div
                                                                                class="carousel-caption d-md-block bg-black bg-opacity-50">
                                                                                <h5 class="text-white">Jardim Bot�nico
                                                                                </h5>
                                                                            </div>
                                                                        </div>
                                                                        <div class="carousel-item">
                                                                            <img src="../IMG/curitiba/memorial-ucraniano.jpg"
                                                                                alt="..." />
                                                                            <div
                                                                                class="carousel-caption d-md-block bg-black bg-opacity-50">
                                                                                <h5 class="text-white">Memorial
                                                                                    Ucraniano
                                                                                </h5>
                                                                            </div>
                                                                        </div>
                                                                        <div class="carousel-item">
                                                                            <img src="../IMG/curitiba/museu-oscar-niemeyer.jpg"
                                                                                alt="..." />
                                                                            <div
                                                                                class="carousel-caption d-md-block bg-black bg-opacity-50">
                                                                                <h5 class="text-white">Museu Oscar
                                                                                    Niemeyer
                                                                                </h5>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <button class="carousel-control-prev" type="button"
                                                                        data-bs-target="#carouselExampleDark"
                                                                        data-bs-slide="prev">
                                                                        <span class="carousel-control-prev-icon"
                                                                            aria-hidden="true"></span>
                                                                        <span class="visually-hidden">Previous</span>
                                                                    </button>
                                                                    <button class="carousel-control-next" type="button"
                                                                        data-bs-target="#carouselExampleDark"
                                                                        data-bs-slide="next">
                                                                        <span class="carousel-control-next-icon"
                                                                            aria-hidden="true"></span>
                                                                        <span class="visually-hidden">Next</span>
                                                                    </button>
                                                                </div>
                                                                CARROSSEL
                                                                <div>
                                                                    <p class="mt-4">
                                                                        O dia a dia de Curitiba reflete a mistura de
                                                                        imigrantes
                                                                        com
                                                                        que a cidade foi formada. Esse � s� um dos
                                                                        motivos
                                                                        pelo
                                                                        qual
                                                                        ela recebe bem os forasteiros. A cultura
                                                                        curitibana
                                                                        � um
                                                                        mix
                                                                        de ucranianos, poloneses, alem�es e italianos.
                                                                        Tudo
                                                                        com
                                                                        uma
                                                                        boa pitada dos tropeiros que passavam pela
                                                                        regi�o
                                                                        quando
                                                                        Curitiba ainda era a Vila de Nossa Senhora da
                                                                        Luz
                                                                        dos
                                                                        Pinhais. Fundada em 1693, a capital paranaense
                                                                        se
                                                                        mant�m
                                                                        aberta a novas culturas e est� sempre de bra�os
                                                                        abertos
                                                                        para
                                                                        o mundo. Os curitibanos se enchem de orgulho por
                                                                        viverem
                                                                        em
                                                                        um dos melhores destinos do pa�s e adoram
                                                                        dividir
                                                                        essa
                                                                        experi�ncia com quem deseja curtir alguns dias
                                                                        na
                                                                        cidade.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="modal-footer">
                                                                <button type="button" class="btn btn-primary">Comprar
                                                                    Voos</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            MODAL
                                        </div>
                                    </div>
                                </div>
                            </li>
                            Card03
                            Card04
                            <li class="me-5 mb-4">
                                <div class="card">
                                    <img src="./assents/img/maceio-300x200.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Macei�</h5>
                                        <p class="card-text">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa at provident
                                            aperiam, quisquam ullam recusandae?
                                        </p>
                                        <div class="d-flex justify-content-between">
                                            OFERTAS
                                            <div>
                                                <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas"
                                                    data-bs-target="#offcanvasWithBothOptions"
                                                    aria-controls="offcanvasWithBothOptions">Voos</button>

                                                <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1"
                                                    id="offcanvasWithBothOptions"
                                                    aria-labelledby="offcanvasWithBothOptionsLabel">
                                                    <div class="offcanvas-header">
                                                        <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
                                                            CURITIBA</h5>
                                                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
                                                            aria-label="Close"></button>
                                                    </div>
                                                    <div class="offcanvas-body">
                                                        Voos
                                                        <div>
                                                            Pac01
                                                            <div class="card mb-3">
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Viagem em 27/07/22</h5>
                                                                    <p class="small">Somente ida - Classe econ�mica</p>
                                                                    <p class="small">A partir de</p>
                                                                    <p><small>R$</small><big>602,56</big></p>
                                                                    <p class="small">Taxas inclu�das - Voo direto</p>
                                                                </div>
                                                            </div>
                                                            Pac01
                                                            Pac02
                                                            <div class="card mb-3">
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Viagem em 10/08/22</h5>
                                                                    <p class="small">Somente ida - Classe econ�mica</p>
                                                                    <p class="small">A partir de</p>
                                                                    <p><small>R$</small><big>220,06</big></p>
                                                                    <p class="small">Taxas inclu�das - Voo direto</p>
                                                                </div>
                                                            </div>
                                                            Pac02
                                                            Pac03
                                                            <div class="card mb-3">
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Viagem em 14/09/22</h5>
                                                                    <p class="small">Somente ida - Classe econ�mica</p>
                                                                    <p class="small">A partir de</p>
                                                                    <p><small>R$</small><big>208,36</big></p>
                                                                    <p class="small">Taxas inclu�das - Voo direto</p>
                                                                </div>
                                                            </div>
                                                            Pac03
                                                        </div>
                                                        Voos
                                                    </div>
                                                </div>
                                            </div>
                                            OFERTAS
                                            MODAL
                                            <div>
                                                Button trigger modal
                                                <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal">
                                                    Saiba mais
                                                </button>

                                                Modal
                                                <div class="modal fade" id="exampleModal" tabindex="-1"
                                                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div class="modal-dialog">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h5 class="modal-title" id="exampleModalLabel">CURITIBA
                                                                </h5>
                                                                <button type="button" class="btn-close"
                                                                    data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div class="modal-body">
                                                                CARROSSEL
                                                                <div id="carouselExampleDark"
                                                                    class="carousel carousel-dark slide"
                                                                    data-bs-ride="carousel">
                                                                    <div class="carousel-indicators">
                                                                        <button type="button"
                                                                            data-bs-target="#carouselExampleDark"
                                                                            data-bs-slide-to="0" class="active"
                                                                            aria-current="true"
                                                                            aria-label="Slide 1"></button>
                                                                        <button type="button"
                                                                            data-bs-target="#carouselExampleDark"
                                                                            data-bs-slide-to="1"
                                                                            aria-label="Slide 2"></button>
                                                                        <button type="button"
                                                                            data-bs-target="#carouselExampleDark"
                                                                            data-bs-slide-to="2"
                                                                            aria-label="Slide 3"></button>
                                                                        <button type="button"
                                                                            data-bs-target="#carouselExampleDark"
                                                                            data-bs-slide-to="3"
                                                                            aria-label="Slide 4"></button>
                                                                    </div>
                                                                    <div class="carousel-inner text-center">
                                                                        <div class="carousel-item active"
                                                                            data-bs-interval="10000">
                                                                            <img src="../IMG/curitiba/centro-historico-de-curitiba.jpg"
                                                                                alt="..." />
                                                                            <div
                                                                                class="carousel-caption d-md-block bg-black bg-opacity-50">
                                                                                <h5 class="text-white">Centro Hist�rico
                                                                                </h5>
                                                                            </div>
                                                                        </div>
                                                                        <div class="carousel-item" data-bs-interval="2000">
                                                                            <img src="../IMG/curitiba/jardim-botanico-de-curitiba.jpg"
                                                                                alt="..." />
                                                                            <div
                                                                                class="carousel-caption d-md-block bg-black bg-opacity-50">
                                                                                <h5 class="text-white">Jardim Bot�nico
                                                                                </h5>
                                                                            </div>
                                                                        </div>
                                                                        <div class="carousel-item">
                                                                            <img src="../IMG/curitiba/memorial-ucraniano.jpg"
                                                                                alt="..." />
                                                                            <div
                                                                                class="carousel-caption d-md-block bg-black bg-opacity-50">
                                                                                <h5 class="text-white">Memorial
                                                                                    Ucraniano
                                                                                </h5>
                                                                            </div>
                                                                        </div>
                                                                        <div class="carousel-item">
                                                                            <img src="../IMG/curitiba/museu-oscar-niemeyer.jpg"
                                                                                alt="..." />
                                                                            <div
                                                                                class="carousel-caption d-md-block bg-black bg-opacity-50">
                                                                                <h5 class="text-white">Museu Oscar
                                                                                    Niemeyer
                                                                                </h5>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <button class="carousel-control-prev" type="button"
                                                                        data-bs-target="#carouselExampleDark"
                                                                        data-bs-slide="prev">
                                                                        <span class="carousel-control-prev-icon"
                                                                            aria-hidden="true"></span>
                                                                        <span class="visually-hidden">Previous</span>
                                                                    </button>
                                                                    <button class="carousel-control-next" type="button"
                                                                        data-bs-target="#carouselExampleDark"
                                                                        data-bs-slide="next">
                                                                        <span class="carousel-control-next-icon"
                                                                            aria-hidden="true"></span>
                                                                        <span class="visually-hidden">Next</span>
                                                                    </button>
                                                                </div>
                                                                CARROSSEL
                                                                <div>
                                                                    <p class="mt-4">
                                                                        O dia a dia de Curitiba reflete a mistura de
                                                                        imigrantes
                                                                        com
                                                                        que a cidade foi formada. Esse � s� um dos
                                                                        motivos
                                                                        pelo
                                                                        qual
                                                                        ela recebe bem os forasteiros. A cultura
                                                                        curitibana
                                                                        � um
                                                                        mix
                                                                        de ucranianos, poloneses, alem�es e italianos.
                                                                        Tudo
                                                                        com
                                                                        uma
                                                                        boa pitada dos tropeiros que passavam pela
                                                                        regi�o
                                                                        quando
                                                                        Curitiba ainda era a Vila de Nossa Senhora da
                                                                        Luz
                                                                        dos
                                                                        Pinhais. Fundada em 1693, a capital paranaense
                                                                        se
                                                                        mant�m
                                                                        aberta a novas culturas e est� sempre de bra�os
                                                                        abertos
                                                                        para
                                                                        o mundo. Os curitibanos se enchem de orgulho por
                                                                        viverem
                                                                        em
                                                                        um dos melhores destinos do pa�s e adoram
                                                                        dividir
                                                                        essa
                                                                        experi�ncia com quem deseja curtir alguns dias
                                                                        na
                                                                        cidade.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="modal-footer">
                                                                <button type="button" class="btn btn-primary">Comprar
                                                                    Voos</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            MODAL
                                        </div>
                                    </div>
                                </div>
                            </li>
                            Card04
                            Card05
                            <li class="me-5 mb-4">
                                <div class="card">
                                    <img src="./assents/img/ouro_preto-300x200.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Outro Preto</h5>
                                        <p class="card-text">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa at provident
                                            aperiam, quisquam ullam recusandae?
                                        </p>
                                        <div class="d-flex justify-content-between">
                                            OFERTAS
                                            <div>
                                                <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas"
                                                    data-bs-target="#offcanvasWithBothOptions"
                                                    aria-controls="offcanvasWithBothOptions">Voos</button>

                                                <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1"
                                                    id="offcanvasWithBothOptions"
                                                    aria-labelledby="offcanvasWithBothOptionsLabel">
                                                    <div class="offcanvas-header">
                                                        <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
                                                            CURITIBA</h5>
                                                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
                                                            aria-label="Close"></button>
                                                    </div>
                                                    <div class="offcanvas-body">
                                                        Voos
                                                        <div>
                                                            Pac01
                                                            <div class="card mb-3">
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Viagem em 27/07/22</h5>
                                                                    <p class="small">Somente ida - Classe econ�mica</p>
                                                                    <p class="small">A partir de</p>
                                                                    <p><small>R$</small><big>602,56</big></p>
                                                                    <p class="small">Taxas inclu�das - Voo direto</p>
                                                                </div>
                                                            </div>
                                                            Pac01
                                                            Pac02
                                                            <div class="card mb-3">
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Viagem em 10/08/22</h5>
                                                                    <p class="small">Somente ida - Classe econ�mica</p>
                                                                    <p class="small">A partir de</p>
                                                                    <p><small>R$</small><big>220,06</big></p>
                                                                    <p class="small">Taxas inclu�das - Voo direto</p>
                                                                </div>
                                                            </div>
                                                            Pac02
                                                            Pac03
                                                            <div class="card mb-3">
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Viagem em 14/09/22</h5>
                                                                    <p class="small">Somente ida - Classe econ�mica</p>
                                                                    <p class="small">A partir de</p>
                                                                    <p><small>R$</small><big>208,36</big></p>
                                                                    <p class="small">Taxas inclu�das - Voo direto</p>
                                                                </div>
                                                            </div>
                                                            Pac03
                                                        </div>
                                                        Voos
                                                    </div>
                                                </div>
                                            </div>
                                            OFERTAS
                                            MODAL
                                            <div>
                                                Button trigger modal
                                                <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal">
                                                    Saiba mais
                                                </button>

                                                Modal
                                                <div class="modal fade" id="exampleModal" tabindex="-1"
                                                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div class="modal-dialog">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h5 class="modal-title" id="exampleModalLabel">CURITIBA
                                                                </h5>
                                                                <button type="button" class="btn-close"
                                                                    data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div class="modal-body">
                                                                CARROSSEL
                                                                <div id="carouselExampleDark"
                                                                    class="carousel carousel-dark slide"
                                                                    data-bs-ride="carousel">
                                                                    <div class="carousel-indicators">
                                                                        <button type="button"
                                                                            data-bs-target="#carouselExampleDark"
                                                                            data-bs-slide-to="0" class="active"
                                                                            aria-current="true"
                                                                            aria-label="Slide 1"></button>
                                                                        <button type="button"
                                                                            data-bs-target="#carouselExampleDark"
                                                                            data-bs-slide-to="1"
                                                                            aria-label="Slide 2"></button>
                                                                        <button type="button"
                                                                            data-bs-target="#carouselExampleDark"
                                                                            data-bs-slide-to="2"
                                                                            aria-label="Slide 3"></button>
                                                                        <button type="button"
                                                                            data-bs-target="#carouselExampleDark"
                                                                            data-bs-slide-to="3"
                                                                            aria-label="Slide 4"></button>
                                                                    </div>
                                                                    <div class="carousel-inner text-center">
                                                                        <div class="carousel-item active"
                                                                            data-bs-interval="10000">
                                                                            <img src="../IMG/curitiba/centro-historico-de-curitiba.jpg"
                                                                                alt="..." />
                                                                            <div
                                                                                class="carousel-caption d-md-block bg-black bg-opacity-50">
                                                                                <h5 class="text-white">Centro Hist�rico
                                                                                </h5>
                                                                            </div>
                                                                        </div>
                                                                        <div class="carousel-item" data-bs-interval="2000">
                                                                            <img src="../IMG/curitiba/jardim-botanico-de-curitiba.jpg"
                                                                                alt="..." />
                                                                            <div
                                                                                class="carousel-caption d-md-block bg-black bg-opacity-50">
                                                                                <h5 class="text-white">Jardim Bot�nico
                                                                                </h5>
                                                                            </div>
                                                                        </div>
                                                                        <div class="carousel-item">
                                                                            <img src="../IMG/curitiba/memorial-ucraniano.jpg"
                                                                                alt="..." />
                                                                            <div
                                                                                class="carousel-caption d-md-block bg-black bg-opacity-50">
                                                                                <h5 class="text-white">Memorial
                                                                                    Ucraniano
                                                                                </h5>
                                                                            </div>
                                                                        </div>
                                                                        <div class="carousel-item">
                                                                            <img src="../IMG/curitiba/museu-oscar-niemeyer.jpg"
                                                                                alt="..." />
                                                                            <div
                                                                                class="carousel-caption d-md-block bg-black bg-opacity-50">
                                                                                <h5 class="text-white">Museu Oscar
                                                                                    Niemeyer
                                                                                </h5>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <button class="carousel-control-prev" type="button"
                                                                        data-bs-target="#carouselExampleDark"
                                                                        data-bs-slide="prev">
                                                                        <span class="carousel-control-prev-icon"
                                                                            aria-hidden="true"></span>
                                                                        <span class="visually-hidden">Previous</span>
                                                                    </button>
                                                                    <button class="carousel-control-next" type="button"
                                                                        data-bs-target="#carouselExampleDark"
                                                                        data-bs-slide="next">
                                                                        <span class="carousel-control-next-icon"
                                                                            aria-hidden="true"></span>
                                                                        <span class="visually-hidden">Next</span>
                                                                    </button>
                                                                </div>
                                                                CARROSSEL
                                                                <div>
                                                                    <p class="mt-4">
                                                                        O dia a dia de Curitiba reflete a mistura de
                                                                        imigrantes
                                                                        com
                                                                        que a cidade foi formada. Esse � s� um dos
                                                                        motivos
                                                                        pelo
                                                                        qual
                                                                        ela recebe bem os forasteiros. A cultura
                                                                        curitibana
                                                                        � um
                                                                        mix
                                                                        de ucranianos, poloneses, alem�es e italianos.
                                                                        Tudo
                                                                        com
                                                                        uma
                                                                        boa pitada dos tropeiros que passavam pela
                                                                        regi�o
                                                                        quando
                                                                        Curitiba ainda era a Vila de Nossa Senhora da
                                                                        Luz
                                                                        dos
                                                                        Pinhais. Fundada em 1693, a capital paranaense
                                                                        se
                                                                        mant�m
                                                                        aberta a novas culturas e est� sempre de bra�os
                                                                        abertos
                                                                        para
                                                                        o mundo. Os curitibanos se enchem de orgulho por
                                                                        viverem
                                                                        em
                                                                        um dos melhores destinos do pa�s e adoram
                                                                        dividir
                                                                        essa
                                                                        experi�ncia com quem deseja curtir alguns dias
                                                                        na
                                                                        cidade.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="modal-footer">
                                                                <button type="button" class="btn btn-primary">Comprar
                                                                    Voos</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            MODAL
                                        </div>
                                    </div>
                                </div>
                            </li>
                            Card05
                        </ul>
                    </div>
                    DESTINOS NACIONAIS

                    DESTINOS INTERNACIONAIS
                    <div>
                        <h4 class="mt-4">DESTINOS INTERNACIONAIS</h4>
                        <ul class="promo">
                            Card01
                            <li class="me-5 mb-4">
                                <div class="card">
                                    <img src="./assents/img/curitiba-300x200.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Buenos Aires</h5>
                                        <p class="card-text">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa at provident
                                            aperiam, quisquam ullam recusandae?
                                        </p>
                                        <div class="d-flex justify-content-between">
                                            OFERTAS
                                            <div>
                                                <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas"
                                                    data-bs-target="#offcanvasWithBothOptions"
                                                    aria-controls="offcanvasWithBothOptions">Voos</button>

                                                <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1"
                                                    id="offcanvasWithBothOptions"
                                                    aria-labelledby="offcanvasWithBothOptionsLabel">
                                                    <div class="offcanvas-header">
                                                        <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
                                                            CURITIBA</h5>
                                                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
                                                            aria-label="Close"></button>
                                                    </div>
                                                    <div class="offcanvas-body">
                                                        Voos
                                                        <div>
                                                            Pac01
                                                            <div class="card mb-3">
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Viagem em 27/07/22</h5>
                                                                    <p class="small">Somente ida - Classe econ�mica</p>
                                                                    <p class="small">A partir de</p>
                                                                    <p><small>R$</small><big>602,56</big></p>
                                                                    <p class="small">Taxas inclu�das - Voo direto</p>
                                                                </div>
                                                            </div>
                                                            Pac01
                                                            Pac02
                                                            <div class="card mb-3">
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Viagem em 10/08/22</h5>
                                                                    <p class="small">Somente ida - Classe econ�mica</p>
                                                                    <p class="small">A partir de</p>
                                                                    <p><small>R$</small><big>220,06</big></p>
                                                                    <p class="small">Taxas inclu�das - Voo direto</p>
                                                                </div>
                                                            </div>
                                                            Pac02
                                                            Pac03
                                                            <div class="card mb-3">
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Viagem em 14/09/22</h5>
                                                                    <p class="small">Somente ida - Classe econ�mica</p>
                                                                    <p class="small">A partir de</p>
                                                                    <p><small>R$</small><big>208,36</big></p>
                                                                    <p class="small">Taxas inclu�das - Voo direto</p>
                                                                </div>
                                                            </div>
                                                            Pac03
                                                        </div>
                                                        Voos
                                                    </div>
                                                </div>
                                            </div>
                                            OFERTAS
                                            MODAL
                                            <div>
                                                Button trigger modal
                                                <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal">
                                                    Saiba mais
                                                </button>

                                                Modal
                                                <div class="modal fade" id="exampleModal" tabindex="-1"
                                                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div class="modal-dialog">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h5 class="modal-title" id="exampleModalLabel">CURITIBA
                                                                </h5>
                                                                <button type="button" class="btn-close"
                                                                    data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div class="modal-body">
                                                                CARROSSEL
                                                                <div id="carouselExampleDark"
                                                                    class="carousel carousel-dark slide"
                                                                    data-bs-ride="carousel">
                                                                    <div class="carousel-indicators">
                                                                        <button type="button"
                                                                            data-bs-target="#carouselExampleDark"
                                                                            data-bs-slide-to="0" class="active"
                                                                            aria-current="true"
                                                                            aria-label="Slide 1"></button>
                                                                        <button type="button"
                                                                            data-bs-target="#carouselExampleDark"
                                                                            data-bs-slide-to="1"
                                                                            aria-label="Slide 2"></button>
                                                                        <button type="button"
                                                                            data-bs-target="#carouselExampleDark"
                                                                            data-bs-slide-to="2"
                                                                            aria-label="Slide 3"></button>
                                                                        <button type="button"
                                                                            data-bs-target="#carouselExampleDark"
                                                                            data-bs-slide-to="3"
                                                                            aria-label="Slide 4"></button>
                                                                    </div>
                                                                    <div class="carousel-inner text-center">
                                                                        <div class="carousel-item active"
                                                                            data-bs-interval="10000">
                                                                            <img src="../IMG/curitiba/centro-historico-de-curitiba.jpg"
                                                                                alt="..." />
                                                                            <div
                                                                                class="carousel-caption d-md-block bg-black bg-opacity-50">
                                                                                <h5 class="text-white">Centro Hist�rico
                                                                                </h5>
                                                                            </div>
                                                                        </div>
                                                                        <div class="carousel-item" data-bs-interval="2000">
                                                                            <img src="../IMG/curitiba/jardim-botanico-de-curitiba.jpg"
                                                                                alt="..." />
                                                                            <div
                                                                                class="carousel-caption d-md-block bg-black bg-opacity-50">
                                                                                <h5 class="text-white">Jardim Bot�nico
                                                                                </h5>
                                                                            </div>
                                                                        </div>
                                                                        <div class="carousel-item">
                                                                            <img src="../IMG/curitiba/memorial-ucraniano.jpg"
                                                                                alt="..." />
                                                                            <div
                                                                                class="carousel-caption d-md-block bg-black bg-opacity-50">
                                                                                <h5 class="text-white">Memorial
                                                                                    Ucraniano
                                                                                </h5>
                                                                            </div>
                                                                        </div>
                                                                        <div class="carousel-item">
                                                                            <img src="../IMG/curitiba/museu-oscar-niemeyer.jpg"
                                                                                alt="..." />
                                                                            <div
                                                                                class="carousel-caption d-md-block bg-black bg-opacity-50">
                                                                                <h5 class="text-white">Museu Oscar
                                                                                    Niemeyer
                                                                                </h5>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <button class="carousel-control-prev" type="button"
                                                                        data-bs-target="#carouselExampleDark"
                                                                        data-bs-slide="prev">
                                                                        <span class="carousel-control-prev-icon"
                                                                            aria-hidden="true"></span>
                                                                        <span class="visually-hidden">Previous</span>
                                                                    </button>
                                                                    <button class="carousel-control-next" type="button"
                                                                        data-bs-target="#carouselExampleDark"
                                                                        data-bs-slide="next">
                                                                        <span class="carousel-control-next-icon"
                                                                            aria-hidden="true"></span>
                                                                        <span class="visually-hidden">Next</span>
                                                                    </button>
                                                                </div>
                                                                CARROSSEL
                                                                <div>
                                                                    <p class="mt-4">
                                                                        O dia a dia de Curitiba reflete a mistura de
                                                                        imigrantes
                                                                        com
                                                                        que a cidade foi formada. Esse � s� um dos
                                                                        motivos
                                                                        pelo
                                                                        qual
                                                                        ela recebe bem os forasteiros. A cultura
                                                                        curitibana
                                                                        � um
                                                                        mix
                                                                        de ucranianos, poloneses, alem�es e italianos.
                                                                        Tudo
                                                                        com
                                                                        uma
                                                                        boa pitada dos tropeiros que passavam pela
                                                                        regi�o
                                                                        quando
                                                                        Curitiba ainda era a Vila de Nossa Senhora da
                                                                        Luz
                                                                        dos
                                                                        Pinhais. Fundada em 1693, a capital paranaense
                                                                        se
                                                                        mant�m
                                                                        aberta a novas culturas e est� sempre de bra�os
                                                                        abertos
                                                                        para
                                                                        o mundo. Os curitibanos se enchem de orgulho por
                                                                        viverem
                                                                        em
                                                                        um dos melhores destinos do pa�s e adoram
                                                                        dividir
                                                                        essa
                                                                        experi�ncia com quem deseja curtir alguns dias
                                                                        na
                                                                        cidade.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="modal-footer">
                                                                <button type="button" class="btn btn-primary">Comprar
                                                                    Voos</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            MODAL
                                        </div>
                                    </div>
                                </div>
                            </li>
                            Card01
                            Card02
                            <li class="me-5 mb-4">
                                <div class="card">
                                    <img src="./assents/img/curitiba-300x200.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Orlando</h5>
                                        <p class="card-text">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa at provident
                                            aperiam, quisquam ullam recusandae?
                                        </p>
                                        <div class="d-flex justify-content-between">
                                            OFERTAS
                                            <div>
                                                <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas"
                                                    data-bs-target="#offcanvasWithBothOptions"
                                                    aria-controls="offcanvasWithBothOptions">Voos</button>

                                                <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1"
                                                    id="offcanvasWithBothOptions"
                                                    aria-labelledby="offcanvasWithBothOptionsLabel">
                                                    <div class="offcanvas-header">
                                                        <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
                                                            CURITIBA</h5>
                                                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
                                                            aria-label="Close"></button>
                                                    </div>
                                                    <div class="offcanvas-body">
                                                        Voos
                                                        <div>
                                                            Pac01
                                                            <div class="card mb-3">
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Viagem em 27/07/22</h5>
                                                                    <p class="small">Somente ida - Classe econ�mica</p>
                                                                    <p class="small">A partir de</p>
                                                                    <p><small>R$</small><big>602,56</big></p>
                                                                    <p class="small">Taxas inclu�das - Voo direto</p>
                                                                </div>
                                                            </div>
                                                            Pac01
                                                            Pac02
                                                            <div class="card mb-3">
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Viagem em 10/08/22</h5>
                                                                    <p class="small">Somente ida - Classe econ�mica</p>
                                                                    <p class="small">A partir de</p>
                                                                    <p><small>R$</small><big>220,06</big></p>
                                                                    <p class="small">Taxas inclu�das - Voo direto</p>
                                                                </div>
                                                            </div>
                                                            Pac02
                                                            Pac03
                                                            <div class="card mb-3">
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Viagem em 14/09/22</h5>
                                                                    <p class="small">Somente ida - Classe econ�mica</p>
                                                                    <p class="small">A partir de</p>
                                                                    <p><small>R$</small><big>208,36</big></p>
                                                                    <p class="small">Taxas inclu�das - Voo direto</p>
                                                                </div>
                                                            </div>
                                                            Pac03
                                                        </div>
                                                        Voos
                                                    </div>
                                                </div>
                                            </div>
                                            OFERTAS
                                            MODAL
                                            <div>
                                                Button trigger modal
                                                <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal">
                                                    Saiba mais
                                                </button>

                                                Modal
                                                <div class="modal fade" id="exampleModal" tabindex="-1"
                                                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div class="modal-dialog">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h5 class="modal-title" id="exampleModalLabel">CURITIBA
                                                                </h5>
                                                                <button type="button" class="btn-close"
                                                                    data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div class="modal-body">
                                                                CARROSSEL
                                                                <div id="carouselExampleDark"
                                                                    class="carousel carousel-dark slide"
                                                                    data-bs-ride="carousel">
                                                                    <div class="carousel-indicators">
                                                                        <button type="button"
                                                                            data-bs-target="#carouselExampleDark"
                                                                            data-bs-slide-to="0" class="active"
                                                                            aria-current="true"
                                                                            aria-label="Slide 1"></button>
                                                                        <button type="button"
                                                                            data-bs-target="#carouselExampleDark"
                                                                            data-bs-slide-to="1"
                                                                            aria-label="Slide 2"></button>
                                                                        <button type="button"
                                                                            data-bs-target="#carouselExampleDark"
                                                                            data-bs-slide-to="2"
                                                                            aria-label="Slide 3"></button>
                                                                        <button type="button"
                                                                            data-bs-target="#carouselExampleDark"
                                                                            data-bs-slide-to="3"
                                                                            aria-label="Slide 4"></button>
                                                                    </div>
                                                                    <div class="carousel-inner text-center">
                                                                        <div class="carousel-item active"
                                                                            data-bs-interval="10000">
                                                                            <img src="../IMG/curitiba/centro-historico-de-curitiba.jpg"
                                                                                alt="..." />
                                                                            <div
                                                                                class="carousel-caption d-md-block bg-black bg-opacity-50">
                                                                                <h5 class="text-white">Centro Hist�rico
                                                                                </h5>
                                                                            </div>
                                                                        </div>
                                                                        <div class="carousel-item" data-bs-interval="2000">
                                                                            <img src="../IMG/curitiba/jardim-botanico-de-curitiba.jpg"
                                                                                alt="..." />
                                                                            <div
                                                                                class="carousel-caption d-md-block bg-black bg-opacity-50">
                                                                                <h5 class="text-white">Jardim Bot�nico
                                                                                </h5>
                                                                            </div>
                                                                        </div>
                                                                        <div class="carousel-item">
                                                                            <img src="../IMG/curitiba/memorial-ucraniano.jpg"
                                                                                alt="..." />
                                                                            <div
                                                                                class="carousel-caption d-md-block bg-black bg-opacity-50">
                                                                                <h5 class="text-white">Memorial
                                                                                    Ucraniano
                                                                                </h5>
                                                                            </div>
                                                                        </div>
                                                                        <div class="carousel-item">
                                                                            <img src="../IMG/curitiba/museu-oscar-niemeyer.jpg"
                                                                                alt="..." />
                                                                            <div
                                                                                class="carousel-caption d-md-block bg-black bg-opacity-50">
                                                                                <h5 class="text-white">Museu Oscar
                                                                                    Niemeyer
                                                                                </h5>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <button class="carousel-control-prev" type="button"
                                                                        data-bs-target="#carouselExampleDark"
                                                                        data-bs-slide="prev">
                                                                        <span class="carousel-control-prev-icon"
                                                                            aria-hidden="true"></span>
                                                                        <span class="visually-hidden">Previous</span>
                                                                    </button>
                                                                    <button class="carousel-control-next" type="button"
                                                                        data-bs-target="#carouselExampleDark"
                                                                        data-bs-slide="next">
                                                                        <span class="carousel-control-next-icon"
                                                                            aria-hidden="true"></span>
                                                                        <span class="visually-hidden">Next</span>
                                                                    </button>
                                                                </div>
                                                                CARROSSEL
                                                                <div>
                                                                    <p class="mt-4">
                                                                        O dia a dia de Curitiba reflete a mistura de
                                                                        imigrantes
                                                                        com
                                                                        que a cidade foi formada. Esse � s� um dos
                                                                        motivos
                                                                        pelo
                                                                        qual
                                                                        ela recebe bem os forasteiros. A cultura
                                                                        curitibana
                                                                        � um
                                                                        mix
                                                                        de ucranianos, poloneses, alem�es e italianos.
                                                                        Tudo
                                                                        com
                                                                        uma
                                                                        boa pitada dos tropeiros que passavam pela
                                                                        regi�o
                                                                        quando
                                                                        Curitiba ainda era a Vila de Nossa Senhora da
                                                                        Luz
                                                                        dos
                                                                        Pinhais. Fundada em 1693, a capital paranaense
                                                                        se
                                                                        mant�m
                                                                        aberta a novas culturas e est� sempre de bra�os
                                                                        abertos
                                                                        para
                                                                        o mundo. Os curitibanos se enchem de orgulho por
                                                                        viverem
                                                                        em
                                                                        um dos melhores destinos do pa�s e adoram
                                                                        dividir
                                                                        essa
                                                                        experi�ncia com quem deseja curtir alguns dias
                                                                        na
                                                                        cidade.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="modal-footer">
                                                                <button type="button" class="btn btn-primary">Comprar
                                                                    Voos</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            MODAL
                                        </div>
                                    </div>
                                </div>
                            </li>
                            Card02
                            Card03
                            <li class="me-5 mb-4">
                                <div class="card">
                                    <img src="./assents/img/curitiba-300x200.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Braga</h5>
                                        <p class="card-text">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa at provident
                                            aperiam, quisquam ullam recusandae?
                                        </p>
                                        <div class="d-flex justify-content-between">
                                            OFERTAS
                                            <div>
                                                <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas"
                                                    data-bs-target="#offcanvasWithBothOptions"
                                                    aria-controls="offcanvasWithBothOptions">Voos</button>

                                                <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1"
                                                    id="offcanvasWithBothOptions"
                                                    aria-labelledby="offcanvasWithBothOptionsLabel">
                                                    <div class="offcanvas-header">
                                                        <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
                                                            CURITIBA</h5>
                                                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
                                                            aria-label="Close"></button>
                                                    </div>
                                                    <div class="offcanvas-body">
                                                        Voos
                                                        <div>
                                                            Pac01
                                                            <div class="card mb-3">
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Viagem em 27/07/22</h5>
                                                                    <p class="small">Somente ida - Classe econ�mica</p>
                                                                    <p class="small">A partir de</p>
                                                                    <p><small>R$</small><big>602,56</big></p>
                                                                    <p class="small">Taxas inclu�das - Voo direto</p>
                                                                </div>
                                                            </div>
                                                            Pac01
                                                            Pac02
                                                            <div class="card mb-3">
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Viagem em 10/08/22</h5>
                                                                    <p class="small">Somente ida - Classe econ�mica</p>
                                                                    <p class="small">A partir de</p>
                                                                    <p><small>R$</small><big>220,06</big></p>
                                                                    <p class="small">Taxas inclu�das - Voo direto</p>
                                                                </div>
                                                            </div>
                                                            Pac02
                                                            Pac03
                                                            <div class="card mb-3">
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Viagem em 14/09/22</h5>
                                                                    <p class="small">Somente ida - Classe econ�mica</p>
                                                                    <p class="small">A partir de</p>
                                                                    <p><small>R$</small><big>208,36</big></p>
                                                                    <p class="small">Taxas inclu�das - Voo direto</p>
                                                                </div>
                                                            </div>
                                                            Pac03
                                                        </div>
                                                        Voos
                                                    </div>
                                                </div>
                                            </div>
                                            OFERTAS
                                            MODAL
                                            <div>
                                                Button trigger modal
                                                <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal">
                                                    Saiba mais
                                                </button>

                                                Modal
                                                <div class="modal fade" id="exampleModal" tabindex="-1"
                                                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div class="modal-dialog">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h5 class="modal-title" id="exampleModalLabel">CURITIBA
                                                                </h5>
                                                                <button type="button" class="btn-close"
                                                                    data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div class="modal-body">
                                                                CARROSSEL
                                                                <div id="carouselExampleDark"
                                                                    class="carousel carousel-dark slide"
                                                                    data-bs-ride="carousel">
                                                                    <div class="carousel-indicators">
                                                                        <button type="button"
                                                                            data-bs-target="#carouselExampleDark"
                                                                            data-bs-slide-to="0" class="active"
                                                                            aria-current="true"
                                                                            aria-label="Slide 1"></button>
                                                                        <button type="button"
                                                                            data-bs-target="#carouselExampleDark"
                                                                            data-bs-slide-to="1"
                                                                            aria-label="Slide 2"></button>
                                                                        <button type="button"
                                                                            data-bs-target="#carouselExampleDark"
                                                                            data-bs-slide-to="2"
                                                                            aria-label="Slide 3"></button>
                                                                        <button type="button"
                                                                            data-bs-target="#carouselExampleDark"
                                                                            data-bs-slide-to="3"
                                                                            aria-label="Slide 4"></button>
                                                                    </div>
                                                                    <div class="carousel-inner text-center">
                                                                        <div class="carousel-item active"
                                                                            data-bs-interval="10000">
                                                                            <img src="../IMG/curitiba/centro-historico-de-curitiba.jpg"
                                                                                alt="..." />
                                                                            <div
                                                                                class="carousel-caption d-md-block bg-black bg-opacity-50">
                                                                                <h5 class="text-white">Centro Hist�rico
                                                                                </h5>
                                                                            </div>
                                                                        </div>
                                                                        <div class="carousel-item" data-bs-interval="2000">
                                                                            <img src="../IMG/curitiba/jardim-botanico-de-curitiba.jpg"
                                                                                alt="..." />
                                                                            <div
                                                                                class="carousel-caption d-md-block bg-black bg-opacity-50">
                                                                                <h5 class="text-white">Jardim Bot�nico
                                                                                </h5>
                                                                            </div>
                                                                        </div>
                                                                        <div class="carousel-item">
                                                                            <img src="../IMG/curitiba/memorial-ucraniano.jpg"
                                                                                alt="..." />
                                                                            <div
                                                                                class="carousel-caption d-md-block bg-black bg-opacity-50">
                                                                                <h5 class="text-white">Memorial
                                                                                    Ucraniano
                                                                                </h5>
                                                                            </div>
                                                                        </div>
                                                                        <div class="carousel-item">
                                                                            <img src="../IMG/curitiba/museu-oscar-niemeyer.jpg"
                                                                                alt="..." />
                                                                            <div
                                                                                class="carousel-caption d-md-block bg-black bg-opacity-50">
                                                                                <h5 class="text-white">Museu Oscar
                                                                                    Niemeyer
                                                                                </h5>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <button class="carousel-control-prev" type="button"
                                                                        data-bs-target="#carouselExampleDark"
                                                                        data-bs-slide="prev">
                                                                        <span class="carousel-control-prev-icon"
                                                                            aria-hidden="true"></span>
                                                                        <span class="visually-hidden">Previous</span>
                                                                    </button>
                                                                    <button class="carousel-control-next" type="button"
                                                                        data-bs-target="#carouselExampleDark"
                                                                        data-bs-slide="next">
                                                                        <span class="carousel-control-next-icon"
                                                                            aria-hidden="true"></span>
                                                                        <span class="visually-hidden">Next</span>
                                                                    </button>
                                                                </div>
                                                                CARROSSEL
                                                                <div>
                                                                    <p class="mt-4">
                                                                        O dia a dia de Curitiba reflete a mistura de
                                                                        imigrantes
                                                                        com
                                                                        que a cidade foi formada. Esse � s� um dos
                                                                        motivos
                                                                        pelo
                                                                        qual
                                                                        ela recebe bem os forasteiros. A cultura
                                                                        curitibana
                                                                        � um
                                                                        mix
                                                                        de ucranianos, poloneses, alem�es e italianos.
                                                                        Tudo
                                                                        com
                                                                        uma
                                                                        boa pitada dos tropeiros que passavam pela
                                                                        regi�o
                                                                        quando
                                                                        Curitiba ainda era a Vila de Nossa Senhora da
                                                                        Luz
                                                                        dos
                                                                        Pinhais. Fundada em 1693, a capital paranaense
                                                                        se
                                                                        mant�m
                                                                        aberta a novas culturas e est� sempre de bra�os
                                                                        abertos
                                                                        para
                                                                        o mundo. Os curitibanos se enchem de orgulho por
                                                                        viverem
                                                                        em
                                                                        um dos melhores destinos do pa�s e adoram
                                                                        dividir
                                                                        essa
                                                                        experi�ncia com quem deseja curtir alguns dias
                                                                        na
                                                                        cidade.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="modal-footer">
                                                                <button type="button" class="btn btn-primary">Comprar
                                                                    Voos</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            MODAL
                                        </div>
                                    </div>
                                </div>
                            </li>
                            Card03
                            Card04
                            <li class="me-5 mb-4">
                                <div class="card">
                                    <img src="./assents/img/curitiba-300x200.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Bangkok</h5>
                                        <p class="card-text">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa at provident
                                            aperiam, quisquam ullam recusandae?
                                        </p>
                                        <div class="d-flex justify-content-between">
                                            OFERTAS
                                            <div>
                                                <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas"
                                                    data-bs-target="#offcanvasWithBothOptions"
                                                    aria-controls="offcanvasWithBothOptions">Voos</button>

                                                <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1"
                                                    id="offcanvasWithBothOptions"
                                                    aria-labelledby="offcanvasWithBothOptionsLabel">
                                                    <div class="offcanvas-header">
                                                        <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
                                                            CURITIBA</h5>
                                                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
                                                            aria-label="Close"></button>
                                                    </div>
                                                    <div class="offcanvas-body">
                                                        Voos
                                                        <div>
                                                            Pac01
                                                            <div class="card mb-3">
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Viagem em 27/07/22</h5>
                                                                    <p class="small">Somente ida - Classe econ�mica</p>
                                                                    <p class="small">A partir de</p>
                                                                    <p><small>R$</small><big>602,56</big></p>
                                                                    <p class="small">Taxas inclu�das - Voo direto</p>
                                                                </div>
                                                            </div>
                                                            Pac01
                                                            Pac02
                                                            <div class="card mb-3">
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Viagem em 10/08/22</h5>
                                                                    <p class="small">Somente ida - Classe econ�mica</p>
                                                                    <p class="small">A partir de</p>
                                                                    <p><small>R$</small><big>220,06</big></p>
                                                                    <p class="small">Taxas inclu�das - Voo direto</p>
                                                                </div>
                                                            </div>
                                                            Pac02
                                                            Pac03
                                                            <div class="card mb-3">
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Viagem em 14/09/22</h5>
                                                                    <p class="small">Somente ida - Classe econ�mica</p>
                                                                    <p class="small">A partir de</p>
                                                                    <p><small>R$</small><big>208,36</big></p>
                                                                    <p class="small">Taxas inclu�das - Voo direto</p>
                                                                </div>
                                                            </div>
                                                            Pac03
                                                        </div>
                                                        Voos
                                                    </div>
                                                </div>
                                            </div>
                                            OFERTAS
                                            MODAL
                                            <div>
                                                Button trigger modal
                                                <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal">
                                                    Saiba mais
                                                </button>

                                                Modal
                                                <div class="modal fade" id="exampleModal" tabindex="-1"
                                                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div class="modal-dialog">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h5 class="modal-title" id="exampleModalLabel">CURITIBA
                                                                </h5>
                                                                <button type="button" class="btn-close"
                                                                    data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div class="modal-body">
                                                                CARROSSEL
                                                                <div id="carouselExampleDark"
                                                                    class="carousel carousel-dark slide"
                                                                    data-bs-ride="carousel">
                                                                    <div class="carousel-indicators">
                                                                        <button type="button"
                                                                            data-bs-target="#carouselExampleDark"
                                                                            data-bs-slide-to="0" class="active"
                                                                            aria-current="true"
                                                                            aria-label="Slide 1"></button>
                                                                        <button type="button"
                                                                            data-bs-target="#carouselExampleDark"
                                                                            data-bs-slide-to="1"
                                                                            aria-label="Slide 2"></button>
                                                                        <button type="button"
                                                                            data-bs-target="#carouselExampleDark"
                                                                            data-bs-slide-to="2"
                                                                            aria-label="Slide 3"></button>
                                                                        <button type="button"
                                                                            data-bs-target="#carouselExampleDark"
                                                                            data-bs-slide-to="3"
                                                                            aria-label="Slide 4"></button>
                                                                    </div>
                                                                    <div class="carousel-inner text-center">
                                                                        <div class="carousel-item active"
                                                                            data-bs-interval="10000">
                                                                            <img src="../IMG/curitiba/centro-historico-de-curitiba.jpg"
                                                                                alt="..." />
                                                                            <div
                                                                                class="carousel-caption d-md-block bg-black bg-opacity-50">
                                                                                <h5 class="text-white">Centro Hist�rico
                                                                                </h5>
                                                                            </div>
                                                                        </div>
                                                                        <div class="carousel-item" data-bs-interval="2000">
                                                                            <img src="../IMG/curitiba/jardim-botanico-de-curitiba.jpg"
                                                                                alt="..." />
                                                                            <div
                                                                                class="carousel-caption d-md-block bg-black bg-opacity-50">
                                                                                <h5 class="text-white">Jardim Bot�nico
                                                                                </h5>
                                                                            </div>
                                                                        </div>
                                                                        <div class="carousel-item">
                                                                            <img src="../IMG/curitiba/memorial-ucraniano.jpg"
                                                                                alt="..." />
                                                                            <div
                                                                                class="carousel-caption d-md-block bg-black bg-opacity-50">
                                                                                <h5 class="text-white">Memorial
                                                                                    Ucraniano
                                                                                </h5>
                                                                            </div>
                                                                        </div>
                                                                        <div class="carousel-item">
                                                                            <img src="../IMG/curitiba/museu-oscar-niemeyer.jpg"
                                                                                alt="..." />
                                                                            <div
                                                                                class="carousel-caption d-md-block bg-black bg-opacity-50">
                                                                                <h5 class="text-white">Museu Oscar
                                                                                    Niemeyer
                                                                                </h5>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <button class="carousel-control-prev" type="button"
                                                                        data-bs-target="#carouselExampleDark"
                                                                        data-bs-slide="prev">
                                                                        <span class="carousel-control-prev-icon"
                                                                            aria-hidden="true"></span>
                                                                        <span class="visually-hidden">Previous</span>
                                                                    </button>
                                                                    <button class="carousel-control-next" type="button"
                                                                        data-bs-target="#carouselExampleDark"
                                                                        data-bs-slide="next">
                                                                        <span class="carousel-control-next-icon"
                                                                            aria-hidden="true"></span>
                                                                        <span class="visually-hidden">Next</span>
                                                                    </button>
                                                                </div>
                                                                CARROSSEL
                                                                <div>
                                                                    <p class="mt-4">
                                                                        O dia a dia de Curitiba reflete a mistura de
                                                                        imigrantes
                                                                        com
                                                                        que a cidade foi formada. Esse � s� um dos
                                                                        motivos
                                                                        pelo
                                                                        qual
                                                                        ela recebe bem os forasteiros. A cultura
                                                                        curitibana
                                                                        � um
                                                                        mix
                                                                        de ucranianos, poloneses, alem�es e italianos.
                                                                        Tudo
                                                                        com
                                                                        uma
                                                                        boa pitada dos tropeiros que passavam pela
                                                                        regi�o
                                                                        quando
                                                                        Curitiba ainda era a Vila de Nossa Senhora da
                                                                        Luz
                                                                        dos
                                                                        Pinhais. Fundada em 1693, a capital paranaense
                                                                        se
                                                                        mant�m
                                                                        aberta a novas culturas e est� sempre de bra�os
                                                                        abertos
                                                                        para
                                                                        o mundo. Os curitibanos se enchem de orgulho por
                                                                        viverem
                                                                        em
                                                                        um dos melhores destinos do pa�s e adoram
                                                                        dividir
                                                                        essa
                                                                        experi�ncia com quem deseja curtir alguns dias
                                                                        na
                                                                        cidade.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="modal-footer">
                                                                <button type="button" class="btn btn-primary">Comprar
                                                                    Voos</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            MODAL
                                        </div>
                                    </div>
                                </div>
                            </li>
                            Card04
                            Card05
                            <li class="me-5 mb-4">
                                <div class="card">
                                    <img src="./assents/img/curitiba-300x200.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Lisboa</h5>
                                        <p class="card-text">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa at provident
                                            aperiam, quisquam ullam recusandae?
                                        </p>
                                        <div class="d-flex justify-content-between">
                                            OFERTAS
                                            <div>
                                                <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas"
                                                    data-bs-target="#offcanvasWithBothOptions"
                                                    aria-controls="offcanvasWithBothOptions">Voos</button>

                                                <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1"
                                                    id="offcanvasWithBothOptions"
                                                    aria-labelledby="offcanvasWithBothOptionsLabel">
                                                    <div class="offcanvas-header">
                                                        <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
                                                            CURITIBA</h5>
                                                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
                                                            aria-label="Close"></button>
                                                    </div>
                                                    <div class="offcanvas-body">
                                                        Voos
                                                        <div>
                                                            Pac01
                                                            <div class="card mb-3">
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Viagem em 27/07/22</h5>
                                                                    <p class="small">Somente ida - Classe econ�mica</p>
                                                                    <p class="small">A partir de</p>
                                                                    <p><small>R$</small><big>602,56</big></p>
                                                                    <p class="small">Taxas inclu�das - Voo direto</p>
                                                                </div>
                                                            </div>
                                                            Pac01
                                                            Pac02
                                                            <div class="card mb-3">
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Viagem em 10/08/22</h5>
                                                                    <p class="small">Somente ida - Classe econ�mica</p>
                                                                    <p class="small">A partir de</p>
                                                                    <p><small>R$</small><big>220,06</big></p>
                                                                    <p class="small">Taxas inclu�das - Voo direto</p>
                                                                </div>
                                                            </div>
                                                            Pac02
                                                            Pac03
                                                            <div class="card mb-3">
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Viagem em 14/09/22</h5>
                                                                    <p class="small">Somente ida - Classe econ�mica</p>
                                                                    <p class="small">A partir de</p>
                                                                    <p><small>R$</small><big>208,36</big></p>
                                                                    <p class="small">Taxas inclu�das - Voo direto</p>
                                                                </div>
                                                            </div>
                                                            Pac03
                                                        </div>
                                                        Voos
                                                    </div>
                                                </div>
                                            </div>
                                            OFERTAS
                                            MODAL
                                            <div>
                                                Button trigger modal
                                                <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal">
                                                    Saiba mais
                                                </button>

                                                Modal
                                                <div class="modal fade" id="exampleModal" tabindex="-1"
                                                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div class="modal-dialog">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h5 class="modal-title" id="exampleModalLabel">CURITIBA
                                                                </h5>
                                                                <button type="button" class="btn-close"
                                                                    data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div class="modal-body">
                                                                CARROSSEL
                                                                <div id="carouselExampleDark"
                                                                    class="carousel carousel-dark slide"
                                                                    data-bs-ride="carousel">
                                                                    <div class="carousel-indicators">
                                                                        <button type="button"
                                                                            data-bs-target="#carouselExampleDark"
                                                                            data-bs-slide-to="0" class="active"
                                                                            aria-current="true"
                                                                            aria-label="Slide 1"></button>
                                                                        <button type="button"
                                                                            data-bs-target="#carouselExampleDark"
                                                                            data-bs-slide-to="1"
                                                                            aria-label="Slide 2"></button>
                                                                        <button type="button"
                                                                            data-bs-target="#carouselExampleDark"
                                                                            data-bs-slide-to="2"
                                                                            aria-label="Slide 3"></button>
                                                                        <button type="button"
                                                                            data-bs-target="#carouselExampleDark"
                                                                            data-bs-slide-to="3"
                                                                            aria-label="Slide 4"></button>
                                                                    </div>
                                                                    <div class="carousel-inner text-center">
                                                                        <div class="carousel-item active"
                                                                            data-bs-interval="10000">
                                                                            <img src="../IMG/curitiba/centro-historico-de-curitiba.jpg"
                                                                                alt="..." />
                                                                            <div
                                                                                class="carousel-caption d-md-block bg-black bg-opacity-50">
                                                                                <h5 class="text-white">Centro Hist�rico
                                                                                </h5>
                                                                            </div>
                                                                        </div>
                                                                        <div class="carousel-item" data-bs-interval="2000">
                                                                            <img src="../IMG/curitiba/jardim-botanico-de-curitiba.jpg"
                                                                                alt="..." />
                                                                            <div
                                                                                class="carousel-caption d-md-block bg-black bg-opacity-50">
                                                                                <h5 class="text-white">Jardim Bot�nico
                                                                                </h5>
                                                                            </div>
                                                                        </div>
                                                                        <div class="carousel-item">
                                                                            <img src="../IMG/curitiba/memorial-ucraniano.jpg"
                                                                                alt="..." />
                                                                            <div
                                                                                class="carousel-caption d-md-block bg-black bg-opacity-50">
                                                                                <h5 class="text-white">Memorial
                                                                                    Ucraniano
                                                                                </h5>
                                                                            </div>
                                                                        </div>
                                                                        <div class="carousel-item">
                                                                            <img src="../IMG/curitiba/museu-oscar-niemeyer.jpg"
                                                                                alt="..." />
                                                                            <div
                                                                                class="carousel-caption d-md-block bg-black bg-opacity-50">
                                                                                <h5 class="text-white">Museu Oscar
                                                                                    Niemeyer
                                                                                </h5>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <button class="carousel-control-prev" type="button"
                                                                        data-bs-target="#carouselExampleDark"
                                                                        data-bs-slide="prev">
                                                                        <span class="carousel-control-prev-icon"
                                                                            aria-hidden="true"></span>
                                                                        <span class="visually-hidden">Previous</span>
                                                                    </button>
                                                                    <button class="carousel-control-next" type="button"
                                                                        data-bs-target="#carouselExampleDark"
                                                                        data-bs-slide="next">
                                                                        <span class="carousel-control-next-icon"
                                                                            aria-hidden="true"></span>
                                                                        <span class="visually-hidden">Next</span>
                                                                    </button>
                                                                </div>
                                                                CARROSSEL
                                                                <div>
                                                                    <p class="mt-4">
                                                                        O dia a dia de Curitiba reflete a mistura de
                                                                        imigrantes
                                                                        com
                                                                        que a cidade foi formada. Esse � s� um dos
                                                                        motivos
                                                                        pelo
                                                                        qual
                                                                        ela recebe bem os forasteiros. A cultura
                                                                        curitibana
                                                                        � um
                                                                        mix
                                                                        de ucranianos, poloneses, alem�es e italianos.
                                                                        Tudo
                                                                        com
                                                                        uma
                                                                        boa pitada dos tropeiros que passavam pela
                                                                        regi�o
                                                                        quando
                                                                        Curitiba ainda era a Vila de Nossa Senhora da
                                                                        Luz
                                                                        dos
                                                                        Pinhais. Fundada em 1693, a capital paranaense
                                                                        se
                                                                        mant�m
                                                                        aberta a novas culturas e est� sempre de bra�os
                                                                        abertos
                                                                        para
                                                                        o mundo. Os curitibanos se enchem de orgulho por
                                                                        viverem
                                                                        em
                                                                        um dos melhores destinos do pa�s e adoram
                                                                        dividir
                                                                        essa
                                                                        experi�ncia com quem deseja curtir alguns dias
                                                                        na
                                                                        cidade.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="modal-footer">
                                                                <button type="button" class="btn btn-primary">Comprar
                                                                    Voos</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            MODAL
                                        </div>
                                    </div>
                                </div>
                            </li>
                            Card05
                        </ul>
                    </div>
                    DESTINOS INTERNACIONAIS
                </section>
                CARDS
            </main>
            <Footer />
        </>
    )
}
