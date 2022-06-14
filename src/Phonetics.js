import React from "react";
import audioIcon from "./images/audio-icon.svg";

export default function Phonetics(props){
    console.log(props)
    if (props.phonetics[0].audio){
        return (
        <div className="Phonetics">
            <a href={props.phonetics[0].audio} className="me-4" target="_blank" rel="noreferrer" alt="Audio"><img src= {audioIcon} className="audio-icon" width="30px" alt="Audio Icon"/></a>
            <span>{props.phonetics[0].text}</span>
        </div>
    )
        } else {
            if (props.phonetics[1].audio) {
                return (
            <div className="Test">
                <a href={props.phonetics[1].audio} className="me-4" target="_blank" rel="noreferrer" alt="Audio"><img src= {audioIcon} className="audio-icon" width="30px" alt="Audio Icon"/></a>
                <span>{props.phonetics[1].text}</span>
            </div>
        )
            } else {
            return null;
        }
    }   
}
