import { range } from '../../utils'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import { Guess } from '../Guess/Guess'

export function GuessResults({ guesses }) {
  return <div className="guess-results">
    {
      range(0, NUM_OF_GUESSES_ALLOWED).map((row) => (
        <Guess guess={guesses[row]} key={row} />
      ))
    }
  </div>
}
