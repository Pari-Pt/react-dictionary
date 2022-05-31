import React, {useState} from "react";
import "./DictionarySearch.css";

export default function DictionarySearch(){
    
    let [keyword, setKeyword] = useState("");

    function handleChanges(event){
        setKeyword(event.target.value)
    }
    
    
    function search(event){
        event.preventDefault();
        alert(keyword);
    }


    return (
        <div className="DictionarySearch">
            <form onSubmit={search}>
                <input type="search" onChange={handleChanges} className="search-engine" placeholder="Search for a word..." />
                <input type="submit" className="search-submit-btn" value="🔎Go!" />
            </form>
            
        </div>);
}