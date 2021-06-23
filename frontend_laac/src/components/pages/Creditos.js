import React from "react";
import "./Contactos.css";
import  val   from "../../assets/val.jpg";
import  carol   from "../../assets/carol.jpg";
import  ana   from "../../assets/ana.jpg";
import  gabi   from "../../assets/gabi.jpg";

const Creditos = () => {

    return (

        <div className="contactos">
        <div className="espacos-fisicos">
          <h2> Créditos   PÁGINA EM CONSTRUÇÃO </h2>
          <p></p>
        </div>
      
        <div >
            
                <div >
                   <p>  &nbsp;&nbsp; &nbsp;&nbsp;   &nbsp;&nbsp; <img src={val} />  
                        &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp; <img src={carol} /> 
                        &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  <img src={gabi} /> 
                        &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  <img src={ana} /> 
                    </p>
                 
                
                  
                 
                  
                </div>
           


        </div>
  
    </div>
    );
}
  export default Creditos;

