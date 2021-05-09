import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
    return (
        <div className="Meaning">
        <h3> {props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function(definition, index) {
            return(
                <div key={index}>
                    <section className="Defined">
                    <h6> Definition </h6>
                    {definition.definition}
                    <br />
                    <h6> Example </h6>
                    {definition.example}
                    <br />
                    <div >
                    <h6> Synonyms </h6>
                    <Synonyms synonyms={definition.synonyms} />  
                    </div>              
                    </section>
                    <br />
                    <hr />
                    </div>
            );
            
        })}
        
       
        </div>
    )
    
} 