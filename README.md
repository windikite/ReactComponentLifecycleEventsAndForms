My 44th assignment! With this, we're back to using the Marvel API but with much more knowledge about react to make something more comprehensive.

Assignment 1
1. Sign up for an API key: done!  
2. I created a functional component called CharacterList that displays a list of Marvel characters. Each is in the form of a tile image with the character's name on it.  
3. I next created a functional component CharacterDetail which will reflex information from selected characters. On click, it fetches the data for that character and updates the component with it.  
4. Both of these components are integrated into the main app and update dynamically, showing the relevant character when clicked on. I did, however, make a separate importer for the project as I had a particular design in mind that would handle all of the fetching in there. There are two instances of the importer, one for the roster api call, and one for the individual character.

Setup should be easy, just install the dependencies including axios and do npm run dev!