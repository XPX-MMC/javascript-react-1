import React from 'react'

const Tweet = ({message, color}) => {
  return (
    <div style= {{backgroundColor: color}}>{message}</div>
  )
}

export default Tweet
