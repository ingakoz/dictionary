import React from "react";

export default function Meaning(props) {
    return (
        <div className="Meaning">
        <h3> {props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function(definition, index) {
            return(
                <div key={index}>
                    <p>
                    {definition.definition}
                    <br />
                    {definition.example}
                    <br />
                    {definition.synonyms}
                    </p>
                    </div>
            );
            
        })}
        <p>Definition: {props.meaning.definitions[0].definition}</p>
        <p>Example: {props.meaning.definitions[0].example}</p>
        <p>Synonyms: {props.meaning.definitions[0].synonyms}</p>
        </div>
    )
    
} 