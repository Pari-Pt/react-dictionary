import React from "react";
import audioIcon from "./images/audio-icon.svg";

export default function Phonetics(props){
    console.log(props)
    if (props.phoneticAudio){
        return (
        <div className="Phonetics">
        <a href={props.phoneticAudio} className="me-4" target="_blank" rel="noreferrer" alt="Audio"><img src= {audioIcon} className="audio-icon" width="30px" alt="Audio Icon"/></a>
        <span>{props.phoneticText}</span>
        </div>
    )
        } else {
            return null;
        }
}
