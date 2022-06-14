import React from "react";
import "./Gallery.css";

export default function Gallery(props){
    console.log(props)
    if (props.photos) {
    return(
        <div className="Gallery">
            <div className="card mt-3">
                <div className="card-body">
        <img src={props.photos[0].src.medium} className="img-fluid"/>

                </div>
            </div>
       </div>
    );
    } else {
        return null;
    }
}