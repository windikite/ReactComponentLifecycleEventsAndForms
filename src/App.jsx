import React, { useState } from "react";
import Importer from "./components/Importer.jsx";
import CharacterList from "./components/CharacterList.jsx";
import CharacterDetails from "./components/CharacterDetails.jsx";
import {apiKey} from "./Keys.jsx";

const App = () => {
  // declare variables
  let defaultUrl = `https://gateway.marvel.com/v1/public/characters`;
  let defaultCharacterId = "1010354";
  
  // initialize roster url and data
  const [apiUrl, setApiUrl] = useState(defaultUrl);
  const [rosterData, setRosterData] = useState([]);
  
  // initialize character url and data
  const [characterUrl, setCharacterUrl] = useState(`${defaultUrl}/${defaultCharacterId}`);
  const [characterData, setCharacterData] = useState([]);
  
  // handler function to update roster data
  function updateRosterData(data){
    setRosterData(data)
  }

  // handler function to update character url on image click
  function updateCharacterUrl(url){
    let id = url.slice(url.lastIndexOf("/")+1)
    setCharacterUrl(`${defaultUrl}/${id}`)
  }

  // handler function to update character data on api call
  function updateCharacterData(data){
    setCharacterData(data.data.results[0])
  }
  
  return (
    <div style={{backgroundColor: "black", 
                 maxWidth: "1050px", 
                 marginLeft: "auto", 
                 marginRight: "auto"}}>
      {/* importer for roster */}
        <Importer
          url={`${apiUrl}${apiKey}`}
          setFetchedData={updateRosterData}
        />
      {/* importer for individual character data */}
        <Importer
          url={`${characterUrl}${apiKey}`}
          setFetchedData={updateCharacterData}
        />
        <CharacterList
          characterData={rosterData}
          setCharacterUrl={updateCharacterUrl}
        />
        <CharacterDetails
          characterData={characterData}
        />
    </div>
  );
};


export default App;
