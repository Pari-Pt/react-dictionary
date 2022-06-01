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
            {props.results.meanings.map(function (meanings, index){
                return ( <div className="meanings" key={index}>
                    <Meanings meanings={meanings} />
                </div>)
            })}

        </div>
    );
    } else {
        return null;
    }
}