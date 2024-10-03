import React, { useState, useEffect } from "react";

const CharacterList = (props) => {
  // function to render data as a small card with character name and image
  function displayCard(data, key) {
    // if there is a ( in the name, remove it
    let shortName = data.name;
    let found = shortName.indexOf("(")
    if(found != -1){
      shortName = shortName.slice(0, found)
    }
    return <div 
      key={key}
      onClick={() => props.setCharacterUrl(data.resourceURI)}
      style={{
      position: "relative", 
      width: "100px", 
      height: "100px", 
      border: "solid 2px gold", 
      overflow: "hidden",
      marginTop: "0px",
      marginBottom: "0px"}}>
      {/* name plate */}
      <h3 style={{
        position: "absolute", 
        fontSize: "12px", 
        backgroundColor: "gold",
        borderRadius: "5px",
        padding: "2px",
        width: "90%",
        left: "50%",
        top: "75%",
        transform: "translate(-50%, -50%)",
        textAlign: "center"
      }}>{shortName}</h3>
      {/* image */}
      <img 
        src={`${data.thumbnail.path}.${data.thumbnail.extension}`} 
        style={{maxWidth: "100px", maxHeight: "100px", objectFit: "cover"}}
      />
    </div>
  }
  
  return <div style={{maxWidth: "1050px", display: "flex", flexWrap: "wrap", backgroundColor: "black"}}>
    {/* conditionally render display cards if the data exists */}
    {props.characterData.data && props.characterData.data.results.map((x, i) => displayCard(x, i))}
  </div>
}

export default CharacterList