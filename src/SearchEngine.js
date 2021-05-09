import React, {useState} from "react";
import "./SearchEngine.css";
import axios from "axios";
import Results from "./Results"
import Photos from "./Photos"

export default function SearchEngine(){
    const [keyword, setKeyword] = useState("");
    const[results, setResults] = useState (null);
    const [photos, setPhotos] = useState (null)

    function handleSubmit(response) {
    setResults(response.data[0]);
    }

    function handlePexel(response) {
        setPhotos(response.data.photos);
    }

    function search(event) {
    event.preventDefault();


    let apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;

    axios.get(apiUrl).then(handleSubmit); 
    


    let pexelKey= "563492ad6f917000010000016bedc653bd7543c786218076eeb52c10";
    let pexelUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=12`
   
    let headers = {Authorization : `Bearer ${pexelKey}`};

    axios.get(pexelUrl, { headers:headers })
    .then(handlePexel);
    }

    


    function handleKeyword(event) {
    setKeyword(event.target.value);
    }


    return (
        <div className="Dictionary">

            <form onSubmit={search}>
                <input type="search" placeholder="Type word" autoFocus={true} onChange={handleKeyword} />
                <input type="submit" value="Search" />
            </form>
            <Results results={results}/>
            <Photos photos={photos} />
        </div>
        
    );

  

}
