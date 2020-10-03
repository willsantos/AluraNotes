import React from 'react';
import { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeNotas from './components/ListaDeNotas';

class App extends Component {
  render(){
    return (
      <>
      <h1>Meu App</h1>
      <FormularioCadastro/>
      <ListaDeNotas/>
      </>
    );


  }
}

export default App;
