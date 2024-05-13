"use client";
import React from "react";
import Link from "next/link";
import AllJogadors from "./components/all-jogador";

const Home = () => {
  return (
    <>
<main>
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active">                              
        </li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>

      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <a href="../add/">
          <div className="image-container position-relative">
        <img src="https://template55849.motopreview.com/mt-demo/55800/55849/mt-content/uploads/2015/11/mt-0229-home-slider1.jpg" className="d-block w-100" alt="Imagem 1" />
        <div className="overlay-text">Texto sobre a imagem</div>
      </div>
          </a>
        </div>
        <div className="carousel-item">
          <img src="https://template55849.motopreview.com/mt-demo/55800/55849/mt-content/uploads/2015/11/mt-0229-home-slider2.jpg" className="d-block w-100" alt="Imagem 2" />
        </div>
        <div className="carousel-item">
          <img src="https://template55849.motopreview.com/mt-demo/55800/55849/mt-content/uploads/2015/11/mt-0229-home-slider3.jpg" className="d-block w-100" alt="Imagem 3" />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Anterior</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Próximo</span>
      </a>
    </div>
    <div className="container-fluid mt-4">
    <div className="row justify-content-center">
      <div className="col-sm-12 text-center mb-4">
        <h2>Bem vindo</h2>
      </div>
      <div className="col-sm-4">
        <div className="moto-widget-text-content">
        <p className="mb-4">O tênis está disponível em qualquer idade, não importa quantos anos você tenha: 5 ou 65 e qual é sua forma física - este jogo trará muita diversão e será útil para a saúde.</p>
    <p className="mb-4">O tênis permite que uma pessoa desenvolva não apenas qualidades físicas puras: resistência, força, precisão, postura bonita.</p>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="moto-widget-text-content">
        <p className="mb-4">O tênis ajuda a desenvolver qualidades pessoais que serão úteis em todas as áreas da vida: determinação, confiança, habilidade de tomar decisões instantaneamente. Para um homem que nunca jogou tênis, é inútil pegar a raquete e as bolas e ir imediatamente para a quadra. Os movimentos no tênis parecem simples à primeira vista.</p>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="moto-widget-text-content">
        <p className="mb-4">Apenas aulas regulares podem trazer resultados, seja o objetivo do aprendiz melhorar a forma física ou alcançar determinados indicadores em nível profissional.</p>
        </div>
      </div>
    </div>

  </div>
    
  </main>    
    <div>

      <div>
        <AllJogadors />
      </div>
    </div>
    </>
  );
};

export default Home;
