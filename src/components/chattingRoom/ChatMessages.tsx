import styled from "styled-components";
import { useParams } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import { useAppSelector } from "../../store/hooks";
import type { ChatMessage } from "../../store/chatSlice";
import DateSeparator from "./DateSeparator";
import UserMessage from "./UserMessage";
import SystemMessage from "./SystemMessage";

interface RenderSwitchParam{
    msg:ChatMessage;
    index:number;
    prev?:ChatMessage;
    next?:ChatMessage;
}

function ChatMessages() {
    const params = useParams();
    let messages = useAppSelector((state) => state.chat.find(ob => ob.roomId === params.id));
    let user = useAppSelector((state) => state.user);
    console.log("지금 채팅메시지 유저 명", user.id);

    let prev, next;
    const containerRef = useRef<HTMLDivElement|null>(null);
    
    useEffect(()=>{
        //가만히 있을때는 맨 밑으로 자동 스크롤되는데 스크롤을 올리면 맨 밑으로 자동스크롤되는걸 멈춤
        if(containerRef.current){
            const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
            const isAtBottom = scrollTop + clientHeight >= scrollHeight - 50; // 50px 오차 허용
            if (isAtBottom) {
                containerRef.current.scrollTo({ top: scrollHeight, behavior: "smooth" });
            }
        }
    },[messages]);

    return (
        <MessagesContainer ref={containerRef}>
            {
                messages !== undefined ?
                    messages.msgs.map((msg, index) => {
                        prev = messages.msgs[index - 1];
                        next = messages.msgs[index + 1];

                        
                        let prevDate = new Date(prev?.date);
                        let msgDate = new Date(msg?.date);

                        let showDate = false;
                        if(prevDate.getDate()!== msgDate.getDate()) showDate = true;
                        let messageComponent;
                        if (msg.messageType === 1) {
                            messageComponent = <UserMessage msg={msg} index={index} prev={prev} next={next} userId={user.id} />;
                        } else if (msg.messageType === 2) {
                            messageComponent = <SystemMessage message={msg.message} index={index} />;
                        }
                        console.log(msgDate.getMonth());
                        return (
                            <React.Fragment key={index}>
                                {showDate ? <DateSeparator time={msg.date} /> : null}
                                {messageComponent}
                            </React.Fragment>
                        )
                    })
                    : null
            }
        </MessagesContainer>
    );
}

const MessagesContainer = styled.div`
flex: 1;
padding: 10px;
overflow-y: auto;
background-color: #e5ddd5;
display: flex;
flex-direction: column;
gap: 5px;

  overflow: auto;

  /* 스크롤바 숨기기 - 크롬, 사파리 */
  &::-webkit-scrollbar {
    display: none;
  }

  /* IE, Edge */
  -ms-overflow-style: none;

  /* Firefox */
  scrollbar-width: none;
`;
export default ChatMessages;