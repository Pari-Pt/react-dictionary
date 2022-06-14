import React, {useState} from "react";
import axios from "axios";
import Results from "./Results.js";
import "./DictionarySearch.css";

export default function DictionarySearch(props){
    
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);


    function handleChanges(event){
        setKeyword(event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();
        if (keyword) {
            search();
        } else {
            alert("Please submit a word")
        }
    }

    function search(){
        // API doc source: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleResponse(response){
        setResults(response.data[0]);
    }
    
    function load(){
        setLoaded(true);
        search();
    }

if (loaded){
    return (
        <div className="DictionarySearch">
            <section>
            <form onSubmit={handleSubmit}>
                <input type="search" onChange={handleChanges} className="search-engine rounded" defaultValue={props.defaultKeyword} />
                <input type="submit" className="search-submit-btn rounded ms-2" value="🔎Go!" />
            </form>
            <em>Suggestions: transformation, cheerful, impart, abundance</em>
            </section>
            <Results results={results}/>
            
        </div>);
} else {
    load();
    return("Loading...");
}
}