import React, { useState, useEffect } from "react";

const CharacterDetails = (props) => {
  // function to display the character data
  function displayCharacter(data){
    return <div style={{display: "flex"}}>
      <div style={{width: "50%", height: "600px", position: "relative"}}>
        {/* character name plate */}
        <h2
          style={{backgroundColor: "gold",
                  position: "absolute",
                  textAlign: "center",
                  left: "50%",
                  top: "10%",
                  transform: "translate(-50%, -50%)", 
                  width: "85%",
                  padding: "10px",
                  border: "solid 5px black"
                 }}
          >{data.name}</h2>
        <img 
          src={`${data.thumbnail.path}.${data.thumbnail.extension}`} 
          style={{height: "100%",
                  width: "100%",
                 objectFit: "cover"}}
          />
        {/* conditionally create description if there is text for it */}
        {(data.description != "") &&
        <p
          style={{backgroundColor: "gold",
                  position: "absolute",
                  left: "50%",
                  top: "85%",
                  transform: "translate(-50%, -50%)", 
                  width: "85%",
                  padding: "10px",
                  border: "solid 5px black"
                 }}
          >{data.description}</p>}
      </div>
      <div style={{width: "50%"}}>
        {/* list of comics */}
        <ul style={{listStyleType: "none", padding: "0px", marginTop: "0px"}}>
        {data.comics.items.map((x, i) => <li
                                      key={i}
                                      style={{width: "100%", 
                                             backgroundColor: "red", 
                                             border: "solid 2px black",
                                              color: "white",
                                              textShadow: "0 0 3px black, 0 0 5px black"
                                             }}
                                      ><strong>{x.name}</strong></li>)}
      </ul>
      </div>
    </div>
  }
  
  return <div style={{maxWidth: "1050px", backgroundColor: "black"}}>
    {/* conditionally render character data if it exists */}
    {props.characterData.name && displayCharacter(props.characterData)}
  </div>
}

export default CharacterDetails