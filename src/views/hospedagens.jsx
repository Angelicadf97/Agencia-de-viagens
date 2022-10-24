import React from 'react'

import Navbar from '../components/navigate/navbar';
import Footer from '../components/footer/footer';

export default function Hospedagens() {
    return (
        <>
            <Navbar />
            <main class="container conteudo my-4 px-4">
                {/* FORMUL�RIO */}
                <section>
                    <h2 class="pt-4">HOSPEDAGEM</h2>
                    <form>
                        <div class="row">
                            <div class="col-12 col-lg-6 col-xl-4 mb-2">
                                <label for="inputCity" class="form-label">Destino</label>
                                <input type="text" class="form-control" id="inputCity" />
                            </div>
                            <div class="col-6 col-lg-3 col-xl-2 mb-2">
                                <label for="inputDate" class="form-label">Chegada</label>
                                <input type="date" class="form-control" id="inputDate" />
                            </div>
                            <div class="col-6 col-lg-3 col-xl-2 mb-2">
                                <label for="inputDate" class="form-label">Partida</label>
                                <input type="date" class="form-control" id="inputDate" />
                            </div>
                            <div class="col-6 col-xl-2 mb-2">
                                <label for="inputDate" class="form-label">Tipo de hospedagem</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Hotel</option>
                                    <option value="1">Casa</option>
                                    <option value="2">Hostel</option>
                                    <option value="3">Pousada</option>
                                </select>
                            </div>
                            <div class="col-6 col-xl-2 mb-2">
                                <label for="inputDate" class="form-label">Quartos</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>1</option>
                                    <option value="1">2</option>
                                    <option value="2">3</option>
                                </select>
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="col-6 col-md-4 mb-2">
                                <label for="inputAdult" class="form-label">Adultos a partir de 18
                                    anos</label>
                                <input type="number" placeholder="0" class="form-control" id="inputAdult" />
                            </div>
                            <div class="col-6 col-md-4 mb-2">
                                <label for="inputChildren" class="form-label">Crian�as entre 2 e 17
                                    anos</label>
                                <input type="number" placeholder="0" class="form-control" id="inputChildren" />
                            </div>
                            <div class="col-12 col-md-4 mb-2 d-grid mt-4">
                                <button type="submit" class="btn btn-primary">Buscar</button>
                            </div>
                        </div>
                    </form>
                </section>
                {/* FORMUL�RIO */}

                {/* CARROSSEL */}
                <section>
                    <h4>PRINCIPAIS DESTINOS</h4>
                    <div>
                        <div id="carouselExampleCaptions" class="carousel slide bgred mb-3" data-bs-ride="false">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                                    class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                                    aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                                    aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"
                                    aria-label="Slide 4"></button>
                            </div>
                            <div class="carousel-inner text-center">
                                <div class="carousel-item active">
                                    <img src="./assents/img/sao_paulo-1600x400.png" alt="..." />
                                    <div class="carousel-caption d-md-block bg-opacity-50 bg-black">
                                        <h5 class="text-white">S�O PAULO-SP</h5>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat beatae officiis, hic eius officia reprehenderit sed sequi repellat odit vel eum! Molestias consectetur exercitationem repudiandae nemo minima ducimus tenetur numquam.</p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src="../assents/img/salvador-1600x400.png" alt="..." />
                                    <div class="carousel-caption d-md-block bg-opacity-50 bg-black">
                                        <h5><a href="ofertas-hos.html #salv" class="text-white">SALVADOR-BA</a></h5>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est facere reprehenderit quod quas repellendus neque velit cumque. Sequi nam vel mollitia neque corporis illo laudantium reprehenderit animi. Debitis, eligendi repellendus?</p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src="../assents/img/belo_horizonte-1600x400.png" alt="..." />
                                    <div class="carousel-caption d-md-block bg-opacity-50 bg-black">
                                        <h5><a href="ofertas-hos.html #belo" class="text-white">BELO HORIZONTE-BH</a></h5>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque dolore soluta, labore debitis accusamus itaque iusto, vero reprehenderit asperiores laudantium ipsam, deleniti explicabo eveniet. Vel corporis tempore dolores debitis corrupti?</p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src="../assents/img/brasilia-1600x400.png" alt="..." />
                                    <div class="carousel-caption d-md-block bg-opacity-50 bg-black">
                                        <h5><a href="ofertas-hos.html #bra" class="text-white">BRAS�LIA-DF</a></h5>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus possimus delectus, porro omnis sit dolorum impedit exercitationem architecto! Officia odit fuga fugit eius, recusandae exercitationem maxime at. Tempora, quam amet.</p>
                                    </div>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                                data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                                data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </section>
                {/* CARROSSEL */}

                {/* CARDS */}
                <section>
                    {/* DESTINOS NACIONAIS */}
                    <div>
                        <h4>DESTINOS NACIONAIS</h4>
                        <ul class="promo">
                            Card01
                            <li class="me-5 mb-4">
                                <div class="card">
                                    <img src="../assents/img/curitiba-300x200.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Curitiba</h5>
                                        <p class="card-text">
                                            Curitiba � conhecida pelo cuidado com o planejamento urbano, belas �reas verdes
                                            e um transporte p�blico de qualidade.
                                        </p>
                                        <div class="d-flex justify-content-between">
                                            {/* OFERTAS */}
                                            <div>
                                                <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas"
                                                    data-bs-target="#offcanvasWithBothOptions"
                                                    aria-controls="offcanvasWithBothOptions">Di�rias</button>

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
                                                        {/* Pacotes */}
                                                        <div>
                                                            Pac01
                                                            <div class="card mb-3">
                                                                <img src="../IMG/fortaleza/plaza-praia-suites-300x200.png"
                                                                    class="card-img-top" alt="..." />
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Nacional Inn Curitiba Torres</h5>
                                                                    <p class="card-text">A partir de <strong>Qua 17
                                                                        Ago</strong> Ate <strong> Sex 19 Ago</strong>
                                                                    </p>
                                                                    <p class="small">1 Quarto - 1 Cama casal</p>
                                                                    <p class="small">Diaria por pessoa</p>
                                                                    <p class="card-text"><small>R$</small><big>120,00</big></p>
                                                                </div>
                                                            </div>
                                                            Pac01
                                                            Pac02
                                                            <div class="card mb-3">
                                                                <img src="../IMG/fortaleza/plaza-praia-suites-300x200.png"
                                                                    class="card-img-top" alt="..." />
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Nacional Inn Curitiba Torres</h5>
                                                                    <p class="card-text">A partir de <strong>Qua 17
                                                                        Ago</strong> Ate <strong> Sex 19 Ago</strong>
                                                                    </p>
                                                                    <p class="small">1 Quarto - 1 Cama casal</p>
                                                                    <p class="small">Diaria por pessoa</p>
                                                                    <p class="card-text"><small>R$</small><big>120,00</big></p>
                                                                </div>
                                                            </div>
                                                            Pac02
                                                            Pac03
                                                            <div class="card mb-3">
                                                                <img src="../IMG/fortaleza/plaza-praia-suites-300x200.png"
                                                                    class="card-img-top" alt="..." />
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Nacional Inn Curitiba Torres</h5>
                                                                    <p class="card-text">A partir de <strong>Qua 17
                                                                        Ago</strong> Ate <strong> Sex 19 Ago</strong>
                                                                    </p>
                                                                    <p class="small">1 Quarto - 1 Cama casal</p>
                                                                    <p class="small">Diaria por pessoa</p>
                                                                    <p class="card-text"><small>R$</small><big>120,00</big></p>
                                                                </div>
                                                            </div>
                                                            Pac03
                                                        </div>
                                                        {/* Pacotes */}
                                                    </div>
                                                </div>
                                            </div>
                                            {/* OFERTAS */}
                                            {/* MODAL */}
                                            <div>
                                                {/* Button trigger modal */}
                                                <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal">
                                                    Saiba mais
                                                </button>

                                                {/* Modal */}
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
                                                                {/* CARROSSEL */}
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
                                                                {/* CARROSSEL */}
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
                                                                    pacotes</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* MODAL */}
                                        </div>
                                    </div>
                                </div>
                            </li>
                            Card01
                            Card02
                            < li class="me-5 mb-4" >
                                <div class="card">
                                    <img src="../assents/img/foz_do_iguacu-300x200.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Foz do Igua��</h5>
                                        <p class="card-text">
                                            Foz do Igua�u � uma cidade cheia de atra��es e guarda um dos mais belos
                                            espet�culos da natureza, as
                                            Cataratas do Igua�u.
                                        </p>
                                        <div class="d-flex justify-content-between">
                                            {/* OFERTAS */}
                                            <div>
                                                <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas"
                                                    data-bs-target="#offcanvasWithBothOptions"
                                                    aria-controls="offcanvasWithBothOptions">Di�rias</button>

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
                                                        {/* Pacotes */}
                                                        <div>
                                                            {/* Pac01 */}
                                                            <div class="card mb-3">
                                                                <img src="../IMG/fortaleza/plaza-praia-suites-300x200.png"
                                                                    class="card-img-top" alt="..." />
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Nacional Inn Curitiba Torres</h5>
                                                                    <p class="card-text">A partir de <strong>Qua 17
                                                                        Ago</strong> Ate <strong> Sex 19 Ago</strong>
                                                                    </p>
                                                                    <p class="small">1 Quarto - 1 Cama casal</p>
                                                                    <p class="small">Diaria por pessoa</p>
                                                                    <p class="card-text"><small>R$</small><big>120,00</big></p>
                                                                </div>
                                                            </div>
                                                            {/* Pac01 */}
                                                            {/* Pac02 */}
                                                            <div class="card mb-3">
                                                                <img src="../IMG/fortaleza/plaza-praia-suites-300x200.png"
                                                                    class="card-img-top" alt="..." />
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Nacional Inn Curitiba Torres</h5>
                                                                    <p class="card-text">A partir de <strong>Qua 17
                                                                        Ago</strong> Ate <strong> Sex 19 Ago</strong>
                                                                    </p>
                                                                    <p class="small">1 Quarto - 1 Cama casal</p>
                                                                    <p class="small">Diaria por pessoa</p>
                                                                    <p class="card-text"><small>R$</small><big>120,00</big></p>
                                                                </div>
                                                            </div>
                                                            {/* Pac02 */}
                                                            {/* Pac03 */}
                                                            <div class="card mb-3">
                                                                <img src="../IMG/fortaleza/plaza-praia-suites-300x200.png"
                                                                    class="card-img-top" alt="..." />
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Nacional Inn Curitiba Torres</h5>
                                                                    <p class="card-text">A partir de <strong>Qua 17
                                                                        Ago</strong> Ate <strong> Sex 19 Ago</strong>
                                                                    </p>
                                                                    <p class="small">1 Quarto - 1 Cama casal</p>
                                                                    <p class="small">Diaria por pessoa</p>
                                                                    <p class="card-text"><small>R$</small><big>120,00</big></p>
                                                                </div>
                                                            </div>
                                                            {/* Pac03 */}
                                                        </div>
                                                        {/* Pacotes */}
                                                    </div>
                                                </div>
                                            </div >
                                            {/* OFERTAS */}
                                            {/* MODAL */}
                                            < div >
                                                {/* Button trigger modal */}
                                                < button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal" >
                                                    Saiba mais
                                                </button >

                                                {/* Modal */}
                                                < div class="modal fade" id="exampleModal" tabindex="-1"
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
                                                                {/* CARROSSEL */}
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
                                                                {/* CARROSSEL */}
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
                                                                    pacotes</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div >
                                                {/* Modal */}
                                            </div >
                                            {/* MODAL */}
                                        </div >
                                    </div >
                                </div>
                            </li >
                            Card02
                            Card03
                            < li class="me-5 mb-4" >
                                <div class="card">
                                    <img src="../assents/img/jalapao-300x200.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Jalap�o</h5>
                                        <p class="card-text">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa at provident
                                            aperiam, quisquam ullam recusandae?
                                        </p>
                                        <div class="d-flex justify-content-between">
                                            {/* OFERTAS */}
                                            <div>
                                                <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas"
                                                    data-bs-target="#offcanvasWithBothOptions"
                                                    aria-controls="offcanvasWithBothOptions">Di�rias</button>

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
                                                        {/* Pacotes */}
                                                        <div>
                                                            {/* Pac01 */}
                                                            <div class="card mb-3">
                                                                <img src="../IMG/fortaleza/plaza-praia-suites-300x200.png"
                                                                    class="card-img-top" alt="..." />
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Nacional Inn Curitiba Torres</h5>
                                                                    <p class="card-text">A partir de <strong>Qua 17
                                                                        Ago</strong> Ate <strong> Sex 19 Ago</strong>
                                                                    </p>
                                                                    <p class="small">1 Quarto - 1 Cama casal</p>
                                                                    <p class="small">Diaria por pessoa</p>
                                                                    <p class="card-text"><small>R$</small><big>120,00</big></p>
                                                                </div>
                                                            </div>
                                                            {/* Pac01 */}
                                                            {/* Pac02 */}
                                                            <div class="card mb-3">
                                                                <img src="../IMG/fortaleza/plaza-praia-suites-300x200.png"
                                                                    class="card-img-top" alt="..." />
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Nacional Inn Curitiba Torres</h5>
                                                                    <p class="card-text">A partir de <strong>Qua 17
                                                                        Ago</strong> Ate <strong> Sex 19 Ago</strong>
                                                                    </p>
                                                                    <p class="small">1 Quarto - 1 Cama casal</p>
                                                                    <p class="small">Diaria por pessoa</p>
                                                                    <p class="card-text"><small>R$</small><big>120,00</big></p>
                                                                </div>
                                                            </div>
                                                            {/* Pac02 */}
                                                            {/* Pac03 */}
                                                            <div class="card mb-3">
                                                                <img src="../IMG/fortaleza/plaza-praia-suites-300x200.png"
                                                                    class="card-img-top" alt="..." />
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Nacional Inn Curitiba Torres</h5>
                                                                    <p class="card-text">A partir de <strong>Qua 17
                                                                        Ago</strong> Ate <strong> Sex 19 Ago</strong>
                                                                    </p>
                                                                    <p class="small">1 Quarto - 1 Cama casal</p>
                                                                    <p class="small">Diaria por pessoa</p>
                                                                    <p class="card-text"><small>R$</small><big>120,00</big></p>
                                                                </div>
                                                            </div>
                                                            {/* Pac03 */}
                                                        </div>
                                                        {/* Pacotes */}
                                                    </div>
                                                </div>
                                            </div >
                                            {/* OFERTAS */}
                                            {/* MODAL */}
                                            < div >
                                                {/* Button trigger modal */}
                                                < button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal" >
                                                    Saiba mais
                                                </button >

                                                {/* Modal */}
                                                < div class="modal fade" id="exampleModal" tabindex="-1"
                                                    aria-labelledby="exampleModalLabel" aria-hidden="true" >
                                                    <div class="modal-dialog">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h5 class="modal-title" id="exampleModalLabel">CURITIBA
                                                                </h5>
                                                                <button type="button" class="btn-close"
                                                                    data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div class="modal-body">
                                                                {/* CARROSSEL */}
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
                                                                {/* CARROSSEL */}
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
                                                                    pacotes</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div >
                                            </div >
                                            {/* MODAL */}
                                        </div >
                                    </div >
                                </div>
                            </li >
                            Card03
                            {/* Card04 */}
                            < li class="me-5 mb-4" >
                                <div class="card">
                                    <img src="../assents/img/maceio-300x200.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Macei�</h5>
                                        <p class="card-text">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa at provident
                                            aperiam, quisquam ullam recusandae?
                                        </p>
                                        <div class="d-flex justify-content-between">
                                            {/* OFERTAS */}
                                            <div>
                                                <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas"
                                                    data-bs-target="#offcanvasWithBothOptions"
                                                    aria-controls="offcanvasWithBothOptions">Di�rias</button>

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
                                                        {/* Pacotes */}
                                                        <div>
                                                            {/* Pac01 */}
                                                            <div class="card mb-3">
                                                                <img src="../IMG/fortaleza/plaza-praia-suites-300x200.png"
                                                                    class="card-img-top" alt="..." />
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Nacional Inn Curitiba Torres</h5>
                                                                    <p class="card-text">A partir de <strong>Qua 17
                                                                        Ago</strong> Ate <strong> Sex 19 Ago</strong>
                                                                    </p>
                                                                    <p class="small">1 Quarto - 1 Cama casal</p>
                                                                    <p class="small">Diaria por pessoa</p>
                                                                    <p class="card-text"><small>R$</small><big>120,00</big></p>
                                                                </div>
                                                            </div>
                                                            {/* Pac01 */}
                                                            {/* Pac02 */}
                                                            <div class="card mb-3">
                                                                <img src="../IMG/fortaleza/plaza-praia-suites-300x200.png"
                                                                    class="card-img-top" alt="..." />
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Nacional Inn Curitiba Torres</h5>
                                                                    <p class="card-text">A partir de <strong>Qua 17
                                                                        Ago</strong> Ate <strong> Sex 19 Ago</strong>
                                                                    </p>
                                                                    <p class="small">1 Quarto - 1 Cama casal</p>
                                                                    <p class="small">Diaria por pessoa</p>
                                                                    <p class="card-text"><small>R$</small><big>120,00</big></p>
                                                                </div>
                                                            </div>
                                                            {/* Pac02 */}
                                                            {/* Pac03 */}
                                                            <div class="card mb-3">
                                                                <img src="../IMG/fortaleza/plaza-praia-suites-300x200.png"
                                                                    class="card-img-top" alt="..." />
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Nacional Inn Curitiba Torres</h5>
                                                                    <p class="card-text">A partir de <strong>Qua 17
                                                                        Ago</strong> Ate <strong> Sex 19 Ago</strong>
                                                                    </p>
                                                                    <p class="small">1 Quarto - 1 Cama casal</p>
                                                                    <p class="small">Diaria por pessoa</p>
                                                                    <p class="card-text"><small>R$</small><big>120,00</big></p>
                                                                </div>
                                                            </div>
                                                            {/* Pac03 */}
                                                        </div>
                                                        {/* Pacotes */}
                                                    </div>
                                                </div>
                                            </div >
                                            {/* OFERTAS */}
                                            {/* MODAL */}
                                            < div >
                                                {/* Button trigger modal */}
                                                < button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal" >
                                                    Saiba mais
                                                </button >

                                                {/* Modal */}
                                                < div class="modal fade" id="exampleModal" tabindex="-1"
                                                    aria-labelledby="exampleModalLabel" aria-hidden="true" >
                                                    <div class="modal-dialog">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h5 class="modal-title" id="exampleModalLabel">CURITIBA
                                                                </h5>
                                                                <button type="button" class="btn-close"
                                                                    data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div class="modal-body">
                                                                {/* CARROSSEL */}
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
                                                                {/* CARROSSEL */}
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
                                                                    pacotes</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div >
                                            </div >
                                            {/* MODAL */}
                                        </div >
                                    </div >
                                </div>
                            </li >
                            {/* Card04 */}
                            {/* Card05 */}
                            < li class="me-5 mb-4" >
                                <div class="card">
                                    <img src="../assents/img/ouro_preto-300x200.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Outro Preto</h5>
                                        <p class="card-text">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa at provident
                                            aperiam, quisquam ullam recusandae?
                                        </p>
                                        <div class="d-flex justify-content-between">
                                            {/* OFERTAS */}
                                            <div>
                                                <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas"
                                                    data-bs-target="#offcanvasWithBothOptions"
                                                    aria-controls="offcanvasWithBothOptions">Di�rias</button>

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
                                                        {/* Pacotes */}
                                                        <div>
                                                            {/* Pac01 */}
                                                            <div class="card mb-3">
                                                                <img src="../IMG/fortaleza/plaza-praia-suites-300x200.png"
                                                                    class="card-img-top" alt="..." />
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Nacional Inn Curitiba Torres</h5>
                                                                    <p class="card-text">A partir de <strong>Qua 17
                                                                        Ago</strong> Ate <strong> Sex 19 Ago</strong>
                                                                    </p>
                                                                    <p class="small">1 Quarto - 1 Cama casal</p>
                                                                    <p class="small">Diaria por pessoa</p>
                                                                    <p class="card-text"><small>R$</small><big>120,00</big></p>
                                                                </div>
                                                            </div>
                                                            {/* Pac01 */}
                                                            {/* Pac02 */}
                                                            <div class="card mb-3">
                                                                <img src="../IMG/fortaleza/plaza-praia-suites-300x200.png"
                                                                    class="card-img-top" alt="..." />
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Nacional Inn Curitiba Torres</h5>
                                                                    <p class="card-text">A partir de <strong>Qua 17
                                                                        Ago</strong> Ate <strong> Sex 19 Ago</strong>
                                                                    </p>
                                                                    <p class="small">1 Quarto - 1 Cama casal</p>
                                                                    <p class="small">Diaria por pessoa</p>
                                                                    <p class="card-text"><small>R$</small><big>120,00</big></p>
                                                                </div>
                                                            </div>
                                                            {/* Pac02 */}
                                                            {/* Pac03 */}
                                                            <div class="card mb-3">
                                                                <img src="../IMG/fortaleza/plaza-praia-suites-300x200.png"
                                                                    class="card-img-top" alt="..." />
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Nacional Inn Curitiba Torres</h5>
                                                                    <p class="card-text">A partir de <strong>Qua 17
                                                                        Ago</strong> Ate <strong> Sex 19 Ago</strong>
                                                                    </p>
                                                                    <p class="small">1 Quarto - 1 Cama casal</p>
                                                                    <p class="small">Diaria por pessoa</p>
                                                                    <p class="card-text"><small>R$</small><big>120,00</big></p>
                                                                </div>
                                                            </div>
                                                            {/* Pac03 */}
                                                        </div>
                                                        {/* Pacotes */}
                                                    </div>
                                                </div>
                                            </div >
                                            {/* OFERTAS */}
                                            {/* MODAL */}
                                            < div >
                                                {/* Button trigger modal */}
                                                < button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal">
                                                    Saiba mais
                                                </button >

                                                {/* Modal */}
                                                < div class="modal fade" id="exampleModal" tabindex="-1"
                                                    aria-labelledby="exampleModalLabel" aria-hidden="true" >
                                                    <div class="modal-dialog">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h5 class="modal-title" id="exampleModalLabel">CURITIBA
                                                                </h5>
                                                                <button type="button" class="btn-close"
                                                                    data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div class="modal-body">
                                                                {/* CARROSSEL */}
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
                                                                {/* CARROSSEL */}
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
                                                                    pacotes</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div >
                                            </div >
                                            {/* MODAL */}
                                        </div >
                                    </div >
                                </div>
                            </li >
                            {/* Card05 */}
                        </ul >
                    </div >
                    {/* DESTINOS NACIONAIS */}

                    {/* DESTINOS INTERNACIONAIS */}
                    <div>
                        <h4 class="mt-4">DESTINOS INTERNACIONAIS</h4>
                        <ul class="promo">
                            {/* Card01 */}
                            <li class="me-5 mb-4">
                                <div class="card">
                                    <img src="../assents/img/buenos_aires-300x200.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Buenos Aires</h5>
                                        <p class="card-text">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa at provident
                                            aperiam, quisquam ullam recusandae?
                                        </p>
                                        <div class="d-flex justify-content-between">
                                            {/* OFERTAS */}
                                            <div>
                                                <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas"
                                                    data-bs-target="#offcanvasWithBothOptions"
                                                    aria-controls="offcanvasWithBothOptions">Di�rias</button>

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
                                                        {/* Pacotes */}
                                                        <div>
                                                            {/* Pac01 */}
                                                            <div class="card mb-3">
                                                                <img src="../IMG/fortaleza/plaza-praia-suites-300x200.png"
                                                                    class="card-img-top" alt="..." />
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Nacional Inn Curitiba Torres</h5>
                                                                    <p class="card-text">A partir de <strong>Qua 17
                                                                        Ago</strong> Ate <strong> Sex 19 Ago</strong>
                                                                    </p>
                                                                    <p class="small">1 Quarto - 1 Cama casal</p>
                                                                    <p class="small">Diaria por pessoa</p>
                                                                    <p class="card-text"><small>R$</small><big>120,00</big></p>
                                                                </div>
                                                            </div>
                                                            {/* Pac01 */}
                                                            {/* Pac02 */}
                                                            <div class="card mb-3">
                                                                <img src="../IMG/fortaleza/plaza-praia-suites-300x200.png"
                                                                    class="card-img-top" alt="..." />
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Nacional Inn Curitiba Torres</h5>
                                                                    <p class="card-text">A partir de <strong>Qua 17
                                                                        Ago</strong> Ate <strong> Sex 19 Ago</strong>
                                                                    </p>
                                                                    <p class="small">1 Quarto - 1 Cama casal</p>
                                                                    <p class="small">Diaria por pessoa</p>
                                                                    <p class="card-text"><small>R$</small><big>120,00</big></p>
                                                                </div>
                                                            </div>
                                                            {/* Pac02 */}
                                                            {/* Pac03 */}
                                                            <div class="card mb-3">
                                                                <img src="../IMG/fortaleza/plaza-praia-suites-300x200.png"
                                                                    class="card-img-top" alt="..." />
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Nacional Inn Curitiba Torres</h5>
                                                                    <p class="card-text">A partir de <strong>Qua 17
                                                                        Ago</strong> Ate <strong> Sex 19 Ago</strong>
                                                                    </p>
                                                                    <p class="small">1 Quarto - 1 Cama casal</p>
                                                                    <p class="small">Diaria por pessoa</p>
                                                                    <p class="card-text"><small>R$</small><big>120,00</big></p>
                                                                </div>
                                                            </div>
                                                            {/* Pac03 */}
                                                        </div>
                                                        {/* Pacotes */}
                                                    </div>
                                                </div>
                                            </div>
                                            {/* OFERTAS */}
                                            {/* MODAL */}
                                            <div>
                                                {/* Button trigger modal */}
                                                <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal">
                                                    Saiba mais
                                                </button>

                                                {/* Modal */}
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
                                                                {/* CARROSSEL */}
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
                                                                {/* CARROSSEL */}
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
                                                                    pacotes</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* MODAL */}
                                        </div>
                                    </div >
                                </div>
                            </li >
                            {/* Card01 */}
                            {/* Card02 */}
                            < li class="me-5 mb-4" >
                                <div class="card">
                                    <img src="../assents/img/orlando-300x200.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Orlando</h5>
                                        <p class="card-text">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa at provident
                                            aperiam, quisquam ullam recusandae?
                                        </p>
                                        <div class="d-flex justify-content-between">
                                            {/* OFERTAS */}
                                            <div>
                                                <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas"
                                                    data-bs-target="#offcanvasWithBothOptions"
                                                    aria-controls="offcanvasWithBothOptions">Di�rias</button>

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
                                                        {/* Pacotes */}
                                                        <div>
                                                            {/* Pac01 */}
                                                            <div class="card mb-3">
                                                                <img src="../IMG/fortaleza/plaza-praia-suites-300x200.png"
                                                                    class="card-img-top" alt="..." />
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Nacional Inn Curitiba Torres</h5>
                                                                    <p class="card-text">A partir de <strong>Qua 17
                                                                        Ago</strong> Ate <strong> Sex 19 Ago</strong>
                                                                    </p>
                                                                    <p class="small">1 Quarto - 1 Cama casal</p>
                                                                    <p class="small">Diaria por pessoa</p>
                                                                    <p class="card-text"><small>R$</small><big>120,00</big></p>
                                                                </div>
                                                            </div>
                                                            {/* Pac01 */}
                                                            {/* Pac02 */}
                                                            <div class="card mb-3">
                                                                <img src="../IMG/fortaleza/plaza-praia-suites-300x200.png"
                                                                    class="card-img-top" alt="..." />
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Nacional Inn Curitiba Torres</h5>
                                                                    <p class="card-text">A partir de <strong>Qua 17
                                                                        Ago</strong> Ate <strong> Sex 19 Ago</strong>
                                                                    </p>
                                                                    <p class="small">1 Quarto - 1 Cama casal</p>
                                                                    <p class="small">Diaria por pessoa</p>
                                                                    <p class="card-text"><small>R$</small><big>120,00</big></p>
                                                                </div>
                                                            </div>
                                                            {/* Pac02 */}
                                                            {/* Pac03 */}
                                                            <div class="card mb-3">
                                                                <img src="../IMG/fortaleza/plaza-praia-suites-300x200.png"
                                                                    class="card-img-top" alt="..." />
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Nacional Inn Curitiba Torres</h5>
                                                                    <p class="card-text">A partir de <strong>Qua 17
                                                                        Ago</strong> Ate <strong> Sex 19 Ago</strong>
                                                                    </p>
                                                                    <p class="small">1 Quarto - 1 Cama casal</p>
                                                                    <p class="small">Diaria por pessoa</p>
                                                                    <p class="card-text"><small>R$</small><big>120,00</big></p>
                                                                </div>
                                                            </div>
                                                            {/* Pac03 */}
                                                        </div>
                                                        {/* Pacotes */}
                                                    </div>
                                                </div>
                                            </div >
                                            {/* OFERTAS */}
                                            {/* MODAL */}
                                            < div >
                                                {/* Button trigger modal */}
                                                < button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal" >
                                                    Saiba mais
                                                </button >

                                                {/* Modal */}
                                                < div class="modal fade" id="exampleModal" tabindex="-1"
                                                    aria-labelledby="exampleModalLabel" aria-hidden="true" >
                                                    <div class="modal-dialog">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h5 class="modal-title" id="exampleModalLabel">CURITIBA
                                                                </h5>
                                                                <button type="button" class="btn-close"
                                                                    data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div class="modal-body">
                                                                {/* CARROSSEL */}
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
                                                                {/* CARROSSEL */}
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
                                                                    pacotes</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div >
                                            </div >
                                            {/* MODAL */}
                                        </div >
                                    </div >
                                </div>
                            </li >
                            {/* Card02 */}
                            {/* Card03 */}
                            < li class="me-5 mb-4" >
                                <div class="card">
                                    <img src="../assents/img/braga-300x200.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Braga</h5>
                                        <p class="card-text">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa at provident
                                            aperiam, quisquam ullam recusandae?
                                        </p>
                                        <div class="d-flex justify-content-between">
                                            {/* OFERTAS */}
                                            <div>
                                                <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas"
                                                    data-bs-target="#offcanvasWithBothOptions"
                                                    aria-controls="offcanvasWithBothOptions">Di�rias</button>

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
                                                        {/* Pacotes */}
                                                        <div>
                                                            {/* Pac01 */}
                                                            <div class="card mb-3">
                                                                <img src="../IMG/fortaleza/plaza-praia-suites-300x200.png"
                                                                    class="card-img-top" alt="..." />
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Nacional Inn Curitiba Torres</h5>
                                                                    <p class="card-text">A partir de <strong>Qua 17
                                                                        Ago</strong> Ate <strong> Sex 19 Ago</strong>
                                                                    </p>
                                                                    <p class="small">1 Quarto - 1 Cama casal</p>
                                                                    <p class="small">Diaria por pessoa</p>
                                                                    <p class="card-text"><small>R$</small><big>120,00</big></p>
                                                                </div>
                                                            </div>
                                                            {/* Pac01 */}
                                                            {/* Pac02 */}
                                                            <div class="card mb-3">
                                                                <img src="../IMG/fortaleza/plaza-praia-suites-300x200.png"
                                                                    class="card-img-top" alt="..." />
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Nacional Inn Curitiba Torres</h5>
                                                                    <p class="card-text">A partir de <strong>Qua 17
                                                                        Ago</strong> Ate <strong> Sex 19 Ago</strong>
                                                                    </p>
                                                                    <p class="small">1 Quarto - 1 Cama casal</p>
                                                                    <p class="small">Diaria por pessoa</p>
                                                                    <p class="card-text"><small>R$</small><big>120,00</big></p>
                                                                </div>
                                                            </div>
                                                            {/* Pac02 */}
                                                            {/* Pac03 */}
                                                            <div class="card mb-3">
                                                                <img src="../IMG/fortaleza/plaza-praia-suites-300x200.png"
                                                                    class="card-img-top" alt="..." />
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Nacional Inn Curitiba Torres</h5>
                                                                    <p class="card-text">A partir de <strong>Qua 17
                                                                        Ago</strong> Ate <strong> Sex 19 Ago</strong>
                                                                    </p>
                                                                    <p class="small">1 Quarto - 1 Cama casal</p>
                                                                    <p class="small">Diaria por pessoa</p>
                                                                    <p class="card-text"><small>R$</small><big>120,00</big></p>
                                                                </div>
                                                            </div>
                                                            {/* Pac03 */}
                                                        </div>
                                                        {/* Pacotes */}
                                                    </div>
                                                </div>
                                            </div >
                                            {/* OFERTAS */}
                                            {/* MODAL */}
                                            < div >
                                                {/* Button trigger modal */}
                                                < button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal" >
                                                    Saiba mais
                                                </button >

                                                {/* Modal */}
                                                < div class="modal fade" id="exampleModal" tabindex="-1"
                                                    aria-labelledby="exampleModalLabel" aria-hidden="true" >
                                                    <div class="modal-dialog">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h5 class="modal-title" id="exampleModalLabel">CURITIBA
                                                                </h5>
                                                                <button type="button" class="btn-close"
                                                                    data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div class="modal-body">
                                                                {/* CARROSSEL */}
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
                                                                {/* CARROSSEL */}
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
                                                                    pacotes</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div >
                                            </div >
                                            {/* MODAL */}
                                        </div >
                                    </div >
                                </div>
                            </li >
                            {/* Card03 */}
                            {/* Card04 */}
                            < li class="me-5 mb-4" >
                                <div class="card">
                                    <img src="../assents/img/bangkok-300x200.png" class="card-img-top" alt="..." />
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
                                                    aria-controls="offcanvasWithBothOptions">Di�rias</button>

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
                                                        Pacotes
                                                        <div>
                                                            {/* Pac01 */}
                                                            <div class="card mb-3">
                                                                <img src="../IMG/fortaleza/plaza-praia-suites-300x200.png"
                                                                    class="card-img-top" alt="..." />
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Nacional Inn Curitiba Torres</h5>
                                                                    <p class="card-text">A partir de <strong>Qua 17
                                                                        Ago</strong> Ate <strong> Sex 19 Ago</strong>
                                                                    </p>
                                                                    <p class="small">1 Quarto - 1 Cama casal</p>
                                                                    <p class="small">Diaria por pessoa</p>
                                                                    <p class="card-text"><small>R$</small><big>120,00</big></p>
                                                                </div>
                                                            </div>
                                                            {/* Pac01 */}
                                                            {/* Pac02 */}
                                                            <div class="card mb-3">
                                                                <img src="../IMG/fortaleza/plaza-praia-suites-300x200.png"
                                                                    class="card-img-top" alt="..." />
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Nacional Inn Curitiba Torres</h5>
                                                                    <p class="card-text">A partir de <strong>Qua 17
                                                                        Ago</strong> Ate <strong> Sex 19 Ago</strong>
                                                                    </p>
                                                                    <p class="small">1 Quarto - 1 Cama casal</p>
                                                                    <p class="small">Diaria por pessoa</p>
                                                                    <p class="card-text"><small>R$</small><big>120,00</big></p>
                                                                </div>
                                                            </div>
                                                            {/* Pac02 */}
                                                            {/* Pac03 */}
                                                            <div class="card mb-3">
                                                                <img src="../IMG/fortaleza/plaza-praia-suites-300x200.png"
                                                                    class="card-img-top" alt="..." />
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Nacional Inn Curitiba Torres</h5>
                                                                    <p class="card-text">A partir de <strong>Qua 17
                                                                        Ago</strong> Ate <strong> Sex 19 Ago</strong>
                                                                    </p>
                                                                    <p class="small">1 Quarto - 1 Cama casal</p>
                                                                    <p class="small">Diaria por pessoa</p>
                                                                    <p class="card-text"><small>R$</small><big>120,00</big></p>
                                                                </div>
                                                            </div>
                                                            {/* Pac03 */}
                                                        </div>
                                                        Pacotes
                                                    </div>
                                                </div>
                                            </div >
                                            OFERTAS
                                            MODAL
                                            < div >
                                                Button trigger modal
                                                < button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal" >
                                                    Saiba mais
                                                </button >

                                                Modal
                                                < div class="modal fade" id="exampleModal" tabindex="-1"
                                                    aria-labelledby="exampleModalLabel" aria-hidden="true" >
                                                    <div class="modal-dialog">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h5 class="modal-title" id="exampleModalLabel">CURITIBA
                                                                </h5>
                                                                <button type="button" class="btn-close"
                                                                    data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div class="modal-body">
                                                                {/* CARROSSEL */}
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
                                                                {/* CARROSSEL */}
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
                                                                    pacotes</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div >
                                            </div >
                                            MODAL
                                        </div >
                                    </div >
                                </div>
                            </li >
                            {/* Card04 */}
                            {/* Card05 */}
                            < li class="me-5 mb-4" >
                                <div class="card">
                                    <img src="../assents/img/lisboa-300x200.png" class="card-img-top" alt="..." />
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
                                                    aria-controls="offcanvasWithBothOptions">Di�rias</button>

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
                                                        Pacotes
                                                        <div>
                                                            {/* Pac01 */}
                                                            <div class="card mb-3">
                                                                <img src="../IMG/fortaleza/plaza-praia-suites-300x200.png"
                                                                    class="card-img-top" alt="..." />
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Nacional Inn Curitiba Torres</h5>
                                                                    <p class="card-text">A partir de <strong>Qua 17
                                                                        Ago</strong> Ate <strong> Sex 19 Ago</strong>
                                                                    </p>
                                                                    <p class="small">1 Quarto - 1 Cama casal</p>
                                                                    <p class="small">Diaria por pessoa</p>
                                                                    <p class="card-text"><small>R$</small><big>120,00</big></p>
                                                                </div>
                                                            </div>
                                                            {/* Pac01 */}
                                                            {/* Pac02 */}
                                                            <div class="card mb-3">
                                                                <img src="../IMG/fortaleza/plaza-praia-suites-300x200.png"
                                                                    class="card-img-top" alt="..." />
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Nacional Inn Curitiba Torres</h5>
                                                                    <p class="card-text">A partir de <strong>Qua 17
                                                                        Ago</strong> Ate <strong> Sex 19 Ago</strong>
                                                                    </p>
                                                                    <p class="small">1 Quarto - 1 Cama casal</p>
                                                                    <p class="small">Diaria por pessoa</p>
                                                                    <p class="card-text"><small>R$</small><big>120,00</big></p>
                                                                </div>
                                                            </div>
                                                            {/* Pac02 */}
                                                            {/* Pac03 */}
                                                            <div class="card mb-3">
                                                                <img src="../IMG/fortaleza/plaza-praia-suites-300x200.png"
                                                                    class="card-img-top" alt="..." />
                                                                <div class="card-body">
                                                                    <h5 class="card-title">Nacional Inn Curitiba Torres</h5>
                                                                    <p class="card-text">A partir de <strong>Qua 17
                                                                        Ago</strong> Ate <strong> Sex 19 Ago</strong>
                                                                    </p>
                                                                    <p class="small">1 Quarto - 1 Cama casal</p>
                                                                    <p class="small">Diaria por pessoa</p>
                                                                    <p class="card-text"><small>R$</small><big>120,00</big></p>
                                                                </div>
                                                            </div>
                                                            {/* Pac03 */}
                                                        </div>
                                                        Pacotes
                                                    </div>
                                                </div>
                                            </div >
                                            OFERTAS
                                            MODAL
                                            < div >
                                                Button trigger modal
                                                < button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal" >
                                                    Saiba mais
                                                </button >

                                                Modal
                                                < div class="modal fade" id="exampleModal" tabindex="-1"
                                                    aria-labelledby="exampleModalLabel" aria-hidden="true" >
                                                    <div class="modal-dialog">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h5 class="modal-title" id="exampleModalLabel">CURITIBA
                                                                </h5>
                                                                <button type="button" class="btn-close"
                                                                    data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div class="modal-body">
                                                                {/* CARROSSEL */}
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
                                                                {/* CARROSSEL */}
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
                                                                    pacotes</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div >
                                            </div >
                                            MODAL
                                        </div >
                                    </div >
                                </div>
                            </li >
                            {/* Card05 */}
                        </ul >
                    </div >
                    {/* DESTINOS INTERNACIONAIS */}
                </section >
                {/* CARDS */}
            </main >
            <Footer />
        </>
    )
}
