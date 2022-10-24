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
                FORMULÁRIO
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
                FORMULÁRIO
                CARDS
                <section>
                    DESTINOS NACIONAIS
                    <div>
                        <h4 id="fort">FORTALEZA</h4>
                        <ul class="promo">
                            Card01
                            <li class="me-5 mb-4">
                                <div class="card">
                                    <img src="../IMG/fortaleza/comfort-hotel-fortaleza-300x200.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Comfort Hotel Fortaleza</h5>
                                        <p>
                                            A partir de <strong>Sáb 01 Out</strong> Até <strong>Qui 06 Out</strong>
                                        </p>

                                        <p class="small">Preço por pessoa</p>
                                        <p class="small text-secondary text-decoration-line-through">R$2.578</p>
                                        <p>R$<big><strong>1.691</strong></big></p>
                                        <p class="small">Taxas e impostos não inclusos</p>
                                    </div>
                                </div>
                            </li>
                            Card01
                            Card02
                            <li class="me-5 mb-4">
                                <div class="card">
                                    <img src="../IMG/fortaleza/plaza-praia-suites-300x200.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Plaza Praia Suites Hotel</h5>
                                        <p>
                                            A partir de <strong>Sáb 24 Set</strong> Até <strong>Ter 04 Out</strong>
                                        </p>

                                        <p class="small">Preço por pessoa</p>
                                        <p class="small text-secondary text-decoration-line-through">R$2.907</p>
                                        <p>R$<big><strong>2.143</strong></big></p>
                                        <p class="small">Taxas e impostos não inclusos</p>
                                    </div>
                                </div>
                            </li>
                            Card02
                            Card03
                            <li class="me-5 mb-4">
                                <div class="card">
                                    <img src="../IMG/fortaleza/Hotel_Brasil_tropical-300x200.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Hotel Brasil Tropical</h5>
                                        <p>
                                            A partir de <strong>Seg 29 Ago</strong> Até <strong>Sex 02 Set</strong>
                                        </p>

                                        <p class="small">Preço por pessoa</p>
                                        <p class="small text-secondary text-decoration-line-through">R$2.477</p>
                                        <p>R$<big><strong>1.908</strong></big></p>
                                        <p class="small">Taxas e impostos não inclusos</p>
                                    </div>
                                </div>
                            </li>
                            Card03
                            Card04
                            <li class="me-5 mb-4">
                                <div class="card">
                                    <img src="../IMG/fortaleza/portal_praia_hotel-300x200.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Portal da Praia Hotel</h5>
                                        <p>
                                            A partir de <strong>Ter 20 Set</strong> Até <strong>Sáb 24 Set</strong>
                                        </p>

                                        <p class="small">Preço por pessoa</p>
                                        <p class="small text-secondary text-decoration-line-through">R$2.590</p>
                                        <p>R$<big><strong>1.800</strong></big></p>
                                        <p class="small">Taxas e impostos não inclusos</p>
                                    </div>
                                </div>
                            </li>
                            Card04
                            Card05
                            <li class="me-5 mb-4">
                                <div class="card">
                                    <img src="../IMG/fortaleza/maredomus-hotel-300x200.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Maredomus Hotel</h5>
                                        <p>
                                            A partir de <strong>Seg 29 Ago</strong> Até <strong>Ter 13 Ago</strong>
                                        </p>

                                        <p class="small">Preço por pessoa</p>
                                        <p class="small text-secondary text-decoration-line-through">R$3.704</p>
                                        <p>R$<big><strong>2.734</strong></big></p>
                                        <p class="small">Taxas e impostos não inclusos</p>
                                    </div>
                                </div>
                            </li>
                            Card05
                        </ul>
                    </div>
                    <div>
                        <h4 id="flor">FLORIANÓPOLIS</h4>
                        <ul class="promo">
                            Card01
                            <li class="me-5 mb-4">
                                <div class="card">
                                    <img src="../IMG/fortaleza/comfort-hotel-fortaleza-300x200.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Comfort Hotel Fortaleza</h5>
                                        <p>
                                            A partir de <strong>Sáb 01 Out</strong> Até <strong>Qui 06 Out</strong>
                                        </p>

                                        <p class="small">Preço por pessoa</p>
                                        <p class="small text-secondary text-decoration-line-through">R$2.578</p>
                                        <p>R$<big><strong>1.691</strong></big></p>
                                        <p class="small">Taxas e impostos não inclusos</p>
                                    </div>
                                </div>
                            </li>
                            Card01
                            Card02
                            <li class="me-5 mb-4">
                                <div class="card">
                                    <img src="../IMG/fortaleza/plaza-praia-suites-300x200.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Plaza Praia Suites Hotel</h5>
                                        <p>
                                            A partir de <strong>Sáb 24 Set</strong> Até <strong>Ter 04 Out</strong>
                                        </p>

                                        <p class="small">Preço por pessoa</p>
                                        <p class="small text-secondary text-decoration-line-through">R$2.907</p>
                                        <p>R$<big><strong>2.143</strong></big></p>
                                        <p class="small">Taxas e impostos não inclusos</p>
                                    </div>
                                </div>
                            </li>
                            Card02
                            Card03
                            <li class="me-5 mb-4">
                                <div class="card">
                                    <img src="../IMG/fortaleza/Hotel_Brasil_tropical-300x200.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Hotel Brasil Tropical</h5>
                                        <p>
                                            A partir de <strong>Seg 29 Ago</strong> Até <strong>Sex 02 Set</strong>
                                        </p>

                                        <p class="small">Preço por pessoa</p>
                                        <p class="small text-secondary text-decoration-line-through">R$2.477</p>
                                        <p>R$<big><strong>1.908</strong></big></p>
                                        <p class="small">Taxas e impostos não inclusos</p>
                                    </div>
                                </div>
                            </li>
                            Card03
                            Card04
                            <li class="me-5 mb-4">
                                <div class="card">
                                    <img src="../IMG/fortaleza/portal_praia_hotel-300x200.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Portal da Praia Hotel</h5>
                                        <p>
                                            A partir de <strong>Ter 20 Set</strong> Até <strong>Sáb 24 Set</strong>
                                        </p>

                                        <p class="small">Preço por pessoa</p>
                                        <p class="small text-secondary text-decoration-line-through">R$2.590</p>
                                        <p>R$<big><strong>1.800</strong></big></p>
                                        <p class="small">Taxas e impostos não inclusos</p>
                                    </div>
                                </div>
                            </li>
                            Card04
                            Card05
                            <li class="me-5 mb-4">
                                <div class="card">
                                    <img src="../IMG/fortaleza/maredomus-hotel-300x200.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Maredomus Hotel</h5>
                                        <p>
                                            A partir de <strong>Seg 29 Ago</strong> Até <strong>Ter 13 Ago</strong>
                                        </p>

                                        <p class="small">Preço por pessoa</p>
                                        <p class="small text-secondary text-decoration-line-through">R$3.704</p>
                                        <p>R$<big><strong>2.734</strong></big></p>
                                        <p class="small">Taxas e impostos não inclusos</p>
                                    </div>
                                </div>
                            </li>
                            Card05
                        </ul>
                    </div>
                    <div>
                        <h4 id="rec">RECIFE</h4>
                        <ul class="promo">
                            Card01
                            <li class="me-5 mb-4">
                                <div class="card">
                                    <img src="../IMG/fortaleza/comfort-hotel-fortaleza-300x200.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Comfort Hotel Fortaleza</h5>
                                        <p>
                                            A partir de <strong>Sáb 01 Out</strong> Até <strong>Qui 06 Out</strong>
                                        </p>

                                        <p class="small">Preço por pessoa</p>
                                        <p class="small text-secondary text-decoration-line-through">R$2.578</p>
                                        <p>R$<big><strong>1.691</strong></big></p>
                                        <p class="small">Taxas e impostos não inclusos</p>
                                    </div>
                                </div>
                            </li>
                            Card01
                            Card02
                            <li class="me-5 mb-4">
                                <div class="card">
                                    <img src="../IMG/fortaleza/plaza-praia-suites-300x200.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Plaza Praia Suites Hotel</h5>
                                        <p>
                                            A partir de <strong>Sáb 24 Set</strong> Até <strong>Ter 04 Out</strong>
                                        </p>

                                        <p class="small">Preço por pessoa</p>
                                        <p class="small text-secondary text-decoration-line-through">R$2.907</p>
                                        <p>R$<big><strong>2.143</strong></big></p>
                                        <p class="small">Taxas e impostos não inclusos</p>
                                    </div>
                                </div>
                            </li>
                            Card02
                            Card03
                            <li class="me-5 mb-4">
                                <div class="card">
                                    <img src="../IMG/fortaleza/Hotel_Brasil_tropical-300x200.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Hotel Brasil Tropical</h5>
                                        <p>
                                            A partir de <strong>Seg 29 Ago</strong> Até <strong>Sex 02 Set</strong>
                                        </p>

                                        <p class="small">Preço por pessoa</p>
                                        <p class="small text-secondary text-decoration-line-through">R$2.477</p>
                                        <p>R$<big><strong>1.908</strong></big></p>
                                        <p class="small">Taxas e impostos não inclusos</p>
                                    </div>
                                </div>
                            </li>
                            Card03
                            Card04
                            <li class="me-5 mb-4">
                                <div class="card">
                                    <img src="../IMG/fortaleza/portal_praia_hotel-300x200.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Portal da Praia Hotel</h5>
                                        <p>
                                            A partir de <strong>Ter 20 Set</strong> Até <strong>Sáb 24 Set</strong>
                                        </p>

                                        <p class="small">Preço por pessoa</p>
                                        <p class="small text-secondary text-decoration-line-through">R$2.590</p>
                                        <p>R$<big><strong>1.800</strong></big></p>
                                        <p class="small">Taxas e impostos não inclusos</p>
                                    </div>
                                </div>
                            </li>
                            Card04
                            Card05
                            <li class="me-5 mb-4">
                                <div class="card">
                                    <img src="../IMG/fortaleza/maredomus-hotel-300x200.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Maredomus Hotel</h5>
                                        <p>
                                            A partir de <strong>Seg 29 Ago</strong> Até <strong>Ter 13 Ago</strong>
                                        </p>

                                        <p class="small">Preço por pessoa</p>
                                        <p class="small text-secondary text-decoration-line-through">R$3.704</p>
                                        <p>R$<big><strong>2.734</strong></big></p>
                                        <p class="small">Taxas e impostos não inclusos</p>
                                    </div>
                                </div>
                            </li>
                            Card05
                        </ul>
                    </div>
                    <div>
                        <h4 id="rio">RIO DE JANEIRO</h4>
                        <ul class="promo">
                            Card01
                            <li class="me-5 mb-4">
                                <div class="card">
                                    <img src="../IMG/fortaleza/comfort-hotel-fortaleza-300x200.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Comfort Hotel Fortaleza</h5>
                                        <p>
                                            A partir de <strong>Sáb 01 Out</strong> Até <strong>Qui 06 Out</strong>
                                        </p>

                                        <p class="small">Preço por pessoa</p>
                                        <p class="small text-secondary text-decoration-line-through">R$2.578</p>
                                        <p>R$<big><strong>1.691</strong></big></p>
                                        <p class="small">Taxas e impostos não inclusos</p>
                                    </div>
                                </div>
                            </li>
                            Card01
                            Card02
                            <li class="me-5 mb-4">
                                <div class="card">
                                    <img src="../IMG/fortaleza/plaza-praia-suites-300x200.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Plaza Praia Suites Hotel</h5>
                                        <p>
                                            A partir de <strong>Sáb 24 Set</strong> Até <strong>Ter 04 Out</strong>
                                        </p>

                                        <p class="small">Preço por pessoa</p>
                                        <p class="small text-secondary text-decoration-line-through">R$2.907</p>
                                        <p>R$<big><strong>2.143</strong></big></p>
                                        <p class="small">Taxas e impostos não inclusos</p>
                                    </div>
                                </div>
                            </li>
                            Card02
                            Card03
                            <li class="me-5 mb-4">
                                <div class="card">
                                    <img src="../IMG/fortaleza/Hotel_Brasil_tropical-300x200.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Hotel Brasil Tropical</h5>
                                        <p>
                                            A partir de <strong>Seg 29 Ago</strong> Até <strong>Sex 02 Set</strong>
                                        </p>

                                        <p class="small">Preço por pessoa</p>
                                        <p class="small text-secondary text-decoration-line-through">R$2.477</p>
                                        <p>R$<big><strong>1.908</strong></big></p>
                                        <p class="small">Taxas e impostos não inclusos</p>
                                    </div>
                                </div>
                            </li>
                            Card03
                            Card04
                            <li class="me-5 mb-4">
                                <div class="card">
                                    <img src="../IMG/fortaleza/portal_praia_hotel-300x200.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Portal da Praia Hotel</h5>
                                        <p>
                                            A partir de <strong>Ter 20 Set</strong> Até <strong>Sáb 24 Set</strong>
                                        </p>

                                        <p class="small">Preço por pessoa</p>
                                        <p class="small text-secondary text-decoration-line-through">R$2.590</p>
                                        <p>R$<big><strong>1.800</strong></big></p>
                                        <p class="small">Taxas e impostos não inclusos</p>
                                    </div>
                                </div>
                            </li>
                            Card04
                            Card05
                            <li class="me-5 mb-4">
                                <div class="card">
                                    <img src="../IMG/fortaleza/maredomus-hotel-300x200.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Maredomus Hotel</h5>
                                        <p>
                                            A partir de <strong>Seg 29 Ago</strong> Até <strong>Ter 13 Ago</strong>
                                        </p>

                                        <p class="small">Preço por pessoa</p>
                                        <p class="small text-secondary text-decoration-line-through">R$3.704</p>
                                        <p>R$<big><strong>2.734</strong></big></p>
                                        <p class="small">Taxas e impostos não inclusos</p>
                                    </div>
                                </div>
                            </li>
                            Card05
                        </ul>
                    </div>
                    DESTINOS NACIONAIS
                </section>
                CARDS
            </main>
            <Footer />
        </>
    )
}
