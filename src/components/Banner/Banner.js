export function Banner({type, children}) {
  return (
    <div className={`${type} banner`}>
      <p>
        {children}
      </p>
    </div>
  )
}
