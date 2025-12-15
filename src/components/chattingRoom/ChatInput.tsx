import { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useAppSelector } from "../../store/hooks";
import { useWebsocketClient } from "../../context/useWebsocketContext";


function ChatInput() {

    const client = useWebsocketClient();

    let [input, setInput] = useState("");
    const param = useParams()
    console.log('param ', param);

    let userInfo = useAppSelector((state) => state.user);
    const inputRef = useRef<HTMLInputElement | null>(null);

    let date = new Date();

    const sendMessage = () => {
        if (!client) {
            alert("웹소켓이 아직 연결되지 않았습니다.");
            return;
        }
        
        if (input === '') {
            alert('입력해주세요');
            return;
        }
        else {
            //메시지 형식
            let body = {
                'messageType': 1, //1=토픽(broadcast) 2=유저(queue) 시스템
                'roomId': param.id,
                'sender': userInfo,
                'message': input,
                'date': date
            }
            //메시지 보내기

            client.publish({
                destination: "/app/greetings",
                body: JSON.stringify(body),
            })
            setInput('');
            if (inputRef.current != null) {
                inputRef.current.value = "";
                inputRef.current.focus();
            }

        }
    }
    return (
        <InputContainer>
            <Input
                ref={inputRef}
                type="text"
                placeholder="메시지를 입력하세요"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyUp={(e) => {
                    if (e.key === "Enter") sendMessage()
                }}
            />
            <SendButton onClick={sendMessage}>전송</SendButton>
        </InputContainer>
    );
}

const InputContainer = styled.div`
  display: flex;
  padding: 10px;
  background-color: #fff;
  border-top: 1px solid #ddd;
`;

const Input = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 20px;
  outline: none;
`;

const SendButton = styled.button`
  margin-left: 8px;
  background-color: #128c7e;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 8px 12px;
  cursor: pointer;
`;

export default ChatInput;