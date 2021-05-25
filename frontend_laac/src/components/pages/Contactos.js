import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faInstagram,
  faInternetExplorer,
 
} from "@fortawesome/free-brands-svg-icons";
import "./Contactos.css";
import { faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons";

const Contactos = () => {
  return (
    <div className="contactos">
      <div className="espacos-fisicos">
        <h2>Os nossos espaços físicos e digitais </h2>
      </div>
      <div className = "paragrafo"> 
        <p>
          O antigo Convento das Capuchas, onde Luiza assumiu a sua primeira missão
          aos 14 anos. <br /> Um edifício com séculos de história ligada ao
          desenvolvimento social e à educação que perdura  <br /> até hoje, graças à sua
          compra, em 1925, por parte de Luiza Andaluz.
        </p>
        <a href="https://www.google.com/maps/place/Luiza+Andaluz+Centro+de+Conhecimento/@39.2326994,-8.6834605,17z/data=!3m1!4b1!4m5!3m4!1s0xd18ef103e75ea2b:0x8aeea24ade536bf5!8m2!3d39.2326994!4d-8.6812718">
          Rua de Braamcamp, s/n 2000-094 Santarém
        </a>
        <p>
          A Casa Madre Luiza Andaluz, o antigo palacete Andaluz, edifício onde
          Luiza Andaluz nasceu  <br /> a 12 de fevereiro de 1877, cresceu e fundou a
          Congregação. <br /> Aqui sepultada, a sua cripta é um local de devoção e de
          oração para visitantes de todo o mundo.
        </p>
        <a href="https://www.google.com/maps/place/Casa+Madre+Luiza+Andaluz/@39.2331728,-8.6822802,19z/data=!3m1!4b1!4m5!3m4!1s0xd18ef8050a440fb:0x54f34a92b3cc5aca!8m2!3d39.2331728!4d-8.681733">
          Rua Miguel Bombarda, 55 2000-069 Santarém
        </a>
        <p>
          A Casa de São Mamede, um palacete burguês situado no coração da cidade
          de Lisboa, foi adquirida  <br /> por Luiza Andaluz em 1934 e adaptada para
          alojar o Noviciado e a sede do governo da Congregação  <br /> das Servas de
          Nossa Senhora de Fátima.
        </p>
        <a href="https://www.google.com/maps/place/Congrega%C3%A7%C3%A3o+das+Servas+de+Nossa+Senhora+de+F%C3%A1tima/@38.7187876,-9.1547299,17z/data=!3m1!4b1!4m5!3m4!1s0xd19337b9367d4d5:0x52242467e22c08d6!8m2!3d38.7187876!4d-9.1525412">
          Largo de São Mamede, 1 1250-236 Lisboa
        </a>
      </div>
      <div className="info-container">
        <h3>Contactos</h3>
        <div>
        <FontAwesomeIcon icon={faMailBulk} size="2x" />
          <p>E-mail: geral@lacc.pt</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faPhone} size="2x" />
          <p>Telemóvel: +351 938 829 003</p>
        </div>
        <a href="https://lacc.pt/">
          < FontAwesomeIcon icon={faInternetExplorer} size="2x"  />
          <p>Website Oficial</p>
        </a>
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

export default Contactos;
