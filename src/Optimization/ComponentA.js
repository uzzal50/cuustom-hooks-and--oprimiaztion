import React, { useState } from 'react'

function Swatch({ main, onclick }) {
  console.log('rendered - color')

  return (
    <>
      <div style={{ height: 100, width: 100, background: main.color }}></div>
    </>
  )
}

const MemoizedSwatch = React.memo(Swatch)

export const ComponentA = () => {
  console.log('comp rendereed')
  const [count, setCount] = useState(0)
  const [color, setColor] = useState('red')

  const main = React.useMemo(() => {
    return { color: color }
  }, [color])

  const onclick = React.useCallback(() => {
    console.log('onclick fallback')
  }, [color])

  return (
    <div>
      <h4>{count}</h4>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <button onClick={() => setColor(color === 'red' ? 'blue' : 'red')}>
        Change Color
      </button>

      <MemoizedSwatch main={main} onclick={onclick} />
    </div>
  )
}
