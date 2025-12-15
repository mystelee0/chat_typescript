import styled from "styled-components";
import { useAppSelector } from "../store/hooks"
import RoomListItem from "../components/RoomListItem";
import { useNavigate } from "react-router-dom";

export default function Rooms() {

    const rooms = useAppSelector((state)=>state.rooms);

    const navigate = useNavigate();

    function handleOnClick(roomId:string){
        navigate(`/chats/${roomId}`);    
    }
    return (
        <RoomsContainer>
            <h1>경로 : /rooms 채팅방</h1>
            <div style={{width:"100%",height:"60px",backgroundColor:"lightgray"}}></div>
        {
            rooms.map((room,index)=>
                <RoomListItem room={room} handleOnClick={()=>handleOnClick(room.roomId)} key={index}></RoomListItem>
            )
        }
        </RoomsContainer>
        
    )
}

const RoomsContainer = styled.div`
    flex:1;
  background: #fff;
  border: 1px solid #ddd;
  overflow: hidden;
`