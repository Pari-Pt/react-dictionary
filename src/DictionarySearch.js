import React from "react";
import "./DictionarySearch.css";

export default function DictionarySearch(){
    return (
        <div className="DictionarySearch">
            <form>
                <input type="search" className="search-engine" placeholder="Search for a word..." />
                <input type="submit" className="search-submit-btn" value="🔎Go!" />
            </form>
            
        </div>);
}