import React, { useState } from 'react'

export default function UseToggle(defaultValue) {
  const [value, setValue] = useState(defaultValue)

  function toggleValue(ujol) {
    setValue((currentValue) =>
      typeof ujol === 'boolean' ? ujol : !currentValue
    )
  }
  return [value, toggleValue]
}
