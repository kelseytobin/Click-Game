import React, { Component } from "react";

import NavBar from "./components/NavBar/NavBar.js";
import Wrapper from"./components/Wrapper/Wrapper.js";
import Title from "./components/Title/Title.js";
import AuthorCard from "./components/AuthorCard";
import authors from "./authors.json";

class App extends Component {
  constructor() {
    super();
    //set this.state to the authors json array, create score key values
    this.state = {
      authors: authors,
      correctGuess: true,
      score: 0,
      maxScore: 14,
      topScore: 0,
      game: "Clicky Game",
      message: "Click an Image to Begin"
    };
  }

  //create function to handle user clicks and pass correct or incorrect click functions through
  handleClick = id => {
    const authorCard = this.state.cards;
    const clickedCard = authorCard.filter(card => card.id === id);

    if(!clickedCard[0].clicked) {
      clickedCard[0].clicked= true;
      this.handleRightClick();
      this.randomizeAuthors(authorCard);
      this.setState({authorCard});
    } else {
      this.handleWrongClick();
    }
  };

  //create function to redistribute images in random order every time user clicks
  randomizeAuthors = images => {
    images.sort((a,b) => {
      return 0.5 - Math.random();
    });
  };

  //create function to handle correct user guesses and add to score
  handleRightClick = () => {
    this.setState({correctGuess: true});
    if(this.state.score + 1 > this.state.topScore) {
      this.setState({
        score: this.state.score + 1,
        message: "You Win!",
        messageClass: "correct"
      });
    }
  };

  //create function to handle incorrect user guesses and call to reset game
  handleWrongClick = () => {
    this.setState({
      message: "Uh oh! Click to play again!",
      correctGuess: false
    });
    this.resetGame();
  };

  //create function to reset the entire game
  resetGame = id => {
    const authorCard = this.state.authors;
    for (let i = 0; i < authorCard.length; i++) {
      authorCard[i].clicked = false;
    }
    this.setState({ score: 0 });
  };

  //map over this.state.authors and render an AuthorCard component for each author object
    render() {
      const {game, message, score, authors, topScore} = this.state;
      return (
        <React.Fragment>
          <NavBar 
            className="row"
            game={game}
            message={message}
            score={score}
            topScore={topScore}
          />

          <Title />

          <div>
            <Wrapper>
              {authors.map(({id, image, clicked}) => (
                <AuthorCard
                  id={id}
                  key={id}
                  image={image}
                  clicked={clicked}
                  clickHandler={this.handleClick}
                />
              ))}
            </Wrapper>
          </div>
        </React.Fragment>
      );
    }
}

export default App;
