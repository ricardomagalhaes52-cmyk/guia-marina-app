import React from "react";
import marina from "./assets/marina.png";

function Aplicativo() {
  return (
    <div className="app">

      <header className="topo">
        <h1>🌿 Guia Low Carb Fácil</h1>
      </header>


      <main className="principal">

        <div className="imagem-marina">
          <img src={marina} alt="Marina - Guia Low Carb Fácil" />
        </div>


        <section className="conteudo">

          <h2>
            Olá, eu sou a Marina 👩‍🍳
          </h2>

          <p>
            Vou acompanhar você em uma jornada com receitas
            low carb simples, saborosas e fáceis de preparar.
          </p>


          <div className="cards">

            <div className="card">
              🥑
              <strong>200 receitas</strong>
              <span>Práticas para o dia a dia</span>
            </div>


            <div className="card">
              📅
              <strong>Planejamento</strong>
              <span>Organize sua rotina</span>
            </div>


            <div className="card">
              🛒
              <strong>Lista de compras</strong>
              <span>Mais praticidade</span>
            </div>


            <div className="card">
              ⚖️
              <strong>Calculadora IMC</strong>
              <span>Acompanhe seus dados</span>
            </div>

          </div>


          <button className="botao">
            COMEÇAR MINHA JORNADA
          </button>


        </section>

      </main>

    </div>
  );
}

export default Aplicativo;
