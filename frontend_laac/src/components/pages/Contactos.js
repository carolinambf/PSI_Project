import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faInstagram,
  faInternetExplorer,
 
} from "@fortawesome/free-brands-svg-icons";
import "./Contactos.css";
import { faMailBulk, faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";

const Contactos = () => {
  return (
    <div className="contactos">
      <div className="espacos-fisicos">
        <h2>OS NOSSOS ESPAÇOS FÍSICOS E DIGITAIS</h2>
      </div>
      <div className = "paragrafo"> 
        <p>
          O antigo Convento das Capuchas, onde Luiza assumiu a sua primeira missão
          aos 14 anos. Um edifício com séculos de história ligada ao
          desenvolvimento social e à educação que perdura até hoje, graças à sua
          compra, em 1925, por parte de Luiza Andaluz.
        </p>
        <p>
         
          <a href="https://www.google.com/maps/place/Luiza+Andaluz+Centro+de+Conhecimento/@39.2326994,-8.6834605,17z/data=!3m1!4b1!4m5!3m4!1s0xd18ef103e75ea2b:0x8aeea24ade536bf5!8m2!3d39.2326994!4d-8.6812718">
             <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" /> Rua de Braamcamp, s/n 2000-094 Santarém
          </a>
        </p>
        <p>
          A Casa Madre Luiza Andaluz, o antigo palacete Andaluz, edifício onde
          Luiza Andaluz nasceu a 12 de fevereiro de 1877, cresceu e fundou a
          Congregação. Aqui sepultada, a sua cripta é um local de devoção e de
          oração para visitantes de todo o mundo.
        </p>
        <p>
         
          <a href="https://www.google.com/maps/place/Casa+Madre+Luiza+Andaluz/@39.2331728,-8.6822802,19z/data=!3m1!4b1!4m5!3m4!1s0xd18ef8050a440fb:0x54f34a92b3cc5aca!8m2!3d39.2331728!4d-8.681733">
             <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" /> Rua Miguel Bombarda, 55 2000-069 Santarém
          </a>
        </p>
        <p>
          A Casa de São Mamede, um palacete burguês situado no coração da cidade
          de Lisboa, foi adquirida por Luiza Andaluz em 1934 e adaptada para
          alojar o Noviciado e a sede do governo da Congregação das Servas de
          Nossa Senhora de Fátima.
        </p>
        <p>
         
          <a href="https://www.google.com/maps/place/Congrega%C3%A7%C3%A3o+das+Servas+de+Nossa+Senhora+de+F%C3%A1tima/@38.7187876,-9.1547299,17z/data=!3m1!4b1!4m5!3m4!1s0xd19337b9367d4d5:0x52242467e22c08d6!8m2!3d38.7187876!4d-9.1525412">
             <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" /> Largo de São Mamede, 1 1250-236 Lisboa
          </a>
        </p>
      </div>

      <div className="contacto">
        <h3>CONTACTOS</h3>
        </div>

      <div className="info-container">
        <div>
          <p><FontAwesomeIcon icon={faMailBulk} size="1x"/> geral@lacc.pt&nbsp;&nbsp;&nbsp;&nbsp;
             <FontAwesomeIcon icon={faPhone} size="1x" /> +351 938 829 003&nbsp;&nbsp;&nbsp;&nbsp;
             <a href="https://lacc.pt/"><FontAwesomeIcon icon={faInternetExplorer} size="1x"/> Website Oficial </a>
          </p>  
        </div> 
      </div>
      
      <div className="social-container">
        <h6>REDES SOCIAIS</h6>
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
