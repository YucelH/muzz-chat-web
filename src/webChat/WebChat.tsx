import React, { useState, useEffect} from 'react'
import MessagesView from './MessagesView';
import MessageObj from './MessageType';
import profilePicture from '../images/profile-icon.png'

const LOCAL_STORAGE_KEY: string = 'muzzChat.messages';

// {text: 'Hey', date: 1, time: 2} , {text: 'How are you', date: 1, time: 1}
export default function WebChat() {
    const empty: MessageObj[] = []
    const [messages, setMessages] = useState(empty);

    useEffect(() => {
        const stringifiedMessages: string | null = localStorage.getItem(LOCAL_STORAGE_KEY);
        if(stringifiedMessages !== null){
            const storedMessages: MessageObj[] = JSON.parse(stringifiedMessages);
            if (storedMessages) setMessages(storedMessages)
        }
    }, []);

    useEffect(() => {
        if(messages.length > 0)
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(messages))
    }, [messages]);



    function sendMessage(event: React.KeyboardEvent<HTMLTextAreaElement>){
        console.log(event.currentTarget.value)
        console.log(event.currentTarget.value.trim())
        if (event.key === 'Enter' && event.currentTarget.value.trim().length > 0){
            const date = new Date();

            let message: MessageObj = {
                text: event.currentTarget.value.trim(),
                time: date.getTime(),
            };
    
            setMessages(previousMessages => {
                return [...previousMessages, message]
            });
            
            console.log('Sending message: '  + message.text);
            event.currentTarget.value = '';
        }
    }
    
    return (
        <div style={mainStyle}>
            <div style={userInfoStyle} id='user'>
                <p style={userNameTextStyle}>
                    <img style={userProfileImageStyle} src={profilePicture} alt="" />
                    Jasemine
                </p>
            </div>
            <hr />
            <section>
                <MessagesView messages={messages}/>
                <textarea style={chatInputStyle} rows={6} cols={45} name="text" placeholder="Message Jasmine" onKeyDown={sendMessage}></textarea>
            </section>
        </div>
    );
}

const userInfoStyle: React.CSSProperties = {
    width: '30%',
    margin: 'auto',
    borderRadius: '50%',
    textAlign: 'center'
}

const userNameTextStyle: React.CSSProperties = {
    display: 'inline-block',
}

const userProfileImageStyle: React.CSSProperties = {
    height: '30px',
    width: '30px',
    // display: 'inline'
}

const mainStyle: React.CSSProperties = {
    height: '30%',
    width: '30%',
    border: '1px solid #2d2d2d',
    margin: 'auto',
    marginTop: '1%'
}

const chatInputStyle: React.CSSProperties = {
    resize: 'none',
    width: '100%',
    padding: '0px',
    height: 'auto'
}