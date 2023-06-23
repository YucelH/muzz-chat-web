import React from 'react'

export default function Message(props: {
    text: string,
    verticalMargin: number
}) {
  const senderBubbleStyle: React.CSSProperties = {
    margin: '1%',
    marginTop: props.verticalMargin ? `${props.verticalMargin}px` : '5px',
    marginBottom: '1px', 
    display: 'block',
    position: 'relative',
    width: '200px',
    height: 'auto',
    backgroundColor: '#F72D92',
    padding: '1%',
    borderRadius: '20px',
    left: '58%',
  }

  return (
    <div style={senderBubbleStyle}>
        <p style={senderTextStyle}>{props.text}</p>
    </div>
  )
}

// const messageStyle: CSS.Properties = {
//   backgroundColor: '#F72D92',
//   borderRadius: 
// };



const receiverBubbleStyle: React.CSSProperties = {
	margin: '1%',
  // display: 'inline-block',
  display: 'block',
  // position: 'static',
  width: '200px',
  // width: 'auto',
  height: 'auto',
  backgroundColor: '#eeedf0',
  padding: '1%',
  borderRadius: '20px',
  float: 'left',
}

const senderTextStyle: React.CSSProperties = {
  color: '#fff'
}

const receiverTextStyle: React.CSSProperties = {
  // color: '#404040'
  color: '#5b5b5c'
}
