import styled from "styled-components"
import FriendListItem from "../components/FriendListItem"

export default function Friends(){

    return (
    
    <FriendListContainer>
        <h1>경로 : /friends 친구목록1 2 3 4 5 6 7 8 9 0</h1>
        <FriendListItem friend={{name:"유저1",id:"user1",message:"test message",profile:"/profile.jpg"}} key={"1"}/>
    </FriendListContainer>
    )
}


const FriendListContainer = styled.div`
    flex:1;
  width: 100%;
  
  margin: 0 auto;
  background: #fff;
  border: 1px solid #ddd;
  overflow: hidden;

  border:2px solid green;
`