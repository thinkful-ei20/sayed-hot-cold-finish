import React from 'react';

import './guess-form.css';

export default class GuessForm extends React.Component {

  onSubmit(event) {
    event.preventDefault();
    if (this.props.onGuess) {
      const value = this.input.value;
      this.props.onGuess(value);
    }
    this.input.value = '';

  }

  render () {
    return (
      <form onSubmit={event => this.onSubmit(event)}>
        <input type="text" name="userGuess" id="userGuess"
          className="text" maxLength="3" autoComplete="off"
          placeholder="Enter your Guess" required 
          ref={input => (this.input = input)}
        />
        <input 
          type="submit" 
          id="guessButton" 
          className="button" 
          name="submit" 
          value="Guess"
        />
      </form>
    );
  }
}

