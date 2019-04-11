import React, { Component } from "react";

import NavBar from "./components/NavBar/NavBar.js";
import Wrapper from"./components/Wrapper/Wrapper.js";
import Title from "./components/Title/Title.js";
import AuthorCard from "./components/AuthorCard";
import authors from "./authors.json";

class App extends Component {
  //set this.state to the authors json array
  state = {
    authors
  };

  //map over this.state.authors and render an AuthorCard component for each author object
    render() {
      return (
        <React.Fragment>
          <NavBar />
          <Title />
          <div>
            <Wrapper>
              {this.state.authors.map(author => (
                <AuthorCard
                  id={author.id}
                  key={author.id}
                  name={author.name}
                  image={author.image}
                  books={author.books}
                />
              ))}
            </Wrapper>
          </div>
        </React.Fragment>
      );
    }
}

export default App;
