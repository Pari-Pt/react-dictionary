import React from "react";
import "./Meanings.css";

export default function Meanings(props){
    
console.log(props)
//console.log(props.meanings)
    return (
    <div className="Meanings">
    <h4>{props.meanings.partOfSpeech}</h4>
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
    );
}