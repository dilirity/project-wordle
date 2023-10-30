import React from 'react';

function GameOver({ gameStatus, answer, totalGuesses }) {
  return (
    <div className={gameStatus ? 'happy banner' : 'sad banner'}>
      {gameStatus === 'won'
        ? (
          <p>
            <strong>Congratulations!</strong> Got it in
            {' '}
            <strong>{totalGuesses} guesses</strong>.
          </p>
        )
        : (
          <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
        )
      }
    </div>  
  );
}

export default GameOver;
