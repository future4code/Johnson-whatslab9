import React from "react";
import "./App.css";
import styled from "styled-components";

const CardContainer = styled.div`
  padding: 8px;
  color: black;
`;

const FormContainer = styled.div`
  display: flex;
`;


const DivPai = styled.div `
  border: 1px solid rgb(0, 0, 0);
  height: 500px;
  width: 600px;
  background-color: #ffffff;
  `;



export default class App extends React.Component {
  state = {
    valorUsuario:"",
    valorNome: "",
    valorNumero: ""

  };

  onChangeNome = (event) => {
    this.setState({ valorNome: event.target.value });
  };

  onChangeNumero = (event) => {
    this.setState({ valorNumero: event.target.value });
  };


  onClickLimpar = () => {
    console.log("Nome", this.state.valorNome);
    console.log("Número", this.state.valorNumero);
   

    this.setState({
      valorUsuario:"",
      valorNome: "",
      valorNumero: "",


    });
  };


  render() {

const nome = this.props.nome.toLowerCase()
        if (nome === "eu") {
            return (
                <div>{this.props.conteudo}</div>
						//Quando o nome do usuário for "eu", o balão 
						//só vai mostrar o conteúdo da mensagem
            )
        } else {
            return (
                <div>
                <div>{this.props.nome}></div>
                <div>{this.props.conteudo}</div>
                </div>

    return (
      <DivPai>
        <CardContainer>
          <p> {this.state.valorNome}</p>
          <p> {this.state.valorNumero}</p>
          <p> {this.state.valorUsuario}</p>
        </CardContainer>
        <FormContainer>
          <label>
            Nome:
            <input value={this.state.valorNome} onChange={this.onChangeNome} />
          </label>
          <label>
            <input
              placeholder = "Digite sua mensagem"
              value={this.state.valorNumero}
              onChange={this.onChangeNumero}
            />
          </label>
          <button onClick={this.onClickLimpar}>Enviar</button>
        </FormContainer>
        
       
    
      </DivPai>
    );
  }
}

