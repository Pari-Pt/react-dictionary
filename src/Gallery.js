import React from "react";
import "./Gallery.css";

export default function Gallery(props){
    console.log(props)
    if (props.photos) {

        return(
            <div className="Gallery">
                <div className="card mt-3">
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                            {props.photos.map(function(photo, index) {
                                return(
                                    <div className="row" key={index}>
                                        <a href={photo.src.original} target="_blank" rel="noopener noreferrer"><img src={photo.src.medium} className="img-fluid mb-3" alt={photo.alt} title={photo.alt} /></a>
                                         </div>
                                    );
                                })}
    
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        );
        
    } else {
        return (
            <div className="Gallery">
                <div className="card mt-3">
                    <div className="card-body">
                    <div>No images available</div>
                </div>
            </div>
            </div>
        );
    
    }
}