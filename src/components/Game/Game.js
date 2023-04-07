import React, { useState } from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import { GuessInput } from '../GuessInput/GuessInput'
import { GuessResults } from '../GuessResults/GuessResults'
import { checkGuess } from '../../game-helpers'
import { Banner } from '../Banner/Banner'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [guesses, setGuesses] = useState([])
  const won = guesses.at(-1)?.every(guess => guess.status === 'correct')
  const lost = guesses.length === 6 && !won
  const isOver = won || lost
  return <>
    <GuessResults guesses={guesses} />
    <GuessInput onGuess={guess => setGuesses([...guesses, checkGuess(guess, answer)])} isOver={isOver} />
    {won && <Banner type="happy"><strong>Congratulations!</strong> Got it in <strong>{guesses.length} guesses</strong>.</Banner>}
    {lost && <Banner type="sad">Sorry, the correct answer is <strong>{answer}</strong>.</Banner>}
  </>
}

export default Game
