import type { Client } from "@stomp/stompjs";
import styled from "styled-components";

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

  return (
    
    <>
    {/*
      <ChatHeader handlePlus={handlePlus}/>
      {isPanelVisible && <AddPanel onClose={handlePanelClose} isClosing={isPanelClosing} />}
      <BodyArea>
        <ChatMessages />
      </BodyArea>
      <ChatInput client={client}/>
      */}
      <h3>/chats/roomId 채팅창</h3>
    </>
  )
}

const BodyArea = styled.div`
  flex: 1;
  display: flex;
  position: relative;
  overflow: hidden;
`;