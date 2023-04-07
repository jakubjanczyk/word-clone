import { range } from '../../utils'

export function Guess({guess}) {
  return (
    <p className="guess">
      {
        range(0, 5).map((column) => (
          <span className="cell" key={column}>{guess?.[column] || ''}</span>
        ))
      }
    </p>
  )
}
