import React, { Component } from 'react';
import './style.css';
class FormularioCadastro extends Component{
    render(){
        return(
        <form className="form-cadastro">
            <input 
                type="text" 
                placeholder="titulo"
                className="form-cadastro_input"    
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
