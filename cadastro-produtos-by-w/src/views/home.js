import React from "react";

function Home() {
    return (
        <div className="jumbotron">
            <h1 className="display-3">Bem vindo!</h1>
            <p className="lead">Este es seu sistema.</p>
            <hr className="my-4" />
            <p>Utiliza as barras de navegação para acessar as páginas.</p>
            <p className ="lead">
            <a className ="btn btn-primary btn-lg" href="#" role="button">Cadastrar</a>
            </p>
        </div>
    );
}

export default Home;