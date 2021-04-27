import React from "react";
import { Formik } from "formik";

export default function FormikForm() {
  return (
    <Formik
      inicialValue={{
        Nome: "",
        Idade: "",
        Interacao: "",
        contacto: "",
        anexo: "",
      }}
    >
      {() => (
        <form>
          <label>Nome </label>
          <input type="text" id="nome" name="Nome" />
          <br />
          <label>Idade</label>
          <input type="number" id="idade" name="Idade" />
          <br />
          <label>Interação</label>
          <input type="text" id="interacao" name="Interacao" />
          <br />
          <label>contacto</label>
          <input type="text" id="contacto" name="contacto" />
          <br />
          <label>Anexo</label>
          <input type="file" id="anexo" name="anexo" />
        </form>
      )}
    </Formik>
  );
}
