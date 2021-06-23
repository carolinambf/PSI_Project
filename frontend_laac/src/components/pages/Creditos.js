import React from "react";
import "./Contactos.css";
import val from "../../assets/val.jpg";
import carol from "../../assets/carol.jpg";
import ana from "../../assets/ana.jpg";
import gabi from "../../assets/gabi.jpg";
import jess from "../../assets/jess.jpg";
import pedro from "../../assets/pedro.jpg";
import joao from "../../assets/joao.jpg";
//import rui from "../../assets/rui.jpg";

const Creditos = () => {

    return (

        <div className="contactos">
            <div className="espacos-fisicos">
                <h2> Créditos </h2>
                <p> </p>
            </div>

            <div >
                <p> Um Trabalho realizado por: </p>
                <div >
                    <p>   &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  <img src={gabi} />
                          &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp; <img src={carol} />
                          &nbsp;&nbsp; &nbsp;&nbsp;   &nbsp;&nbsp; <img src={val} />
                          &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  <img src={ana} />
                    </p>
                
            </div>
            <div >
            <p>          &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  <img src={jess} />
                         &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp; <img src={pedro} />
                         &nbsp;&nbsp; &nbsp;&nbsp;   &nbsp;&nbsp; <img src={joao} />
                    </p>
                </div>

        </div>
        </div>

    );
}
export default Creditos;