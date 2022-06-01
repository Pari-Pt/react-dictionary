import React from "react";

export default function Results(props){
    console.log(props)
    if (props.results) {
        let word = props.results.word;
    return(
        <div className="Results">
            <h2>{word}</h2>
        </div>
    );
    } else {
        return null;
    }
}