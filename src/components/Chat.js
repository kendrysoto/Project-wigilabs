import React, { useState } from 'react';
import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';
import { useChat } from './usechat';
import { db } from './Firebase';
import { Widget } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

const Chat = () => {
    const [message, setMessage] = useState('');
    const { error, loading, messages } = useChat();

    const sendMessage = (e) => {
        db.collection('messages').add({
            timestamp: Date.now(),
            message
        })

    }

    const handleNewUserMessage = (message) => {
        console.log(`New message incomig! ${message}`);
        db.collection('messages').add({
            timestamp: Date.now(),
            message
        })

    }

    return (
        <div>
            <Widget
                handleNewUserMessage={handleNewUserMessage}
              
                title="Chat"
                subtitle="write us to assist you"

            />
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