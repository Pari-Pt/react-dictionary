import React from "react";
import "./Meanings.css";

export default function Meanings(props){
    
console.log(props)
//console.log(props.meanings)
    return (
    <div className="Meanings">
    <div className="card mb-2">
    <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <h3>{props.meanings.partOfSpeech}</h3>
    <h6>Definition(s):</h6>
    
    {props.meanings.definitions.map(function(definition, index){
        return(
            <div className="definitions" key={index}>
                <ul>
                    <li>{definition.definition}</li>
                </ul>
            </div>
        );
    })}
    </div>
  </div>
    </div>
    );
}