import React from 'react'
import UseArray from './UseArray'

const UseArrayComponent = () => {
  const {
    pushIntoArray,
    updateArray,
    removeFromArray,
    filterFromArray,
    clearArray,
    array,
  } = UseArray([1, 2, 5, 7, 8, 9, 10])
  return (
    <div>
      <h3>Array - {array.join(',  ')}</h3>
      <div>
        <button onClick={() => pushIntoArray(16)}>Push Into array</button>
      </div>
      <div>
        <button onClick={() => updateArray(3, 100)}>
          upate the array with index 3 with new value
        </button>
      </div>

      <div>
        <button onClick={() => removeFromArray(3)}>Remove from Array</button>
      </div>
      <div>
        <button onClick={() => filterFromArray((n) => n <= 5)}>
          keep Number less than 5
        </button>
      </div>
      <div>
        <button onClick={clearArray}>Clear All</button>
      </div>
    </div>
  )
}

export default UseArrayComponent
