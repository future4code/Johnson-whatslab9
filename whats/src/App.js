import React from 'react';
import styled from 'styled-components'
import Mensagem from './Components/Mensagem';

const ContainerPai= styled.div`
display: flex;
justify-content: center;
margin-left: 450px;
align-items: center;
background-color: #fefefe;
height: 100vh;
width: 1000px;

`


const ContainerChat = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 95%;
  border: 1px solid;
  background-color: #e5ddd5;
`

const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  color: black;
  height: 95%;
  padding: 10px;
`
const ContainerCaixa = styled.div`

 border-radius: 0.5em;

 font-weight: 450;
 line-height: 19px;

 box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);

 max-width: 60%;
 min-width: 8%;

 margin-bottom: 1em;
 padding: 6px 7px 8px 9px;

 word-wrap: break-word;

 background: #DDF7C8;

 width: 100vw;
`
const ContainerCaixa2 = styled.div`
 padding: 6px 7px 8px 9px;

 line-height: 19px;

 font-weight: 450;
 line-height: 1.3;

 box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
 border-radius: 0.5em;

 max-width: 60%;
 min-width: 8%;
 
 margin-bottom: 1em;

 word-wrap: break-word;

 width: 10vw;
 
`

const ContainerNome = styled.div`
 color: darkgreen;
 font-size: 0.8em;
 font-weight: 600;
 margin-bottom: 0.2em;
`

export default class App extends React.Component {
  state = {
    mensagens: [
     
    ]
  }

  listaMensagem = () => 
    this.state.mensagens.map((mensagem,index) => {
      if(mensagem.usuario === "eu"){
        return (<ContainerCaixa2 key={index}><div>{mensagem.mensagem}</div></ContainerCaixa2>)
      }else{
      return (<ContainerCaixa key={index}><ContainerNome>{mensagem.usuario}</ContainerNome><div>{mensagem.mensagem}</div></ContainerCaixa>)
    }})
      
    handleUpdate = (newMessages) => {
      this.setState({mensagens:newMessages})
    }

  render() {
    return (

      <ContainerPai>

        <ContainerChat>
          <ContainerText>
            {this.listaMensagem()}
          </ContainerText>
          <Mensagem array={this.state.mensagens}   updateState={this.handleUpdate}/>
        </ContainerChat>

      </ContainerPai>

    )
  }
}
