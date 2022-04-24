import React, { useState } from 'react'

export default function UseArray(initialValue) {
  const [array, setArray] = useState(initialValue)

  const pushIntoArray = (newValue) => {
    setArray((a) => [...a, newValue])
  }

  const updateArray = (index, newValue) => {
    setArray((a) => [
      ...a.slice(0, index),
      newValue,
      ...a.slice(index + 1, a.length),
    ])
  }

  const removeFromArray = (index) => {
    setArray((a) => [...a.slice(0, index), ...a.slice(index + 1, a.length)])
  }

  const filterFromArray = (callback) => {
    setArray((a) => a.filter(callback))
  }

  const clearArray = () => {
    setArray([])
  }

  return {
    array,
    pushIntoArray,
    updateArray,
    removeFromArray,
    filterFromArray,
    clearArray,
  }
}
