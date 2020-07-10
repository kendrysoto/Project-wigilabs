import React, { useEffect, useState} from 'react';
import {db} from './Firebase';

export const useChat = () =>{
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [messages, setMessages] = useState([]);


useEffect(
    ()=>{
        const unsubscribe = db.collection('messages').onSnapshot(
            Snapshot => {
              setLoading(false)
              setMessages(Snapshot.docs.map( d=>({id: d.id, ...d.data()})));
            },
            err =>{
                setError(err)
            }
        );
        return ()=> unsubscribe()
    },
    [setMessages]
)
return {error, loading, messages};
}
