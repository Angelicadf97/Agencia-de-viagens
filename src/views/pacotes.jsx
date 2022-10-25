import React from 'react'

import Navbar from '../components/navigate/navbar';
import Footer from '../components/footer/footer';
import PacotesFilter from '../components/filters/pacotes'
import ListaCards from '../components/cardDest/cardList'
import Carrossel from '../components/Carousel/carrossel';
import fortaleza from '../assets/img/fortaleza-400x1600.png'
import floripa from '../assets/img/florianopolis-400x1600.png'
import recife from '../assets/img/recife-400x1600.png'
import rio from '../assets/img/rio_de_janeiro-400x1600.png'
import curitiba from '../assets/img/curitiba-300x200.png'
import foz from '../assets/img/foz_do_iguacu-300x200.png'
import jalapao from '../assets/img/jalapao-300x200.png'
import maceio from '../assets/img/maceio-300x200.png'
import ouroPreto from '../assets/img/ouro_preto-300x200.png'

export default function Pacotes() {
    return (
        <>
            <Navbar />
            <main className="container conteudo my-4 px-4">
                <PacotesFilter />

                <Carrossel title={"PACOTES PROMOCIONAIS"} img1={fortaleza} img2={floripa} img3={recife} img4={rio}
                    t1={"FORTALEZA-CE"} t2={"FLORIANÁPOLIS-SC"} t3={"RECIFE-PE"} t4={"RIO DE JANEIRO-RJ"}
                    des1={`Fortaleza é um dos destinos turísticos mais cobiçados no Brasil e, depois de conhecer a variedade de atrativos que a cidade oferece, fica fácil entender o porquê desse sucesso. Com o poder de agradar pessoas de todas as idades, a capital cearense mistura muitas coisas de que o brasileiro gosta: belezas naturais, cultura, mísica, diversão e uma culinária de tirar o chapéu.`}
                    des2={`Florianápolis encanta por sua variedade de praias e pela capacidade de agradar todo tipo de público. É uma capital que cresceu em meio à natureza, que oferece belas paisagens movimento de uma capital efervescente quanto a tranquilidade de uma cidade quase do interior.`}
                    des3={`O Recife é uma cidade que se destaca em inímeros aspectos no Brasil. Conhecida por sua influência holandesa, a"cidade dos arrecifes", que hoje é um dos centros urbanos mais desenvolvidos do país, preserva muitos resquícios de seu período colonial, garantindo que uma viagem pela cidade revele não apenas as belezas naturais da costa brasileira, como também sua faceta histórica.`}
                    des4={`O Rio de Janeiro, é a cidade brasileira mais conhecida no exterior tem a fama de possuir um povo alegre, ávido por sol, praia, futebol e samba. Mas o Rio vai muito além disso: tem história. Tornar-se sede da colônia, abrigo da corte portuguesa e depois capital do Brasil foi fundamental para que não apenas a própria cidade como o país todo se desenvolvesse em diversos aspectos.`} />

                {/* CARDS */}
                <section>
                    {/* DESTINOS NACIONAIS */}
                    <div>
                        <h4>DESTINOS NACIONAIS</h4>
                        <ListaCards
                            cidade1={"Curitiba"} desc1={"Curitiba é conhecida pelo cuidado com o planejamento urbano, belas áreas verdes e um transporte público de qualidade."} img1={curitiba}
                            cidade2={"Foz do Iguaçú"} desc2={"Foz do Iguaçu é uma cidade cheia de atrações e guarda um dos mais belos espetáculos da natureza, as Cataratas do Iguaçu."} img2={foz}
                            cidade3={"Jalapão"} desc3={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa at provident aperiam, quisquam ullam recusandae?"} img3={jalapao}
                            cidade4={"Maceió"} desc4={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa at provident aperiam, quisquam ullam recusandae?"} img4={maceio}
                            cidade5={"Ouro Preto"} desc5={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa at provident aperiam, quisquam ullam recusandae?"} img5={ouroPreto} />
                    </div>
                    {/* DESTINOS NACIONAIS */}

                    {/* DESTINOS INTERNACIONAIS */}
                    <div>
                        <h4 className="mt-4">DESTINOS INTERNACIONAIS</h4>
                        <ListaCards
                            cidade1={"Curitiba"} desc1={"Curitiba é conhecida pelo cuidado com o planejamento urbano, belas áreas verdes e um transporte público de qualidade."} img1={curitiba}
                            cidade2={"Foz do Iguaçú"} desc2={"Foz do Iguaçu é uma cidade cheia de atrações e guarda um dos mais belos espetáculos da natureza, as Cataratas do Iguaçu."} img2={foz}
                            cidade3={"Jalapão"} desc3={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa at provident aperiam, quisquam ullam recusandae?"} img3={jalapao}
                            cidade4={"Maceió"} desc4={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa at provident aperiam, quisquam ullam recusandae?"} img4={maceio}
                            cidade5={"Ouro Preto"} desc5={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa at provident aperiam, quisquam ullam recusandae?"} img5={ouroPreto} />
                    </div>
                    {/* DESTINOS INTERNACIONAIS */}
                </section>
                {/* CARDS */}
            </main>
            <Footer />
        </>
    )
}
