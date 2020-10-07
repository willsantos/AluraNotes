import React from 'react';
import { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeNotas from './components/ListaDeNotas';
import ListaCategorias from './components/ListaCategorias';
import Categorias from './dados/Categorias';
import ArrayDeNotas from './dados/Notas';
import './assets/App.css';
import './assets/index.css';
class App extends Component {

  constructor(){
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }
  
  render(){
    return (
      <section className="conteudo">
        <h1>Notes&nbsp;&nbsp;</h1>
        <FormularioCadastro 
          categorias={this.categorias}
          criarNota={this.notas.criarNota.bind(this.notas)}/>
        <main className="conteudo-principal"> 
        <ListaCategorias
          adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
          categorias={this.categorias}
        />

        <ListaDeNotas 
          apagarNota={this.notas.apagarNota.bind(this.notas)}
          notas={this.notas} 
        />
        </main>
          

      </section>
      
    );


  }
}

export default App;
