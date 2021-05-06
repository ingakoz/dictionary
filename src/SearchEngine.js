import React, {useState} from "react";
import "./SearchEngine.css";
import axios from "axios";

export default function SearchEngine(){
    const [keyword, setKeyword] = useState("");

    function handleSubmit(response) {
        console.log(response)
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

        </div>
        
    );

  

    }
