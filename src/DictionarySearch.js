import React from "react";
import "./DictionarySearch.css";

export default function DictionarySearch(){
    
    function search(event){
        event.preventDefault();
        alert("test");
    }

    return (
        <div className="DictionarySearch">
            <form onSubmit={search}>
                <input type="search" className="search-engine" placeholder="Search for a word..." />
                <input type="submit" className="search-submit-btn" value="🔎Go!" />
            </form>
            
        </div>);
}