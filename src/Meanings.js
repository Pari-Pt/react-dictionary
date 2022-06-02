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
            <div className="row" key={index}>
                <div className="col-lg">
                <ul>
                    <li>{definition.definition}</li>
                </ul>
                </div>
                <div className="col-lg">
                </div>
            </div>
            );
        })}
        <Synonyms synonyms={props.meanings.synonyms} />
    </div>
    </div>
    </div>
    );
}