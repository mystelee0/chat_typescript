import styled from "styled-components";
import { useAppSelector } from "../store/hooks"
import { selectUser } from "../store/userSlice"
import RoomListItem from "../components/RoomListItem";

export default function Rooms() {

    const rooms = useAppSelector((state)=>state.rooms);
    return (
        <RoomsContainer>
            <h1>경로 : /rooms 채팅방</h1>
            <div style={{width:"100%",height:"60px",backgroundColor:"lightgray"}}></div>
        {
            rooms.map((room)=>
                <RoomListItem room={room}></RoomListItem>
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