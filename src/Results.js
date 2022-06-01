import React from "react";
import Meanings from "./Meanings.js";
import "./Results.css";

export default function Results(props){
    console.log(props)
    if (props.results) {
        let word = props.results.word;
    return(
        <div className="Results">
            <h2>{word}</h2>
            <h3>Definition</h3>
            {props.results.meanings.map(function (definitions, index){
                return ( <div className="definitions" key={index}>
                    <Meanings data={definitions} />
                </div>)
            })}

        </div>
    );
    } else {
        return null;
    }
}