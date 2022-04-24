import React, { useState } from 'react'
import UsePrevious from './UsePrevious'

const PreviousComponent = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('john')
  const previousCount = UsePrevious(count)
  return (
    <div>
      <div>count- {count}</div>
      <div>previousCount- {previousCount}</div>
      <div>{name}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setName('Harry')}>Change Name</button>
    </div>
  )
}

export default PreviousComponent
