import React, { useEffect, useRef, useState } from 'react';


import socketio from "socket.io-client";




export const socket = socketio.connect('43.228.86.6:3030');
export const SocketContext = React.createContext();





function ChatRoom(props) {
    const { text, uid, photoURL } = props.message;

    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

    return (<>
        <div className={`message ${messageClass}`}>
            <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
            <p>{text}</p>
        </div>
    </>)
}

export default ChatRoom;