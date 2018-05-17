import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guesses: [],
      answer: Math.round(Math.random() * 100) + 1,
      feedback: 'Make your guess!',
      modal: false
    };
  }

  toggleModal(modal) {
    this.setState({
      modal
    });
  }
  
  newGame() {
    this.setState({
      guesses: [],
      answer: Math.round(Math.random() * 100) + 1,
      feedback: 'Make your guess!',
      modal: false
    });
  }

  onGuess(guess) {
    guess = parseInt(guess, 10);
    if (isNaN(guess)) {
      this.setState({ feedback: 'Please enter a valid number' });
      return;
    }
  
    const difference = Math.abs(guess - this.state.answer);
  
    let feedback;
    if (difference >= 50) {
      feedback = 'You\'re Ice Cold...';
    } else if (difference >= 30) {
      feedback = 'You\'re Cold...';
    } else if (difference >= 10) {
      feedback = 'You\'re Warm.';
    } else if (difference >= 1) {
      feedback = 'You\'re Hot!';
    } else {
      feedback = 'You got it!';
    }

    this.setState({
      feedback,
      guesses: [...this.state.guesses, guess],
      answer: this.state.answer
    });
  }

  render() {
    return (
      <div>
        <Header newGame={() => this.newGame()} modal={this.state.modal} toggleModal={modal => this.toggleModal(modal)}/>
        <GuessSection feedback={this.state.feedback} onGuess={guess => this.onGuess(guess)} />
        <GuessCount count={this.state.guesses.length} />
        <GuessList guesses={this.state.guesses} />
      </div>
    );
  }
}
