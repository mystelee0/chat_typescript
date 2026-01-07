
interface MessageTimeProps{
    time:Date|string;
}

function MessageTime({time}:MessageTimeProps){

    let date = new Date(time);

    let h = date.getHours();
    let m = date.getMinutes();
    let amPm = '오전';
    let mStr:string = '';
    
    if( h >= 12 ) amPm="오후";
    if( h >= 13 ) h = h-12; 
    mStr = m.toString().padStart(2, '0');
    

    return <span style={{fontSize:"12px",color:"black",alignSelf:"flex-end", marginRight:"5px"}}>{`${amPm} ${h}:${mStr}`}</span>
    
}

export default MessageTime;