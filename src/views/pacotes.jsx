import React from 'react'

import Navbar from '../components/navigate/navbar';
import Footer from '../components/footer/footer';
import PacotesFilter from '../components/filters/pacotes'
import ListaCards from '../components/cardDest/cardList'
import fortaleza from '../assets/img/fortaleza-400x1600.png'
import floripa from '../assets/img/florianopolis-400x1600.png'
import recife from '../assets/img/recife-400x1600.png'
import rio from '../assets/img/rio_de_janeiro-400x1600.png'

export default function Pacotes() {
    return (
        <>
            <Navbar />
            <main className="container conteudo my-4 px-4">
                {/* FORMULARIO */}
                <PacotesFilter />
                {/* FORMULARIO */}

                {/* CARROSSEL */}
                <section>
                    <h4>PACOTES PROMOCIONAIS</h4>
                    <div>
                        <div id="carouselExampleCaptions" className="carousel slide bgred mb-3"
                            data-bs-ride="false">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions"
                                    data-bs-slide-to="0" className="active" aria-current="true"
                                    aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions"
                                    data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions"
                                    data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions"
                                    data-bs-slide-to="3" aria-label="Slide 4"></button>
                            </div>
                            <div className="carousel-inner text-center">
                                <div className="carousel-item active">
                                    <img src={fortaleza} alt="..." />
                                    <div className="carousel-caption d-md-block bg-opacity-50 bg-black">
                                        <h5 className="text-white">FORTALEZA-CE</h5>
                                        <p>Fortaleza é um dos destinos turísticos mais cobiçados no
                                            Brasil e, depois de conhecer a variedade de atrativos que a
                                            cidade oferece, fica fácil entender o porquê desse sucesso.
                                            Com o poder de agradar pessoas de todas as idades, a capital
                                            cearense mistura muitas coisas de que o brasileiro gosta:
                                            belezas naturais, cultura, mísica, diversão e uma culinária de
                                            tirar o chapéu.</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={floripa} alt="..." />
                                    <div className="carousel-caption d-md-block bg-opacity-50 bg-black">
                                        <h5 className="text-white">FLORIANÁPOLIS-SC</h5>
                                        <p>Florianápolis encanta por sua variedade de praias e pela
                                            capacidade de agradar todo tipo de público. É uma capital que
                                            cresceu em meio à natureza, que oferece belas paisagens
                                            naturais por toda sua extensão, onde se pode curtir tanto o
                                            movimento de uma capital efervescente quanto a tranquilidade
                                            de uma cidade quase do interior.</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={recife} alt="..." />
                                    <div className="carousel-caption d-md-block bg-opacity-50 bg-black">
                                        <h5 className="text-white">RECIFE-PE</h5>
                                        <p>O Recife é uma cidade que se destaca em inímeros
                                            aspectos no Brasil. Conhecida por sua influência holandesa, a
                                            "cidade dos arrecifes", que hoje é um dos centros urbanos mais
                                            desenvolvidos do país, preserva muitos resquícios de seu
                                            período colonial, garantindo que uma viagem pela cidade revele
                                            não apenas as belezas naturais da costa brasileira, como
                                            também sua faceta histórica.</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={rio} alt="..." />
                                    <div className="carousel-caption d-md-block bg-opacity-50 bg-black">
                                        <h5 className="text-white">RIO DE JANEIRO-RJ</h5>
                                        <p>O Rio de Janeiro, � a cidade brasileira mais conhecida
                                            no exterior tem a fama de possuir um povo alegre, �vido por
                                            sol, praia, futebol e samba. Mas o Rio vai muito al�m disso:
                                            tem hist�ria. Tornar-se sede da col�nia, abrigo da corte
                                            portuguesa e depois capital do Brasil foi fundamental para que
                                            n�o apenas a pr�pria cidade como o pa�s todo se desenvolvesse
                                            em diversos aspectos.</p>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button"
                                data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button"
                                data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
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
                        <ListaCards />
                    </div>
                    {/* DESTINOS NACIONAIS */}

                    {/* DESTINOS INTERNACIONAIS */}
                    <div>
                        <h4 className="mt-4">DESTINOS INTERNACIONAIS</h4>
                        <ul className="promo">
                            {/* Card01 */}
                            <li className="me-5 mb-4">
                                <div className="card">
                                    <img src="./assents/img/curitiba-300x200.png"
                                        className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Buenos Aires</h5>
                                        <p className="card-text">Lorem ipsum, dolor sit amet
                                            consectetur adipisicing elit. Ipsa at provident aperiam,
                                            quisquam ullam recusandae?</p>
                                        <div className="d-flex justify-content-between">
                                            OFERTAS
                                            <div>
                                                <button className="btn btn-primary" type="button"
                                                    data-bs-toggle="offcanvas"
                                                    data-bs-target="#offcanvasWithBothOptions"
                                                    aria-controls="offcanvasWithBothOptions">Pacotes</button>

                                                <div className="offcanvas offcanvas-start" data-bs-scroll="true"
                                                    tabIndex="-1" id="offcanvasWithBothOptions"
                                                    aria-labelledby="offcanvasWithBothOptionsLabel">
                                                    <div className="offcanvas-header">
                                                        <h5 className="offcanvas-title"
                                                            id="offcanvasWithBothOptionsLabel">CURITIBA</h5>
                                                        <button type="button" className="btn-close"
                                                            data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                                    </div>
                                                    <div className="offcanvas-body">
                                                        Pacotes
                                                        <div>
                                                            Pac01
                                                            <div className="card mb-3">
                                                                <img
                                                                    src="./Site/IMG/curitiba/jardim-botanico-de-curitiba.jpg"
                                                                    className="card-img-top" alt="..." />
                                                                <div className="card-body">
                                                                    <h5 className="card-title">Nacional Inn Curitiba Torres</h5>
                                                                    <p className="card-text">
                                                                        A partir de <strong>Qua 17 Ago</strong> At� <strong>
                                                                            Sex 19 Ago</strong>
                                                                    </p>
                                                                    <p className="card-text">
                                                                        <small className="text-muted">Voo direto BSB - CWB</small>
                                                                    </p>
                                                                    <p className="card-text">
                                                                        <small className="text-muted">Pre�o por pessoa</small>
                                                                    </p>
                                                                    <p className="card-text">
                                                                        <small>R$</small><big>767</big>
                                                                    </p>
                                                                    <p className="card-text">
                                                                        <small className="text-muted">Taxas e impostos n�o
                                                                            inclusos</small>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            Pac01
                                                            Pac02
                                                            <div className="card mb-3">
                                                                <img src="./Site/IMG/curitiba/memorial-ucraniano.jpg"
                                                                    className="card-img-top" alt="..." />
                                                                <div className="card-body">
                                                                    <h5 className="card-title">Nacional Inn Curitiba Torres</h5>
                                                                    <p className="card-text">
                                                                        A partir de <strong>Qua 17 Ago</strong> At� <strong>
                                                                            Sex 19 Ago</strong>
                                                                    </p>
                                                                    <p className="card-text">
                                                                        <small className="text-muted">Voo direto BSB - CWB</small>
                                                                    </p>
                                                                    <p className="card-text">
                                                                        <small className="text-muted">Pre�o por pessoa</small>
                                                                    </p>
                                                                    <p className="card-text">
                                                                        <small>R$</small><big>767</big>
                                                                    </p>
                                                                    <p className="card-text">
                                                                        <small className="text-muted">Taxas e impostos n�o
                                                                            inclusos</small>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            Pac02
                                                            Pac03
                                                            <div className="card mb-3">
                                                                <img src="./Site/IMG/curitiba/museu-oscar-niemeyer.jpg"
                                                                    className="card-img-top" alt="..." />
                                                                <div className="card-body">
                                                                    <h5 className="card-title">Nacional Inn Curitiba Torres</h5>
                                                                    <p className="card-text">
                                                                        A partir de <strong>Qua 17 Ago</strong> At� <strong>
                                                                            Sex 19 Ago</strong>
                                                                    </p>
                                                                    <p className="card-text">
                                                                        <small className="text-muted">Voo direto BSB - CWB</small>
                                                                    </p>
                                                                    <p className="card-text">
                                                                        <small className="text-muted">Pre�o por pessoa</small>
                                                                    </p>
                                                                    <p className="card-text">
                                                                        <small>R$</small><big>767</big>
                                                                    </p>
                                                                    <p className="card-text">
                                                                        <small className="text-muted">Taxas e impostos n�o
                                                                            inclusos</small>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            Pac03
                                                        </div>
                                                        Pacotes
                                                    </div>
                                                </div>
                                            </div>
                                            OFERTAS
                                            MODAL
                                            <div>
                                                Button trigger modal
                                                <button type="button" className="btn btn-primary"
                                                    data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    Saiba mais</button>

                                                Modal
                                                <div className="modal fade" id="exampleModal" tabIndex="-1"
                                                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title" id="exampleModalLabel">CURITIBA
                                                                </h5>
                                                                <button type="button" className="btn-close"
                                                                    data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                CARROSSEL
                                                                <div id="carouselExampleDark"
                                                                    className="carousel carousel-dark slide"
                                                                    data-bs-ride="carousel">
                                                                    <div className="carousel-indicators">
                                                                        <button type="button"
                                                                            data-bs-target="#carouselExampleDark"
                                                                            data-bs-slide-to="0" className="active"
                                                                            aria-current="true" aria-label="Slide 1"></button>
                                                                        <button type="button"
                                                                            data-bs-target="#carouselExampleDark"
                                                                            data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                                        <button type="button"
                                                                            data-bs-target="#carouselExampleDark"
                                                                            data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                                        <button type="button"
                                                                            data-bs-target="#carouselExampleDark"
                                                                            data-bs-slide-to="3" aria-label="Slide 4"></button>
                                                                    </div>
                                                                    <div className="carousel-inner text-center">
                                                                        <div className="carousel-item active"
                                                                            data-bs-interval="10000">
                                                                            <img
                                                                                src="./Site/IMG/curitiba/centro-historico-de-curitiba.jpg"
                                                                                alt="..." />
                                                                            <div
                                                                                className="carousel-caption d-md-block bg-black bg-opacity-50">
                                                                                <h5 className="text-white">Centro Hist�rico</h5>
                                                                            </div>
                                                                        </div>
                                                                        <div className="carousel-item" data-bs-interval="2000">
                                                                            <img
                                                                                src="./Site/IMG/curitiba/jardim-botanico-de-curitiba.jpg"
                                                                                alt="..." />
                                                                            <div
                                                                                className="carousel-caption d-md-block bg-black bg-opacity-50">
                                                                                <h5 className="text-white">Jardim Bot�nico</h5>
                                                                            </div>
                                                                        </div>
                                                                        <div className="carousel-item">
                                                                            <img src="./Site/IMG/curitiba/memorial-ucraniano.jpg"
                                                                                alt="..." />
                                                                            <div
                                                                                className="carousel-caption d-md-block bg-black bg-opacity-50">
                                                                                <h5 className="text-white">Memorial Ucraniano</h5>
                                                                            </div>
                                                                        </div>
                                                                        <div className="carousel-item">
                                                                            <img
                                                                                src="./Site/IMG/curitiba/museu-oscar-niemeyer.jpg"
                                                                                alt="..." />
                                                                            <div
                                                                                className="carousel-caption d-md-block bg-black bg-opacity-50">
                                                                                <h5 className="text-white">Museu Oscar Niemeyer</h5>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <button className="carousel-control-prev" type="button"
                                                                        data-bs-target="#carouselExampleDark"
                                                                        data-bs-slide="prev">
                                                                        <span className="carousel-control-prev-icon"
                                                                            aria-hidden="true"></span> <span
                                                                                className="visually-hidden">Previous</span>
                                                                    </button>
                                                                    <button className="carousel-control-next" type="button"
                                                                        data-bs-target="#carouselExampleDark"
                                                                        data-bs-slide="next">
                                                                        <span className="carousel-control-next-icon"
                                                                            aria-hidden="true"></span> <span
                                                                                className="visually-hidden">Next</span>
                                                                    </button>
                                                                </div>
                                                                CARROSSEL
                                                                <div>
                                                                    <p className="mt-4">O dia a dia de Curitiba reflete a
                                                                        mistura de imigrantes com que a cidade foi formada.
                                                                        Esse � s� um dos motivos pelo qual ela recebe bem os
                                                                        forasteiros. A cultura curitibana � um mix de
                                                                        ucranianos, poloneses, alem�es e italianos. Tudo com
                                                                        uma boa pitada dos tropeiros que passavam pela regi�o
                                                                        quando Curitiba ainda era a Vila de Nossa Senhora da
                                                                        Luz dos Pinhais. Fundada em 1693, a capital paranaense
                                                                        se mant�m aberta a novas culturas e est� sempre de
                                                                        bra�os abertos para o mundo. Os curitibanos se enchem
                                                                        de orgulho por viverem em um dos melhores destinos do
                                                                        pa�s e adoram dividir essa experi�ncia com quem deseja
                                                                        curtir alguns dias na cidade.</p>
                                                                </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-primary">Comprar
                                                                    pacotes</button>
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
                            {/* Card01 */}
                            {/* Card02 */}
                            <li className="me-5 mb-4">
                                <div className="card">
                                    <img src="./assents/img/curitiba-300x200.png"
                                        className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Orlando</h5>
                                        <p className="card-text">Lorem ipsum, dolor sit amet
                                            consectetur adipisicing elit. Ipsa at provident aperiam,
                                            quisquam ullam recusandae?</p>
                                        <div className="d-flex justify-content-between">
                                            OFERTAS
                                            <div>
                                                <button className="btn btn-primary" type="button"
                                                    data-bs-toggle="offcanvas"
                                                    data-bs-target="#offcanvasWithBothOptions"
                                                    aria-controls="offcanvasWithBothOptions">Pacotes</button>

                                                <div className="offcanvas offcanvas-start" data-bs-scroll="true"
                                                    tabIndex="-1" id="offcanvasWithBothOptions"
                                                    aria-labelledby="offcanvasWithBothOptionsLabel">
                                                    <div className="offcanvas-header">
                                                        <h5 className="offcanvas-title"
                                                            id="offcanvasWithBothOptionsLabel">CURITIBA</h5>
                                                        <button type="button" className="btn-close"
                                                            data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                                    </div>
                                                    <div className="offcanvas-body">
                                                        Pacotes
                                                        <div>
                                                            Pac01
                                                            <div className="card mb-3">
                                                                <img
                                                                    src="./Site/IMG/curitiba/jardim-botanico-de-curitiba.jpg"
                                                                    className="card-img-top" alt="..." />
                                                                <div className="card-body">
                                                                    <h5 className="card-title">Nacional Inn Curitiba Torres</h5>
                                                                    <p className="card-text">
                                                                        A partir de <strong>Qua 17 Ago</strong> At� <strong>
                                                                            Sex 19 Ago</strong>
                                                                    </p>
                                                                    <p className="card-text">
                                                                        <small className="text-muted">Voo direto BSB - CWB</small>
                                                                    </p>
                                                                    <p className="card-text">
                                                                        <small className="text-muted">Pre�o por pessoa</small>
                                                                    </p>
                                                                    <p className="card-text">
                                                                        <small>R$</small><big>767</big>
                                                                    </p>
                                                                    <p className="card-text">
                                                                        <small className="text-muted">Taxas e impostos n�o
                                                                            inclusos</small>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            Pac01
                                                            Pac02
                                                            <div className="card mb-3">
                                                                <img src="./Site/IMG/curitiba/memorial-ucraniano.jpg"
                                                                    className="card-img-top" alt="..." />
                                                                <div className="card-body">
                                                                    <h5 className="card-title">Nacional Inn Curitiba Torres</h5>
                                                                    <p className="card-text">
                                                                        A partir de <strong>Qua 17 Ago</strong> At� <strong>
                                                                            Sex 19 Ago</strong>
                                                                    </p>
                                                                    <p className="card-text">
                                                                        <small className="text-muted">Voo direto BSB - CWB</small>
                                                                    </p>
                                                                    <p className="card-text">
                                                                        <small className="text-muted">Pre�o por pessoa</small>
                                                                    </p>
                                                                    <p className="card-text">
                                                                        <small>R$</small><big>767</big>
                                                                    </p>
                                                                    <p className="card-text">
                                                                        <small className="text-muted">Taxas e impostos n�o
                                                                            inclusos</small>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            Pac02
                                                            Pac03
                                                            <div className="card mb-3">
                                                                <img src="./Site/IMG/curitiba/museu-oscar-niemeyer.jpg"
                                                                    className="card-img-top" alt="..." />
                                                                <div className="card-body">
                                                                    <h5 className="card-title">Nacional Inn Curitiba Torres</h5>
                                                                    <p className="card-text">
                                                                        A partir de <strong>Qua 17 Ago</strong> At� <strong>
                                                                            Sex 19 Ago</strong>
                                                                    </p>
                                                                    <p className="card-text">
                                                                        <small className="text-muted">Voo direto BSB - CWB</small>
                                                                    </p>
                                                                    <p className="card-text">
                                                                        <small className="text-muted">Pre�o por pessoa</small>
                                                                    </p>
                                                                    <p className="card-text">
                                                                        <small>R$</small><big>767</big>
                                                                    </p>
                                                                    <p className="card-text">
                                                                        <small className="text-muted">Taxas e impostos n�o
                                                                            inclusos</small>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            Pac03
                                                        </div>
                                                        Pacotes
                                                    </div>
                                                </div>
                                            </div>
                                            OFERTAS
                                            MODAL
                                            <div>
                                                Button trigger modal
                                                <button type="button" className="btn btn-primary"
                                                    data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    Saiba mais</button>

                                                Modal
                                                <div className="modal fade" id="exampleModal" tabIndex="-1"
                                                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title" id="exampleModalLabel">CURITIBA
                                                                </h5>
                                                                <button type="button" className="btn-close"
                                                                    data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                CARROSSEL
                                                                <div id="carouselExampleDark"
                                                                    className="carousel carousel-dark slide"
                                                                    data-bs-ride="carousel">
                                                                    <div className="carousel-indicators">
                                                                        <button type="button"
                                                                            data-bs-target="#carouselExampleDark"
                                                                            data-bs-slide-to="0" className="active"
                                                                            aria-current="true" aria-label="Slide 1"></button>
                                                                        <button type="button"
                                                                            data-bs-target="#carouselExampleDark"
                                                                            data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                                        <button type="button"
                                                                            data-bs-target="#carouselExampleDark"
                                                                            data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                                        <button type="button"
                                                                            data-bs-target="#carouselExampleDark"
                                                                            data-bs-slide-to="3" aria-label="Slide 4"></button>
                                                                    </div>
                                                                    <div className="carousel-inner text-center">
                                                                        <div className="carousel-item active"
                                                                            data-bs-interval="10000">
                                                                            <img
                                                                                src="./Site/IMG/curitiba/centro-historico-de-curitiba.jpg"
                                                                                alt="..." />
                                                                            <div
                                                                                className="carousel-caption d-md-block bg-black bg-opacity-50">
                                                                                <h5 className="text-white">Centro Hist�rico</h5>
                                                                            </div>
                                                                        </div>
                                                                        <div className="carousel-item" data-bs-interval="2000">
                                                                            <img
                                                                                src="./Site/IMG/curitiba/jardim-botanico-de-curitiba.jpg"
                                                                                alt="..." />
                                                                            <div
                                                                                className="carousel-caption d-md-block bg-black bg-opacity-50">
                                                                                <h5 className="text-white">Jardim Bot�nico</h5>
                                                                            </div>
                                                                        </div>
                                                                        <div className="carousel-item">
                                                                            <img src="./Site/IMG/curitiba/memorial-ucraniano.jpg"
                                                                                alt="..." />
                                                                            <div
                                                                                className="carousel-caption d-md-block bg-black bg-opacity-50">
                                                                                <h5 className="text-white">Memorial Ucraniano</h5>
                                                                            </div>
                                                                        </div>
                                                                        <div className="carousel-item">
                                                                            <img
                                                                                src="./Site/IMG/curitiba/museu-oscar-niemeyer.jpg"
                                                                                alt="..." />
                                                                            <div
                                                                                className="carousel-caption d-md-block bg-black bg-opacity-50">
                                                                                <h5 className="text-white">Museu Oscar Niemeyer</h5>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <button className="carousel-control-prev" type="button"
                                                                        data-bs-target="#carouselExampleDark"
                                                                        data-bs-slide="prev">
                                                                        <span className="carousel-control-prev-icon"
                                                                            aria-hidden="true"></span> <span
                                                                                className="visually-hidden">Previous</span>
                                                                    </button>
                                                                    <button className="carousel-control-next" type="button"
                                                                        data-bs-target="#carouselExampleDark"
                                                                        data-bs-slide="next">
                                                                        <span className="carousel-control-next-icon"
                                                                            aria-hidden="true"></span> <span
                                                                                className="visually-hidden">Next</span>
                                                                    </button>
                                                                </div>
                                                                CARROSSEL
                                                                <div>
                                                                    <p className="mt-4">O dia a dia de Curitiba reflete a
                                                                        mistura de imigrantes com que a cidade foi formada.
                                                                        Esse � s� um dos motivos pelo qual ela recebe bem os
                                                                        forasteiros. A cultura curitibana � um mix de
                                                                        ucranianos, poloneses, alem�es e italianos. Tudo com
                                                                        uma boa pitada dos tropeiros que passavam pela regi�o
                                                                        quando Curitiba ainda era a Vila de Nossa Senhora da
                                                                        Luz dos Pinhais. Fundada em 1693, a capital paranaense
                                                                        se mant�m aberta a novas culturas e est� sempre de
                                                                        bra�os abertos para o mundo. Os curitibanos se enchem
                                                                        de orgulho por viverem em um dos melhores destinos do
                                                                        pa�s e adoram dividir essa experi�ncia com quem deseja
                                                                        curtir alguns dias na cidade.</p>
                                                                </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-primary">Comprar
                                                                    pacotes</button>
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
                            {/* Card02 */}
                            {/* Card03 */}
                            <li className="me-5 mb-4">
                                <div className="card">
                                    <img src="./assents/img/curitiba-300x200.png"
                                        className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Braga</h5>
                                        <p className="card-text">Lorem ipsum, dolor sit amet
                                            consectetur adipisicing elit. Ipsa at provident aperiam,
                                            quisquam ullam recusandae?</p>
                                        <div className="d-flex justify-content-between">
                                            OFERTAS
                                            <div>
                                                <button className="btn btn-primary" type="button"
                                                    data-bs-toggle="offcanvas"
                                                    data-bs-target="#offcanvasWithBothOptions"
                                                    aria-controls="offcanvasWithBothOptions">Pacotes</button>

                                                <div className="offcanvas offcanvas-start" data-bs-scroll="true"
                                                    tabIndex="-1" id="offcanvasWithBothOptions"
                                                    aria-labelledby="offcanvasWithBothOptionsLabel">
                                                    <div className="offcanvas-header">
                                                        <h5 className="offcanvas-title"
                                                            id="offcanvasWithBothOptionsLabel">CURITIBA</h5>
                                                        <button type="button" className="btn-close"
                                                            data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                                    </div>
                                                    <div className="offcanvas-body">
                                                        Pacotes
                                                        <div>
                                                            Pac01
                                                            <div className="card mb-3">
                                                                <img
                                                                    src="./Site/IMG/curitiba/jardim-botanico-de-curitiba.jpg"
                                                                    className="card-img-top" alt="..." />
                                                                <div className="card-body">
                                                                    <h5 className="card-title">Nacional Inn Curitiba Torres</h5>
                                                                    <p className="card-text">
                                                                        A partir de <strong>Qua 17 Ago</strong> At� <strong>
                                                                            Sex 19 Ago</strong>
                                                                    </p>
                                                                    <p className="card-text">
                                                                        <small className="text-muted">Voo direto BSB - CWB</small>
                                                                    </p>
                                                                    <p className="card-text">
                                                                        <small className="text-muted">Pre�o por pessoa</small>
                                                                    </p>
                                                                    <p className="card-text">
                                                                        <small>R$</small><big>767</big>
                                                                    </p>
                                                                    <p className="card-text">
                                                                        <small className="text-muted">Taxas e impostos n�o
                                                                            inclusos</small>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            Pac01
                                                            Pac02
                                                            <div className="card mb-3">
                                                                <img src="./Site/IMG/curitiba/memorial-ucraniano.jpg"
                                                                    className="card-img-top" alt="..." />
                                                                <div className="card-body">
                                                                    <h5 className="card-title">Nacional Inn Curitiba Torres</h5>
                                                                    <p className="card-text">
                                                                        A partir de <strong>Qua 17 Ago</strong> At� <strong>
                                                                            Sex 19 Ago</strong>
                                                                    </p>
                                                                    <p className="card-text">
                                                                        <small className="text-muted">Voo direto BSB - CWB</small>
                                                                    </p>
                                                                    <p className="card-text">
                                                                        <small className="text-muted">Pre�o por pessoa</small>
                                                                    </p>
                                                                    <p className="card-text">
                                                                        <small>R$</small><big>767</big>
                                                                    </p>
                                                                    <p className="card-text">
                                                                        <small className="text-muted">Taxas e impostos n�o
                                                                            inclusos</small>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            Pac02
                                                            Pac03
                                                            <div className="card mb-3">
                                                                <img src="./Site/IMG/curitiba/museu-oscar-niemeyer.jpg"
                                                                    className="card-img-top" alt="..." />
                                                                <div className="card-body">
                                                                    <h5 className="card-title">Nacional Inn Curitiba Torres</h5>
                                                                    <p className="card-text">
                                                                        A partir de <strong>Qua 17 Ago</strong> At� <strong>
                                                                            Sex 19 Ago</strong>
                                                                    </p>
                                                                    <p className="card-text">
                                                                        <small className="text-muted">Voo direto BSB - CWB</small>
                                                                    </p>
                                                                    <p className="card-text">
                                                                        <small className="text-muted">Pre�o por pessoa</small>
                                                                    </p>
                                                                    <p className="card-text">
                                                                        <small>R$</small><big>767</big>
                                                                    </p>
                                                                    <p className="card-text">
                                                                        <small className="text-muted">Taxas e impostos n�o
                                                                            inclusos</small>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            Pac03
                                                        </div>
                                                        Pacotes
                                                    </div>
                                                </div>
                                            </div>
                                            OFERTAS
                                            MODAL
                                            <div>
                                                Button trigger modal
                                                <button type="button" className="btn btn-primary"
                                                    data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    Saiba mais</button>

                                                Modal
                                                <div className="modal fade" id="exampleModal" tabIndex="-1"
                                                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title" id="exampleModalLabel">CURITIBA
                                                                </h5>
                                                                <button type="button" className="btn-close"
                                                                    data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                CARROSSEL
                                                                <div id="carouselExampleDark"
                                                                    className="carousel carousel-dark slide"
                                                                    data-bs-ride="carousel">
                                                                    <div className="carousel-indicators">
                                                                        <button type="button"
                                                                            data-bs-target="#carouselExampleDark"
                                                                            data-bs-slide-to="0" className="active"
                                                                            aria-current="true" aria-label="Slide 1"></button>
                                                                        <button type="button"
                                                                            data-bs-target="#carouselExampleDark"
                                                                            data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                                        <button type="button"
                                                                            data-bs-target="#carouselExampleDark"
                                                                            data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                                        <button type="button"
                                                                            data-bs-target="#carouselExampleDark"
                                                                            data-bs-slide-to="3" aria-label="Slide 4"></button>
                                                                    </div>
                                                                    <div className="carousel-inner text-center">
                                                                        <div className="carousel-item active"
                                                                            data-bs-interval="10000">
                                                                            <img
                                                                                src="./Site/IMG/curitiba/centro-historico-de-curitiba.jpg"
                                                                                alt="..." />
                                                                            <div
                                                                                className="carousel-caption d-md-block bg-black bg-opacity-50">
                                                                                <h5 className="text-white">Centro Hist�rico</h5>
                                                                            </div>
                                                                        </div>
                                                                        <div className="carousel-item" data-bs-interval="2000">
                                                                            <img
                                                                                src="./Site/IMG/curitiba/jardim-botanico-de-curitiba.jpg"
                                                                                alt="..." />
                                                                            <div
                                                                                className="carousel-caption d-md-block bg-black bg-opacity-50">
                                                                                <h5 className="text-white">Jardim Bot�nico</h5>
                                                                            </div>
                                                                        </div>
                                                                        <div className="carousel-item">
                                                                            <img src="./Site/IMG/curitiba/memorial-ucraniano.jpg"
                                                                                alt="..." />
                                                                            <div
                                                                                className="carousel-caption d-md-block bg-black bg-opacity-50">
                                                                                <h5 className="text-white">Memorial Ucraniano</h5>
                                                                            </div>
                                                                        </div>
                                                                        <div className="carousel-item">
                                                                            <img
                                                                                src="./Site/IMG/curitiba/museu-oscar-niemeyer.jpg"
                                                                                alt="..." />
                                                                            <div
                                                                                className="carousel-caption d-md-block bg-black bg-opacity-50">
                                                                                <h5 className="text-white">Museu Oscar Niemeyer</h5>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <button className="carousel-control-prev" type="button"
                                                                        data-bs-target="#carouselExampleDark"
                                                                        data-bs-slide="prev">
                                                                        <span className="carousel-control-prev-icon"
                                                                            aria-hidden="true"></span> <span
                                                                                className="visually-hidden">Previous</span>
                                                                    </button>
                                                                    <button className="carousel-control-next" type="button"
                                                                        data-bs-target="#carouselExampleDark"
                                                                        data-bs-slide="next">
                                                                        <span className="carousel-control-next-icon"
                                                                            aria-hidden="true"></span> <span
                                                                                className="visually-hidden">Next</span>
                                                                    </button>
                                                                </div>
                                                                CARROSSEL
                                                                <div>
                                                                    <p className="mt-4">O dia a dia de Curitiba reflete a
                                                                        mistura de imigrantes com que a cidade foi formada.
                                                                        Esse � s� um dos motivos pelo qual ela recebe bem os
                                                                        forasteiros. A cultura curitibana � um mix de
                                                                        ucranianos, poloneses, alem�es e italianos. Tudo com
                                                                        uma boa pitada dos tropeiros que passavam pela regi�o
                                                                        quando Curitiba ainda era a Vila de Nossa Senhora da
                                                                        Luz dos Pinhais. Fundada em 1693, a capital paranaense
                                                                        se mant�m aberta a novas culturas e est� sempre de
                                                                        bra�os abertos para o mundo. Os curitibanos se enchem
                                                                        de orgulho por viverem em um dos melhores destinos do
                                                                        pa�s e adoram dividir essa experi�ncia com quem deseja
                                                                        curtir alguns dias na cidade.</p>
                                                                </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-primary">Comprar
                                                                    pacotes</button>
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
                            {/* Card03 */}
                            {/* Card04 */}
                            <li className="me-5 mb-4">
                                <div className="card">
                                    <img src="./assents/img/curitiba-300x200.png"
                                        className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Bangkok</h5>
                                        <p className="card-text">Lorem ipsum, dolor sit amet
                                            consectetur adipisicing elit. Ipsa at provident aperiam,
                                            quisquam ullam recusandae?</p>
                                        <div className="d-flex justify-content-between">
                                            OFERTAS
                                            <div>
                                                <button className="btn btn-primary" type="button"
                                                    data-bs-toggle="offcanvas"
                                                    data-bs-target="#offcanvasWithBothOptions"
                                                    aria-controls="offcanvasWithBothOptions">Pacotes</button>

                                                <div className="offcanvas offcanvas-start" data-bs-scroll="true"
                                                    tabIndex="-1" id="offcanvasWithBothOptions"
                                                    aria-labelledby="offcanvasWithBothOptionsLabel">
                                                    <div className="offcanvas-header">
                                                        <h5 className="offcanvas-title"
                                                            id="offcanvasWithBothOptionsLabel">CURITIBA</h5>
                                                        <button type="button" className="btn-close"
                                                            data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                                    </div>
                                                    <div className="offcanvas-body">
                                                        Pacotes
                                                        <div>
                                                            Pac01
                                                            <div className="card mb-3">
                                                                <img
                                                                    src="./Site/IMG/curitiba/jardim-botanico-de-curitiba.jpg"
                                                                    className="card-img-top" alt="..." />
                                                                <div className="card-body">
                                                                    <h5 className="card-title">Nacional Inn Curitiba Torres</h5>
                                                                    <p className="card-text">
                                                                        A partir de <strong>Qua 17 Ago</strong> At� <strong>
                                                                            Sex 19 Ago</strong>
                                                                    </p>
                                                                    <p className="card-text">
                                                                        <small className="text-muted">Voo direto BSB - CWB</small>
                                                                    </p>
                                                                    <p className="card-text">
                                                                        <small className="text-muted">Pre�o por pessoa</small>
                                                                    </p>
                                                                    <p className="card-text">
                                                                        <small>R$</small><big>767</big>
                                                                    </p>
                                                                    <p className="card-text">
                                                                        <small className="text-muted">Taxas e impostos n�o
                                                                            inclusos</small>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            Pac01
                                                            Pac02
                                                            <div className="card mb-3">
                                                                <img src="./Site/IMG/curitiba/memorial-ucraniano.jpg"
                                                                    className="card-img-top" alt="..." />
                                                                <div className="card-body">
                                                                    <h5 className="card-title">Nacional Inn Curitiba Torres</h5>
                                                                    <p className="card-text">
                                                                        A partir de <strong>Qua 17 Ago</strong> At� <strong>
                                                                            Sex 19 Ago</strong>
                                                                    </p>
                                                                    <p className="card-text">
                                                                        <small className="text-muted">Voo direto BSB - CWB</small>
                                                                    </p>
                                                                    <p className="card-text">
                                                                        <small className="text-muted">Pre�o por pessoa</small>
                                                                    </p>
                                                                    <p className="card-text">
                                                                        <small>R$</small><big>767</big>
                                                                    </p>
                                                                    <p className="card-text">
                                                                        <small className="text-muted">Taxas e impostos n�o
                                                                            inclusos</small>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            Pac02
                                                            Pac03
                                                            <div className="card mb-3">
                                                                <img src="./Site/IMG/curitiba/museu-oscar-niemeyer.jpg"
                                                                    className="card-img-top" alt="..." />
                                                                <div className="card-body">
                                                                    <h5 className="card-title">Nacional Inn Curitiba Torres</h5>
                                                                    <p className="card-text">
                                                                        A partir de <strong>Qua 17 Ago</strong> At� <strong>
                                                                            Sex 19 Ago</strong>
                                                                    </p>
                                                                    <p className="card-text">
                                                                        <small className="text-muted">Voo direto BSB - CWB</small>
                                                                    </p>
                                                                    <p className="card-text">
                                                                        <small className="text-muted">Pre�o por pessoa</small>
                                                                    </p>
                                                                    <p className="card-text">
                                                                        <small>R$</small><big>767</big>
                                                                    </p>
                                                                    <p className="card-text">
                                                                        <small className="text-muted">Taxas e impostos n�o
                                                                            inclusos</small>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            Pac03
                                                        </div>
                                                        Pacotes
                                                    </div>
                                                </div>
                                            </div>
                                            OFERTAS
                                            MODAL
                                            <div>
                                                Button trigger modal
                                                <button type="button" className="btn btn-primary"
                                                    data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    Saiba mais</button>

                                                Modal
                                                <div className="modal fade" id="exampleModal" tabIndex="-1"
                                                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title" id="exampleModalLabel">CURITIBA
                                                                </h5>
                                                                <button type="button" className="btn-close"
                                                                    data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                CARROSSEL
                                                                <div id="carouselExampleDark"
                                                                    className="carousel carousel-dark slide"
                                                                    data-bs-ride="carousel">
                                                                    <div className="carousel-indicators">
                                                                        <button type="button"
                                                                            data-bs-target="#carouselExampleDark"
                                                                            data-bs-slide-to="0" className="active"
                                                                            aria-current="true" aria-label="Slide 1"></button>
                                                                        <button type="button"
                                                                            data-bs-target="#carouselExampleDark"
                                                                            data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                                        <button type="button"
                                                                            data-bs-target="#carouselExampleDark"
                                                                            data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                                        <button type="button"
                                                                            data-bs-target="#carouselExampleDark"
                                                                            data-bs-slide-to="3" aria-label="Slide 4"></button>
                                                                    </div>
                                                                    <div className="carousel-inner text-center">
                                                                        <div className="carousel-item active"
                                                                            data-bs-interval="10000">
                                                                            <img
                                                                                src="./Site/IMG/curitiba/centro-historico-de-curitiba.jpg"
                                                                                alt="..." />
                                                                            <div
                                                                                className="carousel-caption d-md-block bg-black bg-opacity-50">
                                                                                <h5 className="text-white">Centro Hist�rico</h5>
                                                                            </div>
                                                                        </div>
                                                                        <div className="carousel-item" data-bs-interval="2000">
                                                                            <img
                                                                                src="./Site/IMG/curitiba/jardim-botanico-de-curitiba.jpg"
                                                                                alt="..." />
                                                                            <div
                                                                                className="carousel-caption d-md-block bg-black bg-opacity-50">
                                                                                <h5 className="text-white">Jardim Bot�nico</h5>
                                                                            </div>
                                                                        </div>
                                                                        <div className="carousel-item">
                                                                            <img src="./Site/IMG/curitiba/memorial-ucraniano.jpg"
                                                                                alt="..." />
                                                                            <div
                                                                                className="carousel-caption d-md-block bg-black bg-opacity-50">
                                                                                <h5 className="text-white">Memorial Ucraniano</h5>
                                                                            </div>
                                                                        </div>
                                                                        <div className="carousel-item">
                                                                            <img
                                                                                src="./Site/IMG/curitiba/museu-oscar-niemeyer.jpg"
                                                                                alt="..." />
                                                                            <div
                                                                                className="carousel-caption d-md-block bg-black bg-opacity-50">
                                                                                <h5 className="text-white">Museu Oscar Niemeyer</h5>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <button className="carousel-control-prev" type="button"
                                                                        data-bs-target="#carouselExampleDark"
                                                                        data-bs-slide="prev">
                                                                        <span className="carousel-control-prev-icon"
                                                                            aria-hidden="true"></span> <span
                                                                                className="visually-hidden">Previous</span>
                                                                    </button>
                                                                    <button className="carousel-control-next" type="button"
                                                                        data-bs-target="#carouselExampleDark"
                                                                        data-bs-slide="next">
                                                                        <span className="carousel-control-next-icon"
                                                                            aria-hidden="true"></span> <span
                                                                                className="visually-hidden">Next</span>
                                                                    </button>
                                                                </div>
                                                                CARROSSEL
                                                                <div>
                                                                    <p className="mt-4">O dia a dia de Curitiba reflete a
                                                                        mistura de imigrantes com que a cidade foi formada.
                                                                        Esse � s� um dos motivos pelo qual ela recebe bem os
                                                                        forasteiros. A cultura curitibana � um mix de
                                                                        ucranianos, poloneses, alem�es e italianos. Tudo com
                                                                        uma boa pitada dos tropeiros que passavam pela regi�o
                                                                        quando Curitiba ainda era a Vila de Nossa Senhora da
                                                                        Luz dos Pinhais. Fundada em 1693, a capital paranaense
                                                                        se mant�m aberta a novas culturas e est� sempre de
                                                                        bra�os abertos para o mundo. Os curitibanos se enchem
                                                                        de orgulho por viverem em um dos melhores destinos do
                                                                        pa�s e adoram dividir essa experi�ncia com quem deseja
                                                                        curtir alguns dias na cidade.</p>
                                                                </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-primary">Comprar
                                                                    pacotes</button>
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
                            {/* Card04 */}
                            {/* Card05 */}
                            <li className="me-5 mb-4">
                                <div className="card">
                                    <img src="./assents/img/curitiba-300x200.png"
                                        className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Lisboa</h5>
                                        <p className="card-text">Lorem ipsum, dolor sit amet
                                            consectetur adipisicing elit. Ipsa at provident aperiam,
                                            quisquam ullam recusandae?</p>
                                        <div className="d-flex justify-content-between">
                                            OFERTAS
                                            <div>
                                                <button className="btn btn-primary" type="button"
                                                    data-bs-toggle="offcanvas"
                                                    data-bs-target="#offcanvasWithBothOptions"
                                                    aria-controls="offcanvasWithBothOptions">Pacotes</button>

                                                <div className="offcanvas offcanvas-start" data-bs-scroll="true"
                                                    tabIndex="-1" id="offcanvasWithBothOptions"
                                                    aria-labelledby="offcanvasWithBothOptionsLabel">
                                                    <div className="offcanvas-header">
                                                        <h5 className="offcanvas-title"
                                                            id="offcanvasWithBothOptionsLabel">CURITIBA</h5>
                                                        <button type="button" className="btn-close"
                                                            data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                                    </div>
                                                    <div className="offcanvas-body">
                                                        Pacotes
                                                        <div>
                                                            Pac01
                                                            <div className="card mb-3">
                                                                <img
                                                                    src="./Site/IMG/curitiba/jardim-botanico-de-curitiba.jpg"
                                                                    className="card-img-top" alt="..." />
                                                                <div className="card-body">
                                                                    <h5 className="card-title">Nacional Inn Curitiba Torres</h5>
                                                                    <p className="card-text">
                                                                        A partir de <strong>Qua 17 Ago</strong> At� <strong>
                                                                            Sex 19 Ago</strong>
                                                                    </p>
                                                                    <p className="card-text">
                                                                        <small className="text-muted">Voo direto BSB - CWB</small>
                                                                    </p>
                                                                    <p className="card-text">
                                                                        <small className="text-muted">Pre�o por pessoa</small>
                                                                    </p>
                                                                    <p className="card-text">
                                                                        <small>R$</small><big>767</big>
                                                                    </p>
                                                                    <p className="card-text">
                                                                        <small className="text-muted">Taxas e impostos n�o
                                                                            inclusos</small>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            Pac01
                                                            Pac02
                                                            <div className="card mb-3">
                                                                <img src="./Site/IMG/curitiba/memorial-ucraniano.jpg"
                                                                    className="card-img-top" alt="..." />
                                                                <div className="card-body">
                                                                    <h5 className="card-title">Nacional Inn Curitiba Torres</h5>
                                                                    <p className="card-text">
                                                                        A partir de <strong>Qua 17 Ago</strong> At� <strong>
                                                                            Sex 19 Ago</strong>
                                                                    </p>
                                                                    <p className="card-text">
                                                                        <small className="text-muted">Voo direto BSB - CWB</small>
                                                                    </p>
                                                                    <p className="card-text">
                                                                        <small className="text-muted">Pre�o por pessoa</small>
                                                                    </p>
                                                                    <p className="card-text">
                                                                        <small>R$</small><big>767</big>
                                                                    </p>
                                                                    <p className="card-text">
                                                                        <small className="text-muted">Taxas e impostos n�o
                                                                            inclusos</small>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            Pac02
                                                            Pac03
                                                            <div className="card mb-3">
                                                                <img src="./Site/IMG/curitiba/museu-oscar-niemeyer.jpg"
                                                                    className="card-img-top" alt="..." />
                                                                <div className="card-body">
                                                                    <h5 className="card-title">Nacional Inn Curitiba Torres</h5>
                                                                    <p className="card-text">
                                                                        A partir de <strong>Qua 17 Ago</strong> At� <strong>
                                                                            Sex 19 Ago</strong>
                                                                    </p>
                                                                    <p className="card-text">
                                                                        <small className="text-muted">Voo direto BSB - CWB</small>
                                                                    </p>
                                                                    <p className="card-text">
                                                                        <small className="text-muted">Pre�o por pessoa</small>
                                                                    </p>
                                                                    <p className="card-text">
                                                                        <small>R$</small><big>767</big>
                                                                    </p>
                                                                    <p className="card-text">
                                                                        <small className="text-muted">Taxas e impostos n�o
                                                                            inclusos</small>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            Pac03
                                                        </div>
                                                        Pacotes
                                                    </div>
                                                </div>
                                            </div>
                                            OFERTAS
                                            MODAL
                                            <div>
                                                Button trigger modal
                                                <button type="button" className="btn btn-primary"
                                                    data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    Saiba mais</button>

                                                Modal
                                                <div className="modal fade" id="exampleModal" tabIndex="-1"
                                                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title" id="exampleModalLabel">CURITIBA
                                                                </h5>
                                                                <button type="button" className="btn-close"
                                                                    data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                CARROSSEL
                                                                <div id="carouselExampleDark"
                                                                    className="carousel carousel-dark slide"
                                                                    data-bs-ride="carousel">
                                                                    <div className="carousel-indicators">
                                                                        <button type="button"
                                                                            data-bs-target="#carouselExampleDark"
                                                                            data-bs-slide-to="0" className="active"
                                                                            aria-current="true" aria-label="Slide 1"></button>
                                                                        <button type="button"
                                                                            data-bs-target="#carouselExampleDark"
                                                                            data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                                        <button type="button"
                                                                            data-bs-target="#carouselExampleDark"
                                                                            data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                                        <button type="button"
                                                                            data-bs-target="#carouselExampleDark"
                                                                            data-bs-slide-to="3" aria-label="Slide 4"></button>
                                                                    </div>
                                                                    <div className="carousel-inner text-center">
                                                                        <div className="carousel-item active"
                                                                            data-bs-interval="10000">
                                                                            <img
                                                                                src="./Site/IMG/curitiba/centro-historico-de-curitiba.jpg"
                                                                                alt="..." />
                                                                            <div
                                                                                className="carousel-caption d-md-block bg-black bg-opacity-50">
                                                                                <h5 className="text-white">Centro Hist�rico</h5>
                                                                            </div>
                                                                        </div>
                                                                        <div className="carousel-item" data-bs-interval="2000">
                                                                            <img
                                                                                src="./Site/IMG/curitiba/jardim-botanico-de-curitiba.jpg"
                                                                                alt="..." />
                                                                            <div
                                                                                className="carousel-caption d-md-block bg-black bg-opacity-50">
                                                                                <h5 className="text-white">Jardim Bot�nico</h5>
                                                                            </div>
                                                                        </div>
                                                                        <div className="carousel-item">
                                                                            <img src="./Site/IMG/curitiba/memorial-ucraniano.jpg"
                                                                                alt="..." />
                                                                            <div
                                                                                className="carousel-caption d-md-block bg-black bg-opacity-50">
                                                                                <h5 className="text-white">Memorial Ucraniano</h5>
                                                                            </div>
                                                                        </div>
                                                                        <div className="carousel-item">
                                                                            <img
                                                                                src="./Site/IMG/curitiba/museu-oscar-niemeyer.jpg"
                                                                                alt="..." />
                                                                            <div
                                                                                className="carousel-caption d-md-block bg-black bg-opacity-50">
                                                                                <h5 className="text-white">Museu Oscar Niemeyer</h5>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <button className="carousel-control-prev" type="button"
                                                                        data-bs-target="#carouselExampleDark"
                                                                        data-bs-slide="prev">
                                                                        <span className="carousel-control-prev-icon"
                                                                            aria-hidden="true"></span> <span
                                                                                className="visually-hidden">Previous</span>
                                                                    </button>
                                                                    <button className="carousel-control-next" type="button"
                                                                        data-bs-target="#carouselExampleDark"
                                                                        data-bs-slide="next">
                                                                        <span className="carousel-control-next-icon"
                                                                            aria-hidden="true"></span> <span
                                                                                className="visually-hidden">Next</span>
                                                                    </button>
                                                                </div>
                                                                CARROSSEL
                                                                <div>
                                                                    <p className="mt-4">O dia a dia de Curitiba reflete a
                                                                        mistura de imigrantes com que a cidade foi formada.
                                                                        Esse � s� um dos motivos pelo qual ela recebe bem os
                                                                        forasteiros. A cultura curitibana � um mix de
                                                                        ucranianos, poloneses, alem�es e italianos. Tudo com
                                                                        uma boa pitada dos tropeiros que passavam pela regi�o
                                                                        quando Curitiba ainda era a Vila de Nossa Senhora da
                                                                        Luz dos Pinhais. Fundada em 1693, a capital paranaense
                                                                        se mant�m aberta a novas culturas e est� sempre de
                                                                        bra�os abertos para o mundo. Os curitibanos se enchem
                                                                        de orgulho por viverem em um dos melhores destinos do
                                                                        pa�s e adoram dividir essa experi�ncia com quem deseja
                                                                        curtir alguns dias na cidade.</p>
                                                                </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-primary">Comprar
                                                                    pacotes</button>
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
                            {/* Card05 */}
                        </ul>
                    </div>
                    {/* DESTINOS INTERNACIONAIS */}
                </section>
                {/* CARDS */}
            </main>
            <Footer />
        </>
    )
}
