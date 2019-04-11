import React, { Component } from "react";

import NavBar from "./components/NavBar/NavBar.js";
import Wrapper from"./components/Wrapper/Wrapper.js";
import Title from "./components/Title/Title.js";

class App extends Component {
    render() {
      return (
        <React.Fragment>

        <NavBar />
        
        
          <Title />
        
      
       
       
        </React.Fragment>

        
           
    );
  }
}

export default App;
