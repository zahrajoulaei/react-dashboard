import { useState } from "react";

export default function Message() {
    const [message, setMessage] = useState('');
    return (
        <>
            <form>
                message
                <input required type="text" onChange={e=>setMessage(e.target.value)}/>
                <span>{message}</span>
                <button type="submit">Send message</button>
            </form>
        </>

    );
}

