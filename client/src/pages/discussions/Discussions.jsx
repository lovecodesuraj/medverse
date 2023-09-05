import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Button,Stack,Typography } from '@mui/material';

const Discussions = ({ socket }) => {
  const {_id} = useParams();
  const [messages, setMessages] = useState(["hey","hello"]);
  const [message, setMessage] = useState("");
  const send = async () =>  {
    await socket.emit("sendMessage", {room:_id,text:message});
  }
  const handleChange = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  }
  useEffect(() => {
    socket.emit("joinRoom", _id);
    socket.on("recieveMessage", (data) => {
      console.log({data});
      setMessages([...messages, data.text])
    })
  }, [socket, _id])
  return (<>
    helllo i am discussion
    <Stack > 

        {
          messages.map((message) =><Typography>{message}</Typography>)
        }

    </Stack>
    <input type="text" value={message} placeholder='message' onChange={handleChange} />
    <Button onClick={send}>send</Button>
  </>
  )
}

export default Discussions