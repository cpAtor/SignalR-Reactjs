import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { addMessage, selectMessages } from "./chatSlice";
export function Chat(){
    const dispatch = useDispatch();
    const messages = useSelector(selectMessages);
    let [currentMessage, setMessage] = useState('');
    return (
        <div>
            <div>
                {messages.map(message => (
                    <p>{message}</p>
                ))}
            </div>
            <div>
                <input value={currentMessage} onChange={e => setMessage(e.target.value)} />
                <button onClick={e => dispatch(addMessage(currentMessage))}>send</button>
            </div>
        </div>
        );
}