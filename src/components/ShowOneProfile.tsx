import styled from "styled-components";

interface ShowOneProfileProps {
    imageUrls: string|undefined;
}

// 이미지 하나 전용
// 이미지를 바로 받는다
export default function ShowOneProfile({ imageUrls ="profile.jpg" }: ShowOneProfileProps) {
  
    // 개인 프로필의 경우
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
