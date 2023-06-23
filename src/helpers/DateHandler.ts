const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

export function get12HourTime(date: Date): string {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    let strMinutes = minutes < 10 ? '0'+ minutes : minutes;
    let strTime = hours + ':' + strMinutes + ' ' + ampm;
    return strTime;
}

export function getDayString(date: Date): string {
    return weekday[date.getDay()];
}