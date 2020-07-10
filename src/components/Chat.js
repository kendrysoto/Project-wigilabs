import React, { useState } from 'react';
import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';
import { useChat } from './usechat';
import { db } from './Firebase';


const Chat = () => {
    const [message, setMessage] = useState('');
    const {error, loading, messages } = useChat();

    const sendMessage = (e)=>{
    e.preventDefault();

    db.collection('messages').add({
        timestamp: Date.now(),
        message
    })
    
    }

    return (
        <div>
            <div>
                <h1>escribe tu mensaje...</h1>
                <form>
                    <input type="text" id="message" value={message} onChange={(e) => setMessage(e.target.value)} /> <br />
                    <button type="submit" onClick={sendMessage}>enviar mensaje</button>
                </form>
                <ul>
                    {messages.map(m => <li key={m.id}><p>{m.message}</p></li>)}
                </ul>
            </div>

        </div>

    );
};


export default Chat;