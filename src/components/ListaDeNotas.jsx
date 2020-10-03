import React from "react";
import { Component } from 'react';
import CardNota from "./CardNota";

class ListaDeNotas extends Component{
    render(){
        return(
            <ul>
                {Array.of("trabalho","trabalho","Estudo").map(categoria =>{
                    return(
                        <li>
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