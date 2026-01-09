import React from "react";
import styled from "styled-components";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import SlidingPanel from "./SlidingPanel";
//import AddPanel from "../common/AddPanel";
import { useWebsocketClient } from "../../context/useWebsocketContext";
import ChatMessages from "./ChatMessages";

export function ChatRoom() {
  
    const client = useWebsocketClient();
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
  }
*/
  const [panelOpen, setPanelOpen] = React.useState(false);

  return (
    <RoomWrapper>
      <ChatHeader onOpenPanel={() => setPanelOpen(true)} />

      <BodyArea>
        <ChatMessages />
      </BodyArea>

      <ChatInput />

      {/* SlidingPanel rendered inside RoomWrapper so it overlays the entire chat room */}
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
  height: 100%;
  width: 100%;
`;
