import React from "react";
import "./Phonetics.css";
import audioIcon from "./images/audio-icon.svg";

export default function Phonetics(props){
    if (props.phonetics){
    if (props.phonetics[0].audio){
        return (

        <span className="Phonetics">
            <span><audio src={props.phonetics[0].audio} className="me-4 mt-4" type="audio/mp3" controls><img src= {audioIcon} className="audio-icon" width="30px" alt="Audio Icon"/></audio></span>
            <div className="phonetics-text">{props.phonetics[0].text}</div>
        </span>
    )
        } else {
            if (props.phonetics[1].audio) {
                return (

            <span className="Phonetics">
                <span><audio src={props.phonetics[1].audio} className="me-4 mt-3" type="audio/mp3" controls><img src= {audioIcon} className="audio-icon" width="30px" alt="Audio Icon"/></audio></span>
                <div className="phonetics-text">{props.phonetics[1].text}</div>
            </span>
        )
            } else {
                    if (props.phonetics[2].audio) {
                        return (
                            
                    <span className="Phonetics">
                        <span><audio src={props.phonetics[2].audio} className="me-4 mt-3" type="audio/mp3" controls><img src= {audioIcon} className="audio-icon" width="30px" alt="Audio Icon"/></audio></span>
                        <div className="phonetics-text">{props.phonetics[2].text}</div>
                    </span>
                )
            } else {
           return null;       
            }}
        }
    } else {
        return (
            <div className="Phonetics"><em>Phonetics not available</em></div>
        )
    }  
}
