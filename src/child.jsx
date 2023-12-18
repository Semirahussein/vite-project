import React from 'react'

export const child = ({GenerateRandomNumber}) => {
  return (
    <div>
        <button onClick={() => GenerateRandomNumber}>
        generate</button>
        </div>
  )
}
