import React from "react";

export default function Synonyms(props){
    if (props.synonyms.length){
        return (
            <div className="Synonyms">
                <h6>Synonym(s):</h6>
                {props.synonyms.map(function(synonym, index){
                    return(
                        <span key={index} className="synonym border">{synonym}</span>
                    )
                })}
                    </div>
        );
                } else {
                    return null;
                }
    }
