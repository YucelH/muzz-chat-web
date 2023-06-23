import React from 'react'
import { get12HourTime, getDayString } from '../helpers/DateHandler';

export default function ChatDateTimeStamp(props: {
    time: number
}) {
    let date = new Date(props.time);
  return (
    <p style={{textAlign: 'center'}} ><b>{getDayString(date)}</b> {get12HourTime(date)}</p>
  );
}
