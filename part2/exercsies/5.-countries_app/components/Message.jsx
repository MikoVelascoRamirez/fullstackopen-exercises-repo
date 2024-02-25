import React from 'react'

const Message = ({msg, color}) => {

  const messageStyle = {
    color: !color ? 'black' : 'white',
    width: 'fit-content',
    fontSize: 18,
    fontFamily: 'Helvetica',
    paddingBlock: 10,
    paddingInline: 8,
    borderRadius: 3,
    backgroundColor: color ?? 'white'
  }

  return (
    <p style={messageStyle}>{msg}</p>
  )
}

export default Message