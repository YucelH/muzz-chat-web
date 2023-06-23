import React from 'react'

export default function Message(props: {
    text: string,
    verticalMargin: number
}) {
  const senderBubbleStyle: React.CSSProperties = {
    margin: '1%',
    marginTop: props.verticalMargin ? `${props.verticalMargin}px` : '5px',
    marginBottom: '1px', 
    position: 'relative',
    width: '30%',
    height: 'auto',
    backgroundColor: '#F72D92',
    padding: '1%',
    borderRadius: '20px',
    left: '65%',
  }

  const senderTextStyle: React.CSSProperties = {
    color: '#fff'
  }

  return (
    <div style={senderBubbleStyle}>
        <p style={senderTextStyle}>{props.text}</p>
    </div>
  )
}

/////////////Styles for received messages/////////////////////////// 
// const receiverBubbleStyle: React.CSSProperties = {
// 	margin: '1%',
//   display: 'block',
//   width: '200px',
//   height: 'auto',
//   backgroundColor: '#eeedf0',
//   padding: '1%',
//   borderRadius: '20px',
//   float: 'left',
// }

// const receiverTextStyle: React.CSSProperties = {
//   color: '#5b5b5c'
// }
