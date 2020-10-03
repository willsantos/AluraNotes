import React, { Component } from 'react';

class FormularioCadastro extends Component{
    render(){
        return(
        <form action="">
            <input type="text" placeholder="titulo"/>
            <textarea name="" id="" cols="30" rows="10" placeholder="Escreve sua nota"></textarea>
            <button>criar Nota</button>
        </form>
      );
    }
}

export default FormularioCadastro;
