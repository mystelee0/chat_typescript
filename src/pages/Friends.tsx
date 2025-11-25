import styled from "styled-components"
import FriendListItem from "../components/FriendListItem"
import { useAppSelector } from "../store/hooks"
import { selectUser } from "../store/userSlice"

export default function Friends() {

    // 사용자 정보
    const user = useAppSelector(selectUser);

    // 친구 정보
    const friends = useAppSelector((state) => state.friends)
    
    return (
        <FriendListContainer>
            <FriendListItem friend={user} />
            <div style={{width:"100%",height:"60px",backgroundColor:"lightgray"}}></div>
            {
                friends.map((friend) =>
                    <FriendListItem friend={friend} />
                )
            }
        </FriendListContainer>
    )
}


const FriendListContainer = styled.div`
    flex:1;
  margin: 0 auto;
  background: #fff;
  border: 1px solid #ddd;
  overflow: hidden;
`