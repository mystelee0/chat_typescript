import styled from "styled-components";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
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
  return (
    <>
      <ChatHeader />
      {/*isPanelVisible && <AddPanel onClose={handlePanelClose} isClosing={isPanelClosing} />*/}
      <BodyArea>
        <ChatMessages />
      </BodyArea>
      <ChatInput/>
    </>
  )
}

const BodyArea = styled.div`
  flex: 1;
  display: flex;
  position: relative;
  overflow: hidden;
`;
