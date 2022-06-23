import React from "react";
import "./Gallery.css";

export default function Gallery(props){    
    if (props.photos) {
        if (props.photos.length > 0) {
            return(
            <div className="Gallery">
                <div className="card mt-3">
                    <div className="card-body">
                        <div className="row">
                            {props.photos.map(function(photo, index) {
                                return(
                                    <div className="col-md-4" key={index}>
                                        <a href={photo.src.original} target="_blank" rel="noopener noreferrer"><img src={photo.src.medium} className="img-fluid" alt={photo.alt} title={photo.alt} /></a>
                                         </div>
                                    );
                                })}
    
                        </div>
                    </div>
                </div>
           </div>
        );
        } else {
            return (
                <div className="LAH">
                    <div className="card mt-3">
                        <div className="card-body">
                        <div>No images available</div>
                    </div>
                </div>
                </div>
            )
        }

    }}