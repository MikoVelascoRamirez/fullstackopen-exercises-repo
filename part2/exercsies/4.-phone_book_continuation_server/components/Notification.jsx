import React from 'react'

const Notification = ({message}) => 
    !message 
        ? null 
        : <div className="message">{message}</div>

export default Notification