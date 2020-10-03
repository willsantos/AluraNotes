import React, { Component } from 'react';
import './style.css';
class FormularioCadastro extends Component{

    constructor(){
        super();
        this.titulo = "";
    }

    handleMudancaTitulo(evento){
        this.titulo=evento.target.value;
        console.log(this.titulo)
    }
    render(){
        return(
        <form className="form-cadastro">
            <input 
                type="text" 
                placeholder="titulo"
                className="form-cadastro_input"
                onChange={this.handleMudancaTitulo.bind(this)}   
            />
            <textarea
                rows = "15" 
                placeholder="Escreve sua nota"
                className="form-cadastro_input"
            />
            <button className="form-cadastro_input form-cadastro_submit">
                criar Nota
            </button>
        </form>
      );
    }
}

export default FormularioCadastro;
