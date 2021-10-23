//Necessary import statements
import "./App.css";
import axios from "axios";
import React, { useState } from "react";

//The App function is the main output function which all the main code is stored in
// in a more complex application may have multiple components used together
function App() {
  //initialize const where we will store object as null

  //Call api linke (gets new object) sets Doggo to new object

  //Handle getting more info from api for the hover

  //If doggo is not updated (the button has not been clicked) return no image
  if (true) {
    //replace
    return (
      <div class="main">
        <p class="title">CODEBASE API DEMO</p>
        {/* when button is called called url function */}
        <button class="button">Gimme Doggies</button>
      </div>
    );
  }
  //if the doggo is updated render the image and the hover component
  else {
    return (
      <div class="main">
        <p class="title-with-image">CODEBASE API DEMO</p>
        <div class="container">{/* Render image from api */}</div>
        <button class="button-with-image">Gimme Doggies</button>
      </div>
    );
  }
}
//exports the app
export default App;
