import styled from "styled-components";
import ShowProfile from "./ShowProfile";

interface RoomListItemProps {
  room: {
    roomId: string;
    name: string;
    lastMessage: string;
    users: string[];
  };
  handleOnClick?: () => void;
}

export default function RoomListItem({ room, handleOnClick }: RoomListItemProps) {

  

  return (
    <ItemContainer onClick={handleOnClick}>
      <ShowProfile imageUrls={room.users} />
      <ItemInfo>
        <ItemTitle>{room.name}</ItemTitle>

        <ItemMessage>{room.lastMessage}</ItemMessage>

      </ItemInfo>
    </ItemContainer>
  )
}


const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid #eee;
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color:black;
  text-align:left;
`;

const ItemMessage = styled.div`
  font-size: 14px;
  color: #888;
  margin-top: 4px;
  text-align:left;
`;