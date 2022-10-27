import React from "react";

const Login = () => {

    return (
        <>
            <main className="d-flex justify-content-center align-items-center form-box">
                {/* FORMUL�RIO */}
                <section className="login">
                    <h2>LOGIN</h2>
                    <form className="form">
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Email@email.com"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputSenha" className="form-label">Senha</label>
                            <input type="password"
                                className="form-control"
                                name="password"
                                id="password"
                                placeholder="**********" />
                        </div>
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" defaultChecked />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                Manter conectado
                            </label>
                        </div>
                        <div className="d-grid">
                            <a href="./adm/cliente" >
                                <button type="button"
                                    className="btn btn-primary">Conectar</button>
                            </a>
                        </div>
                        <div className="d-flex justify-content-around mt-3">
                            <a href="../HTML/cadastro.html" className="text-black">Cadastrar conta</a>
                            <p className="text-black">Esqueci minha senha</p>
                        </div>
                    </form>
                </section>
                {/* FORMUL�RIO */}
            </main>
        </>
    )
}
export default Login;
