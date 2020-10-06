import React from 'react';
import { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeNotas from './components/ListaDeNotas';
import ListaCategorias from './components/ListaCategorias';
import './assets/App.css';
import './assets/index.css';
class App extends Component {

  constructor(){
    super();
    this.state = {
      notas:[],
      categorias:["trabalho","Diversao"]
    };
  }

  criarNota(titulo,texto){
    const novaNota = {titulo, texto};
    const novoArrayNotas = [...this.state.notas,novaNota];
    const novoEstado = {
      notas:novoArrayNotas
    };
    this.setState(novoEstado);
  }

  deletarNota(index){
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index,1);
    this.setState({notas:arrayNotas});
    console.log('deletar Nota');
  }

  adicionarCategoria(categoria){
    const novoArrayCategorias = [...this.state.categorias, categoria];
    const novoEstado = {...this.state,categorias:novoArrayCategorias};
    this.setState(novoEstado);
  }
  render(){
    return (
      <section className="conteudo">
        <h1>Notes&nbsp;&nbsp;</h1>
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <main> 
        <ListaCategorias
          adicionarCategoria={this.adicionarCategoria.bind(this)}
          categorias={this.state.categorias}
        />
        <ListaDeNotas 
          notas={this.state.notas} 
          apagarNota={this.deletarNota.bind(this)}
        />
        </main>
          

      </section>
      
    );


  }
}

export default App;
