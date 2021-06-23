import React from "react";
import "./Contactos.css";
import  val   from "../../assets/val.jpg";
import  carol   from "../../assets/carol.jpg";
const Creditos = () => {

    return (

        <div className="contactos">
        <div className="espacos-fisicos">
          <h2> Créditos   PÁGINA EM CONSTRUÇÃO </h2>
        </div>
      
        <div className="row">
            <div className="col-lg-3 col-md-6">
                <div className="member">
                   <p><img src={val} /> <img src={carol} /> </p>
                    <h4> João Miguel Valente taveres Oliveira  </h4>
                    <span> 21073 </span>
                </div>
            </div>


        </div>
  
    </div>
    );
}
  export default Creditos;

