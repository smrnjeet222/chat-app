
import { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";

let socket;
const ENDPOINT = process.env.REACT_APP_BASE_URL;

const Chat = ({ location }) => {

  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  useEffect(() => {
    const { room, name } = queryString.parse(location.search)

    socket = io(ENDPOINT)

    setRoom(room);
    setName(name)

    socket.emit("join", { name, room }, ({ error }) => {
      alert(error)
    })

    console.log(socket);

    return () => {
      socket.emit('disconnect-client');

      socket.off();
    }
  }, [ENDPOINT, location.search])



  return <h1>Chat</h1>;
};

export default Chat;
