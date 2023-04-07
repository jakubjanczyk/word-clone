import { range } from '../../utils'

export function Guess({guess}) {
  return (
    <p className="guess">
      {
        range(0, 5).map((column) => {
          const guessElement = guess?.[column]
          return (
            <span className={`cell ${guessElement?.status || ''}`} key={column}>{guessElement?.letter || ''}</span>
          )
        })
      }
    </p>
  )
}
