import React from 'react'

import Navbar from '../components/navigate/navbar';
import Footer from '../components/footer/footer';

export default function Ofertas() {
    return (
        <>
            <Navbar />
            <main class="container conteudo my-4">
                <nav class="row text-center p-4 bg-light" style={{ borderRadius: '20px' }}>
                    <h5 class="col-4"><a href="./ofertas-voo">VOOS</a></h5>
                    <h5 class="col-4"><a href="./ofertas-pac">PACOTES</a></h5>
                    <h5 class="col-4"><a href="./ofertas-hos">HOSPEDAGENS</a></h5>
                </nav>
                {/* FORMUL�RIO */}
                <section>
                    <form>
                        <div class="row my-4">
                            <h5 class="col-sm-6 col-md-4 col-lg-3 mb-3">Qual seu destino?</h5>
                            <div class="col-sm-6 col-md-8 col-lg-6 mb-3">
                                <input type="text" class="form-control" id="inputCity" />
                            </div>
                            <div class="col-sm-12 col-lg-3 d-grid mb-3">
                                <button type="submit" class="btn btn-primary">Buscar</button>
                            </div>
                        </div>
                    </form>
                </section>
                {/* FORMUL�RIO */}
                {/* CARDS */}
                <section>
                    {/* DESTINOS NACIONAIS */}
                    <div>
                        <h4>VOOS NACIONAIS</h4>
                        <p class="small">Saindo de S�o Paulo</p>
                        <ul class="promo">
                            {/* Card01 */}
                            <li class="me-5 mb-4">
                                <div class="card">
                                    <img src="../assents/img/rio_de_janeiro-300x200.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Rio de Janeiro</h5>
                                        <p class="card-text">
                                            29 de Sep 2022
                                        </p>
                                        <p class="small">Passagens a partir de</p>
                                        <p>R$<big><strong>308</strong></big></p>
                                    </div>
                                </div>
                            </li>
                            {/* Card01 */}
                            {/* Card02 */}
                            <li class="me-5 mb-4">
                                <div class="card">
                                    <img src="../assents/img/fortaleza-300x200.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Fortaleza</h5>
                                        <p class="card-text">
                                            30 de Ago 2022
                                        </p>
                                        <p class="small">Passagens a partir de</p>
                                        <p>R$<big><strong>584</strong></big></p>
                                    </div>
                                </div>
                            </li>
                            {/* Card02 */}
                            {/* Card03 */}
                            <li class="me-5 mb-4">
                                <div class="card">
                                    <img src="../assents/img/salvador-300x200.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Salvador</h5>
                                        <p class="card-text">
                                            22 de Ago 2022
                                        </p>
                                        <p class="small">Passagens a partir de</p>
                                        <p>R$<big><strong>747</strong></big></p>
                                    </div>
                                </div>
                            </li>
                            {/* Card03 */}
                            {/* Card04 */}
                            <li class="me-5 mb-4">
                                <div class="card">
                                    <img src="../assents/img/porto_seguro-300x200.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Porto Seguro</h5>
                                        <p class="card-text">
                                            30 de Ago 2022
                                        </p>
                                        <p class="small">Passagens a partir de</p>
                                        <p>R$<big><strong>691</strong></big></p>
                                    </div>
                                </div>
                            </li>
                            {/* Card04 */}
                            {/* Card05 */}
                            <li class="me-5 mb-4">
                                <div class="card">
                                    <img src="../assents/img/recife-300x200.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Recife</h5>
                                        <p class="card-text">
                                            02 de Ago 2022
                                        </p>
                                        <p class="small">Passagens a partir de</p>
                                        <p>R$<big><strong>1337</strong></big></p>
                                    </div>
                                </div>
                            </li>
                            {/* Card05 */}
                        </ul>
                    </div>
                    {/* DESTINOS NACIONAIS */}

                    {/* DESTINOS INTERNACIONAIS */}
                    <div>
                        <h4>VOOS INTERNACIONAIS</h4>
                        <p class="small">Saindo de S�o Paulo</p>
                        <ul class="promo">
                            {/* Card01 */}
                            <li class="me-5 mb-4">
                                <div class="card">
                                    <img src="../assents/img/buenos_aires-300x200.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Buenos Aires</h5>
                                        <p class="card-text">
                                            17 de Out 2022
                                        </p>
                                        <p class="small">Passagens a partir de</p>
                                        <p>R$<big><strong>1445</strong></big></p>
                                    </div>
                                </div>
                            </li>
                            {/* Card01 */}
                            {/* Card02 */}
                            <li class="me-5 mb-4">
                                <div class="card">
                                    <img src="../assents/img/orlando-300x200.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Orlando</h5>
                                        <p class="card-text">
                                            01 de Fev 2023
                                        </p>
                                        <p class="small">Passagens a partir de</p>
                                        <p>R$<big><strong>3914</strong></big></p>
                                    </div>
                                </div>
                            </li>
                            {/* Card02 */}
                            {/* Card03 */}
                            <li class="me-5 mb-4">
                                <div class="card">
                                    <img src="../assents/img/lisboa-300x200.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Lisboa</h5>
                                        <p class="card-text">
                                            01 de Mar 2022
                                        </p>
                                        <p class="small">Passagens a partir de</p>
                                        <p>R$<big><strong>4363</strong></big></p>
                                    </div>
                                </div>
                            </li>
                            {/* Card03 */}
                            {/* Card04 */}
                            <li class="me-5 mb-4">
                                <div class="card">
                                    <img src="../assents/img/londres-300x200.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Londres</h5>
                                        <p class="card-text">
                                            25 de Out 2022
                                        </p>
                                        <p class="small">Passagens a partir de</p>
                                        <p>R$<big><strong>4560</strong></big></p>
                                    </div>
                                </div>
                            </li>
                            {/* Card04 */}
                            {/* Card05 */}
                            <li class="me-5 mb-4">
                                <div class="card">
                                    <img src="../assents/img/paris-300x200.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Paris</h5>
                                        <p class="card-text">
                                            02 de Ago 2022
                                        </p>
                                        <p class="small">Passagens a partir de</p>
                                        <p>R$<big><strong>5490</strong></big></p>
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
