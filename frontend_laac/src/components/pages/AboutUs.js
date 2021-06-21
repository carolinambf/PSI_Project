import React from "react";
import "./AboutUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./Contactos.css";


const AboutUs = () => {
  return (
    <div className="aboutus">
    <div className ="sobrenos">
<h2> Quem é Luiza Andaluz? </h2>
</div>
<div className="paragrafo">
<p>Luiza Andaluz é uma mulher inspiradora, audaz, culta e multifacetada, que  colocou a sua vida ao serviço das causas da 
  dignidade humana e do bem comum. Suportada pelos valores humanos e cristãos, encontrou na educação integral 
  e simultaneamente na imprensa cristã, a forma de expandir a sua ação, em especial para com as jovens mulheres, fundando, em 1923, a Congregação das Servas 
   de Nossa Senhora de Fátima.
</p>
</div>
<div className ="trabalho">
<h2> Sobre este trabalho... </h2>
</div>
<div className="paragrafo">
<p> Esta é uma plataforma online onde o utilizador pode assinalar o local onde teve uma interação com Luiza Andaluz e/ou com a congregação. ​
O utilizador da página pode descrever a sua interação e até adicionar fotografias (da interação, do local ou de um evento).​
À medida que os utilizadores vão preenchendo a plataforma com as suas experiências, estas são assinaladas no mundo, sendo facilmente percetível o 
impacto de Luiza e da congregação.
</p>
</div>

<div className ="trabalho">
<h2> Um Trabalho de ... </h2>
</div>
<div className="paragrafo">
<p> A realização deste trabalho, teve o contributo dos alunos do 3ºano de licenciatura em Engenharia Informática, da cadeira de Projeto de sistemas de Informação,
orientada pelo docente Paulo Santos. Os alunos: Carolina Ferreira, João Valente, Jéssica Henriques, Gabriel Marçal, Tiago Martins, Ana Ribeiro, Rui Rocha e João Silva.
</p>

</div>

<div className="social-container">
        <h3>Redes Sociais</h3>
        <a
          href="https://www.youtube.com/channel/UCPCkbwTgAEpS32WyQ2AY2Pw"
          className="youtube social"
        >
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a
          href="https://www.facebook.com/luiza.andaluz.cc"
          className="facebook social"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          href="https://www.instagram.com/luiza.andaluz.cc/"
          className="instagram social"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
    </div>

  );
};

export default AboutUs;

