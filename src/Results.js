import React from "react";
import "./Results.css";

export default function Results(props){
    console.log(props)
    if (props.results) {
        let word = props.results.word;
    return(
        <div className="Results">
            <h2>{word}</h2>
            <h3>Definition</h3>
        </div>
    );
    } else {
        return null;
    }
}