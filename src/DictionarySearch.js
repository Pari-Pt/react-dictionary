import React, {useState} from "react";
import axios from "axios";
import Results from "./Results.js";
import "./DictionarySearch.css";

export default function DictionarySearch(){
    
    let [keyword, setKeyword] = useState("");

    function handleResponse(response){
        console.log(response);
    }
    
    
    function handleChanges(event){
        setKeyword(event.target.value)
    }
    
    
    function search(event){
        event.preventDefault();
        // API doc source: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse)
    }


    return (
        <div className="DictionarySearch">
            <form onSubmit={search}>
                <input type="search" onChange={handleChanges} className="search-engine" placeholder="Search for a word..." />
                <input type="submit" className="search-submit-btn" value="🔎Go!" />
            </form>
            <Results />
            
        </div>);
}