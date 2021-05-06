import React, {useState} from "react";
import "./SearchEngine.css";
import axios from "axios";
import Results from "./Results"

export default function SearchEngine(){
    const [keyword, setKeyword] = useState("");
    const[results, setResults] = useState (null);

    function handleSubmit(response) {
    setResults(response.data[0]);
    }

    function search(event) {
    event.preventDefault();


    let apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;


    axios.get(apiUrl).then(handleSubmit); 
         
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

        </div>
        
    );

  

    }
