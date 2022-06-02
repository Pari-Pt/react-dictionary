import React from "react";
import "./Meanings.css";
import Synonyms from "./Synonyms.js";

export default function Meanings(props){
    
console.log(props)
console.log(props.meanings.synonyms)
    return (
    <div className="Meanings">
    <div class="card">
    <div class="card-body">
    
    <h3>{props.meanings.partOfSpeech}</h3>
    <h6>Definition(s):</h6>
    
    {props.meanings.definitions.map(function(definition, index){
        return(
            <div key={index}>
                <ul>
                    <li>{definition.definition}</li>
                </ul>
                    </div>
            );
        })}
        <Synonyms synonyms={props.meanings.synonyms} />
    </div>
    </div>
    </div>
    );
}