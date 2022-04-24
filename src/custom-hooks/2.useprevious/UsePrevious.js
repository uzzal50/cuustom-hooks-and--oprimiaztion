import React from 'react'

export default function UsePrevious(value) {
  const currentRef = React.useRef(value)
  const previousRef = React.useRef()
  console.log(value)
  console.log(currentRef)
  console.log(previousRef)

  //!if the value is changed
  if (currentRef.current !== value) {
    //*purano count ko value chai previosRef ma haleko
    previousRef.current = currentRef.current
    //* naya count ko value change gareko
    currentRef.current = value
  }
  return previousRef.current
}
