import React from 'react'

const Clock = ({timeInSeconds}) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  return (
    <div>
      <span>{minutes < 10 ? "0" + minutes : minutes}</span>:
      <span>{seconds < 10 ? "0" + seconds : seconds}</span>
    </div>
  )
}

export default Clock;