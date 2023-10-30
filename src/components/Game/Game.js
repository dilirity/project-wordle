import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import GuessInput from '../GuessInput';
import GuessList from '../GuessList';
import GameOver from '../GameOver';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('running');

  function addGuess(guess) {
    const newGuesses = [
      ...guesses,
      guess,
    ];

    setGuesses(newGuesses);
    if ( answer === guess ) {
      setGameStatus('won');
    } else if ( newGuesses.length === NUM_OF_GUESSES_ALLOWED ) {
      setGameStatus('lost');
    }
  }

  return (
    <>
      <GuessList guesses={guesses} answer={answer} />
      <GuessInput addGuess={addGuess} disabled={gameStatus !== 'running'} />
      {gameStatus !== 'running' && <GameOver gameStatus={gameStatus} answer={answer} totalGuesses={guesses.length} />}
    </>
  );
}

export default Game;
