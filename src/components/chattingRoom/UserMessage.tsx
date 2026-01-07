import React from "react";
import styled from "styled-components";
import MessageTime from "./MessageTime";
import ShowOneProfile from "../ShowOneProfile";
import type { ChatMessage } from "../../store/chatSlice";

interface UserMessageProps {
  msg: ChatMessage;
  index: number;
  prev?: ChatMessage;
  next?: ChatMessage;
  userId: string;
}

function UserMessage({ msg, index, prev, next, userId }: UserMessageProps) {
  // 시간 계산 로직
  const getTimeString = (date: string) => {
    const d = new Date(date);
    return `${d.getHours()}:${d.getMinutes().toString().padStart(2, '0')}`;
  };

  const nextHm = next?.date ? getTimeString(next.date) : "";
  const prevHm = prev?.date ? getTimeString(prev.date) : "";
  const msgHm = getTimeString(msg.date);

  const timeRender = !(next?.sender?.id === msg.sender.id && nextHm === msgHm);

  const isMyMessage = msg.sender.id === userId;

  if (isMyMessage) {
    // 본인 메시지
    return (
      <RightContainer key={index}>
        {timeRender && <MessageTime time={msg.date} />}
        <MyMessage>{msg.message}</MyMessage>
      </RightContainer>
    );
  } else {
    // 상대방 메시지
    const isFirstMessage = !prev || prev.sender.id !== msg.sender.id || prevHm !== msgHm;

    if (isFirstMessage) {
      // 첫 메시지: 프로필 + 이름 + 메시지
      return (
        <LeftContainer key={index}>
          <ShowOneProfile imageUrls={msg.sender.profile} />
          <OtherInfoContainer>
            <div style={{ textAlign: "left", color: "black" }}>{msg.sender.name}</div>
            <OtherMessage>{msg.message}</OtherMessage>
          </OtherInfoContainer>
          {timeRender && <MessageTime time={msg.date} />}
        </LeftContainer>
      );
    } else {
      // 이어지는 메시지: 메시지만
      return (
        <LeftContainer key={index}>
          <div style={{ width: "48px", height: "40px", marginLeft: "12px" }}></div>
          <OtherMessage>{msg.message}</OtherMessage>
          {timeRender && <MessageTime time={msg.date} />}
        </LeftContainer>
      );
    }
  }
}

const RightContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const MyMessage = styled.div`
  align-self: flex-end;
  background-color: #dcf8c6;
  padding: 8px 12px;
  border-radius: 12px;
  max-width: 45%;
  word-break: break-word;
  color: black;
  text-align: left;
`;

const LeftContainer = styled.div`
  display: flex;
`;

const OtherInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const OtherMessage = styled.div`
  align-self: flex-start;
  background-color: white;
  padding: 8px 12px;
  border-radius: 12px;
  max-width: 100%;
  word-break: break-word;
  color: black;
  text-align: left;
`;

export default UserMessage;