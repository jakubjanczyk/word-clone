import React, { useState } from 'react'

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { GuessInput } from '../GuessInput/GuessInput'
import { GuessResults } from '../GuessResults/GuessResults'
import { checkGuess } from '../../game-helpers'

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([])
  return <>
    <GuessResults guesses={guesses}/>
    <GuessInput onGuess={guess => setGuesses([...guesses, checkGuess(guess, answer)])}/>
  </>;
}

export default Game;
