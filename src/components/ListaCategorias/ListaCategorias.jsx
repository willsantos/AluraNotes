import React, { Component } from 'react';
import './style.css';

class ListaCategorias extends Component {

    _handleEventoInput(e){
         if(e.key === 'Enter'){
            let categoria = e.target.value;

            this.props.adicionarCategoria(categoria);
        } 
        console.log(e);
    }
    
    render() { 
        return (
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    {this.props.categorias.map((categoria,index)=>{
                        return(
                            <li key={index} className="lista-categorias_item">
                                {categoria}
                            </li>
                        );
                    })}
                   
                </ul>
                <input 
                    type="text"
                    className="lista-categorias_input"
                    placeholder="Adicionar Categoria"
                    onKeyUp={this._handleEventoInput.bind(this)}
                />
            </section>
         );
    }
}
 
export default ListaCategorias;