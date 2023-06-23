import React from 'react'
import Message from './Message'
import MessageObj from './MessageType'
import ChatDateTimeStamp from './ChatDateTimeStamp';


export default function MessagesView(props: {messages: MessageObj[]}){
  return (
    <div style={messagesViewStyle}>
        <h6 style={{textAlign: 'center'}}>June 22, 2023 3:30 PM</h6>
        <h5 style={{textAlign: 'center'}}>You matched &#127880;</h5>
        {props.messages.map( (message, index, array) => {
          let verticalMargin = 5;
          let displayDateTime = false;
          if(index > 0){
            let prevMessageTime = array[index - 1].time;

            let prevMessageTimeSeconds =  prevMessageTime / 1000;
            let messageTimeSeconds = (message.time / 1000);

            let prevMessageTimeHours = prevMessageTimeSeconds / 60 / 60;
            let messageTimeHours = messageTimeSeconds / 60 / 60;

            if((messageTimeSeconds - prevMessageTimeSeconds) <= 20)
               verticalMargin = 1;
            else if(messageTimeHours - prevMessageTimeHours > 1)
              displayDateTime = true;

          }
          let messageElement = <Message verticalMargin={verticalMargin} key={message.time} text={message.text}/>

          if (displayDateTime) {
            return <div>
                <ChatDateTimeStamp time={message.time} />
                {messageElement}
            </div>
          } else {
           return messageElement
          }
        })}
    </div>
  )
}

function isWithinInterval(time1: number, time2: number, interval: number): boolean {
  //check if time1-time2 is <= to interval, if so then change margin, else do nothing
  //Map needs to get previous element and get time from it
  return false
}

const messagesViewStyle: React.CSSProperties = {
  height: '500px',
  overflow: 'auto',
  wordWrap: 'break-word'
}
