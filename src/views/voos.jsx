import React from 'react'

import Navbar from '../components/navigate/navbar';
import Footer from '../components/footer/footer';

export default function Voos() {
    return (
        <>
            <Navbar />
            <main class="container conteudo my-4 px-4">
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

                <section>
                    <div>
                        <h4>DESTINOS NACIONAIS</h4>
                        <ListaCards
                            cidade1={"Curitiba"} desc1={"Curitiba é conhecida pelo cuidado com o planejamento urbano, belas áreas verdes e um transporte público de qualidade."} img1={curitiba}
                            cidade2={"Foz do Iguaçú"} desc2={"Foz do Iguaçu é uma cidade cheia de atrações e guarda um dos mais belos espetáculos da natureza, as Cataratas do Iguaçu."} img2={foz}
                            cidade3={"Jalapão"} desc3={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa at provident aperiam, quisquam ullam recusandae?"} img3={jalapao}
                            cidade4={"Maceió"} desc4={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa at provident aperiam, quisquam ullam recusandae?"} img4={maceio}
                            cidade5={"Ouro Preto"} desc5={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa at provident aperiam, quisquam ullam recusandae?"} img5={ouroPreto} />
                    
                    </div>

                
                    <div>
                        <h4 class="mt-4">DESTINOS INTERNACIONAIS</h4>
                        <ListaCards
                            cidade1={"Curitiba"} desc1={"Curitiba é conhecida pelo cuidado com o planejamento urbano, belas áreas verdes e um transporte público de qualidade."} img1={curitiba}
                            cidade2={"Foz do Iguaçú"} desc2={"Foz do Iguaçu é uma cidade cheia de atrações e guarda um dos mais belos espetáculos da natureza, as Cataratas do Iguaçu."} img2={foz}
                            cidade3={"Jalapão"} desc3={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa at provident aperiam, quisquam ullam recusandae?"} img3={jalapao}
                            cidade4={"Maceió"} desc4={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa at provident aperiam, quisquam ullam recusandae?"} img4={maceio}
                            cidade5={"Ouro Preto"} desc5={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa at provident aperiam, quisquam ullam recusandae?"} img5={ouroPreto} />
                    
                    </div>
                    
                </section>
                
            </main>
            <Footer />
        </>
    )
}
