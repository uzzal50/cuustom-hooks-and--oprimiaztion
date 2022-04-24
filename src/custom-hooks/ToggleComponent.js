import React, { useState } from 'react'
import UseToggle from './UseToggle'

const ToggleComponent = () => {
  const [value, toggleValue] = UseToggle(false)

  return (
    <div>
      <h2>{value.toString()}</h2>
      <button onClick={toggleValue}>Toggle</button>
      <button onClick={() => toggleValue(true)}>True</button>
      <button onClick={() => toggleValue(false)}>False</button>
    </div>
  )
}

export default ToggleComponent
