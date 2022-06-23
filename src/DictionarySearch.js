import React, {useState} from "react";
import axios from "axios";
import Gallery from "./Gallery.js";
import Results from "./Results.js";
import "./DictionarySearch.css";

export default function DictionarySearch(props){
    
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [photos, setPhotos] = useState(null);
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
        let dictionaryUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(dictionaryUrl).then(handleDictionaryResponse);

        let pexelsApiKey = "563492ad6f917000010000014bc34b5fea2944e8904c9fa6cb1b8fc8";
        let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9&orientation=landscape`;
        axios.get(pexelsUrl, {
            headers: {Authorization : `Bearer ${pexelsApiKey}`}}).then(handlePexelsResponse);
    }
    

    function handleDictionaryResponse(response){
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response){
        setPhotos(response.data.photos);
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
            <div className="search-suggestions"><em>Suggestions: cheerful, wonder, abundance</em></div>
            </section>
                <Results results={results}/>
                <Gallery photos={photos} />
        </div>);
} else {
    load();
    return("Loading...");
}
}