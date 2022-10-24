import React from 'react'

import Navbar from '../components/navigate/navbar';
import Footer from '../components/footer/footer';

export default function Contato() {
    return (
        <>
            <Navbar />
            <main class="d-flex justify-content-center align-items-center form-box">
                {/* FORMUL�RIO */}
                <section class="contato my-5">
                    <h2>ENTRE EM CONTATO</h2>
                    <form>
                        <div class="mb-3">
                            <label for="inputName" class="form-label">Seu nome</label>
                            <input type="text" class="form-control" id="inputName" />
                        </div><div class="mb-3">
                            <label for="inputEmail" class="form-label">Seu email</label>
                            <input type="email" class="form-control" id="inputEmail" />
                        </div>
                        <div class="mb-3">
                            <label for="inputText" class="form-label">Assunto</label>
                            <input type="text" class="form-control" id="inputText" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Mensagem</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div class="col-lg-4 mb-2 d-grid">
                            <button type="submit" class="btn btn-primary">Cadastrar</button>
                        </div>
                    </form>
                </section>
                {/* FORMUL�RIO */}
            </main>
            <Footer />
        </>
    )
}
