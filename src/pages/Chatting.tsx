import type { Client } from "@stomp/stompjs";
import React from "react";
import styled from "styled-components";
import ChatHeader from "../components/chattingRoom/ChatHeader";
import ChatMessages from "../components/chattingRoom/ChatMessages";
import ChatInput from "../components/chattingRoom/ChatInput";
import SlidingPanel from "../components/chattingRoom/SlidingPanel";

interface ClientProps{
    client:Client | null;
}

export function Chatting({client}:ClientProps) {
  /*
  const [isPanelVisible, setIsPanelVisible] = useState(false);
  const [isPanelClosing, setIsPanelClosing] = useState(false);

  function handlePlus() {
    setIsPanelVisible(true);
    setIsPanelClosing(false);
  }

  function handlePanelClose(finalClose) {
    if (finalClose) {
      // 완전히 닫을 때
      setIsPanelVisible(false);
    } else {
      // 닫기 애니메이션 시작
      setIsPanelClosing(true);
    }
  }*/

  const [panelOpen, setPanelOpen] = React.useState(false);

  return (
    <RoomWrapper>
      <ChatHeader onOpenPanel={() => setPanelOpen(true)} />

      <BodyArea>
        <ChatMessages />
      </BodyArea>

      <ChatInput />

      <SlidingPanel open={panelOpen} onClose={() => setPanelOpen(false)} />
    </RoomWrapper>
  )
}

const BodyArea = styled.div`
  flex: 1;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const RoomWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100dvh;
  width: 100%;
`;