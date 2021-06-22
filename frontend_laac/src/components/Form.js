import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      age: 0,
      story: "",
      contact: "",
    };
  }

  render() {
    const handleSubmit = (evt) => {
      evt.preventDefault();

      console.log(this.state);
    };

    const handleChange = (evt) => {
      evt.preventDefault();
    };

    return (
      <form onSubmit={(evt) => handleSubmit(evt)}>
        <div className="input-row">
          <label htmlFor="name">Nome :</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder=" Escreva o seu nome"
            pattern="[a-zA-Z]+"
            onChange={(evt) => this.setState({ name: evt.target.value })}
          ></input>
        </div>
        <p></p>
        <div className="input-row">
          <label htmlFor="age">Idade :</label>
          <input
            type="number"
            name="age"
            id="age"
            placeholder="Escreva a sua idade"
            pattern="[0-9]+"
            max="100"
            onChange={(evt) => this.setState({ age: evt.target.value })}
          ></input>
        </div>
        <p></p>
        <div className="input-row">
          <label htmlFor="story">Interação :</label>
          <input
            type="text"
            name="story"
            id="story"
            placeholder="Escreva a sua história"
            onChange={(evt) => this.setState({ story: evt.target.value })}
          ></input>
        </div>
        <p></p>
        <div className="input-row">
          <label htmlFor="contact">Contacto :</label>
          <input
            type="text"
            name="contact"
            id="contact"
            placeholder="+351123456789"
            pattern="^\+(?:[0-9]●?){6,14}[0-9]$"
            onChange={(evt) => this.setState({ contact: evt.target.value })}
          ></input>
        </div>
        <div className="input-row">
          <label htmlFor="anexo">Anexo </label>
          <input
            type="File"
            name="anexo"
            id="anexo"
            onChange={(evt) => handleChange(evt)}
          ></input>
        </div>
        <p></p>
        <button type="submit">Submeter </button>
      </form>
    );
  }
}
