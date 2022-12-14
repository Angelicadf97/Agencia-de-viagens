import React from 'react'

import Navbar from '../components/navigate/navbar';
import Footer from '../components/footer/footer';
import ListaCards from '../components/cardDest/cardList'
import curitiba from '../assets/img/curitiba-300x200.png'
import foz from '../assets/img/foz_do_iguacu-300x200.png'
import jalapao from '../assets/img/jalapao-300x200.png'
import maceio from '../assets/img/maceio-300x200.png'
import ouroPreto from '../assets/img/ouro_preto-300x200.png'

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
                            cidade1={"Curitiba"} desc1={"Curitiba ?? conhecida pelo cuidado com o planejamento urbano, belas ??reas verdes e um transporte p??blico de qualidade."} img1={curitiba}
                            cidade2={"Foz do Igua????"} desc2={"Foz do Igua??u ?? uma cidade cheia de atra????es e guarda um dos mais belos espet??culos da natureza, as Cataratas do Igua??u."} img2={foz}
                            cidade3={"Jalap??o"} desc3={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa at provident aperiam, quisquam ullam recusandae?"} img3={jalapao}
                            cidade4={"Macei??"} desc4={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa at provident aperiam, quisquam ullam recusandae?"} img4={maceio}
                            cidade5={"Ouro Preto"} desc5={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa at provident aperiam, quisquam ullam recusandae?"} img5={ouroPreto} />
                    
                    </div>

                
                    <div>
                        <h4 class="mt-4">DESTINOS INTERNACIONAIS</h4>
                        <ListaCards
                            cidade1={"Curitiba"} desc1={"Curitiba ?? conhecida pelo cuidado com o planejamento urbano, belas ??reas verdes e um transporte p??blico de qualidade."} img1={curitiba}
                            cidade2={"Foz do Igua????"} desc2={"Foz do Igua??u ?? uma cidade cheia de atra????es e guarda um dos mais belos espet??culos da natureza, as Cataratas do Igua??u."} img2={foz}
                            cidade3={"Jalap??o"} desc3={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa at provident aperiam, quisquam ullam recusandae?"} img3={jalapao}
                            cidade4={"Macei??"} desc4={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa at provident aperiam, quisquam ullam recusandae?"} img4={maceio}
                            cidade5={"Ouro Preto"} desc5={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa at provident aperiam, quisquam ullam recusandae?"} img5={ouroPreto} />
                    
                    </div>
                    
                </section>
                
            </main>
            <Footer />
        </>
    )
}
