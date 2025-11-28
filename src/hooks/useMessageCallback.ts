import { useDispatch } from "react-redux";
import { addMessage } from "../redux/chatSlice";
import type { IMessage } from "@stomp/stompjs";
function useMessageCallback() {
    const dispatch = useDispatch()

    return (message:IMessage) => {
        if (message.body) {
            console.log("받은메시지", message.body);
            let msg = JSON.parse(message.body);
            if (msg.messageType === 2) {
                console.log("시스템 메시지 도착");
            } else {
                console.log("유저 메시지 도착");
            }
            dispatch(addMessage(msg));
        } else {
            alert("error");
        }
    }

}

export default useMessageCallback;