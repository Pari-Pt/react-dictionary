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
        axios.get(dictionaryUrl).then(handleDictionaryResponse)
        .catch(err => {
            if (err.response) {
                if (err.response) {
                    alert("Sorry! 😥 Something went wrong and we couldn't find this word, please try another.");
                    // client received an error response (5xx, 4xx)
                  } else if (err.request) {
                    alert("Sorry! 😥 Something went wrong and we couldn't find this word, please try another.");
                    // client never received a response, or request never left
                  } else {
                    alert("Sorry! 😥 Something went wrong and we couldn't find this word, please try another.");
                    // anything else
                  }
            }});


        let pexelsApiKey = "563492ad6f917000010000014bc34b5fea2944e8904c9fa6cb1b8fc8";
        let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9&orientation=landscape`;
        axios.get(pexelsUrl, {
            headers: {Authorization : `Bearer ${pexelsApiKey}`}}).then(handlePexelsResponse);
    }
    

    function handleDictionaryResponse(response){
        console.log(response);
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
                <input type="search" onChange={handleChanges} className="SearchEngine rounded" defaultValue={props.defaultKeyword} />
                <input type="submit" className="SearchSubmitBtn rounded ms-2" value="🔎Go!" />
                <div className="SearchSuggestions">Suggestions: cheerful, wonder, abundance</div>

            </form>
            </section>
                <Results results={results}/>
                <Gallery photos={photos} />
        </div>);
} else {
    load();
    return("Loading...");
}
}