import React from 'react'

const Notification = ({message, colorStyle}) => {

    const notificationStyle = {
        color: colorStyle,
        backgroundColor: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    return (
        !message 
            ? null 
            : <div style={notificationStyle}>{message}</div>
    );
}

export default Notification