import React from 'react';

function GuessInput({addGuess}) {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    addGuess(guess);
    setGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        maxLength="5"
        value={guess}
        required={true}
        onChange={(event) => {
          const newGuess = event.target.value.toUpperCase();

          setGuess(newGuess);
        }}
      />
    </form>
  );
}

export default GuessInput;
