import styled from "styled-components";
import { useAppSelector } from "../store/hooks";
import { selectProfileById } from "../store/friendsSlice";

interface ShowOneProfileProps {
    imageUrls: string|undefined;
}

// 컴포넌트 분리해야함 친구목록용, 방목록용
export default function ShowOneProfile({ imageUrls ="profile.jpg" }: ShowOneProfileProps) {

    // 개인 프로필의 경우 imageUrls 바로 사용 case 1
    imageUrls

    return (
        <>
            <ProfileImage src={imageUrls} alt="profile image" />
        </>
    );
}

const ProfileImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 16px;
  margin-right: 12px;
`;

const AvatarGroup = styled.div`
  width: 48px;
  height: 48px;
  background: #f0f0f0;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  margin-right:12px;
`;

const AvatarImage = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 16px;
  object-fit: cover;
  position: absolute;
  border: 1px solid white;
`;
