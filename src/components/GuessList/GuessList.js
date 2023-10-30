import React from 'react';

function GuessList({guesses}) {
  return (
    <div className="guess-results">
      {guesses.map(({label, id}) => (
        <p
          key={id}
          className="guess"
        >{label}</p>
      ))}
    </div>
  );
}

export default GuessList;
