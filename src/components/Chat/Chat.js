import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

let socket;


const Chat = ({ Location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const ENDPOINT = 'localhost:5000'

    useEffect(() => {
        const { name, room } = queryString.parse(Location.search);

        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);

        console.log(socket);
        });

    return (
        <h1>Chat</h1>
    )
}

export default Chat;