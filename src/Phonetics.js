import React from "react";

import ReactAudioPlayer from 'react-audio-player';

export default function Phonetics(props) {
    
        return (
           <div className="Phonetic">
               <div className="PhoneticWord">
               {props.phonetic.text}
                  
             
               <br />
               
               </div>
               <ReactAudioPlayer
  src={props.phonetic.audio}
  onListen
  controls
/>
             
           </div>
        );
    }