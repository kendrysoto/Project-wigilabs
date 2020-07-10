import React, { useState } from 'react';
import 'firebase/auth';
import { useChat } from './usechat';
import { db } from './Firebase';
import { Widget } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

const Chat = () => {
    const [message, setMessage] = useState('');
    const { error, loading, messages } = useChat();


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
        </div>
    );
};


export default Chat;