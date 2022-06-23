import React from "react";
import "./Synonyms.css";

export default function Synonyms(props){
    
    function copyText(event){
        let copiedText =event.target.innerHTML;
        navigator.clipboard.writeText(copiedText);
        alert(`Copied "${copiedText}"`)
    }
    if (props.synonyms.length){
        return (
            <div className="Synonyms">
                <h6>Synonym(s):</h6>
                {props.synonyms.map(function(synonym, index){
                    return(
                        <span key={index} className="Synonym m-1 btn border rounded" onClick={copyText}>{synonym}</span>
                    )
                })}
                    </div>
        );
                } else {
                    return null;
                }
    }
