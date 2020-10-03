import React from "react";
import { Component } from 'react';
import CardNota from "../CardNota";
import './style.css';
class ListaDeNotas extends Component{
    render(){
        return(
            <ul className="lista-notas">
                {Array.of("trabalho","trabalho","Estudo").map((categoria,index) =>{
                    return(
                        <li className="lista-notas_item" key={index}>
                            <div>{categoria}</div>
                            <CardNota/>
                        </li>
                    )
                })}
            </ul>
        );
    }
}

export default ListaDeNotas;