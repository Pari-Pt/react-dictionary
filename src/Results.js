import React from "react";
import Meanings from "./Meanings.js";
import "./Results.css";

export default function Results(props){
    console.log(props)
    if (props.results) {
        let word = props.results.word;
        let phonetic = props.results.phonetic;
    return(
        <div className="Results">
            <h2>👉 {word}</h2>
            <p>{phonetic}</p>
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