import { useState } from 'react'

export function GuessInput({onGuess}) {
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onGuess(input)
    setInput('')
  }
  const handleChange = e => setInput(e.target.value.toUpperCase())

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input type="text" id="guess-input" value={input} onChange={handleChange} pattern={'.{5,5}'} maxLength={5}/>
    </form>
  )
}
