import styled from "styled-components";
import ShowProfile from "./ShowProfile";

interface FriendListItemProps {
  friend: {
    id: string;
    name: string;
    message: string;
    profile: string;
  };
  handleOnClick?: () => void;
}

export default function FriendListItem({ friend, handleOnClick}: FriendListItemProps) {

    return (
        <ItemContainer onClick={handleOnClick}>
            <ShowProfile imageUrls={[friend.profile]} />
            <ItemInfo>
                <ItemTitle>{friend.name}</ItemTitle>

                <ItemMessage>{friend.message}</ItemMessage>

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